import type { Diagnosis } from "@/data/diagnoses";

type DiagnosisIntroProps = {
  diagnosis: Diagnosis;
  children: React.ReactNode;
};

export function DiagnosisIntro({ diagnosis, children }: DiagnosisIntroProps) {
  const isPublished = diagnosis.status === "published";

  return (
    <section className="detail-card">
      <div className="detail-card__header">
        <span className="eyebrow">{diagnosis.category}</span>
        <span className={`status-badge status-badge--${diagnosis.status}`}>
          {isPublished ? "公開済み" : "準備中"}
        </span>
      </div>
      <h1>{diagnosis.name}</h1>
      <p className="lead-text">{diagnosis.description}</p>
      <div className="detail-card__body">{children}</div>
      {isPublished && diagnosis.externalUrl && diagnosis.buttonLabel ? (
        <a className="button" href={diagnosis.externalUrl} target="_blank" rel="noopener noreferrer">
          {diagnosis.buttonLabel}
        </a>
      ) : (
        <p className="notice-box">この診断は準備中です。公開までしばらくお待ちください。</p>
      )}
    </section>
  );
}
