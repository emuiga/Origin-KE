export default function Loading() {
  return (
    <div className="min-h-screen bg-[#84a98c] text-white flex flex-col">
      {/* Header Skeleton */}
      <div className="h-16 bg-white/10 animate-pulse"></div>
      
      {/* Hero Section Skeleton */}
      <section className="w-full h-[40vh] md:h-[60vh] relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gray-800 animate-pulse"></div>
        <div className="relative z-10 h-16 w-96 bg-gray-600 rounded mx-auto animate-pulse"></div>
        <div className="absolute inset-0 bg-black/30" />
      </section>
      
      {/* Content Skeleton */}
      <main className="flex-1 w-full max-w-2xl mx-auto px-4 py-12">
        <article className="prose prose-lg prose-invert">
          <div className="space-y-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="space-y-2">
                <div className="h-4 w-full bg-gray-600 rounded animate-pulse"></div>
                <div className="h-4 w-full bg-gray-600 rounded animate-pulse"></div>
                <div className="h-4 w-3/4 bg-gray-600 rounded animate-pulse"></div>
              </div>
            ))}
          </div>
        </article>
        
        {/* Newsletter Section Skeleton */}
        <div className="mt-16 pt-8 border-t border-white/20">
          <div className="max-w-md mx-auto text-center">
            <div className="h-8 w-64 bg-gray-600 rounded mx-auto mb-4 animate-pulse"></div>
            <div className="h-6 w-80 bg-gray-600 rounded mx-auto mb-6 animate-pulse"></div>
            <div className="h-12 w-full bg-gray-600 rounded animate-pulse"></div>
          </div>
        </div>
      </main>
    </div>
  );
}
