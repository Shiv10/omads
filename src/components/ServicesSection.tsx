import serviceHoarding from "@/assets/service-hoarding.jpg";
import serviceKiosk from "@/assets/service-kiosk.jpg";
import serviceFrontlit from "@/assets/service-frontlit.jpg";

const services = [
  {
    image: serviceHoarding,
    title: "Hoarding Boards",
    tag: "On Rent",
    description:
      "Hoardings are large boards at roadsides for displaying advertisements. Available in various sizes, choose the perfect location for maximum brand visibility. Best for marketing and highly affordable.",
  },
  {
    image: serviceKiosk,
    title: "Kiosk Boards",
    tag: "On Rent",
    description:
      "Kiosks placed at high foot traffic locations like malls, stations, and markets. Manned or unmanned options available. Trending in modern marketing strategy with multiple variants.",
  },
  {
    image: serviceFrontlit,
    title: "Front Lit Boards",
    tag: "Premium",
    description:
      "Front lit boards with lights pointing towards the front. Weather resistant for outdoor and indoor use. Premium quality signage made especially for your brand identity.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-xl mx-auto">
            We offer a wide range of outdoor advertising solutions to help your
            brand stand out.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
            >
              <div className="relative overflow-hidden h-56">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-heading font-bold uppercase">
                  {service.tag}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-heading font-bold text-card-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
