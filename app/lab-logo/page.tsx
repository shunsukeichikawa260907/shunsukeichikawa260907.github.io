import { ArticleHeader, ExternalCard, PageLayout, SectionTitle } from "@/components/ContentComponents";

export default function LabLogoPage() {
  return (
    <PageLayout>
      <ArticleHeader title="研究室ロゴ" />
      <article className="entry-content">
        <img className="logo-image" src="/lab-logo.png" alt="環境中の多様な微生物が関わり合う様子を表した研究室ロゴ" />
        <p>研究室ロゴを作りました。</p>
        <p>環境中の多様な微生物が、お互いに関わり合いながら存在している様子を表現しています。</p>
        <p>アクリルキーホルダーにもなっています。</p>
        <ExternalCard href="https://suzuri.jp/minato_whale/12786166/acrylic-keychain/50x50mm/clear" title="研究室ロゴのアクリルキーホルダー" description="現在、リンク先が表示されない場合があります。" domain="suzuri.jp" />

        <SectionTitle>研究室のイメージ絵</SectionTitle>
        <div className="chemistry-lab-media">
          <img src="/chemistry-lab-illustration.jpg" alt="研究室のイメージ絵" />
          <div className="video-block"><video src="/chemistry-lab-animation.mp4" controls preload="metadata" poster="/chemistry-lab-illustration.jpg" aria-label="研究室のイメージ動画" /></div>
        </div>
        <p><a href="https://lit.link/minatowhale" target="_blank" rel="noreferrer">みなと鯨坂</a>さんに作成いただきました。こちらの意向を丁寧に聞いていただき、デザインに反映いただきました。ありがとうございました。</p>
        <ExternalCard href="https://lit.link/minatowhale" title="鯨坂 / Kujirazaka" description="イラストレーター／Live2Dモデラー／Vtuber" domain="lit.link" />

        <div className="logo-gallery">
          <figure><img src="/lab-character-fox.png" alt="研究室キャラクターのイラスト1" /></figure>
          <figure><img src="/lab-character-duo.png" alt="研究室キャラクターのイラスト2" /></figure>
        </div>
        <p>こちら、おりたくさんに作成いただきました。ありがとうございました！</p>
        <ExternalCard href="https://mio-since2020.com/" title="名古屋・大阪から2時間。みんなで作りあげるキャンプ場" description="ウッズランドMio＆オフロードランドMio" domain="mio-since2020.com" />
        <ExternalCard href="https://camp-fire.jp/projects/735828/view" title="オフロード走行が楽しめるキャンプ場に、水洗トイレと飲み水を！" domain="camp-fire.jp" />
      </article>
    </PageLayout>
  );
}
