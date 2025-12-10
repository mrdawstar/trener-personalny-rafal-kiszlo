import { Check, Phone } from "lucide-react";

const packages = [
  {
    name: "Pakiet 1 treningu",
    price: "200 zł",
    features: [
      "Trening personalny 60 minut",
      "Indywidualny plan treningowy",
      "Analiza postępów",
      "Wsparcie między treningami",
      "Dostęp do aplikacji treningowej",
    ],
    popular: false,
  },
  {
    name: "Pakiet 12 treningów",
    price: "1800 zł",
    pricePerSession: "150 zł / trening",
    features: [
      "12 treningów personalnych po 60 minut",
      "Kompleksowy plan treningowy",
      "Plan żywieniowy",
      "Cotygodniowa analiza postępów",
      "Wsparcie 24/7",
      "Dostęp do aplikacji treningowej",
      "Pomiary i analiza składu ciała",
      "Oszczędzasz 600 zł",
    ],
    popular: true,
  },
];

export const PricingSection = () => {
  return (
    <section id="cennik" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4 animate-fade-in-up">
            <span className="text-primary">Cennik</span> treningów
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            Inwestuj w swoje zdrowie i sylwetkę
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative bg-card rounded-lg overflow-hidden card-hover animate-fade-in-up ${
                pkg.popular ? "border-2 border-primary" : "border border-border"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {pkg.popular && (
                <div className="absolute top-0 left-0 right-0 bg-primary text-primary-foreground text-center py-2 text-sm font-bold uppercase tracking-wider">
                  Najpopularniejszy
                </div>
              )}

              <div className={`p-8 ${pkg.popular ? "pt-14" : ""}`}>
                <h3 className="text-2xl font-display text-foreground mb-2">{pkg.name}</h3>
                
                <div className="mb-6">
                  <span className="text-5xl font-display text-primary">{pkg.price}</span>
                  {pkg.pricePerSession && (
                    <p className="text-muted-foreground text-sm mt-2">{pkg.pricePerSession}</p>
                  )}
                </div>

                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="tel:+48608472294"
                  className={`w-full flex items-center justify-center gap-2 py-4 rounded-sm font-semibold uppercase tracking-wider transition-all ${
                    pkg.popular
                      ? "btn-primary"
                      : "btn-outline"
                  }`}
                >
                  <Phone className="w-5 h-5" />
                  Zamów teraz
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
