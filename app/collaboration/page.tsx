import { ArticleHeader, PageLayout } from "@/components/ContentComponents";

const groups = [
  { title: "食品", items: [<>乳酸発酵食品中の機能性成分分析</>, <>食品用乳酸菌製剤の製造技術の確立</>, <>新規乳酸菌やバクテリオシンの探索</>] },
  { title: "環境・エネルギー", items: [<>メタン発酵</>, <>発酵熱生成制御とその用途開発</>, <>微生物によるレアメタル回収</>] },
  { title: "殺菌", items: [<>UV-LEDによる殺菌条件の確立</>] },
  { title: "分析・解析", items: [<>難培養微生物培養技術開発</>, <>土壌微生物の分析・制御</>, <>1細胞解析技術開発</>, <>微生物大量培養技術開発</>] },
  { title: "化学", items: [<a href="https://prtimes.jp/story/detail/bDz00Ai5olx" target="_blank" rel="noreferrer">各種天然色素の安全性・生分解性評価</a>, <>ナノバブル</>, <>植物抽出物の抗酸化能評価</>, <>森林資源からのアロマオイル抽出とその製品化</>, <a href="https://www.nikkan.co.jp/articles/view/459808" target="_blank" rel="noreferrer">超純水の水質分析</a>] },
];

export default function CollaborationPage() {
  return (
    <PageLayout>
      <ArticleHeader title="企業との共同研究・受託研究・技術相談など" />
      <article className="entry-content topic-list">
        {groups.map((group) => <section className="topic-group" key={group.title}><h3>{group.title}</h3>{group.items.map((item, index) => <p key={index}>{item}</p>)}</section>)}
      </article>
    </PageLayout>
  );
}
