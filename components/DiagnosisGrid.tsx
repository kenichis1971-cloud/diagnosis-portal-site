import type { Diagnosis } from "@/data/diagnoses";
import { DiagnosisCard } from "./DiagnosisCard";

type DiagnosisGridProps = {
  items: Diagnosis[];
  featured?: boolean;
};

export function DiagnosisGrid({ items, featured = false }: DiagnosisGridProps) {
  return (
    <div className="diagnosis-grid">
      {items.map((diagnosis) => (
        <DiagnosisCard diagnosis={diagnosis} featured={featured} key={diagnosis.slug} />
      ))}
    </div>
  );
}
