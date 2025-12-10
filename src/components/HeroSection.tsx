import { ArrowRight } from "lucide-react";
import trainerImage from "@/assets/rafal-kiszlo.jpg";

export const HeroSection = () => {
  return (
    <section id="treningi" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-hero-pattern" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-2xl" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <h1 className="heading-xl mb-6 animate-fade-in-up">
              Trener personalny Mokotów –{" "}
              <span className="text-primary">Rafał Kiszło</span>
            </h1>

            <div className="space-y-4 text-foreground/80 text-lg leading-relaxed animate-fade-in-up animation-delay-200">
              <p>
                Szukasz wsparcia w drodze do osiągnięcia wymarzonej sylwetki, ale nie wiesz jak zacząć?
              </p>
              <p>
                Posiadam ponad 15 letnie doświadczenie. Jestem absolwentem kierunku Wychowania Fizycznego w Wyższej Szkole Wychowania Fizycznego i Turystyki w Białymstoku. Jako doświadczony trener personalny działam w dzielnicy Mokotów i pomogłem setkom osób w osiągnięciu ich wymarzonej sylwetki. Indywidualne podejście do każdego podopiecznego oraz unikalne metody motywacji sprawią, że razem pokonamy wszelkie przeszkody i osiągniemy założone efekty.
              </p>
              <p>
                Treningi prowadzę w Warszawie na Mokotowie, mój dokładny adres to{" "}
                <span className="text-primary font-semibold">ul. Józefa Piusa Dziekońskiego 1, 00-728 Warszawa</span>.
              </p>
              <p className="text-foreground font-medium">
                Zadzwoń lub napisz – umówimy się na pierwszy trening
              </p>
              <p className="text-primary text-2xl font-display tracking-wider">
                Stań się lepszą wersją siebie!
              </p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-400">
              <a href="#kontakt" className="btn-primary flex items-center justify-center gap-2">
                Umów się na trening
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="tel:+48608472294" className="btn-outline flex items-center justify-center gap-2">
                +48 608 472 294
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-slide-in-right">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/30 to-transparent rounded-lg blur-xl" />
              <img
                src={trainerImage}
                alt="Rafał Kiszło - Trener Personalny"
                className="relative w-full max-w-md lg:max-w-lg rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <span className="text-primary-foreground text-3xl font-display">15+</span>
                  <p className="text-primary-foreground text-xs font-medium">LAT</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
