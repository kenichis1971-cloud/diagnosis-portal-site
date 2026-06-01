import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "利用規約・免責事項",
  description: "こころ診断ナビの利用規約と免責事項です。",
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Terms"
        title="利用規約・免責事項"
        description="こころ診断ナビをご利用いただく際の基本的な注意事項です。"
      />
      <section className="text-page">
        <h2>診断コンテンツの位置づけ</h2>
        <p>
          当サイトで紹介する診断および外部診断サイトの結果は、気持ちや行動を整理するための参考情報です。
          特定の成果、関係性の変化、将来の結果を保証するものではありません。
        </p>
        <h2>禁止事項</h2>
        <p>
          当サイトの運営を妨げる行為、第三者の権利を侵害する行為、法令や公序良俗に反する行為を禁止します。
        </p>
        <h2>外部リンク</h2>
        <p>
          当サイトには外部サイトへのリンクが含まれます。外部サイトの利用条件やプライバシーポリシーは、各サイトの内容をご確認ください。
        </p>
        <h2>規約の変更</h2>
        <p>
          必要に応じて、本規約の内容を変更する場合があります。変更後の内容は、当サイトに掲載した時点で適用されます。
        </p>
      </section>
    </>
  );
}
