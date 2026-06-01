import Link from "next/link";

const navigation = [
  { href: "/", label: "ホーム" },
  { href: "/diagnoses", label: "診断一覧" },
  { href: "/love", label: "恋愛診断" },
  { href: "/marriage", label: "婚活診断" },
  { href: "/meeting-style", label: "出会い方診断" },
  { href: "/advertising", label: "広告・PR方針" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="site-logo" href="/" aria-label="こころ診断ナビ ホーム">
        <span className="site-logo__main">こころ診断ナビ</span>
        <span className="site-logo__sub">総合診断ポータル</span>
      </Link>
      <nav className="site-nav" aria-label="グローバルナビゲーション">
        {navigation.map((item) => (
          <Link href={item.href} key={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
