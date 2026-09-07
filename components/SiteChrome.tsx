"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const japaneseNavigation = [
  { href: "/", label: "TOP" },
  { href: "/research/theme-1", label: "セルロース系バイオマス分解" },
  { href: "/research/theme-2", label: "微生物叢の機能" },
  { href: "/research/theme-3", label: "細菌のUV耐性" },
  { href: "/collaboration", label: "企業との共同研究・受託研究" },
  { href: "/methods", label: "保有している研究技術など" },
  { href: "/lab-logo", label: "研究室ロゴ" },
  { href: "/contact", label: "お問い合わせ" },
];

const englishNavigation = [
  { href: "/en", label: "Home" },
  { href: "/en/research/theme-1", label: "Cellulosic Biomass" },
  { href: "/en/research/theme-2", label: "Microbiome Function" },
  { href: "/en/research/theme-3", label: "Bacterial UV Tolerance" },
  { href: "/en/collaboration", label: "Collaboration" },
  { href: "/en/methods", label: "Research Methods" },
  { href: "/en/lab-logo", label: "Lab Logo" },
  { href: "/en/contact", label: "Contact" },
];

const microbeHeaderImages = [
  "/microbe-header-left.png",
  "/microbe-header-right.png",
  "/microbe-header-left.png",
  "/microbe-header-right.png",
  "/microbe-header-left.png",
  "/microbe-header-right.png",
];

export function SiteHeader() {
  const pathname = usePathname();
  const isEnglish = pathname === "/en" || pathname.startsWith("/en/");
  const navigation = isEnglish ? englishNavigation : japaneseNavigation;
  const homeHref = isEnglish ? "/en" : "/";
  const languageHref = isEnglish
    ? pathname.replace(/^\/en(?=\/|$)/, "") || "/"
    : pathname === "/" ? "/en" : `/en${pathname}`;

  useEffect(() => {
    document.documentElement.lang = isEnglish ? "en" : "ja";
  }, [isEnglish]);

  return (
    <header className="site-header">
      <div className="site-title-wrap">
        <a className="microbe-header-link" href={homeHref} aria-label={isEnglish ? "Shunsuke Ichikawa homepage" : "市川俊輔のページのトップへ"}>
          <span className="microbe-header-strip" aria-hidden="true">
            {microbeHeaderImages.map((src, index) => (
              <img src={src} alt="" key={`${src}-${index}`} />
            ))}
          </span>
        </a>
      </div>
      <nav className="primary-nav" aria-label={isEnglish ? "Main navigation" : "メインメニュー"}>
        <div className="primary-nav-inner">
          {navigation.map((item) => (
            <a className={pathname === item.href ? "active" : ""} href={item.href} key={item.href}>{item.label}</a>
          ))}
          <a className="language-switch" href={languageHref} lang={isEnglish ? "ja" : "en"} hrefLang={isEnglish ? "ja" : "en"}>
            {isEnglish ? "日本語" : "English"}
          </a>
        </div>
      </nav>
    </header>
  );
}
