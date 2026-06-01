import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "広告・外部リンク・PR表記方針",
  description: "こころ診断ナビの広告、外部リンク、PR表記に関する方針です。",
};

export default function AdvertisingPage() {
  return (
    <>
      <PageHero
        eyebrow="Advertising Policy"
        title="広告・外部リンク・PR表記方針"
        description="広告や外部リンクを掲載する場合の基本方針をまとめています。"
      />
      <section className="text-page">
        <h2>広告掲載について</h2>
        <p>
          当サイトでは、将来的にアフィリエイト広告や外部リンクを掲載する可能性があります。
          掲載する場合も、利用者が内容を理解しやすいよう、過度な表現や不安を煽る表現は避けます。
        </p>
        <h2>PR表記について</h2>
        <p>
          広告リンクや成果報酬型のリンクを設置する場合は、PR、広告、アフィリエイトリンク等であることが分かる表記を行う方針です。
        </p>
        <h2>外部サイトについて</h2>
        <p>
          外部リンク先の情報やサービス内容は、各サイトの運営者が管理しています。利用前にリンク先の説明や条件をご確認ください。
        </p>
      </section>
    </>
  );
}
