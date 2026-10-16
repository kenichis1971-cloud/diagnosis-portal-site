import Link from "next/link";
import { createPageMetadata } from "@/app/metadata";
import { PageHero } from "@/components/PageHero";
import { ReunionQuiz } from "@/components/ReunionQuiz";
import { diagnoses } from "@/data/diagnoses";

export const metadata = createPageMetadata({
  title: "復縁可能性診断｜10問で今の向き合い方を整理",
  description: diagnoses.find((item) => item.slug === "reunion")!.description,
  path: "/reunion/diagnosis",
});

export default function ReunionDiagnosisPage() {
  return (
    <>
      <PageHero eyebrow="全10問・無料" title="復縁可能性診断" description="元恋人との距離感や連絡状況をもとに、今のあなたに合った向き合い方をやさしく整理します。" />
      <p className="notice-box">復縁の成否や相手の気持ちを予測する診断ではありません。今のご自身に近い回答を選んでください。答えることがつらいときは、途中で休んでも大丈夫です。</p>
      <ReunionQuiz />
      <p><Link className="text-link" href="/reunion">復縁のテーマページに戻る</Link></p>
    </>
  );
}
