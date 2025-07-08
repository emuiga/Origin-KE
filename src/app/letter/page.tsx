import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getBlogPosts } from '@/lib/contentful';
import NewsletterSection from '@/components/NewsletterSection';

export default async function LetterPage() {
  const originBlog = await getBlogPosts();

  return (
    <div className="min-h-screen bg-[#84a98c] text-white flex flex-col">
      <Header />
      <section className="w-full bg-[#84a98c] flex flex-col items-center py-12 border-b border-white/10">
        <NewsletterSection />
      </section>
      
      <main className="flex-1">
        {originBlog.map((post: any) => (
          <section
            key={post.slug}
            className="relative flex items-center justify-center h-[40vh] md:h-[50vh] w-full overflow-hidden border-b border-white/10"
            style={{ background: post.image ? `url(${post.image}) center/cover, #222` : '#222' }}
          >
            <a href={`/letter/${post.slug}`} className="absolute inset-0 z-10" tabIndex={-1} aria-label={post.title}></a>
            <h2 className="relative z-20 text-3xl md:text-5xl font-bold text-white text-center drop-shadow-lg">
              {post.title}
            </h2>
          </section>
        ))}
      </main>
      <Footer />
    </div>
  );
} 