import { Award, Users, MapPin, Clock } from "lucide-react";

const stats = [
  { icon: Award, value: "15+", label: "Years Experience" },
  { icon: Users, value: "500+", label: "Happy Clients" },
  { icon: MapPin, value: "200+", label: "Billboard Locations" },
  { icon: Clock, value: "24/7", label: "Customer Support" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
            About <span className="text-primary">OM ADS</span>
          </h2>
          <p className="text-muted-foreground font-body leading-relaxed">
            The journey of OM ADS towards becoming a top advertising solution
            provider is truly phenomenal. Since our establishment, we have
            covered a lot of ground to endear ourselves to our valued customers.
            Today, customers cutting across diverse industries fully rely on us
            whenever they need to make their brands visible. Our forte is outdoor
            advertising services & solutions. With a mission to provide quality
            services at an affordable cost, we hold expertise in idea
            conceptualization, designing, and signage development.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-lg bg-brand-dark text-brand-light"
            >
              <stat.icon className="w-10 h-10 text-primary mx-auto mb-4" />
              <div className="text-3xl font-heading font-bold text-brand-light mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-brand-light/70 font-body">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
