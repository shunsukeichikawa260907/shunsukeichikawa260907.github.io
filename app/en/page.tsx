import { ArticleHeader, ExternalCard, PageLayout, SectionTitle } from "@/components/ContentComponents";

const recentActivities = [
  {
    date: "Sep. 2, 2026",
    dateTime: "2026-09-02",
    text: "I spoke with an international prospective student interested in entering a doctoral program. I look forward to staying in touch.",
    href: "https://x.com/sichikawa_lab/status/2095144061216981328",
  },
  {
    date: "Aug. 27, 2026",
    dateTime: "2026-08-27",
    text: "I discussed research on fermented pufferfish ovaries with representatives of a local company.",
    href: "https://x.com/sichikawa_lab/status/2095143581833142307",
  },
  {
    date: "Aug. 24–25, 2026",
    dateTime: "2026-08-24",
    text: "I learned practical approaches to creating innovation.",
    href: "https://x.com/sichikawa_lab/status/2095143304811946173",
  },
  {
    date: "Aug. 20–21, 2026",
    dateTime: "2026-08-20",
    text: "I studied positive psychology.",
    href: "https://x.com/sichikawa_lab/status/2095142693496357001",
  },
  {
    date: "Jul. 31, 2026",
    dateTime: "2026-07-31",
    text: "We prepared our experimental environment with representatives of a collaborating company.",
    href: "https://x.com/sichikawa_lab/status/2095141716672356652",
  },
];

export default function EnglishHomePage() {
  return (
    <PageLayout language="en">
      <ArticleHeader title="Exploring microbial functions for health, food, and a sustainable society" />
      <article className="entry-content">
        <p>I am Shunsuke Ichikawa of the Department of Applied Bioscience, College of Bioscience and Chemistry, and the Genome Biotechnology Laboratory at Kanazawa Institute of Technology.</p>
        <p>We investigate how individual bacteria and complex microbial communities respond, interact, and generate useful functions. Our research connects fundamental microbiology with health, environmental technology, and the use of regional resources. Microorganisms have long supported food, health, agriculture, and environmental applications, yet vast microbial diversity remains unexplored. Through active collaborative and contract research, we seek valuable new microbial functions.</p>

        <SectionTitle>Prospective graduate students</SectionTitle>
        <p>We welcome inquiries from prospective master&apos;s and doctoral students whose interests align with our research. Please review the research pages before contacting us. Your initial email should include your name, current affiliation, intended degree program and enrollment period, research interests, and previous research experience. Applicants from outside Japan should also attach a curriculum vitae and a brief summary of their research experience.</p>
        <p><a href="/en/contact">Contact information and details to include in your inquiry</a></p>

        <SectionTitle>Recent activities</SectionTitle>
        <div className="activity-list">
          {recentActivities.map((activity) => (
            <a className="activity-item" href={activity.href} target="_blank" rel="noreferrer" key={activity.href}>
              <time dateTime={activity.dateTime}>{activity.date}</time>
              <span>{activity.text}</span>
            </a>
          ))}
        </div>
        <p className="activity-profile-link"><a href="https://x.com/sichikawa_lab" target="_blank" rel="noreferrer">Posts by @sichikawa_lab (Japanese)</a></p>

        <SectionTitle>Research news and commentary</SectionTitle>
        <ExternalCard href="https://twitter.com/Shunsuke_chon" title="Shunsuke Ichikawa on X" description="Research and science news, mainly in Japanese." domain="x.com / @Shunsuke_chon" />
      </article>
    </PageLayout>
  );
}
