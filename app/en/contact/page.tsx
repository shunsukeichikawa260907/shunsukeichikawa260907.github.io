import { ArticleHeader, PageLayout, SectionTitle } from "@/components/ContentComponents";

export default function EnglishContactPage() {
  return (
    <PageLayout showSidebar language="en">
      <ArticleHeader title="Contact" />
      <article className="entry-content">
        <p className="contact-intro">We welcome inquiries from prospective undergraduate and graduate students interested in joining the laboratory, as well as from companies and research institutions considering collaborative research, contract research, or technical consultation.</p>
        <div className="contact-address"><strong>Email</strong><span>s.ichikawa at neptune.kanazawa-it.ac.jp</span><small>Replace “at” with “@”.</small></div>

        <SectionTitle>Prospective students</SectionTitle>
        <p>Please include your name, current affiliation, intended degree program and enrollment period, research interests, and previous research experience. Applicants from outside Japan should also attach a curriculum vitae and a brief summary of their research experience.</p>
        <p>Sending an inquiry does not guarantee admission or laboratory placement. Any possibility of supervision must be considered together with research fit, the university&apos;s admissions procedures, and a feasible funding plan for tuition and living expenses.</p>

        <SectionTitle>Collaborative research and technical consultation</SectionTitle>
        <p>Please describe your organization, the issue you wish to address, the relevant samples, and your preferred outcomes and timeline to the extent that you can disclose them. If your inquiry may contain confidential information, please state this in your initial message.</p>
      </article>
    </PageLayout>
  );
}
