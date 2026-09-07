import { ArticleHeader, DownloadLink, ExternalCard, PageLayout, Publication, SectionTitle } from "@/components/ContentComponents";

export default function ThemeTwoPage() {
  return (
    <PageLayout>
      <ArticleHeader title="複雑な微生物がかかわる菌叢機能の解明" />
      <article className="entry-content research-detail">
        <SectionTitle>土壌微生物複合培養と、生理活性化合物探索</SectionTitle>
        <p>土壌に生息する複数の微生物を共に培養し、単独培養では現れにくい微生物機能や代謝産物を探索しています。培養液から化合物を分離し、がん細胞の増殖抑制などの生理活性を評価します。</p>
        <ExternalCard href="https://www.mie-u.ac.jp/R-navi/interview/cat798/post-20.html" title="微生物の価値の探索～ガン細胞の増殖を抑制する微生物の研究～" description="三重大Rナビ | 三重大学" domain="www.mie-u.ac.jp" />
        <ExternalCard href="https://readyfor.jp/projects/mie-edu-soil-microbiol" title="三重県土壌からの『ガン細胞』増殖抑制微生物の探索プロジェクト" domain="readyfor.jp" />
        <DownloadLink href="/downloads/f82382233dfde0c2000b84f9c4043ef9.pdf">複合微生物培養制御と生理活性物質探索</DownloadLink>

        <SectionTitle>水稲栽培における水田土壌菌叢の機能</SectionTitle>
        <p>水田の地形、土壌環境、施肥条件が、土壌微生物群集とイネの生育に及ぼす影響を解析しています。微生物の働きを生かした、持続可能で生産性の高い水稲栽培の実現を目指します。</p>
        <ExternalCard href="https://www.mie-u.ac.jp/R-navi/release/cat775/post-89.html" title="有機のコメ作りを理論化するために" description="有機米の生産性には地形の生み出す土壌微生物群集が関与していた" domain="www.mie-u.ac.jp" />
        <Publication href="https://www.nature.com/articles/s41598-025-09111-x" title="Soil microbes and organic fertilizer efficiency are associated with rice field topography." authors="Nobuhito Sekiya, Ayaka Mae, Asaka Murai, Mchuno Alfred Peter, Maiko Goto, Hinata Kato, Shunsuke Ichikawa, Kunio Watanabe." journal="Scientific Reports. 15(1): 24939. 2025." />

        <SectionTitle>腸内菌叢と気質・行動の関連</SectionTitle>
        <p>ヒトを対象とした観察研究とゼブラフィッシュを用いた実験研究を通して、腸内菌叢と気質・行動の関連を調べています。腸内細菌が産生・代謝する物質に着目し、腸内菌叢と脳機能・行動を結ぶ腸脳相関の仕組みを明らかにします。</p>
        <ExternalCard href="https://www.mie-u.ac.jp/R-navi/release/cat713/post-66.html" title="腸内細菌 Paraburkholderia sabiae により脳でのタウリン濃度が上昇し、不安行動が軽減される" domain="www.mie-u.ac.jp" />
        <ExternalCard href="https://www.t-gex.nagoya-u.ac.jp/member/1218-2.html" title="市川 俊輔 T-GEx研究者紹介" domain="www.t-gex.nagoya-u.ac.jp" />
        <ExternalCard href="https://www.kanazawa-it.ac.jp/kitnews/2026/0721_ICHIKAWA.html" title="子どもの発達と腸内細菌の関係を探る。日本の未就学児を対象に、成長・行動特性と腸内細菌叢の関連を解析" description="金沢工業大学 プレスリリース（2026年7月21日）" domain="www.kanazawa-it.ac.jp" />
        <Publication href="https://www.frontiersin.org/articles/10.3389/fmicb.2023.1079187/full" title="Paraburkholderia sabiae administration alters zebrafish anxiety-like behavior via gut microbial taurine metabolism." authors="Shunsuke Ichikawa, Reimi Abe, Haruka Fujimoto, Koushi Higashi, Liqing Zang, Hiroko Nakayama, Izumi Matsuoka and Yasuhito Shimada." journal="Frontiers in Microbiology. 14: 1079187. 2023." />
        <Publication href="https://www.nature.com/articles/s41598-026-59018-4" title="Gut microbiome composition and predicted functions relate to growth and behavior in a Japanese preschool cohort." authors="Shunsuke Ichikawa, Ayaka Shimura, Aoi Kikuchi, Rise Sanda, Kensaku Sasayama, Keiko Nonoue, Hiroko Tamura, Takahiro Kano, Yasuhito Shimada." journal="Scientific Reports. 2026." />
        <figure className="research-figure"><img src="/research-images/microbiome-research.jpg" alt="菌叢機能研究の資料" /></figure>
      </article>
    </PageLayout>
  );
}
