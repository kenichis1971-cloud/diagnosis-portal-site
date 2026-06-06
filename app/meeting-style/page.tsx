import { createPageMetadata } from "@/app/metadata";
import { ColumnGuide } from "@/components/ColumnGuide";
import { DiagnosisIntro } from "@/components/DiagnosisIntro";
import { RelatedDiagnoses } from "@/components/RelatedDiagnoses";
import { diagnoses } from "@/data/diagnoses";

const diagnosis = diagnoses.find((item) => item.slug === "meeting-style")!;

export const metadata = createPageMetadata({
  title: "出会い方診断",
  description: "自分に合う出会い方を整理する出会い方診断サイトを紹介します。",
  path: "/meeting-style",
});

export default function MeetingStylePage() {
  return (
    <>
      <DiagnosisIntro diagnosis={diagnosis} heroClassName="meeting-style-hero">
        <p>
          出会い方診断では、普段の過ごし方や人との距離感をふまえて、取り入れやすい出会い方を考える
          きっかけを案内します。安心して試せる選択肢を見つけたい方に向けた診断です。
        </p>
      </DiagnosisIntro>
      <RelatedDiagnoses
        currentSlug="meeting-style"
        relatedSlugs={["love", "marriage", "reunion"]}
      />
      <ColumnGuide themeSlug="meeting-style" variant="theme" />
    </>
  );
}
