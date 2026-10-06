interface ArtworkHeroProps {
  src: string;
  // The artwork carries the page title visually, so this is read by screen readers only
  title: string;
}

// Full-width banner artwork on the brand-dark background, which the artwork's own background matches.
// The logo lockup in the artwork is painted over in the SVG files (the site header already shows it),
// and the frame trims the top of the 16:9 artwork to shorten the banner.
export default function ArtworkHero({ src, title }: ArtworkHeroProps) {
  return (
    <section className="bg-brand-dark">
      <h1 className="sr-only">{title}</h1>
      <div className="relative overflow-hidden max-w-7xl mx-auto aspect-[1440/540]">
        <img src={src} alt="" width={1920} height={1080} className="absolute bottom-0 left-0 block w-full h-auto" />
      </div>
    </section>
  );
}
