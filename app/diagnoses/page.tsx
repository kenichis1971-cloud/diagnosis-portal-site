import type { Metadata } from "next";
import { DiagnosisGrid } from "@/components/DiagnosisGrid";
import { diagnoses } from "@/data/diagnoses";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "診断一覧",
  description: "恋愛・婚活・出会い方など、こころ診断ナビに掲載している診断一覧です。",
};

export default function DiagnosesPage() {
  return (
    <>
      <PageHero
        eyebrow="診断一覧"
        title="気になるテーマから診断を選ぶ"
        description="公開済みの診断は外部の診断サイトへ移動できます。準備中の診断は、公開までお待ちください。"
        className="diagnoses-hero"
      />
      <section className="section section--compact">
        <DiagnosisGrid items={diagnoses} />
      </section>
    </>
  );
}
