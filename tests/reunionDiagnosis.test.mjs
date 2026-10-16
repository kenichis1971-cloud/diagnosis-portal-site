import assert from "node:assert/strict";
import test from "node:test";
import { readFileSync } from "node:fs";
import ts from "typescript";

// Node 22でも実行できるよう、依存のない判定データをメモリ上で変換する。
const source = readFileSync(new URL("../data/reunionDiagnosis.ts", import.meta.url), "utf8");
const { outputText } = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ESNext } });
const { getReunionResult, reunionResults } = await import(`data:text/javascript;base64,${Buffer.from(outputText).toString("base64")}`);
const ready = [2, 0, 0, 0, 0, 0, 0, 0, 0, 0];

test("5種類の結果に到達できる", () => {
  const cases = [
    [ready, "reconnect"],
    [[0, ...ready.slice(1)], "cooling"],
    [[2, 0, 2, 3, 2, 1, 2, 0, 0, 0], "reflection"],
    [[2, 0, 1, 1, 1, 1, 1, 1, 1, 1], "friendship"],
    [[...ready.slice(0, 9), 2], "recovery"],
  ];
  for (const [answers, expected] of cases) {
    assert.equal(getReunionResult(answers), expected);
    assert.ok(reunionResults[expected].actions.length);
  }
});

test("連絡拒否・返信なし・境界線を尊重しづらい回答を再接触にしない", () => {
  for (const [index, value] of [[2, 3], [3, 2], [7, 2], [7, 3], [8, 2], [8, 3]]) {
    const answers = [...ready]; answers[index] = value;
    assert.equal(getReunionResult(answers), "cooling");
  }
});

test("回復と安心を他の条件より優先する", () => {
  for (const [index, value] of [[1, 3], [4, 3], [5, 3], [9, 2], [9, 3]]) {
    const answers = [...ready]; answers[2] = 3; answers[index] = value;
    assert.equal(getReunionResult(answers), "recovery");
  }
});

test("連絡状況が不明なら再接触を勧めない", () => {
  const answers = [...ready]; answers[2] = 2; answers[3] = 3;
  assert.equal(getReunionResult(answers), "reflection");
});

test("不完全・範囲外・整数でない回答を受け付けない", () => {
  for (const answers of [[], ready.slice(1), [...ready, 0], [4, ...ready.slice(1)], [-1, ...ready.slice(1)], [NaN, ...ready.slice(1)], [0.5, ...ready.slice(1)]]) {
    assert.throws(() => getReunionResult(answers));
  }
});
