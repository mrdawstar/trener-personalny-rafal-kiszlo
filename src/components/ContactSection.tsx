import { MapPin, Phone, Mail, Youtube, Facebook, Instagram, Clock } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="kontakt" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4 animate-fade-in-up">
            <span className="text-primary">Umów się</span> na trening
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            Znajdziesz mnie na Mokotowie
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-display text-foreground mb-1">Adres</h3>
                <p className="text-muted-foreground">
                  ul. Józefa Piusa Dziekońskiego 1<br />
                  00-728 Warszawa
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-display text-foreground mb-1">Telefon</h3>
                <a href="tel:+48608472294" className="text-primary text-xl font-semibold hover:underline">
                  +48 608 472 294
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-display text-foreground mb-1">Godziny pracy</h3>
                <p className="text-muted-foreground">
                  Poniedziałek - Piątek: 6:00 - 21:00<br />
                  Sobota: 8:00 - 16:00
                </p>
              </div>
            </div>

            {/* Social Media */}
            <div className="pt-6">
              <h3 className="text-xl font-display text-foreground mb-4">Śledź mnie</h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-12 h-12 bg-card rounded-lg flex items-center justify-center border border-border hover:border-primary hover:bg-primary/10 transition-all"
                >
                  <Youtube className="w-6 h-6 text-primary" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-card rounded-lg flex items-center justify-center border border-border hover:border-primary hover:bg-primary/10 transition-all"
                >
                  <Facebook className="w-6 h-6 text-primary" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-card rounded-lg flex items-center justify-center border border-border hover:border-primary hover:bg-primary/10 transition-all"
                >
                  <Instagram className="w-6 h-6 text-primary" />
                </a>
              </div>
            </div>

            <div className="pt-4">
              <a href="tel:+48608472294" className="btn-primary inline-flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Zadzwoń teraz
              </a>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="animate-slide-in-right">
            <div className="bg-card rounded-lg overflow-hidden h-full min-h-[400px] border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2444.8756881876607!2d21.0029!3d52.1979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDExJzUyLjQiTiAyMcKwMDAnMTAuNCJF!5e0!3m2!1spl!2spl!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
