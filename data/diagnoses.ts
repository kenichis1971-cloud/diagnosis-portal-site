export type Diagnosis = {
  slug: string;
  name: string;
  status: "published" | "coming-soon";
  category: string;
  description: string;
  href: string;
  externalUrl?: string;
  buttonLabel?: string;
};

export type DiagnosisCategory = {
  name: string;
  summary: string;
  href: string;
  status: Diagnosis["status"];
  diagnosisSlug: string;
};

export type PrSlot = {
  title: string;
  description: string;
};

export const diagnoses: Diagnosis[] = [
  {
    slug: "love",
    name: "恋愛診断",
    status: "published",
    category: "恋愛",
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
    description: "過去の関係との向き合い方を整理する診断予定です。",
    href: "/reunion",
  },
  {
    slug: "beauty",
    name: "美容診断",
    status: "coming-soon",
    category: "美容",
    description: "自分に合う美容・セルフケアの方向性を整理する診断予定です。",
    href: "/beauty",
  },
  {
    slug: "sexual-worries",
    name: "性の悩み診断",
    status: "coming-soon",
    category: "性の悩み",
    description: "言葉にしづらい悩みを、やさしく整理する診断予定です。",
    href: "/sexual-worries",
  },
];

export const diagnosisCategories: DiagnosisCategory[] = [
  {
    name: "恋愛",
    summary: "恋愛傾向や気持ちの整理",
    href: "/love",
    status: "published",
    diagnosisSlug: "love",
  },
  {
    name: "婚活",
    summary: "婚活スタイルや行動の方向性",
    href: "/marriage",
    status: "published",
    diagnosisSlug: "marriage",
  },
  {
    name: "出会い方",
    summary: "自分に合う出会い方の整理",
    href: "/meeting-style",
    status: "published",
    diagnosisSlug: "meeting-style",
  },
  {
    name: "復縁",
    summary: "過去の関係との向き合い方",
    href: "/reunion",
    status: "coming-soon",
    diagnosisSlug: "reunion",
  },
  {
    name: "美容",
    summary: "自分に合うセルフケア",
    href: "/beauty",
    status: "coming-soon",
    diagnosisSlug: "beauty",
  },
  {
    name: "性の悩み",
    summary: "言葉にしづらい悩みの整理",
    href: "/sexual-worries",
    status: "coming-soon",
    diagnosisSlug: "sexual-worries",
  },
];

export const prSlots: PrSlot[] = [
  {
    title: "占い鑑定・気持ち整理",
    description: "恋愛や人間関係の気持ちを見つめ直す読みものやサービスを案内する枠です。",
  },
  {
    title: "婚活・出会いサービス",
    description: "婚活や出会い方の選択肢を考えるための情報を掲載する枠です。",
  },
  {
    title: "美容・セルフケア",
    description: "毎日のセルフケアや美容テーマに関する案内を掲載する枠です。",
  },
];

export const publishedDiagnoses = diagnoses.filter((diagnosis) => diagnosis.status === "published");
export const comingSoonDiagnoses = diagnoses.filter((diagnosis) => diagnosis.status === "coming-soon");
