import type { Metadata } from "next";
import CaseStudyArticle from "@/components/CaseStudyArticle";
import { getLocalCaseStudy } from "@/data/caseStudies";

const study = getLocalCaseStudy("matata")!;

export const metadata: Metadata = {
  title: `${study.name}: Case Study | Origin`,
  description: study.excerpt,
};

export default function Page() {
  return <CaseStudyArticle study={study} />;
}
