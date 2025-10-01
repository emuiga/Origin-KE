'use client';

const clients = [
  {
    label: "Dreamers",
    image: "/dream.webp"
  },
  {
    label: "Startups",
    image: "/individual2.jpg"
  },
  {
    label: "SMEs",
    image: "/change.webp"
  },
  {
    label: "Enterprises",
    image: "/lead.webp"
  },
  {
    label: "NGOs",
    image: "/ent.webp"
  },
  {
    label: "Brands",
    image: "/brand.webp"
  },
  {
    label: "Data Companies",
    image: "/data.webp"
  },
  {
    label: "Food Businesses",
    image: "/food.webp"
  },
  {
    label: "Marketplaces",
    image: "/market.webp"
  },
  {
    label: "Social Platforms",
    image: "/socials.webp"
  },
  {
    label: "Apps",
    image: "/app.webp"
  },
  {
    label: "Systems",
    image: "/sys.webp"
  },
  {
    label: "UI/UX",
    image: "/uiux.webp"
  },
  {
    label: "Websites",
    image: "/web.webp"
  }
];

const ClientsCollage = () => {
  return (
    <div className="py-1 bg-white">
      <div>

        {/* Collage Grid */}
        <div className="grid grid-cols-12 gap-3 auto-rows-[100px] md:auto-rows-[120px]">
          {/* Dreamers - small left */}
          <div className="col-span-4 md:col-span-3 row-span-1 relative overflow-hidden rounded-lg shadow-md">
            <img src={clients[0].image} alt={clients[0].label} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <h3 className="text-white font-bold text-sm md:text-base uppercase text-center">{clients[0].label}</h3>
            </div>
          </div>

          {/* Startups - medium left */}
          <div className="col-span-8 md:col-span-4 row-span-1 relative overflow-hidden rounded-lg shadow-md">
            <img src={clients[1].image} alt={clients[1].label} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <h3 className="text-white font-bold text-sm md:text-base uppercase text-center">{clients[1].label}</h3>
            </div>
          </div>

          {/* SMEs - tall right */}
          <div className="col-span-12 md:col-span-5 row-span-2 relative overflow-hidden rounded-lg shadow-md">
            <img src={clients[2].image} alt={clients[2].label} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <h3 className="text-white font-bold text-sm md:text-base uppercase text-center">{clients[2].label}</h3>
            </div>
          </div>

          {/* Enterprises - wide bottom left */}
          <div className="col-span-12 md:col-span-7 row-span-1 relative overflow-hidden rounded-lg shadow-md">
            <img src={clients[3].image} alt={clients[3].label} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <h3 className="text-white font-bold text-sm md:text-base uppercase text-center">{clients[3].label}</h3>
            </div>
          </div>

          {/* NGOs - small bottom right */}
          <div className="col-span-6 md:col-span-5 row-span-1 relative overflow-hidden rounded-lg shadow-md">
            <img src={clients[4].image} alt={clients[4].label} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <h3 className="text-white font-bold text-sm md:text-base uppercase text-center">{clients[4].label}</h3>
            </div>
          </div>

          {/* Brands - small */}
          <div className="col-span-6 md:col-span-2 row-span-1 relative overflow-hidden rounded-lg shadow-md">
            <img src={clients[5].image} alt={clients[5].label} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <h3 className="text-white font-bold text-sm md:text-base uppercase text-center">{clients[5].label}</h3>
            </div>
          </div>

          {/* Data Companies - small */}
          <div className="col-span-6 md:col-span-3 row-span-1 relative overflow-hidden rounded-lg shadow-md">
            <img src={clients[6].image} alt={clients[6].label} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <h3 className="text-white font-bold text-sm md:text-base uppercase text-center">{clients[6].label}</h3>
            </div>
          </div>

          {/* Food Businesses - small */}
          <div className="col-span-6 md:col-span-3 row-span-1 relative overflow-hidden rounded-lg shadow-md">
            <img src={clients[7].image} alt={clients[7].label} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <h3 className="text-white font-bold text-sm md:text-base uppercase text-center">{clients[7].label}</h3>
            </div>
          </div>

          {/* Marketplaces - small */}
          <div className="col-span-6 md:col-span-3 row-span-1 relative overflow-hidden rounded-lg shadow-md">
            <img src={clients[8].image} alt={clients[8].label} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <h3 className="text-white font-bold text-sm md:text-base uppercase text-center">{clients[8].label}</h3>
            </div>
          </div>

          {/* Social Platforms - small */}
          <div className="col-span-6 md:col-span-3 row-span-1 relative overflow-hidden rounded-lg shadow-md">
            <img src={clients[9].image} alt={clients[9].label} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <h3 className="text-white font-bold text-sm md:text-base uppercase text-center">{clients[9].label}</h3>
            </div>
          </div>

          {/* Apps - small */}
          <div className="col-span-6 md:col-span-3 row-span-1 relative overflow-hidden rounded-lg shadow-md">
            <img src={clients[10].image} alt={clients[10].label} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <h3 className="text-white font-bold text-sm md:text-base uppercase text-center">{clients[10].label}</h3>
            </div>
          </div>

          {/* Systems - small */}
          <div className="col-span-6 md:col-span-3 row-span-1 relative overflow-hidden rounded-lg shadow-md">
            <img src={clients[11].image} alt={clients[11].label} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <h3 className="text-white font-bold text-sm md:text-base uppercase text-center">{clients[11].label}</h3>
            </div>
          </div>

          {/* UI/UX - small */}
          <div className="col-span-6 md:col-span-3 row-span-1 relative overflow-hidden rounded-lg shadow-md">
            <img src={clients[12].image} alt={clients[12].label} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <h3 className="text-white font-bold text-sm md:text-base uppercase text-center">{clients[12].label}</h3>
            </div>
          </div>

          {/* Websites - small */}
          <div className="col-span-6 md:col-span-3 row-span-1 relative overflow-hidden rounded-lg shadow-md">
            <img src={clients[13].image} alt={clients[13].label} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <h3 className="text-white font-bold text-sm md:text-base uppercase text-center">{clients[13].label}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientsCollage;