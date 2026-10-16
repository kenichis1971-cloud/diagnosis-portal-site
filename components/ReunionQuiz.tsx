"use client";

import { useRef, useState } from "react";
import { getReunionResult, reunionQuestions, reunionResults, type ReunionResultKey } from "@/data/reunionDiagnosis";

export function ReunionQuiz() {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [result, setResult] = useState<ReunionResultKey | null>(null);
  const resultHeading = useRef<HTMLHeadingElement>(null);
  const firstQuestion = useRef<HTMLFieldSetElement>(null);
  const completed = Object.keys(answers).length;

  return (
    <section className="detail-card reunion-quiz" aria-label="復縁可能性診断の質問と結果">
      <p>回答はこの画面内だけで使用し、保存・送信しません。ページを閉じたり再読み込みしたりすると消えます。</p>
      <form onSubmit={(event) => {
        event.preventDefault();
        setResult(getReunionResult(reunionQuestions.map((_, index) => answers[index])));
        requestAnimationFrame(() => resultHeading.current?.focus());
      }}>
        <p aria-live="polite">10問中 {completed}問に回答済み</p>
        {reunionQuestions.map((question, index) => (
          <fieldset key={question.text} ref={index === 0 ? firstQuestion : undefined} tabIndex={index === 0 ? -1 : undefined}>
            <legend>{index + 1}. {question.text}</legend>
            {question.options.map((option, value) => (
              <label className="reunion-quiz__option" key={option}>
                <input type="radio" name={`question-${index}`} value={value} required checked={answers[index] === value}
                  onChange={() => { setAnswers({ ...answers, [index]: value }); setResult(null); }} />
                <span>{option}</span>
              </label>
            ))}
          </fieldset>
        ))}
        <button className="button" type="submit" disabled={completed !== reunionQuestions.length}>結果を見る</button>
      </form>
      {result && (
        <section className="reunion-quiz__result" aria-labelledby="reunion-result-title">
          <p className="eyebrow">今のあなたに合う向き合い方</p>
          <h2 id="reunion-result-title" ref={resultHeading} tabIndex={-1}>{reunionResults[result].title}</h2>
          <p>{reunionResults[result].message}</p>
          <h3>今できること</h3>
          <ul>{reunionResults[result].actions.map((action) => <li key={action}>{action}</li>)}</ul>
          <p className="notice-box">この結果は回答をもとにした気持ちの整理のヒントです。復縁の確率や相手の気持ちを判定するものではなく、医療や心理カウンセリングの代わりにはなりません。連絡を断られている場合は、その意思を尊重してください。</p>
          <button className="button" type="button" onClick={() => {
            setAnswers({}); setResult(null); firstQuestion.current?.focus();
          }}>もう一度診断する</button>
        </section>
      )}
    </section>
  );
}
