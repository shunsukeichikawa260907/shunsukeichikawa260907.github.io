import { ArticleHeader, DownloadLink, ExternalCard, PageLayout, Publication, SectionTitle } from "@/components/ContentComponents";

export default function EnglishThemeTwoPage() {
  return (
    <PageLayout language="en">
      <ArticleHeader title="Functional Analysis of Complex Microbial Communities" />
      <article className="entry-content research-detail">
        <SectionTitle>Mixed-culture soil microbiology and discovery of bioactive compounds</SectionTitle>
        <p>We co-culture multiple soil microorganisms to identify microbial functions and metabolites that may not emerge in monoculture. We isolate compounds from the culture medium and assess biological activities, including inhibition of cancer-cell proliferation.</p>
        <ExternalCard href="https://www.mie-u.ac.jp/R-navi/interview/cat798/post-20.html" title="Exploring microbial value: microorganisms that inhibit cancer-cell proliferation" description="Mie University Research Navigator (Japanese)" domain="www.mie-u.ac.jp" />
        <ExternalCard href="https://readyfor.jp/projects/mie-edu-soil-microbiol" title="Searching Mie Prefecture soils for microorganisms that inhibit cancer-cell proliferation" description="Crowdfunding project page (Japanese)" domain="readyfor.jp" />
        <DownloadLink href="/downloads/f82382233dfde0c2000b84f9c4043ef9.pdf" label="Download">Control of mixed microbial cultures and discovery of bioactive compounds</DownloadLink>

        <SectionTitle>Functions of paddy-soil microbiomes in rice cultivation</SectionTitle>
        <p>We analyze how paddy-field topography, soil conditions, and fertilization affect soil microbial communities and rice growth. Our goal is to use microbial functions to support sustainable and productive rice cultivation.</p>
        <ExternalCard href="https://www.mie-u.ac.jp/R-navi/release/cat775/post-89.html" title="Toward a scientific basis for organic rice production" description="Topography-associated soil microbial communities influence organic-rice productivity (Japanese)" domain="www.mie-u.ac.jp" />
        <Publication href="https://www.nature.com/articles/s41598-025-09111-x" title="Soil microbes and organic fertilizer efficiency are associated with rice field topography." authors="Nobuhito Sekiya, Ayaka Mae, Asaka Murai, Mchuno Alfred Peter, Maiko Goto, Hinata Kato, Shunsuke Ichikawa, Kunio Watanabe." journal="Scientific Reports. 15(1): 24939. 2025." />

        <SectionTitle>Associations of the gut microbiome with temperament and behavior</SectionTitle>
        <p>Through observational studies in humans and experimental studies using zebrafish, we investigate associations between the gut microbiome, temperament, and behavior. By focusing on metabolites produced or transformed by gut bacteria, we seek to clarify the gut–brain mechanisms that link microbial communities with brain function and behavior.</p>
        <ExternalCard href="https://www.mie-u.ac.jp/R-navi/release/cat713/post-66.html" title="Paraburkholderia sabiae increases brain taurine concentration and reduces anxiety-like behavior" description="Mie University research news (Japanese)" domain="www.mie-u.ac.jp" />
        <ExternalCard href="https://www.t-gex.nagoya-u.ac.jp/member/1218-2.html" title="Shunsuke Ichikawa: T-GEx researcher profile" description="Japanese-language profile" domain="www.t-gex.nagoya-u.ac.jp" />
        <ExternalCard href="https://www.kanazawa-it.ac.jp/kitnews/2026/0721_ICHIKAWA.html" title="Exploring relationships between child development and the gut microbiome in a Japanese preschool cohort" description="Kanazawa Institute of Technology press release, July 21, 2026 (Japanese)" domain="www.kanazawa-it.ac.jp" />
        <Publication href="https://www.frontiersin.org/articles/10.3389/fmicb.2023.1079187/full" title="Paraburkholderia sabiae administration alters zebrafish anxiety-like behavior via gut microbial taurine metabolism." authors="Shunsuke Ichikawa, Reimi Abe, Haruka Fujimoto, Koushi Higashi, Liqing Zang, Hiroko Nakayama, Izumi Matsuoka and Yasuhito Shimada." journal="Frontiers in Microbiology. 14: 1079187. 2023." />
        <Publication href="https://www.nature.com/articles/s41598-026-59018-4" title="Gut microbiome composition and predicted functions relate to growth and behavior in a Japanese preschool cohort." authors="Shunsuke Ichikawa, Ayaka Shimura, Aoi Kikuchi, Rise Sanda, Kensaku Sasayama, Keiko Nonoue, Hiroko Tamura, Takahiro Kano, Yasuhito Shimada." journal="Scientific Reports. 2026." />
        <figure className="research-figure"><img src="/research-images/microbiome-research.jpg" alt="Research material illustrating microbial-community functions" /></figure>
      </article>
    </PageLayout>
  );
}
