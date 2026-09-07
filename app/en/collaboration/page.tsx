import { ArticleHeader, PageLayout } from "@/components/ContentComponents";

const groups = [
  { title: "Food", items: [<>Analysis of functional compounds in lactic-acid-fermented foods</>, <>Development of manufacturing processes for food-grade lactic acid bacterial preparations</>, <>Discovery of new lactic acid bacteria and bacteriocins</>] },
  { title: "Environment and energy", items: [<>Anaerobic digestion</>, <>Control of heat generation through microbial fermentation and development of its applications</>, <>Microbial recovery of rare metals</>] },
  { title: "Disinfection", items: [<>Development of disinfection conditions using UV LEDs</>] },
  { title: "Analysis and process development", items: [<>Culture methods for microorganisms that are difficult to cultivate</>, <>Analysis and control of soil microorganisms</>, <>Single-cell analysis methods</>, <>Large-scale microbial cultivation</>] },
  { title: "Chemistry", items: [<a href="https://prtimes.jp/story/detail/bDz00Ai5olx" target="_blank" rel="noreferrer">Safety and biodegradability assessment of natural pigments</a>, <>Nanobubbles</>, <>Antioxidant-capacity assessment of plant extracts</>, <>Extraction of aromatic oils from forest resources and product development</>, <a href="https://www.nikkan.co.jp/articles/view/459808" target="_blank" rel="noreferrer">Water-quality analysis of ultrapure water</a>] },
];

export default function EnglishCollaborationPage() {
  return (
    <PageLayout language="en">
      <ArticleHeader title="Collaborative Research, Contract Research, and Technical Consultation" />
      <article className="entry-content topic-list">
        {groups.map((group) => <section className="topic-group" key={group.title}><h3>{group.title}</h3>{group.items.map((item, index) => <p key={index}>{item}</p>)}</section>)}
      </article>
    </PageLayout>
  );
}
