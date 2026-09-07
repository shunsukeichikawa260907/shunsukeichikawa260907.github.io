import { ArticleHeader, PageLayout, SectionTitle } from "@/components/ContentComponents";

export default function EnglishMethodsPage() {
  return (
    <PageLayout language="en">
      <ArticleHeader title="Research Methods and Technical Capabilities" />
      <article className="entry-content">
        <SectionTitle>Isolation of bacteria from environmental samples</SectionTitle>
        <p>Isolation, cultivation, and identification of aerobic and anaerobic bacteria</p>

        <SectionTitle>Recovery of bioactive compounds</SectionTitle>
        <p>Extraction, fractionation, and preparative separation of compounds from microbial culture fluids and related samples</p>
        <p>Quantification of compounds</p>
        <p>Assessment of biological activity</p>

        <SectionTitle>Analysis of bacterial functions</SectionTitle>
        <p>DNA and RNA extraction from environmental and cellular samples</p>
        <p>Gene cloning</p>
        <p>Expression and purification of recombinant proteins in Escherichia coli, Bacillus subtilis, and related hosts</p>
        <p>Enzyme activity assays</p>
        <p>Gene expression analysis</p>
        <p>Viable-cell enumeration after stress treatment</p>
        <p>Biofilm formation assays</p>

        <SectionTitle>Large-scale analyses using internal and external resources</SectionTitle>
        <p>Genome analysis, epigenomic analysis, pangenome analysis, transcriptome analysis, protein identification, metabolome analysis, and microbiome analysis</p>

        <SectionTitle>Microscopy</SectionTitle>
        <p>Scanning and transmission electron microscopy of bacterial cells and related samples</p>
        <p>A Clostridium cell (left) and its extracellular vesicles (right)</p>
        <div className="image-pair">
          <figure className="research-figure"><img src="/research-images/microscopy-cell.jpg" alt="Electron micrograph of a Clostridium cell" /></figure>
          <figure className="research-figure"><img src="/research-images/microscopy-vesicle.jpg" alt="Electron micrograph of extracellular vesicles from Clostridium" /></figure>
        </div>
        <p>Fluorescence microscopy of bacterial cells</p>
        <div className="image-trio">
          <figure className="research-figure"><img src="/research-images/fluorescence-channel-3.jpg" alt="Fluorescence image of bacterial cells, channel 1" /></figure>
          <figure className="research-figure"><img src="/research-images/fluorescence-channel-1.jpg" alt="Fluorescence image of bacterial cells, channel 2" /></figure>
          <figure className="research-figure"><img src="/research-images/fluorescence-overlay.jpg" alt="Merged fluorescence image of bacterial cells" /></figure>
        </div>
        <p>Time-lapse imaging of bacterial growth</p>
        <figure className="research-figure"><img src="/research-images/ecoli-growth.gif" alt="Time-lapse image of Escherichia coli growth" /><figcaption>Growth of Escherichia coli</figcaption></figure>
      </article>
    </PageLayout>
  );
}
