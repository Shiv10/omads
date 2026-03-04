import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Our Work", href: "#portfolio" },
  { label: "Pricing", href: "#pricing" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-brand-medium/20 shadow-sm">
      <div className="container mx-auto px-4 flex items-center justify-between h-20">
        <a href="#" className="flex items-center gap-2">
          <img src={logo} alt="OM ADS" className="h-12" />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-heading font-semibold uppercase tracking-wide text-brand-dark hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-primary text-primary-foreground px-6 py-2.5 rounded-md text-sm font-heading font-bold uppercase tracking-wide hover:opacity-90 transition-opacity flex items-center gap-2"
          >
            <Phone className="w-4 h-4" />
            Book Now
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-brand-dark"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-background border-t border-brand-medium/20 px-4 pb-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block py-3 text-sm font-heading font-semibold uppercase tracking-wide text-brand-dark hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="mt-2 block text-center bg-primary text-primary-foreground px-6 py-2.5 rounded-md text-sm font-heading font-bold uppercase"
          >
            Book Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
