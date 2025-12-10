import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.svg";
import "@/components/NavBar.css";

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
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Aktualizacja aktywnego linku na podstawie pozycji scrolla
      const sections = navLinks.map(link => link.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveLink(`#${currentSection}`);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 nav-container ${
        scrolled ? "scrolled" : ""
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#">
            <img
              src={logo}
              alt="Trener Rafał Kiszło"
              className="logooo cursor-pointer"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`nav-link text-sm font-medium uppercase tracking-wider ${
                  activeLink === link.href ? "active-nav-link" : ""
                }`}
                onClick={() => setActiveLink(link.href)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#" 
              className={`nav-link text-sm font-medium uppercase tracking-wider flex items-center gap-1 ${
                activeLink === "#english" ? "active-nav-link" : ""
              }`}
              onClick={() => setActiveLink("#english")}
            >
              ENGLISH <span>🇬🇧</span>
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <a
              href="tel:+48608472294"
              className="btn-primary flex items-center gap-2 font-semibold"
            >
              <Phone className="w-4 h-4" />
              Zadzwoń
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden menu-button p-2 rounded-lg"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden mobile-menu absolute top-full left-0 right-0 transition-all duration-300 ${
          isOpen ? "opacity-100 visible h-auto" : "opacity-0 invisible h-0"
        }`}
      >
        <div className="container-custom py-6 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => {
                setIsOpen(false);
                setActiveLink(link.href);
              }}
              className={`nav-link text-base font-medium uppercase tracking-wider py-3 px-4 rounded-lg ${
                activeLink === link.href ? "active-nav-link" : ""
              }`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#" 
            onClick={() => {
              setIsOpen(false);
              setActiveLink("#english");
            }}
            className={`nav-link text-base font-medium uppercase tracking-wider py-3 px-4 rounded-lg flex items-center gap-2 ${
              activeLink === "#english" ? "active-nav-link" : ""
            }`}
          >
            ENGLISH <span>🇬🇧</span>
          </a>
          <a
            href="tel:+48608472294"
            className="btn-primary flex items-center justify-center gap-2 mt-6 py-3 text-lg font-semibold"
            onClick={() => setIsOpen(false)}
          >
            <Phone className="w-5 h-5" />
            Zadzwoń teraz
          </a>
        </div>
      </div>
    </nav>
  );
};