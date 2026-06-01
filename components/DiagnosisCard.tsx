import Link from "next/link";
import type { Diagnosis } from "@/data/diagnoses";

type DiagnosisCardProps = {
  diagnosis: Diagnosis;
  featured?: boolean;
};

export function DiagnosisCard({ diagnosis, featured = false }: DiagnosisCardProps) {
  const isPublished = diagnosis.status === "published";

  return (
    <article className={`diagnosis-card${featured ? " diagnosis-card--featured" : ""}`}>
      <div className="diagnosis-card__meta">
        <span className="diagnosis-card__category">{diagnosis.category}</span>
        <span className={`status-badge status-badge--${diagnosis.status}`}>
          {isPublished ? "公開済み" : "準備中"}
        </span>
      </div>
      <h3>{diagnosis.name}</h3>
      <p>{diagnosis.description}</p>
      <div className="diagnosis-card__actions">
        <Link className="text-link" href={diagnosis.href}>
          詳しく見る
        </Link>
        {isPublished && diagnosis.externalUrl && diagnosis.buttonLabel ? (
          <a
            className="button button--small"
            href={diagnosis.externalUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            診断サイトを見る
          </a>
        ) : (
          <span className="coming-soon-label">準備中</span>
        )}
      </div>
    </article>
  );
}
