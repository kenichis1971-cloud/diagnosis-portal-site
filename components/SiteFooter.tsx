import Link from "next/link";

const footerNavigation = [
  { href: "/privacy", label: "プライバシーポリシー" },
  { href: "/terms", label: "利用規約・免責事項" },
  { href: "/contact", label: "お問い合わせ" },
  { href: "/advertising", label: "広告・PR方針" },
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__intro">
        <p className="site-footer__brand">こころ診断ナビ</p>
        <p>気持ちや行動を整理するための診断サイトを、やさしく案内します。</p>
      </div>
      <nav className="site-footer__nav" aria-label="フッターナビゲーション">
        {footerNavigation.map((item) => (
          <Link href={item.href} key={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="site-footer__notice" aria-label="広告・PRに関するご案内">
        <p>
          当サイトでは、広告・PRを含む案内を掲載する場合があります。詳しくは
          <Link href="/advertising">広告・PR方針</Link>をご確認ください。
        </p>
      </div>
    </footer>
  );
}
