import { ArticleHeader, ExternalCard, PageLayout, SectionTitle } from "@/components/ContentComponents";

const recentActivities = [
  {
    date: "2026.09.02",
    dateTime: "2026-09-02",
    text: "9/2には、大学院博士後期課程への入学に関心を持っていただいている、海外からの方とお話できました。これからどうぞよろしくお願いします。",
    href: "https://x.com/sichikawa_lab/status/2095144061216981328",
  },
  {
    date: "2026.08.27",
    dateTime: "2026-08-27",
    text: "8/27には、フグの卵巣糠漬けの研究について、地域企業の方とディスカッションしました",
    href: "https://x.com/sichikawa_lab/status/2095143581833142307",
  },
  {
    date: "2026.08.24–25",
    dateTime: "2026-08-24",
    text: "8/24-25では、イノベーション創出のノウハウを学びました",
    href: "https://x.com/sichikawa_lab/status/2095143304811946173",
  },
  {
    date: "2026.08.20–21",
    dateTime: "2026-08-20",
    text: "8/20-21では、ポジティブ心理学について学びました",
    href: "https://x.com/sichikawa_lab/status/2095142693496357001",
  },
  {
    date: "2026.07.31",
    dateTime: "2026-07-31",
    text: "7/31には、関係企業の方にお越しいただいて、実験環境を整備しました。",
    href: "https://x.com/sichikawa_lab/status/2095141716672356652",
  },
];

export default function HomePage() {
  return (
    <PageLayout>
      <ArticleHeader title="微生物の機能を探り、健康・食・持続可能な社会へつなげる" />
      <article className="entry-content">
        <p>金沢工業大学 バイオ・化学部 生命・応用バイオ学科 / ゲノム生物工学研究所の市川俊輔と申します。</p>
        <p>個々の細菌と複雑な微生物群集が、どのように応答し、相互作用し、有用な機能を生み出すのかを研究しています。基礎的な微生物学と、健康、環境技術、地域資源の活用を結び付けます。わたしたちは食品・健康・農業・環境などあらゆる場面で微生物の力を活用してきましたが、一方でいまだ未探索な微生物が膨大に存在していることがわかっています。みなさまとの積極的な共同研究・受託研究を実現しながら、価値の高い新規微生物機能を発掘します。</p>

        <SectionTitle>最近の活動</SectionTitle>
        <div className="activity-list">
          {recentActivities.map((activity) => (
            <a className="activity-item" href={activity.href} target="_blank" rel="noreferrer" key={activity.href}>
              <time dateTime={activity.dateTime}>{activity.date}</time>
              <span>{activity.text}</span>
            </a>
          ))}
        </div>
        <p className="activity-profile-link"><a href="https://x.com/sichikawa_lab" target="_blank" rel="noreferrer">@sichikawa_labの投稿一覧</a></p>

        <SectionTitle>気になるニュースをつぶやきます</SectionTitle>
        <ExternalCard href="https://twitter.com/Shunsuke_chon" title="市川俊輔のX（Twitter）" description="研究や科学に関するニュースを紹介しています。" domain="x.com / @Shunsuke_chon" />
      </article>
    </PageLayout>
  );
}
