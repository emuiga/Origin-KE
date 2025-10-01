export default function Loading() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col">
      {/* Header Skeleton */}
      <div className="h-16 bg-white animate-pulse"></div>
      
      {/* Newsletter Section Skeleton */}
      <section className="w-full bg-white flex flex-col items-center py-12 border-b border-gray-200">
        <div className="max-w-md mx-auto text-center">
          <div className="h-8 w-64 bg-gray-300 rounded mx-auto mb-4 animate-pulse"></div>
          <div className="h-6 w-80 bg-gray-300 rounded mx-auto mb-6 animate-pulse"></div>
          <div className="h-12 w-full bg-gray-300 rounded animate-pulse"></div>
        </div>
      </section>
      
      {/* Blog Posts Skeleton */}
      <main className="flex-1">
        {Array.from({ length: 3 }).map((_, index) => (
          <section
            key={index}
            className="relative flex items-center justify-center h-[40vh] md:h-[50vh] w-full overflow-hidden border-b border-gray-200"
          >
            <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
            <div className="relative z-20 h-16 w-96 bg-gray-300 rounded mx-auto animate-pulse"></div>
          </section>
        ))}
      </main>
    </div>
  );
}
