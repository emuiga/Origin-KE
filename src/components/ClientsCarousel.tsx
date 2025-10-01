'use client';

const clients = [
  {
    name: "Startups",
    description: "Innovative ventures"
  },
  {
    name: "SMEs", 
    description: "Small & medium enterprises"
  },
  {
    name: "Enterprises",
    description: "Large corporations"
  },
  {
    name: "E-commerce",
    description: "Online retailers"
  },
  {
    name: "SaaS",
    description: "Software companies"
  },
  {
    name: "Fintech",
    description: "Financial technology"
  }
];

const ClientsCarousel = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We work with businesses of all sizes across various industries
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clients.map((client, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200"
            >
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {client.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  {client.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-8 text-gray-400">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-sm font-medium">500+ Projects</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm font-medium">98% Success Rate</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span className="text-sm font-medium">24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientsCarousel;