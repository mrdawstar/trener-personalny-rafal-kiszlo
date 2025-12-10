import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.svg";

const navLinks = [
  { name: "Treningi", href: "#treningi" },
  { name: "Cennik", href: "#cennik" },
  { name: "Blog", href: "#blog" },
  { name: "Metamorfozy", href: "#metamorfozy" },
  { name: "Doświadczenie", href: "#doswiadczenie" },
  { name: "Opinie", href: "#opinie" },
  { name: "Kontakt", href: "#kontakt" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
<img
  src={logo}
  alt="Trener Rafał Kiszło"
  className="h-10 md:h-12 drop-shadow-[0_0_20px_rgba(255,212,0,1)]"
/>



          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="nav-link text-sm font-medium uppercase tracking-wider"
              >
                {link.name}
              </a>
            ))}
            <a href="#" className="nav-link text-sm font-medium uppercase tracking-wider flex items-center gap-1">
              ENGLISH <span>🇬🇧</span>
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <a
              href="tel:+48608472294"
              className="btn-primary flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Zadzwoń
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-foreground p-2"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-md transition-all duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="container-custom py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="nav-link text-lg font-medium uppercase tracking-wider py-2"
            >
              {link.name}
            </a>
          ))}
          <a href="#" className="nav-link text-lg font-medium uppercase tracking-wider py-2 flex items-center gap-2">
            ENGLISH <span>🇬🇧</span>
          </a>
          <a
            href="tel:+48608472294"
            className="btn-primary flex items-center justify-center gap-2 mt-4"
          >
            <Phone className="w-4 h-4" />
            Zadzwoń
          </a>
        </div>
      </div>
    </nav>
  );
};
