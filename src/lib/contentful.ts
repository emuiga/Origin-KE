import { createClient } from 'contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

export async function getBlogPosts() {
  const entries = await client.getEntries({ content_type: 'originBlog' });
  return entries.items.map((item: any) => ({
    slug: item.fields.slug,
    title: item.fields.title,
    image: item.fields.heroImage?.fields?.file?.url ? 'https:' + item.fields.heroImage.fields.file.url : null,
    excerpt: item.fields.excerpt || '',
    author: item.fields.author,
  }));
}

export async function getBlogPostBySlug(slug: string) {
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
    image: item.fields.heroImage?.fields?.file?.url ? 'https:' + item.fields.heroImage.fields.file.url : null,
    content: item.fields.content,
    author: item.fields.author,
  };
} 