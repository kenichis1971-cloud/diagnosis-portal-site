import { createPageMetadata } from "@/app/metadata";
import { BlogReadingGuide } from "@/components/BlogReadingGuide";
import { DiagnosisIntro } from "@/components/DiagnosisIntro";
import { RelatedDiagnoses } from "@/components/RelatedDiagnoses";
import { diagnoses } from "@/data/diagnoses";

const diagnosis = diagnoses.find((item) => item.slug === "sexual-worries")!;

export const metadata = createPageMetadata({
  title: "性の悩み診断（準備中）",
  description:
    "恋愛・結婚の中で言葉にしづらい性に関する悩みを、やさしく整理する診断予定ページです。",
  path: "/sexual-worries",
});

export default function SexualWorriesPage() {
  return (
    <>
      <DiagnosisIntro diagnosis={diagnosis} heroClassName="sexual-worries-hero">
        <p>
          性の悩み診断は準備中です。恋愛・結婚の中で言葉にしづらい性に関する悩みを、やさしく整理する
          診断予定です。露骨な表現に頼らず、安心して読める案内を目指します。
        </p>
      </DiagnosisIntro>
      <RelatedDiagnoses
        currentSlug="sexual-worries"
        relatedSlugs={["love", "reunion", "marriage"]}
      />
      <BlogReadingGuide themeSlug="sexual-worries" variant="theme" />
    </>
  );
}
