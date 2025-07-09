import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { notFound } from 'next/navigation';
import { getBlogPostBySlug } from '@/lib/contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Document } from '@contentful/rich-text-types';
import NewsletterSection from '@/components/NewsletterSection';

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  
  if (!post) return notFound();

  // Custom renderer options for better formatting
  const options = {
    renderNode: {
      paragraph: (node: any, children: any) => (
        <p className="mb-6 leading-relaxed">{children}</p>
      ),
      text: (node: any) => {
        // Handle line breaks within text nodes
        if (node.value.includes('\n')) {
          return node.value.split('\n').map((line: string, index: number) => (
            <span key={index}>
              {line}
              {index < node.value.split('\n').length - 1 && <br />}
            </span>
          ));
        }
        return node.value;
      }
    }
  };

  // Helper function to render content with proper formatting
  const renderContent = (content: any) => {
    // If it's a string, handle it directly
    if (typeof content === 'string') {
      return (
        <div className="space-y-6">
          {content.split('\n\n').map((paragraph, i) => (
            <p key={i} className="leading-relaxed">
              {paragraph.split('\n').map((line, j) => (
                <span key={j}>
                  {line}
                  {j < paragraph.split('\n').length - 1 && <br />}
                </span>
              ))}
            </p>
          ))}
        </div>
      );
    }
    
    // If it's rich text, use Contentful's renderer with custom options
    if (content && typeof content === 'object' && 'nodeType' in content) {
      return documentToReactComponents(content as Document, options);
    }
    
    // If it's an object but not rich text, try to convert it to string
    if (content && typeof content === 'object') {
      const contentString = JSON.stringify(content);
      return (
        <div className="space-y-6">
          {contentString.split('\n\n').map((paragraph, i) => (
            <p key={i} className="leading-relaxed">
              {paragraph.split('\n').map((line, j) => (
                <span key={j}>
                  {line}
                  {j < paragraph.split('\n').length - 1 && <br />}
                </span>
              ))}
            </p>
          ))}
        </div>
      );
    }
    
    // Fallback
    return <p>Content not available</p>;
  };

  return (
    <div className="min-h-screen bg-[#84a98c] text-white flex flex-col">
      <div className="pt-3 sm:pt-0">
        <Header />
      </div>
      <section className="w-full h-[40vh] md:h-[60vh] relative flex items-center justify-center overflow-hidden">
        {post.image && typeof post.image === 'string' && (
          <img src={post.image} alt={typeof post.title === 'string' ? post.title : 'Blog post'} className="absolute inset-0 w-full h-full object-cover object-center opacity-80" />
        )}
        <h1 className="relative z-10 text-4xl md:text-6xl font-bold text-white text-center drop-shadow-lg">{typeof post.title === 'string' ? post.title : 'Blog Post'}</h1>
        <div className="absolute inset-0 bg-black/30" />
      </section>
      <main className="flex-1 w-full max-w-2xl mx-auto px-4 py-12">
        <article className="prose prose-lg prose-invert text-white">
          {renderContent(post.content)}
        </article>
        
        {/* Newsletter Section */}
        <div className="mt-16 pt-8 border-t border-white/20">
          <NewsletterSection />
        </div>
      </main>
      <Footer />
    </div>
  );
} 