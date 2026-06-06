import {
  columnGuideStatusLabel,
  featuredColumnGuideItems,
  getColumnGuideItemsByTheme,
  type ColumnGuideItem,
} from "@/data/columnGuides";
import type { DiagnosisSlug } from "@/data/diagnoses";

type ColumnGuideProps = {
  themeSlug?: DiagnosisSlug;
  variant?: "home" | "diagnoses" | "theme";
};

const getColumnGuideItems = ({
  themeSlug,
  variant,
}: ColumnGuideProps): ColumnGuideItem[] => {
  if (themeSlug) {
    return getColumnGuideItemsByTheme(themeSlug);
  }

  if (variant === "diagnoses") {
    return featuredColumnGuideItems;
  }

  return featuredColumnGuideItems;
};

const guideCopy = {
  home: {
    eyebrow: "COLUMN",
    title: "コラムで詳しく読む",
    description:
      "診断結果を、もう少し深く整理したい方へ。恋愛・婚活・出会い方の悩みを、コラムでも整理できます。",
  },
  diagnoses: {
    eyebrow: "COLUMN",
    title: "診断後に理解を深めるコラム",
    description:
      "コラムは今後、テーマごとに追加していく予定です。気になる診断とあわせて読める入口を準備しています。",
  },
  theme: {
    eyebrow: "COLUMN",
    title: "このテーマをコラムでも整理する",
    description:
      "診断ページを見たあとに、気持ちや行動の方向性をもう少し落ち着いて整理できるコラムを準備しています。",
  },
} as const;

export function ColumnGuide({ themeSlug, variant = "home" }: ColumnGuideProps) {
  const items = getColumnGuideItems({ themeSlug, variant });
  const copy = guideCopy[variant];

  return (
    <section
      className="section column-guide"
      aria-labelledby={`${variant}-column-guide-title`}
    >
      <div className="column-guide__inner">
        <div className="section__header column-guide__header">
          <p className="eyebrow">{copy.eyebrow}</p>
          <h2 id={`${variant}-column-guide-title`}>{copy.title}</h2>
          <p>{copy.description}</p>
        </div>
        <div className="column-guide__grid" aria-label="今後追加予定のコラム">
          {items.map((item) => (
            <article className="column-guide__card" key={item.id}>
              <span className="column-guide__status">
                {columnGuideStatusLabel[item.status]}
              </span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <span className="column-guide__planned">{item.plannedLabel}</span>
            </article>
          ))}
        </div>
        <p className="column-guide__note">
          ※現在、外部コラムURL・note
          URL・広告リンク・広告コードは設置していません。noteは今後追加予定です。
        </p>
      </div>
    </section>
  );
}
