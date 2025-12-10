import { MapPin, Phone, Youtube, Facebook, Instagram } from "lucide-react";
import logo from "@/assets/logo.svg";

const footerLinks = [
  { name: "Treningi", href: "#treningi" },
  { name: "Cennik", href: "#cennik" },
  { name: "Blog", href: "#blog" },
  { name: "Metamorfozy", href: "#metamorfozy" },
  { name: "Doświadczenie", href: "#doswiadczenie" },
  { name: "Opinie", href: "#opinie" },
  { name: "Kontakt", href: "#kontakt" },
];

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Info */}
          <div className="lg:col-span-2">
            <img src={logo} alt="Trener Rafał Kiszło" className="h-12 mb-6" />
            <p className="text-muted-foreground mb-6 max-w-md">
              Trener personalny z ponad 15-letnim doświadczeniem. Pomagam osiągnąć wymarzoną sylwetkę poprzez indywidualne treningi i kompleksowe wsparcie.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Youtube className="w-5 h-5 text-primary" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Facebook className="w-5 h-5 text-primary" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Instagram className="w-5 h-5 text-primary" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-display text-foreground mb-6">Menu</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-display text-foreground mb-6">Kontakt</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  ul. Józefa Piusa Dziekońskiego 1<br />
                  00-728 Warszawa
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <a href="tel:+48608472294" className="text-muted-foreground hover:text-primary transition-colors">
                  +48 608 472 294
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-border">
        <div className="container-custom py-6">
          <p className="text-center text-muted-foreground text-sm">
            © 2025 Rafał Kiszło - Trener Personalny Mokotów. Wszelkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
};
