import type { Metadata } from "next";
import Link from "next/link";
import { DiagnosisGrid } from "@/components/DiagnosisGrid";
import { diagnoses, diagnosisCategories } from "@/data/diagnoses";
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
        <div className="section__header">
          <p className="eyebrow">Categories</p>
          <h2>カテゴリー別に探す</h2>
          <p>公開済みと準備中のテーマを分けて確認しながら、今の気持ちに近い診断を選べます。</p>
        </div>
        <div className="category-list" aria-label="カテゴリー別診断一覧">
          {diagnosisCategories.map((category) => (
            <Link className="category-list__item" href={category.href} key={category.name}>
              <div>
                <span className="category-list__name">{category.name}</span>
                <p>{category.summary}</p>
              </div>
              <span className={`status-badge status-badge--${category.status}`}>
                {category.status === "published" ? "公開済み" : "準備中"}
              </span>
            </Link>
          ))}
        </div>
      </section>
      <section className="section section--compact">
        <div className="section__header">
          <p className="eyebrow">All Diagnoses</p>
          <h2>診断カード一覧</h2>
          <p>各診断の概要と公開状況を一覧で確認できます。</p>
        </div>
        <DiagnosisGrid items={diagnoses} />
      </section>
    </>
  );
}
