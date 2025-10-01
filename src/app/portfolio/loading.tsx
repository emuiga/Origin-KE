export default function Loading() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section Skeleton */}
      <div className="relative min-h-[40vh] flex items-center overflow-hidden py-12 sm:py-16">
        <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-300/20 via-gray-400/80 to-gray-500/40"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <div className="space-y-6">
            <div className="h-8 w-32 bg-gray-300 rounded-full mx-auto animate-pulse"></div>
            <div className="h-16 w-96 bg-gray-300 rounded mx-auto animate-pulse"></div>
            <div className="h-6 w-80 bg-gray-300 rounded mx-auto animate-pulse"></div>
            <div className="h-12 w-48 bg-gray-300 rounded-xl mx-auto animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Services Section Skeleton */}
      <section className="px-4 sm:px-8 py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="h-6 w-48 bg-gray-300 rounded mx-auto mb-4 animate-pulse"></div>
            <div className="h-16 w-full max-w-4xl bg-gray-300 rounded mx-auto animate-pulse"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 9 }).map((_, index) => (
              <div key={index} className="bg-white overflow-hidden">
                <div className="flex flex-col h-full">
                  <div className="h-48 sm:h-56 bg-gray-200 animate-pulse"></div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="h-8 w-3/4 bg-gray-300 rounded mb-4 animate-pulse"></div>
                    <div className="h-4 w-full bg-gray-300 rounded mb-2 animate-pulse"></div>
                    <div className="h-4 w-5/6 bg-gray-300 rounded animate-pulse"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
