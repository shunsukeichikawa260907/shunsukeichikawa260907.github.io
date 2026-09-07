import { ArticleHeader, PageLayout, SectionTitle } from "@/components/ContentComponents";

export default function ContactPage() {
  return (
    <PageLayout showSidebar>
      <ArticleHeader title="お問い合わせ" />
      <article className="entry-content">
        <p className="contact-intro">研究室への配属や大学院進学を検討している方、ならびに共同研究・受託研究・技術相談を検討している企業・研究機関の方からのご連絡を歓迎します。</p>
        <div className="contact-address"><strong>連絡先</strong><span>s.ichikawa at neptune.kanazawa-it.ac.jp</span><small>「at」を「@」に置き換えてください。</small></div>

        <SectionTitle>配属・大学院進学に関するお問い合わせ</SectionTitle>
        <p>氏名、現在の所属、希望する課程と入学時期、関心のある研究テーマ、これまでの研究経験をお知らせください。海外から大学院進学を希望する方は、履歴書と研究経験の概要も添えてください。</p>

        <SectionTitle>共同研究・技術相談に関するお問い合わせ</SectionTitle>
        <p>所属機関、相談したい課題、試料の概要、希望する成果と時期を、開示できる範囲でお知らせください。機密情報を含む場合は、その旨を最初にお知らせください。</p>

        <SectionTitle>アクセス</SectionTitle>
        <p>研究室は、金沢工業大学のやつかほリサーチキャンパスにあるゲノム生物工学研究所内にあります。扇が丘キャンパスとは所在地が異なります。</p>
        <p>
          金沢工業大学 ゲノム生物工学研究所<br />
          〒924-0838 石川県白山市八束穂3-1
        </p>
        <p>
          <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("金沢工業大学 ゲノム生物工学研究所 石川県白山市八束穂3-1")}`} target="_blank" rel="noopener noreferrer">Google マップで所在地を見る</a>
        </p>
        <p>キャンパスへの交通案内は、<a href="https://www.kanazawa-it.ac.jp/about_kit/yatsukaho.html" target="_blank" rel="noopener noreferrer">大学公式のアクセス案内</a>をご覧ください。キャンパス間のシャトルバスは、学生・教職員向けです。学外から訪問される方は、自動車やタクシーをご利用ください。</p>
        <p>ご訪問の際は、事前にメールでご連絡ください。</p>
      </article>
    </PageLayout>
  );
}
