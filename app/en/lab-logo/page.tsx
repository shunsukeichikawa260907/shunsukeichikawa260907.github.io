import { ArticleHeader, ExternalCard, PageLayout, SectionTitle } from "@/components/ContentComponents";

export default function EnglishLabLogoPage() {
  return (
    <PageLayout language="en">
      <ArticleHeader title="Lab Logo" />
      <article className="entry-content">
        <img className="logo-image" src="/lab-logo.png" alt="Laboratory logo depicting diverse microorganisms interacting in the environment" />
        <p>Our laboratory logo represents diverse environmental microorganisms living and interacting with one another.</p>
        <p>The design has also been made into an acrylic keychain.</p>
        <ExternalCard href="https://suzuri.jp/minato_whale/12786166/acrylic-keychain/50x50mm/clear" title="Acrylic keychain featuring the lab logo" description="The linked page may occasionally be unavailable." domain="suzuri.jp" />

        <SectionTitle>Laboratory illustration</SectionTitle>
        <div className="chemistry-lab-media">
          <img src="/chemistry-lab-illustration.jpg" alt="Illustration inspired by the laboratory" />
          <div className="video-block"><video src="/chemistry-lab-animation.mp4" controls preload="metadata" poster="/chemistry-lab-illustration.jpg" aria-label="Animation inspired by the laboratory" /></div>
        </div>
        <p>The illustration and animation were created by <a href="https://lit.link/minatowhale" target="_blank" rel="noreferrer">Minato Kujirazaka</a>, who carefully incorporated our ideas into the design.</p>
        <ExternalCard href="https://lit.link/minatowhale" title="Kujirazaka" description="Illustrator, Live2D modeler, and virtual creator" domain="lit.link" />

        <div className="logo-gallery">
          <figure><img src="/lab-character-fox.png" alt="Laboratory character illustration 1" /></figure>
          <figure><img src="/lab-character-duo.png" alt="Laboratory character illustration 2" /></figure>
        </div>
        <p>These illustrations were created by Oritaku.</p>
        <ExternalCard href="https://mio-since2020.com/" title="Woodsland Mio and Off-road Land Mio" description="A community-built campground in Japan" domain="mio-since2020.com" />
        <ExternalCard href="https://camp-fire.jp/projects/735828/view" title="Crowdfunding project for campground facilities" description="Japanese-language project page" domain="camp-fire.jp" />
      </article>
    </PageLayout>
  );
}
