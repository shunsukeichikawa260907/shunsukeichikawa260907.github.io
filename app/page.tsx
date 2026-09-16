import { ArticleHeader, ExternalCard, PageLayout, SectionTitle } from "@/components/ContentComponents";

const recentActivities = [
  {
    date: "2026.09.10",
    dateTime: "2026-09-10",
    text: "9/10には、地域発酵食品について、地元事業者の方と共同しての活動をするために、お話しました。貴重な発酵食品も提供いただいて、これから解析してみます。",
  },
  {
    date: "2026.08下旬〜",
    dateTime: "2026-08",
    text: "8月下旬から、数名の2年生に、研究室体験できてもらっています。みなさん上手に実験できています。",
  },
  {
    date: "2026.09.02",
    dateTime: "2026-09-02",
    text: "9/2には、大学院博士後期課程への入学に関心を持っていただいている、海外からの方とお話できました。これからどうぞよろしくお願いします。",
  },
  {
    date: "2026.08.27",
    dateTime: "2026-08-27",
    text: "8/27には、フグの卵巣糠漬けの研究について、地域企業の方とディスカッションしました",
  },
  {
    date: "2026.08.24–25",
    dateTime: "2026-08-24",
    text: "8/24-25では、イノベーション創出のノウハウを学びました",
  },
  {
    date: "2026.08.20–21",
    dateTime: "2026-08-20",
    text: "8/20-21では、ポジティブ心理学について学びました",
  },
  {
    date: "2026.07.31",
    dateTime: "2026-07-31",
    text: "7/31には、関係企業の方にお越しいただいて、実験環境を整備しました。",
  },
];

export default function HomePage() {
  return (
    <PageLayout>
      <ArticleHeader title="微生物の機能を探り、健康・食・持続可能な社会へつなげる" />
      <article className="entry-content">
        <p>金沢工業大学 バイオ・化学部 生命・応用バイオ学科 / ゲノム生物工学研究所の市川俊輔と申します。</p>
        <p>活動概要については、<a href="https://researchmap.jp/shunsuke.ichikawa" target="_blank" rel="noreferrer">researchmap</a>をご覧ください。</p>
        <p>個々の細菌と複雑な微生物群集が、どのように応答し、相互作用し、有用な機能を生み出すのかを研究しています。基礎的な微生物学と、健康、環境技術、地域資源の活用を結び付けます。わたしたちは食品・健康・農業・環境などあらゆる場面で微生物の力を活用してきましたが、一方でいまだ未探索な微生物が膨大に存在していることがわかっています。みなさまとの積極的な共同研究・受託研究を実現しながら、価値の高い新規微生物機能を発掘します。</p>

        <SectionTitle>最近の活動</SectionTitle>
        <div className="activity-list">
          {recentActivities.slice(0, 5).map((activity) => (
            <div className="activity-item" key={activity.dateTime}>
              <time dateTime={activity.dateTime}>{activity.date}</time>
              <span>{activity.text}</span>
            </div>
          ))}
        </div>
        <p className="activity-profile-link"><a href="https://x.com/sichikawa_lab" target="_blank" rel="noreferrer">@sichikawa_labの投稿一覧</a></p>

        <SectionTitle>気になるニュースをつぶやきます</SectionTitle>
        <ExternalCard href="https://twitter.com/Shunsuke_chon" title="市川俊輔のX（Twitter）" description="研究や科学に関するニュースを紹介しています。" domain="x.com / @Shunsuke_chon" />
      </article>
    </PageLayout>
  );
}
