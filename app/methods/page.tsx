import { ArticleHeader, PageLayout, SectionTitle } from "@/components/ContentComponents";

export default function MethodsPage() {
  return (
    <PageLayout>
      <ArticleHeader title="保有している研究技術など" />
      <article className="entry-content">
        <SectionTitle>環境からの細菌の取得</SectionTitle>
        <p>好気性細菌・嫌気性細菌の単離、培養、同定</p>

        <SectionTitle>生理活性化合物の取得</SectionTitle>
        <p>微生物培養液などからの化合物抽出・分画・分取</p>
        <p>化合物濃度測定</p>
        <p>化合物の生理活性評価</p>

        <SectionTitle>細菌機能の解析</SectionTitle>
        <p>環境サンプルや細胞サンプルからのDNA抽出・RNA抽出</p>
        <p>遺伝子クローニング</p>
        <p>大腸菌・枯草菌などでのリコンビナントタンパク質発現・精製</p>
        <p>酵素活性測定</p>
        <p>遺伝子発現解析</p>
        <p>ストレス処理後の生菌数評価</p>
        <p>バイオフィルム形成評価</p>

        <SectionTitle>学内外資源を活用した大規模解析</SectionTitle>
        <p>ゲノム解析、ゲノム修飾解析、パンゲノム解析、トランスクリプトーム解析、タンパク質同定、メタボローム解析、菌叢解析</p>

        <SectionTitle>顕微鏡観察</SectionTitle>
        <p>細菌細胞などの電子顕微鏡観察（SEM、TEM）</p>
        <p>Clostridium属細菌細胞（左）とその細胞外小胞（右）</p>
        <div className="image-pair">
          <figure className="research-figure"><img src="/research-images/microscopy-cell.jpg" alt="Clostridium属細菌細胞の電子顕微鏡像" /></figure>
          <figure className="research-figure"><img src="/research-images/microscopy-vesicle.jpg" alt="Clostridium属細菌の細胞外小胞の電子顕微鏡像" /></figure>
        </div>
        <p>細菌細胞の蛍光観察</p>
        <div className="image-trio">
          <figure className="research-figure"><img src="/research-images/fluorescence-channel-3.jpg" alt="細菌細胞の蛍光観察画像1" /></figure>
          <figure className="research-figure"><img src="/research-images/fluorescence-channel-1.jpg" alt="細菌細胞の蛍光観察画像2" /></figure>
          <figure className="research-figure"><img src="/research-images/fluorescence-overlay.jpg" alt="細菌細胞の蛍光観察重ね合わせ画像" /></figure>
        </div>
        <p>細菌増殖のタイムラプス観察</p>
        <figure className="research-figure"><img src="/research-images/ecoli-growth.gif" alt="大腸菌が増殖する様子" /><figcaption>大腸菌が増殖する様子</figcaption></figure>
      </article>
    </PageLayout>
  );
}
