import type { MetadataRoute } from "next";
import { erpModules } from "@/data/erp";
import { localCaseStudies } from "@/data/caseStudies";
import { getAllBlogPosts, SITE_URL } from "@/lib/blog";
import { getCaseStudies } from "@/lib/contentful";

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const page = (path: string, lastModified?: string | Date) => ({
    url: `${SITE_URL}${path}`,
    ...(lastModified ? { lastModified: new Date(lastModified) } : {}),
  });

  const posts = await getAllBlogPosts();

  let cmsCaseStudies: { slug: string; date?: string }[] = [];
  try {
    cmsCaseStudies = (await getCaseStudies()).map((s) => ({ slug: s.slug as string, date: s.date as string | undefined }));
  } catch {
    // CMS unavailable
  }
  const caseStudySlugs = new Set(["e4c", ...localCaseStudies.map((s) => s.slug)]);

  return [
    page(""),
    page("/about"),
    page("/process"),
    page("/portfolio"),
    page("/contact"),
    page("/erp"),
    ...erpModules.map((m) => page(`/erp/${m.slug}`)),
    page("/case-studies"),
    ...[...caseStudySlugs].map((slug) => page(`/case-studies/${slug}`)),
    ...cmsCaseStudies.filter((s) => !caseStudySlugs.has(s.slug)).map((s) => page(`/case-studies/${s.slug}`, s.date)),
    page("/blog"),
    ...posts.map((p) => page(`/blog/${p.slug}`, p.date)),
  ];
}
