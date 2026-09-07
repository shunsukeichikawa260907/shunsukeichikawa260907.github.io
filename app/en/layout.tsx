import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shunsuke Ichikawa | Applied Microbiology",
  description: "Research on microbial functions, cellulosic biomass degradation, microbiomes, bacterial UV tolerance, and collaborative research at Kanazawa Institute of Technology.",
  keywords: ["Shunsuke Ichikawa", "applied microbiology", "microbiome", "cellulosic biomass", "UV tolerance", "Kanazawa Institute of Technology"],
};

export default function EnglishLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
