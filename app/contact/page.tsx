import { createPageMetadata } from "@/app/metadata";
import { PageHero } from "@/components/PageHero";

export const metadata = createPageMetadata({
  title: "お問い合わせ",
  description: "こころ診断ナビへのお問い合わせについての案内です。",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="お問い合わせ"
        description="サイトに関するご連絡やご相談についての案内です。"
      />
      <section className="text-page">
        <h2>お問い合わせ方法</h2>
        <p>
          現時点では、当サイト内にお問い合わせフォームは設置していません。
          お問い合わせは運営者の案内する方法でご連絡ください。
        </p>
        <p>
          外部診断サイトの内容や個別サービスに関するお問い合わせは、各サイトの案内をご確認ください。
        </p>
      </section>
    </>
  );
}
