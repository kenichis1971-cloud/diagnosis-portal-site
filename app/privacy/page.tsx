import { createPageMetadata } from "@/app/metadata";
import { PageHero } from "@/components/PageHero";

export const metadata = createPageMetadata({
  title: "プライバシーポリシー",
  description: "こころ診断ナビのプライバシーポリシーです。",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy Policy"
        title="プライバシーポリシー"
        description="こころ診断ナビにおける個人情報やアクセス解析、広告配信に関する基本方針です。"
      />
      <section className="text-page">
        <h2>個人情報の取り扱い</h2>
        <p>
          当サイトでは、お問い合わせ等の際に必要な範囲で個人情報をご提供いただく場合があります。
          取得した情報は、回答や必要な連絡のために利用し、法令に基づく場合を除き、本人の同意なく第三者へ提供しません。
        </p>
        <h2>アクセス解析について</h2>
        <p>
          当サイトでは、利便性向上や利用状況の把握のため、アクセス解析ツールを利用する場合があります。
          解析に用いられる情報は個人を特定するものではありません。
        </p>
        <h2>広告配信について</h2>
        <p>
          現時点で外部広告リンクは設置していませんが、将来的に広告やアフィリエイトリンクを掲載する可能性があります。
          広告を掲載する場合は、利用者に分かりやすい表示を心がけます。
        </p>
        <h2>免責事項</h2>
        <p>
          当サイトから移動できる外部サイトの内容やサービスについて、当サイトは責任を負いかねます。
          掲載情報は正確性に配慮しますが、内容の完全性や最新性を保証するものではありません。
        </p>
      </section>
    </>
  );
}
