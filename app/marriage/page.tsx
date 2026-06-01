import type { Metadata } from "next";
import { DiagnosisIntro } from "@/components/DiagnosisIntro";
import { diagnoses } from "@/data/diagnoses";

const diagnosis = diagnoses.find((item) => item.slug === "marriage")!;

export const metadata: Metadata = {
  title: "婚活診断",
  description: "婚活スタイルや行動の方向性を整理する婚活診断サイトを紹介します。",
};

export default function MarriagePage() {
  return (
    <DiagnosisIntro diagnosis={diagnosis}>
      <p>
        婚活診断では、活動の進め方や大切にしたい価値観を整理するためのヒントを得られます。
        結果は参考情報として、無理のない行動を考える材料にしてください。
      </p>
    </DiagnosisIntro>
  );
}
