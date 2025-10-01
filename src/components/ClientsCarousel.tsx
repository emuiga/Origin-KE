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
    <div className="py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-0 lg:px-0">
        
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
      
      </div>
    </div>
  );
};

export default ClientsCarousel;