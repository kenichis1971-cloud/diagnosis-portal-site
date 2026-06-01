import type { Metadata } from "next";
import { DiagnosisIntro } from "@/components/DiagnosisIntro";
import { diagnoses } from "@/data/diagnoses";

const diagnosis = diagnoses.find((item) => item.slug === "reunion")!;

export const metadata: Metadata = {
  title: "復縁診断（準備中）",
  description: "復縁したい気持ちや今後の向き合い方を整理する診断予定ページです。",
};

export default function ReunionPage() {
  return (
    <DiagnosisIntro diagnosis={diagnosis}>
      <p>
        復縁診断は準備中です。過去の関係を急いで結論づけるのではなく、自分の気持ちやこれからの距離感を
        穏やかに整理できる内容を予定しています。
      </p>
    </DiagnosisIntro>
  );
}
