import { useState, useEffect } from "react";
import heroBillboard from "@/assets/hero-billboard.jpg";
import heroBillboard2 from "@/assets/hero-billboard-2.jpg";

const slides = [
  {
    image: heroBillboard,
    title: "Get Your Brand Noticed!",
    subtitle: "With our outstanding billboard locations across the city",
  },
  {
    image: heroBillboard2,
    title: "Maximum Visibility",
    subtitle: "Strategic outdoor advertising solutions that deliver results",
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[85vh] min-h-[500px] mt-20 overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: index === current ? 1 : 0 }}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-dark/70" />
        </div>
      ))}

      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-background mb-4 animate-fade-in">
              {slides[current].title}
            </h1>
            <p className="text-lg md:text-xl text-background/80 mb-8 font-body">
              {slides[current].subtitle}
            </p>
            <a
              href="#contact"
              className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-md font-heading font-bold uppercase tracking-wide text-sm hover:opacity-90 transition-opacity"
            >
              Check Availability!
            </a>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === current ? "bg-primary w-8" : "bg-background/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
