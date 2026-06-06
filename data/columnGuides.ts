import type { DiagnosisSlug } from "@/data/diagnoses";

export type ColumnGuideStatus = "coming-soon";

export type ColumnGuideTheme = DiagnosisSlug | "all";

export type ColumnGuideItem = {
  id: string;
  theme: ColumnGuideTheme;
  title: string;
  description: string;
  status: ColumnGuideStatus;
  plannedLabel: string;
};

export const columnGuideStatusLabel: Record<ColumnGuideStatus, string> = {
  "coming-soon": "準備中",
};

export const columnGuideItems: ColumnGuideItem[] = [
  {
    id: "relationship-reflection",
    theme: "love",
    title: "恋愛の気持ちを整理するコラム",
    description:
      "診断結果をもとに、相手との距離感や自分の気持ちを落ち着いて見つめるためのコラムを追加予定です。",
    status: "coming-soon",
    plannedLabel: "恋愛テーマで追加予定",
  },
  {
    id: "marriage-action-plan",
    theme: "marriage",
    title: "婚活の進め方を考えるコラム",
    description:
      "婚活スタイルや大切にしたい価値観を、無理なく整理するためのコラムを追加予定です。",
    status: "coming-soon",
    plannedLabel: "婚活テーマで追加予定",
  },
  {
    id: "meeting-style-options",
    theme: "meeting-style",
    title: "自分に合う出会い方を考えるコラム",
    description:
      "出会い方の選択肢や安心して試しやすい行動を、コラムでも整理できるよう準備しています。",
    status: "coming-soon",
    plannedLabel: "出会い方テーマで追加予定",
  },
  {
    id: "reunion-distance",
    theme: "reunion",
    title: "過去の関係との距離感を考えるコラム",
    description:
      "復縁したい気持ちやこれからの向き合い方を、急がず整理するためのコラムを追加予定です。",
    status: "coming-soon",
    plannedLabel: "復縁テーマで追加予定",
  },
  {
    id: "beauty-selfcare",
    theme: "beauty",
    title: "セルフケアとの向き合い方を考えるコラム",
    description:
      "美容や日々のケアを前向きに続けるためのヒントを、テーマコラムとして追加予定です。",
    status: "coming-soon",
    plannedLabel: "美容テーマで追加予定",
  },
  {
    id: "sexual-worries-care",
    theme: "sexual-worries",
    title: "言葉にしづらい悩みを整理するコラム",
    description:
      "恋愛・結婚の中で話しにくい悩みを、安心して読み進められるコラムとして追加予定です。",
    status: "coming-soon",
    plannedLabel: "性の悩みテーマで追加予定",
  },
  {
    id: "after-diagnosis-journal",
    theme: "all",
    title: "診断後に振り返りたいポイント",
    description:
      "診断結果をすぐに結論づけず、自分のペースで整理するための共通コラムを追加予定です。",
    status: "coming-soon",
    plannedLabel: "共通テーマで追加予定",
  },
];

export const featuredColumnGuideItems = columnGuideItems.filter((item) =>
  ["love", "marriage", "meeting-style"].includes(item.theme),
);

export const getColumnGuideItemsByTheme = (theme: DiagnosisSlug) => {
  const themeItems = columnGuideItems.filter((item) => item.theme === theme);
  const commonItems = columnGuideItems.filter((item) => item.theme === "all");

  return [...themeItems, ...commonItems];
};
