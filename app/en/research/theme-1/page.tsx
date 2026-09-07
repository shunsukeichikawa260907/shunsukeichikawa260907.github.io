import { ArticleHeader, DownloadLink, ExternalCard, PageLayout, Publication, SectionTitle } from "@/components/ContentComponents";

export default function EnglishThemeOnePage() {
  return (
    <PageLayout language="en">
      <ArticleHeader title="Mechanisms and Applications of Cellulosic Biomass Degradation by Soil Bacteria" />
      <article className="entry-content research-detail">
        <p>We investigate how cellulolytic bacteria use cellulosomes and extracellular vesicles to degrade plant biomass. We apply these findings to the production of sugars and biofuels from underutilized plant resources.</p>

        <ExternalCard href="http://emr.gecer.mie-u.ac.jp/6-3/" title="Producing biofuels from underutilized plant resources using bacteria" description="Mie University Environmental Report 2019 (Japanese)" domain="emr.gecer.mie-u.ac.jp" />

        <DownloadLink href="/downloads/32822be2b229de9e1934b2c4f5d321eb.pdf" label="Download">Contribution of growth-dependent genomic DNA methylation changes to the regulation of degradative enzyme production</DownloadLink>

        <DownloadLink href="/downloads/6d4a0ad2383b745cd3aaaf65b1f52467.pdf" label="Download">Marked improvement in the stability and activity of cellulolytic enzymes in ionic liquids</DownloadLink>
        <Publication href="https://www.sciencedirect.com/science/article/pii/S2589014X23004103?via%3Dihub" title="Stable cellulolytic activity of Clostridium thermocellum against cellulosic biomass pretreated with ionic liquid 1-ethyl 3-methylimidazolium acetate." authors="Daichi Ito, Kazumasa Kitamura, Koushi Higashi, Makoto Kondo, Satoru Ogawa, Aoi Kikuchi, Shuichi Karita, Shunsuke Ichikawa." journal="Bioresource Technology Reports. 25: 101739. 2024." />

        <DownloadLink href="/downloads/kaken.nii_.ac_.jp_18K18218seika.pdf" label="Download">Regulatory mechanisms governing cellulolytic enzyme production in Clostridium species</DownloadLink>
        <Publication href="https://www.sciencedirect.com/science/article/pii/S0141022922000217" title="The expression of alternative sigma-I7 factor induces the transcription of cellulosomal genes in the cellulolytic bacterium Clostridium thermocellum." authors="Shunsuke Ichikawa, Daisuke Ito, Sayuri Asaoka, Reimi Abe, Norito Katsuo, Toshiyuki Ito, Daichi Ito, Shuichi Karita." journal="Enzyme and Microbial Technology. 156: 110002. 2022." />

        <DownloadLink href="/downloads/15f13d14f23b3ab6273a75ec22459d88.pdf" label="Download">Membrane-vesicle production by cellulolytic bacteria and its role in cellulose degradation</DownloadLink>
        <Publication href="https://academic.oup.com/femsle/article-abstract/366/12/fnz145/5526221?redirectedFrom=fulltext" title="Cellulosomes localize on the surface of membrane vesicles from the cellulolytic bacterium Clostridium thermocellum." authors="Shunsuke Ichikawa, Satoru Ogawa, Ayami Nishida, Yuzuki Kobayashi, Toshihito Kurosawa, Shuichi Karita." journal="FEMS Microbiology Letters. 366: fnz145. 2019." />
        <figure className="research-illustration"><img src="/research-images/cellulosome-illustration.jpg" alt="Conceptual illustration of cellulosomes and membrane vesicles" /><figcaption>The illustration was generated using Midjourney.</figcaption></figure>

        <DownloadLink href="/downloads/6dfb31d4e36a3141b63597e5901a1657-1.pdf" label="Download">Functions of membrane-vesicle compounds in intercellular communication</DownloadLink>
        <Publication href="https://www.mdpi.com/2076-2607/9/3/593" title="Metabolome analysis of constituents in membrane vesicles for Clostridium thermocellum growth stimulation." authors="Shunsuke Ichikawa, Yoichiro Tsuge, Shuichi Karita." journal="Microorganisms. 9: 593. 2021." />

        <DownloadLink href="/downloads/0550c8e7040e6d3b3c87c12f8466cf1e.pdf" label="Download">Development of bacteria that produce higher alcohols from cellulosic biomass</DownloadLink>
        <Publication href="https://academic.oup.com/femsle/article/362/24/fnv202/2467450" title="Bacterial production and secretion of water-insoluble fuel compounds from cellulose without the supplementation of cellulases." authors="Shunsuke Ichikawa and Shuichi Karita." journal="FEMS Microbiology Letters. 362: fnv202. 2015." />

        <DownloadLink href="/downloads/BSES-1.pdf" label="Download">Glucose production using bacterial cultures</DownloadLink>
        <Publication href="https://www.sciencedirect.com/science/article/abs/pii/S1389172318306650?via%3Dihub" title="Glucose production from cellulose through biological simultaneous enzyme production and saccharification using recombinant bacteria expressing the β-glucosidase gene." authors="Shunsuke Ichikawa, Maiko Ichihara, Toshiyuki Ito, Kazuho Isozaki, Akihiko Kosugi, Shuichi Karita." journal="Journal of Bioscience and Bioengineering. 127: 340–344. 2018." />

        <SectionTitle>Other original research articles</SectionTitle>
        <Publication href="https://www.tandfonline.com/doi/full/10.1080/09168451.2017.1364619" title="Characterization of lignocellulose particles during lignocellulose solubilization by Clostridium thermocellum." authors="Shunsuke Ichikawa, Ayami Nishida, Saori Yasui, Shuichi Karita." journal="Bioscience, Biotechnology, and Biochemistry. 81: 2028–2033. 2017." />
        <Publication href="https://www.tandfonline.com/doi/full/10.1080/09168451.2015.1069696" title="Carbohydrate-binding modules influence substrate specificity of an endoglucanase from Clostridium thermocellum." authors="Shunsuke Ichikawa, Mitsuki Yoshida, Shuichi Karita, Makoto Kondo and Masakazu Goto." journal="Bioscience, Biotechnology, and Biochemistry. 80: 188–192. 2016." />
        <Publication href="https://www.sciencedirect.com/science/article/pii/S0014579314006590" title="Cellulosomal carbohydrate-binding module from Clostridium josui binds to crystalline and non-crystalline cellulose, and soluble polysaccharides." authors="Shunsuke Ichikawa, Shuichi Karita, Makoto Kondo and Masakazu Goto." journal="FEBS Letters. 588: 3886–3890. 2014." />
      </article>
    </PageLayout>
  );
}
