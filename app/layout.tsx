import type { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
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

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
