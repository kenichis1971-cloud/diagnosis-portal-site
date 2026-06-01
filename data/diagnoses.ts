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
    category: "気持ちの整理",
    description: "復縁したい気持ちや今後の向き合い方を整理する診断予定です。",
    href: "/reunion",
  },
  {
    slug: "beauty",
    name: "美容診断",
    status: "coming-soon",
    category: "セルフケア",
    description: "自分に合う美容・セルフケアの方向性を整理する診断予定です。",
    href: "/beauty",
  },
  {
    slug: "sexual-worries",
    name: "性の悩み診断",
    status: "coming-soon",
    category: "悩みの整理",
    description: "恋愛・結婚の中で言葉にしづらい性に関する悩みを、やさしく整理する診断予定です。",
    href: "/sexual-worries",
  },
];

export const publishedDiagnoses = diagnoses.filter((diagnosis) => diagnosis.status === "published");
export const comingSoonDiagnoses = diagnoses.filter((diagnosis) => diagnosis.status === "coming-soon");
