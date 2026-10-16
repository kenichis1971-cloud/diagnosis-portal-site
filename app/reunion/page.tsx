import { createPageMetadata } from "@/app/metadata";
import { ColumnGuide } from "@/components/ColumnGuide";
import { DiagnosisIntro } from "@/components/DiagnosisIntro";
import { RelatedDiagnoses } from "@/components/RelatedDiagnoses";
import { diagnoses } from "@/data/diagnoses";

const diagnosis = diagnoses.find((item) => item.slug === "reunion")!;

export const metadata = createPageMetadata({
  title: "復縁可能性診断",
  description: diagnosis.description,
  path: "/reunion",
});

export default function ReunionPage() {
  return (
    <>
      <DiagnosisIntro diagnosis={diagnosis} heroClassName="reunion-hero">
        <p>
          10問の回答から、今の距離感やご自身の気持ちを整理し、今日できる行動を考えます。
          復縁の成否や相手の気持ちを予測するものではありません。答えづらいときは、途中で休んでも大丈夫です。
        </p>
      </DiagnosisIntro>
      <RelatedDiagnoses
        currentSlug="reunion"
        relatedSlugs={["love", "meeting-style", "sexual-worries"]}
      />
      <ColumnGuide themeSlug="reunion" variant="theme" />
    </>
  );
}
