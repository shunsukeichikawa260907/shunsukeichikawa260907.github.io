import { ArticleHeader, DownloadLink, ExternalCard, PageLayout, Publication } from "@/components/ContentComponents";

export default function EnglishThemeThreePage() {
  return (
    <PageLayout language="en">
      <ArticleHeader title="Bacterial UV Tolerance" />
      <article className="entry-content research-detail">
        <p>Using UV LEDs, we investigate variation in survival and the acquisition of UV tolerance within Escherichia coli populations. We examine the roles of DNA repair and DNA methylation to inform more effective ultraviolet disinfection methods.</p>

        <ExternalCard href="https://emr.gecer.mie-u.ac.jp/2022/6-2/" title="Effective ultraviolet disinfection of water using the characteristics of LEDs" description="Mie University Environment and SDGs Report 2022 (Japanese)" domain="emr.gecer.mie-u.ac.jp" />
        <DownloadLink href="/downloads/220408.pdf" label="Download">Rare UV-resistant cells in clonal populations of Escherichia coli</DownloadLink>
        <Publication href="https://www.sciencedirect.com/science/article/abs/pii/S1011134422000628?via%3Dihub" title="Rare UV-resistant cells in clonal populations of Escherichia coli." authors="Shunsuke Ichikawa, Mika Okazaki, Mina Okamura, Norihiro Nishimura, Hideto Miyake." journal="Journal of Photochemistry and Photobiology B. 231: 112448. 2022." />
        <Publication href="https://www.nature.com/articles/s41598-026-36328-1" title="Induced tolerance to UV stress drives survival heterogeneity in isogenic E. coli cell populations." authors="Shunsuke Ichikawa, Midai Tanoue, Junto Takeuchi, Takuto Fujitani, Mizuki Goto, Rise Sanda, Eri Matsuo, Yasuhito Shimada, Abhyudai Singh." journal="Scientific Reports. 16(1): 5931. 2026." />
        <Publication href="https://www.biorxiv.org/content/10.64898/2026.06.22.733644v1" title="DNA cytosine methylation modulates UV resistance and nucleotide excision repair gene expression in Escherichia coli." authors="Shunsuke Ichikawa, Mika Okazaki." journal="bioRxiv. 2026." />
      </article>
    </PageLayout>
  );
}
