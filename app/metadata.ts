import type { Metadata } from "next";

export const siteName = "こころ診断ナビ";
export const defaultSiteUrl = "https://diagnosis-portal-site.vercel.app/";
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? defaultSiteUrl;
export const defaultDescription =
  "恋愛・婚活・出会い方など、自分に合う診断をやさしく選べる総合診断ポータルサイトです。";

type PageMetadata = {
  title?: string;
  description: string;
  path: string;
};

export function createPageMetadata({ title, description, path }: PageMetadata): Metadata {
  const ogTitle = title ? `${title} | ${siteName}` : siteName;

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: ogTitle,
      description,
      url: path,
      siteName,
      locale: "ja_JP",
      type: "website",
    },
    twitter: {
      card: "summary",
      title: ogTitle,
      description,
    },
  };
}
