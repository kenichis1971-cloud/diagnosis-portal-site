import Link from "next/link";
import { DiagnosisGrid } from "@/components/DiagnosisGrid";
import {
  categoryGuides,
  categoryNotePlaceholderLabel,
  defaultCategoryNoteLabel,
  comingSoonDiagnoses,
  diagnoses,
  prGuideSlots,
  publishedDiagnoses,
} from "@/data/diagnoses";

export default function Home() {
  return (
    <>
      <section className="hero hero-image-slot top-hero">
        <div className="hero__content">
          <p className="eyebrow">総合診断ポータル</p>
          <h1 className="top-hero__title">
            <span className="top-hero__title-line">自分に合う診断を</span>
            <br />
            <span className="top-hero__title-line">やさしく選べる場所</span>
          </h1>
          <p className="top-hero__lead">
            恋愛・婚活・出会い方など、気持ちや行動を整理するための診断をまとめました。
          </p>
          <div className="hero__actions">
            <Link className="button" href="/diagnoses">
              診断一覧を見る
            </Link>
            <span className="hero__note">公開済み3件・準備中3件を掲載しています。</span>
          </div>
        </div>
        <div className="hero__panel" aria-label="掲載診断の状態">
          <div>
            <strong>{publishedDiagnoses.length}</strong>
            <span>公開済み</span>
          </div>
          <div>
            <strong>{comingSoonDiagnoses.length}</strong>
            <span>準備中</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section__header">
          <p className="eyebrow">Diagnoses</p>
          <h2>掲載中・準備中の診断</h2>
          <p>診断本体は各専門サイトで提供し、このサイトでは入口として概要を案内します。</p>
        </div>
        <DiagnosisGrid items={diagnoses} featured />
      </section>

      <section className="section section--soft">
        <div className="section__header">
          <p className="eyebrow">Themes</p>
          <h2>気になるテーマから探す</h2>
          <p>恋愛・婚活・出会い方など、今の悩みに近いテーマから診断を探せます。</p>
        </div>
        <div className="category-guide-grid">
          {categoryGuides.map((category) => (
            <article className="category-guide-card" key={category.slug}>
              <span className={`status-badge status-badge--${category.status}`}>
                {category.status === "published" ? "公開済み" : "準備中"}
              </span>
              <h3>{category.name}</h3>
              <p>{category.lead}</p>
              <div className="category-guide-card__actions">
                <Link className="category-guide-card__link" href={category.href}>
                  テーマを見る
                </Link>
                {category.noteUrl ? (
                  <a
                    className="category-guide-card__note"
                    href={category.noteUrl}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {category.noteLabel ?? defaultCategoryNoteLabel}
                  </a>
                ) : (
                  <span className="category-guide-card__note category-guide-card__note--disabled">
                    {categoryNotePlaceholderLabel}
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--pr">
        <div className="section__header">
          <p className="eyebrow">PR Guide</p>
          <h2>おすすめ案内・PR枠</h2>
          <p>今後、診断テーマに関連するサービスや読みものを、PR表記のうえで掲載する予定です。</p>
        </div>
        <div className="pr-slot-grid" aria-label="今後掲載予定のPR枠">
          {prGuideSlots.map((slot) => (
            <article className="pr-slot-card" key={slot.title}>
              <span className="pr-slot-card__label">PR掲載予定</span>
              <h3>{slot.title}</h3>
              <p>{slot.description}</p>
            </article>
          ))}
        </div>
        <p className="pr-slot-note">※現在、この枠に外部広告リンクや広告コードは設置していません。</p>
      </section>
    </>
  );
}
