export default function Loading() {
  return (
    <div className="min-h-screen bg-white animate-pulse">
      <div className="h-16 bg-gray-100" />
      <div className="max-w-5xl mx-auto px-4 pt-16 pb-12">
        <div className="h-8 bg-gray-200 rounded w-32 mx-auto mb-4" />
        <div className="h-12 bg-gray-200 rounded w-3/4 mx-auto mb-6" />
        <div className="h-6 bg-gray-100 rounded w-2/3 mx-auto" />
      </div>
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(3)].map((_, i) => (
          <div key={i}>
            <div className="h-52 bg-gray-200 rounded-xl mb-4" />
            <div className="h-6 bg-gray-200 rounded w-3/4 mb-2" />
            <div className="h-4 bg-gray-100 rounded w-full mb-2" />
            <div className="h-4 bg-gray-100 rounded w-2/3" />
          </div>
        ))}
      </div>
    </div>
  );
}
