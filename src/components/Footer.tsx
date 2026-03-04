import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-brand-dark py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <img src={logo} alt="OM ADS" className="h-12 mb-4 brightness-0 invert" />
            <p className="text-background/60 font-body text-sm leading-relaxed">
              Your trusted partner for outdoor advertising solutions. Making
              brands visible since 2010.
            </p>
          </div>

          <div>
            <h3 className="font-heading font-bold text-background mb-4 text-lg">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {["Home", "About", "Services", "Our Work", "Contact Us"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace(/\s+/g, "")}`}
                      className="text-background/60 hover:text-primary font-body text-sm transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-bold text-background mb-4 text-lg">
              Get In Touch
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-primary mt-1 shrink-0" />
                <div className="flex flex-col">
                  <span className="text-background font-body text-sm font-medium mb-1">
                    ANIL V. SORATHIYA
                  </span>
                  <span className="text-background/60 font-body text-sm">
                    +91 99097 09700
                  </span>
                  <span className="text-background/60 font-body text-sm">
                    +91 99097 07270 (Office)
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <span className="text-background/60 font-body text-sm">
                  omadsprint@gmail.com
                </span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-1 shrink-0" />
                <span className="text-background/60 font-body text-sm leading-relaxed">
                  Shop No. 119, Ground Floor,<br />
                  Parishram Complex, Station Road,<br />
                  Bhuj-Gujarat. 370001.
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 text-center">
          <p className="text-background/40 font-body text-sm">
            © 2025 OM ADS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
