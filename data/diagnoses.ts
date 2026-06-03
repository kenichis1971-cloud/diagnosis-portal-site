export type Diagnosis = {
  slug: string;
  name: string;
  status: "published" | "coming-soon";
  category: string;
  categoryLead: string;
  description: string;
  href: string;
  externalUrl?: string;
  buttonLabel?: string;
};

export const diagnoses: Diagnosis[] = [
  {
    slug: "love",
    name: "恋愛診断",
    status: "published",
    category: "恋愛",
    categoryLead: "恋愛傾向や気持ちの整理",
    description: "恋愛傾向や気持ちの整理に役立つ診断です。",
    href: "/love",
    externalUrl: "https://deaikata-diagnosis.vercel.app/",
    buttonLabel: "恋愛診断サイトを見る",
  },
  {
    slug: "marriage",
    name: "婚活診断",
    status: "published",
    category: "婚活",
    categoryLead: "婚活スタイルや行動の方向性",
    description: "婚活スタイルや行動の方向性を整理する診断です。",
    href: "/marriage",
    externalUrl: "https://konkatsu-diagnosis-site.vercel.app/",
    buttonLabel: "婚活診断サイトを見る",
  },
  {
    slug: "meeting-style",
    name: "出会い方診断",
    status: "published",
    category: "出会い方",
    categoryLead: "自分に合う出会い方の整理",
    description: "自分に合う出会い方を整理する診断です。",
    href: "/meeting-style",
    externalUrl: "https://deai-style-diagnosis-site.vercel.app/",
    buttonLabel: "出会い方診断サイトを見る",
  },
  {
    slug: "reunion",
    name: "復縁診断",
    status: "coming-soon",
    category: "復縁",
    categoryLead: "過去の関係との向き合い方",
    description: "復縁したい気持ちや今後の向き合い方を整理する診断予定です。",
    href: "/reunion",
  },
  {
    slug: "beauty",
    name: "美容診断",
    status: "coming-soon",
    category: "美容",
    categoryLead: "自分に合うセルフケア",
    description: "自分に合う美容・セルフケアの方向性を整理する診断予定です。",
    href: "/beauty",
  },
  {
    slug: "sexual-worries",
    name: "性の悩み診断",
    status: "coming-soon",
    category: "性の悩み",
    categoryLead: "言葉にしづらい悩みの整理",
    description: "恋愛・結婚の中で言葉にしづらい性に関する悩みを、やさしく整理する診断予定です。",
    href: "/sexual-worries",
  },
];

export const publishedDiagnoses = diagnoses.filter((diagnosis) => diagnosis.status === "published");
export const comingSoonDiagnoses = diagnoses.filter((diagnosis) => diagnosis.status === "coming-soon");

export const defaultCategoryNoteLabel = "note";
export const categoryNotePlaceholderLabel = "note準備中";

export type CategoryGuide = {
  slug: string;
  name: string;
  lead: string;
  href: string;
  status: Diagnosis["status"];
  noteUrl?: string;
  noteLabel?: string;
};

export const categoryGuides: CategoryGuide[] = diagnoses.map((diagnosis) => ({
  slug: diagnosis.slug,
  name: diagnosis.category,
  lead: diagnosis.categoryLead,
  href: diagnosis.href,
  status: diagnosis.status,
  noteLabel: defaultCategoryNoteLabel,
}));

export const prGuideSlots = [
  {
    title: "占い鑑定・気持ち整理",
    description: "恋愛や人間関係の気持ちを、落ち着いて見つめるための案内枠です。",
  },
  {
    title: "婚活・出会いサービス",
    description: "婚活や出会い方の選択肢を、比較しやすく紹介するための案内枠です。",
  },
  {
    title: "美容・セルフケア",
    description: "日々のセルフケアや美容に関する読みものを掲載するための案内枠です。",
  },
] as const;
