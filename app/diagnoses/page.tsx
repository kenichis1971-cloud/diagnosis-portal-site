import type { Metadata } from "next";
import Link from "next/link";
import { DiagnosisGrid } from "@/components/DiagnosisGrid";
import { categoryGuides, diagnoses } from "@/data/diagnoses";
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
          <p className="eyebrow">Category</p>
          <h2>カテゴリー別に探す</h2>
          <p>公開済み・準備中の状態を確認しながら、気になるテーマの紹介ページへ進めます。</p>
        </div>
        <div className="category-list" aria-label="カテゴリー別の診断一覧">
          {categoryGuides.map((category) => (
            <Link className="category-list__item" href={category.href} key={category.slug}>
              <div>
                <span className="category-list__name">{category.name}</span>
                <p>{category.lead}</p>
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
          <p>各テーマの概要を確認して、気になる診断の紹介ページをご覧ください。</p>
        </div>
        <DiagnosisGrid items={diagnoses} />
      </section>
    </>
  );
}
