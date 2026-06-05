import { createPageMetadata } from "@/app/metadata";
import { PageHero } from "@/components/PageHero";

export const metadata = createPageMetadata({
  title: "広告・外部リンク・PR表記方針",
  description: "こころ診断ナビの広告、外部リンク、PR表記に関する方針です。",
  path: "/advertising",
});

export default function AdvertisingPage() {
  return (
    <>
      <PageHero
        eyebrow="Advertising Policy"
        title="広告・外部リンク・PR表記方針"
        description="広告や外部リンクを掲載する場合の基本方針をまとめています。"
        className="advertising-hero"
      />
      <section className="text-page">
        <h2>広告掲載について</h2>
        <p>
          現時点で当サイト内に外部広告リンクや広告コードは設置していません。
          将来的に、診断テーマに関連する広告、アフィリエイトリンク、外部サービスへの案内を掲載する可能性があります。
        </p>
        <p>
          掲載する場合も、利用者が内容を理解しやすいよう、過度な表現や不安を煽る表現、結果を保証するような表現は避けます。
        </p>
        <h2>PR表記について</h2>
        <p>
          広告リンクや成果報酬型のリンクを設置する場合は、PR、広告、アフィリエイトリンク等であることを判別できる表記を、
          リンクや案内の近くに分かりやすく表示する方針です。
        </p>
        <h2>広告収益について</h2>
        <p>
          当サイトから外部サービスへ移動し、利用や申込みが行われた場合、当サイトが報酬を受け取ることがあります。
          ただし、診断や記事の内容は、利用者が落ち着いて判断するための参考情報として掲載します。
        </p>
        <h2>外部サイトについて</h2>
        <p>
          外部リンク先の情報やサービス内容は、各サイトの運営者が管理しています。
          利用前にリンク先の説明、料金、条件、プライバシーポリシー等をご確認ください。
        </p>
      </section>
    </>
  );
}
