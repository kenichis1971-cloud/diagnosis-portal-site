import type { Metadata } from "next";
import { DiagnosisIntro } from "@/components/DiagnosisIntro";
import { RelatedDiagnoses } from "@/components/RelatedDiagnoses";
import { diagnoses } from "@/data/diagnoses";

const diagnosis = diagnoses.find((item) => item.slug === "love")!;

export const metadata: Metadata = {
  title: "恋愛診断",
  description: "恋愛傾向や気持ちの整理に役立つ恋愛診断サイトを紹介します。",
};

export default function LovePage() {
  return (
    <>
      <DiagnosisIntro diagnosis={diagnosis} heroClassName="love-hero">
        <p>
          恋愛診断では、今の気持ちや相手との向き合い方を落ち着いて見つめるきっかけを案内します。
          迷いを急いで決めつけるのではなく、自分のペースで整理したい方に向けた診断です。
        </p>
      </DiagnosisIntro>
      <RelatedDiagnoses
        currentSlug="love"
        relatedSlugs={["marriage", "meeting-style", "reunion"]}
      />
    </>
  );
}
