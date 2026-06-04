import type { Metadata } from "next";
import { DiagnosisIntro } from "@/components/DiagnosisIntro";
import { RelatedDiagnoses } from "@/components/RelatedDiagnoses";
import { diagnoses } from "@/data/diagnoses";

const diagnosis = diagnoses.find((item) => item.slug === "beauty")!;

export const metadata: Metadata = {
  title: "美容診断（準備中）",
  description: "自分に合う美容・セルフケアの方向性を整理する診断予定ページです。",
};

export default function BeautyPage() {
  return (
    <>
      <DiagnosisIntro diagnosis={diagnosis} heroClassName="beauty-hero">
        <p>
          美容診断は準備中です。日々のセルフケアや美容との向き合い方を、無理なく前向きに考えるための
          診断を予定しています。
        </p>
      </DiagnosisIntro>
      <RelatedDiagnoses
        currentSlug="beauty"
        relatedSlugs={["love", "marriage", "diagnoses"]}
      />
    </>
  );
}
