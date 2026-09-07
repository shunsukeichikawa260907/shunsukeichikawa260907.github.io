import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/SiteChrome";

export const metadata: Metadata = {
  title: "市川俊輔のページ",
  description: "応用微生物学を専門とする市川俊輔の研究活動、共同研究、研究技術を紹介します。",
  keywords: ["市川俊輔", "Shunsuke Ichikawa", "応用微生物学", "微生物", "金沢工業大学"],
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body>
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
