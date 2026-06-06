import {
  blogGuideStatusLabel,
  featuredBlogGuideItems,
  getBlogGuideItemsByTheme,
  type BlogGuideItem,
} from "@/data/blogGuides";
import type { DiagnosisSlug } from "@/data/diagnoses";

type BlogReadingGuideProps = {
  themeSlug?: DiagnosisSlug;
  variant?: "home" | "diagnoses" | "theme";
};

const getBlogGuideItems = ({
  themeSlug,
  variant,
}: BlogReadingGuideProps): BlogGuideItem[] => {
  if (themeSlug) {
    return getBlogGuideItemsByTheme(themeSlug);
  }

  if (variant === "diagnoses") {
    return featuredBlogGuideItems;
  }

  return featuredBlogGuideItems;
};

const guideCopy = {
  home: {
    eyebrow: "Reading Guide",
    title: "ブログで詳しく読む",
    description:
      "診断結果を、もう少し深く整理したい方へ。恋愛・婚活・出会い方の悩みを、読みものでも整理できます。",
  },
  diagnoses: {
    eyebrow: "Blog Guide",
    title: "診断後に理解を深める読みもの",
    description:
      "ブログ記事は今後、テーマごとに追加していく予定です。気になる診断とあわせて読める入口を準備しています。",
  },
  theme: {
    eyebrow: "Theme Reading",
    title: "このテーマを読みものでも整理する",
    description:
      "診断ページを見たあとに、気持ちや行動の方向性をもう少し落ち着いて整理できる記事を準備しています。",
  },
} as const;

export function BlogReadingGuide({
  themeSlug,
  variant = "home",
}: BlogReadingGuideProps) {
  const items = getBlogGuideItems({ themeSlug, variant });
  const copy = guideCopy[variant];

  return (
    <section
      className="section blog-reading-guide"
      aria-labelledby={`${variant}-blog-reading-title`}
    >
      <div className="blog-reading-guide__inner">
        <div className="section__header blog-reading-guide__header">
          <p className="eyebrow">{copy.eyebrow}</p>
          <h2 id={`${variant}-blog-reading-title`}>{copy.title}</h2>
          <p>{copy.description}</p>
        </div>
        <div
          className="blog-reading-guide__grid"
          aria-label="今後追加予定のブログ記事"
        >
          {items.map((item) => (
            <article className="blog-reading-guide__card" key={item.id}>
              <span className="blog-reading-guide__status">
                {blogGuideStatusLabel[item.status]}
              </span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <span className="blog-reading-guide__planned">
                {item.plannedLabel}
              </span>
            </article>
          ))}
        </div>
        <p className="blog-reading-guide__note">
          ※現在、外部ブログURL・広告リンク・広告コードは設置していません。
        </p>
      </div>
    </section>
  );
}
