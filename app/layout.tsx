import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

const defaultSiteUrl = "https://diagnosis-portal-site.vercel.app/";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? defaultSiteUrl;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "こころ診断ナビ",
    template: "%s | こころ診断ナビ",
  },
  description:
    "恋愛・婚活・出会い方など、自分に合う診断をやさしく選べる総合診断ポータルサイトです。",
  openGraph: {
    title: "こころ診断ナビ",
    description:
      "恋愛・婚活・出会い方など、自分に合う診断をやさしく選べる総合診断ポータルサイトです。",
    url: "/",
    siteName: "こころ診断ナビ",
    locale: "ja_JP",
    type: "website",
  },
};

const navigation = [
  { href: "/diagnoses", label: "診断一覧" },
  { href: "/privacy", label: "プライバシー" },
  { href: "/terms", label: "利用規約" },
  { href: "/contact", label: "お問い合わせ" },
];

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body>
        <header className="site-header">
          <Link className="site-logo" href="/" aria-label="こころ診断ナビ ホーム">
            こころ診断ナビ
          </Link>
          <nav className="site-nav" aria-label="メインナビゲーション">
            {navigation.map((item) => (
              <Link href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </header>
        <main>{children}</main>
        <footer className="site-footer">
          <div>
            <p className="site-footer__brand">こころ診断ナビ</p>
            <p>気持ちや行動を整理するための診断サイトを、やさしく案内します。</p>
          </div>
          <nav aria-label="フッターナビゲーション">
            <Link href="/advertising">広告・PR方針</Link>
            <Link href="/privacy">プライバシーポリシー</Link>
            <Link href="/terms">利用規約</Link>
          </nav>
        </footer>
      </body>
    </html>
  );
}
