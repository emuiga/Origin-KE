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
    }));
  },
  ['blog-posts'],
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
    };
  },
  ['blog-post'],
  { revalidate: 3600 }
); 