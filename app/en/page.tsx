import { ArticleHeader, ExternalCard, PageLayout, SectionTitle } from "@/components/ContentComponents";

const recentActivities = [
  {
    date: "2026.09.10",
    dateTime: "2026-09-10",
    text: "On September 10, I spoke with local business representatives about working together on regional fermented foods. They also provided valuable fermented food samples, which I plan to analyze.",
  },
  {
    date: "Since late Aug 2026",
    dateTime: "2026-08",
    text: "Since late August, several second-year students have been visiting the laboratory for hands-on experience. They are all doing well with their experiments.",
  },
  {
    date: "Sep. 2, 2026",
    dateTime: "2026-09-02",
    text: "I spoke with an international prospective student interested in entering a doctoral program. I look forward to staying in touch.",
  },
  {
    date: "Aug. 27, 2026",
    dateTime: "2026-08-27",
    text: "I discussed research on fermented pufferfish ovaries with representatives of a local company.",
  },
  {
    date: "Aug. 24–25, 2026",
    dateTime: "2026-08-24",
    text: "I learned practical approaches to creating innovation.",
  },
  {
    date: "Aug. 20–21, 2026",
    dateTime: "2026-08-20",
    text: "I studied positive psychology.",
  },
  {
    date: "Jul. 31, 2026",
    dateTime: "2026-07-31",
    text: "We prepared our experimental environment with representatives of a collaborating company.",
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
          {recentActivities.slice(0, 5).map((activity) => (
            <div className="activity-item" key={activity.dateTime}>
              <time dateTime={activity.dateTime}>{activity.date}</time>
              <span>{activity.text}</span>
            </div>
          ))}
        </div>
        <p className="activity-profile-link"><a href="https://x.com/sichikawa_lab" target="_blank" rel="noreferrer">Posts by @sichikawa_lab (Japanese)</a></p>

        <SectionTitle>Research news and commentary</SectionTitle>
        <ExternalCard href="https://twitter.com/Shunsuke_chon" title="Shunsuke Ichikawa on X" description="Research and science news, mainly in Japanese." domain="x.com / @Shunsuke_chon" />
      </article>
    </PageLayout>
  );
}
