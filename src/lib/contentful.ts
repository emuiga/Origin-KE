import { createClient } from 'contentful';
import { unstable_cache } from 'next/cache';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

export const getBlogPosts = unstable_cache(
  async () => {
    const entries = await client.getEntries({ content_type: 'originBlog' });
    return entries.items.map((item: any) => ({
      slug: item.fields.slug,
      title: item.fields.title,
      image: item.fields.heroImage?.fields?.file?.url
        ? 'https:' + item.fields.heroImage.fields.file.url
        : null,
      excerpt: item.fields.excerpt || '',
      author: item.fields.author,
      date: item.fields.date || item.sys.createdAt,
    }));
  },
  ['blog-posts'],
  { revalidate: 3600 }
);

export const getCaseStudies = unstable_cache(
  async () => {
    const entries = await client.getEntries({
      content_type: 'caseStudy',
      order: ['-fields.date'] as any,
    });
    return entries.items.map((item: any) => ({
      slug: item.fields.slug,
      title: item.fields.title,
      client: item.fields.client,
      excerpt: typeof item.fields.excerpt === 'string' ? item.fields.excerpt : '',
      date: item.fields.date,
      award: item.fields.award || null,
      tags: Array.isArray(item.fields.tags) ? item.fields.tags : [],
      thumbnail: item.fields.thumbnail?.fields?.file?.url
        ? 'https:' + item.fields.thumbnail.fields.file.url
        : null,
    }));
  },
  ['case-studies'],
  { revalidate: 3600 }
);

export const getCaseStudyBySlug = unstable_cache(
  async (slug: string) => {
    const entries = await client.getEntries({
      content_type: 'caseStudy',
      'fields.slug': slug,
      limit: 1,
      include: 2,
    });
    const item = entries.items[0] as any;
    if (!item) return null;
    return {
      slug: item.fields.slug,
      title: item.fields.title,
      client: item.fields.client,
      excerpt: typeof item.fields.excerpt === 'string' ? item.fields.excerpt : '',
      date: item.fields.date,
      award: item.fields.award || null,
      tags: Array.isArray(item.fields.tags) ? item.fields.tags : [],
      thumbnail: item.fields.thumbnail?.fields?.file?.url
        ? 'https:' + item.fields.thumbnail.fields.file.url
        : null,
      type: (item.fields.type as string) || 'case-study',
      challenge: item.fields.challenge || null,
      whySelected: item.fields.whySelected || null,
      whatWeBuilt: item.fields.whatWeBuilt || null,
      results: item.fields.results || null,
      references: item.fields.references || null,
      body: item.fields.body || null,
    };
  },
  ['case-study'],
  { revalidate: 3600 }
);

export const getBlogPostBySlug = unstable_cache(
  async (slug: string) => {
    const entries = await client.getEntries({
      content_type: 'originBlog',
      'fields.slug': slug,
      limit: 1,
    });
    const item = entries.items[0] as any;
    if (!item) return null;
    return {
      slug: item.fields.slug,
      title: item.fields.title,
      image: item.fields.heroImage?.fields?.file?.url
        ? 'https:' + item.fields.heroImage.fields.file.url
        : null,
      content: item.fields.content,
      author: item.fields.author,
      date: item.fields.date || item.sys.createdAt,
      excerpt: item.fields.excerpt || '',
    };
  },
  ['blog-post'],
  { revalidate: 3600 }
); 