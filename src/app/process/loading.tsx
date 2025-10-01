export default function Loading() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Skeleton */}
      <div className="h-16 bg-white animate-pulse"></div>
      
      {/* Hero Section Skeleton */}
      <section className="relative min-h-[40vh] flex items-center overflow-hidden py-12 sm:py-16">
        <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-300/20 via-gray-400/80 to-gray-500/40"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <div className="space-y-6">
            <div className="h-8 w-40 bg-gray-300 rounded-full mx-auto animate-pulse"></div>
            <div className="h-16 w-96 bg-gray-300 rounded mx-auto animate-pulse"></div>
            <div className="h-6 w-80 bg-gray-300 rounded mx-auto animate-pulse"></div>
            <div className="h-12 w-48 bg-gray-300 rounded-xl mx-auto animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Process Steps Skeleton */}
      <section className="px-4 sm:px-8 py-16 sm:py-24 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="h-12 w-64 bg-gray-300 rounded mx-auto mb-4 animate-pulse"></div>
            <div className="h-6 w-96 bg-gray-300 rounded mx-auto animate-pulse"></div>
          </div>
          
          <div className="space-y-16">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-gray-100">
                  <div className="flex items-center mb-4 sm:mb-6">
                    <div className="text-5xl sm:text-6xl font-light text-gray-200 animate-pulse">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <div className="h-[1px] bg-gray-200 flex-grow ml-4"></div>
                  </div>
                  
                  <div className="h-8 w-48 bg-gray-300 rounded mb-3 animate-pulse"></div>
                  <div className="h-6 w-64 bg-gray-300 rounded mb-4 animate-pulse"></div>
                  
                  <div className="mb-4">
                    <div className="h-5 w-32 bg-gray-300 rounded mb-3 animate-pulse"></div>
                    <div className="flex flex-wrap gap-2">
                      {Array.from({ length: 3 }).map((_, i) => (
                        <div key={i} className="h-8 w-24 bg-gray-200 rounded-full animate-pulse"></div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="h-4 w-full bg-gray-300 rounded animate-pulse"></div>
                    <div className="h-4 w-full bg-gray-300 rounded animate-pulse"></div>
                    <div className="h-4 w-3/4 bg-gray-300 rounded animate-pulse"></div>
                  </div>
                </div>
                
                {/* Circle marker */}
                <div className="absolute left-0 top-4 w-4 h-4 rounded-full bg-gray-300 animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section Skeleton */}
      <section className="px-4 sm:px-8 pt-6 pb-20 sm:pb-32 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="h-12 w-96 bg-gray-300 rounded mx-auto mb-6 animate-pulse"></div>
          <div className="h-6 w-80 bg-gray-300 rounded mx-auto mb-10 animate-pulse"></div>
          <div className="h-12 w-64 bg-gray-300 rounded mx-auto mb-8 animate-pulse"></div>
          <div className="h-4 w-64 bg-gray-300 rounded mx-auto animate-pulse"></div>
        </div>
      </section>
    </div>
  );
}
