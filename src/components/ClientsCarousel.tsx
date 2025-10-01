'use client';

const clients = [
  "Dreamers",
  "Startups", 
  "SMEs",
  "Enterprises",
  "NGOs",
  "Brands",
  "Data Companies",
  "Food Businesses",
  "Marketplaces",
  "Social Platforms",
  "Apps",
  "Systems",
  "UI/UX",
  "Websites"
];

const ClientsCollage = () => {
  return (
    <div className="py-8 bg-white">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {clients.map((client, index) => (
          <div 
            key={index}
            className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            <h3 className="font-bold text-blue-900 text-sm md:text-base uppercase tracking-wide">
              {client}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientsCollage;