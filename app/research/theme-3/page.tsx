import { ArticleHeader, DownloadLink, ExternalCard, PageLayout, Publication } from "@/components/ContentComponents";

export default function ThemeThreePage() {
  return (
    <PageLayout>
      <ArticleHeader title="UV-LEDによる細菌不活化メカニズムとその応用" />
      <article className="entry-content research-detail">
        <p>UV-LEDを用いて、大腸菌集団に生じる生残性のばらつきやUV耐性獲得の仕組みを研究しています。DNA修復やDNAメチル化との関係を解析し、より効果的な紫外線殺菌技術の確立につなげます。</p>

        <ExternalCard href="https://emr.gecer.mie-u.ac.jp/2022/6-2/" title="LEDの特徴を活かした水の効果的な紫外線殺菌" description="環境・SDGs報告書2022 | 三重大学" domain="emr.gecer.mie-u.ac.jp" />
        <DownloadLink href="/downloads/220408.pdf">大腸菌クローン集団中に存在する希少なUV耐性細胞</DownloadLink>
        <Publication href="https://www.sciencedirect.com/science/article/abs/pii/S1011134422000628?via%3Dihub" title="Rare UV-resistant cells in clonal populations of Escherichia coli." authors="Shunsuke Ichikawa, Mika Okazaki, Mina Okamura, Norihiro Nishimura, Hideto Miyake." journal="Journal of Photochemistry and Photobiology B. 231: 112448. 2022." />
        <Publication href="https://www.nature.com/articles/s41598-026-36328-1" title="Induced tolerance to UV stress drives survival heterogeneity in isogenic E. coli cell populations." authors="Shunsuke Ichikawa, Midai Tanoue, Junto Takeuchi, Takuto Fujitani, Mizuki Goto, Rise Sanda, Eri Matsuo, Yasuhito Shimada, Abhyudai Singh." journal="Scientific Reports. 16(1): 5931. 2026." />
        <Publication href="https://www.biorxiv.org/content/10.64898/2026.06.22.733644v1" title="DNA cytosine methylation modulates UV resistance and nucleotide excision repair gene expression in Escherichia coli." authors="Shunsuke Ichikawa, Mika Okazaki." journal="bioRxiv. 2026." />
      </article>
    </PageLayout>
  );
}
