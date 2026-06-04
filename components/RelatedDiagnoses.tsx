import Link from "next/link";
import { diagnoses, getDiagnosesBySlugs, type Diagnosis, type DiagnosisSlug } from "@/data/diagnoses";

type RelatedThemeSlug = DiagnosisSlug | "diagnoses";

type RelatedTheme = Pick<Diagnosis, "name" | "status" | "category" | "description" | "href"> & {
  slug: string;
};

type RelatedDiagnosesProps = {
  currentSlug: DiagnosisSlug;
  relatedSlugs: RelatedThemeSlug[];
};

const diagnosesIndexTheme: RelatedTheme = {
  slug: "diagnoses",
  name: "診断一覧",
  status: "published",
  category: "一覧",
  description: "公開済み・準備中のテーマをまとめて見比べられる一覧ページです。",
  href: "/diagnoses",
};

const getRelatedThemes = (slugs: RelatedThemeSlug[]) => {
  const diagnosisSlugs = slugs.filter((slug): slug is DiagnosisSlug => slug !== "diagnoses");
  const diagnosisBySlug = new Map(
    getDiagnosesBySlugs(diagnosisSlugs).map((diagnosis) => [diagnosis.slug, diagnosis]),
  );

  return slugs
    .map((slug) => (slug === "diagnoses" ? diagnosesIndexTheme : diagnosisBySlug.get(slug)))
    .filter((theme): theme is RelatedTheme => Boolean(theme));
};

export function RelatedDiagnoses({ currentSlug, relatedSlugs }: RelatedDiagnosesProps) {
  const relatedThemes = getRelatedThemes(relatedSlugs);
  const currentDiagnosis = diagnoses.find((diagnosis) => diagnosis.slug === currentSlug);

  return (
    <section className="section related-diagnoses" aria-labelledby={`${currentSlug}-related-title`}>
      <div className="related-diagnoses__inner">
        <div className="section__header related-diagnoses__header">
          <p className="eyebrow">Related Themes</p>
          <h2 id={`${currentSlug}-related-title`}>次に気になるテーマ</h2>
          <p>
            {currentDiagnosis?.category
              ? `${currentDiagnosis.category}とあわせて見たいテーマを、やさしく選べるようにまとめました。`
              : "あわせて見たいテーマを、やさしく選べるようにまとめました。"}
          </p>
        </div>
        <div className="related-diagnoses__grid">
          {relatedThemes.map((theme) => (
            <Link className="related-diagnoses__card" href={theme.href} key={theme.href}>
              <span className="related-diagnoses__meta">
                <span>{theme.category}</span>
                <span className={`status-badge status-badge--${theme.status}`}>
                  {theme.status === "published" ? "公開済み" : "準備中"}
                </span>
              </span>
              <span className="related-diagnoses__title">{theme.name}</span>
              <span className="related-diagnoses__description">{theme.description}</span>
              <span className="related-diagnoses__link">テーマを見る</span>
            </Link>
          ))}
        </div>
        <div className="related-diagnoses__footer">
          <Link className="text-link" href="/diagnoses">
            診断一覧を見る
          </Link>
        </div>
      </div>
    </section>
  );
}
