import { Download, ExternalLink } from "lucide-react";
import type { ReactNode } from "react";

export function PageLayout({ children, showSidebar = false, language = "ja" }: { children: ReactNode; showSidebar?: boolean; language?: "ja" | "en" }) {
  return (
    <div className={`site-container${showSidebar ? "" : " site-container--single"}`}>
      <main className="article-surface">{children}</main>
      {showSidebar && <Sidebar language={language} />}
    </div>
  );
}

export function ArticleHeader({ title }: { title: string }) {
  return (
    <header className="article-header">
      <h1>{title}</h1>
    </header>
  );
}

export function SectionTitle({ children }: { children: ReactNode }) {
  return <h2 className="section-heading">{children}</h2>;
}

export function ExternalCard({ href, title, description, domain }: { href: string; title: string; description?: string; domain?: string }) {
  return (
    <a className="external-card" href={href} target="_blank" rel="noreferrer">
      <div><strong>{title}</strong>{description && <p>{description}</p>}<small>{domain ?? new URL(href).hostname}</small></div>
      <ExternalLink size={18} aria-hidden="true" />
    </a>
  );
}

export function DownloadLink({ href, children, label = "ダウンロード" }: { href: string; children: ReactNode; label?: string }) {
  return <a className="download-link" href={href} download><span>{children}</span><strong><Download size={16} aria-hidden="true" />{label}</strong></a>;
}

export function Publication({ href, title, authors, journal }: { href?: string; title: string; authors: string; journal: string }) {
  return (
    <div className="publication">
      {href ? <a href={href} target="_blank" rel="noreferrer">{title}</a> : <strong>{title}</strong>}
      <p>{authors}</p><p>{journal}</p>
    </div>
  );
}

export function Sidebar({ language = "ja" }: { language?: "ja" | "en" }) {
  const isEnglish = language === "en";
  return (
    <aside className="sidebar">
      <section className="profile-widget">
        <img src="/shunsuke-ichikawa.jpg" alt={isEnglish ? "Shunsuke Ichikawa" : "市川俊輔"} />
        <h2>{isEnglish ? "Shunsuke Ichikawa" : "市川 俊輔"}</h2>
        <p>{isEnglish ? <><span>Kanazawa Institute of Technology</span><br /><span>College of Bioscience and Chemistry</span><br /><span>Department of Applied Bioscience</span><br /><span>Genome Biotechnology Laboratory</span></> : <>金沢工業大学<br />バイオ・化学部 生命・応用バイオ学科<br />ゲノム生物工学研究所</>}</p>
      </section>
      <section className="sidebar-widget">
        <h2>{isEnglish ? "Researcher profiles" : "研究者情報"}</h2>
        <a href="https://researchmap.jp/shunsuke.ichikawa" target="_blank" rel="noreferrer">Researchmap</a>
        <a href="https://kaken.nii.ac.jp/ja/search/?kw=%E5%B8%82%E5%B7%9D%E4%BF%8A%E8%BC%94" target="_blank" rel="noreferrer">KAKEN</a>
        <a href="https://orcid.org/0000-0003-2935-004X" target="_blank" rel="noreferrer">ORCID</a>
      </section>
    </aside>
  );
}
