import type { DiagnosisSlug } from "@/data/diagnoses";

export type BlogGuideStatus = "coming-soon";

export type BlogGuideTheme = DiagnosisSlug | "all";

export type BlogGuideItem = {
  id: string;
  theme: BlogGuideTheme;
  title: string;
  description: string;
  status: BlogGuideStatus;
  plannedLabel: string;
};

export const blogGuideStatusLabel: Record<BlogGuideStatus, string> = {
  "coming-soon": "準備中",
};

export const blogGuideItems: BlogGuideItem[] = [
  {
    id: "relationship-reflection",
    theme: "love",
    title: "恋愛の気持ちを整理する読みもの",
    description:
      "診断結果をもとに、相手との距離感や自分の気持ちを落ち着いて見つめるための記事を追加予定です。",
    status: "coming-soon",
    plannedLabel: "恋愛テーマで追加予定",
  },
  {
    id: "marriage-action-plan",
    theme: "marriage",
    title: "婚活の進め方を考える読みもの",
    description:
      "婚活スタイルや大切にしたい価値観を、無理なく整理するための記事を追加予定です。",
    status: "coming-soon",
    plannedLabel: "婚活テーマで追加予定",
  },
  {
    id: "meeting-style-options",
    theme: "meeting-style",
    title: "自分に合う出会い方を考える読みもの",
    description:
      "出会い方の選択肢や安心して試しやすい行動を、読みものでも整理できるよう準備しています。",
    status: "coming-soon",
    plannedLabel: "出会い方テーマで追加予定",
  },
  {
    id: "reunion-distance",
    theme: "reunion",
    title: "過去の関係との距離感を考える読みもの",
    description:
      "復縁したい気持ちやこれからの向き合い方を、急がず整理するための記事を追加予定です。",
    status: "coming-soon",
    plannedLabel: "復縁テーマで追加予定",
  },
  {
    id: "beauty-selfcare",
    theme: "beauty",
    title: "セルフケアとの向き合い方を考える読みもの",
    description:
      "美容や日々のケアを前向きに続けるためのヒントを、テーマ記事として追加予定です。",
    status: "coming-soon",
    plannedLabel: "美容テーマで追加予定",
  },
  {
    id: "sexual-worries-care",
    theme: "sexual-worries",
    title: "言葉にしづらい悩みを整理する読みもの",
    description:
      "恋愛・結婚の中で話しにくい悩みを、安心して読み進められる記事として追加予定です。",
    status: "coming-soon",
    plannedLabel: "性の悩みテーマで追加予定",
  },
  {
    id: "after-diagnosis-journal",
    theme: "all",
    title: "診断後に振り返りたいポイント",
    description:
      "診断結果をすぐに結論づけず、自分のペースで整理するための共通記事を追加予定です。",
    status: "coming-soon",
    plannedLabel: "共通テーマで追加予定",
  },
];

export const featuredBlogGuideItems = blogGuideItems.filter((item) =>
  ["love", "marriage", "meeting-style"].includes(item.theme),
);

export const getBlogGuideItemsByTheme = (theme: DiagnosisSlug) => {
  const themeItems = blogGuideItems.filter((item) => item.theme === theme);
  const commonItems = blogGuideItems.filter((item) => item.theme === "all");

  return [...themeItems, ...commonItems];
};
