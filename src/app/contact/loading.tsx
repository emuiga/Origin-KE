export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-blue-100">
      {/* Header Skeleton */}
      <div className="h-16 bg-white animate-pulse"></div>
      
      <main className="px-4 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Header Skeleton */}
          <div className="text-center mb-16">
            <div className="h-12 w-64 bg-gray-300 rounded mx-auto mb-4 animate-pulse"></div>
            <div className="h-6 w-96 bg-gray-300 rounded mx-auto animate-pulse"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form Skeleton */}
            <div className="bg-white/80 rounded-2xl p-8 shadow-xl">
              <div className="h-8 w-64 bg-gray-300 rounded mb-6 animate-pulse"></div>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <div className="h-4 w-16 bg-gray-300 rounded mb-2 animate-pulse"></div>
                    <div className="h-12 w-full bg-gray-300 rounded animate-pulse"></div>
                  </div>
                  <div>
                    <div className="h-4 w-20 bg-gray-300 rounded mb-2 animate-pulse"></div>
                    <div className="h-12 w-full bg-gray-300 rounded animate-pulse"></div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <div className="h-4 w-20 bg-gray-300 rounded mb-2 animate-pulse"></div>
                    <div className="h-12 w-full bg-gray-300 rounded animate-pulse"></div>
                  </div>
                  <div>
                    <div className="h-4 w-16 bg-gray-300 rounded mb-2 animate-pulse"></div>
                    <div className="h-12 w-full bg-gray-300 rounded animate-pulse"></div>
                  </div>
                </div>
                
                <div>
                  <div className="h-4 w-32 bg-gray-300 rounded mb-2 animate-pulse"></div>
                  <div className="h-24 w-full bg-gray-300 rounded animate-pulse"></div>
                </div>
                
                <div className="h-12 w-full bg-gray-300 rounded animate-pulse"></div>
              </div>
            </div>

            {/* Contact Info Skeleton */}
            <div className="space-y-8">
              <div className="bg-white/80 rounded-2xl p-6 shadow-xl">
                <div className="h-6 w-32 bg-gray-300 rounded mb-4 animate-pulse"></div>
                <div className="h-4 w-24 bg-gray-300 rounded mb-2 animate-pulse"></div>
                <div className="h-6 w-32 bg-gray-300 rounded animate-pulse"></div>
              </div>
              
              <div className="bg-white/80 rounded-2xl p-6 shadow-xl">
                <div className="h-6 w-24 bg-gray-300 rounded mb-6 animate-pulse"></div>
                <div className="space-y-4">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-300 rounded-lg animate-pulse"></div>
                      <div>
                        <div className="h-4 w-20 bg-gray-300 rounded mb-1 animate-pulse"></div>
                        <div className="h-4 w-32 bg-gray-300 rounded animate-pulse"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
