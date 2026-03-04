
import portfolioGoldsmith from "@/assets/portfolio-goldsmith.jpg";
import portfolioGoldenkey from "@/assets/portfolio-goldenkey.jpg";
import portfolioSchool from "@/assets/portfolio-school.jpg";
import portfolioKLC from "@/assets/v1_Bhanushali Nagar.jpg.jpeg";
import portfolioToGT from "@/assets/22 by 8 L Guj final Q.jpg.jpeg";
import serviceKiosk from "@/assets/service-kiosk.jpg";

const items = [
  { image: portfolioGoldsmith, title: "Gold Smith Jewellers", location: "Gandhidham" },
  { image: portfolioGoldenkey, title: "Golden Key – Sagar City", location: "Mundra Road, Bhuj" },
  { image: portfolioSchool, title: "Kakubhai Parikh School", location: "Gandhidham" },
  { image: portfolioKLC, title: "Kutch Life Care", location: "Kutch" },
  { image: portfolioToGT, title: "Guru Tatva", location: "Youtube" },
  { image: serviceKiosk, title: "Mall Kiosk", location: "Shopping Complex" },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Our <span className="text-primary">Work</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-xl mx-auto">
            Browse our hoarding locations and past campaigns.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {items.map((item) => (
            <div
              key={item.title}
              className="relative group overflow-hidden rounded-lg aspect-[4/3]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-dark/70 transition-colors duration-300 flex items-center justify-center">
                <div className="text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-background font-heading font-bold text-lg">
                    {item.title}
                  </h3>
                  <p className="text-primary text-sm font-body">
                    {item.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
