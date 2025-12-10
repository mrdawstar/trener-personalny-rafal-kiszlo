import { ArrowRight, TrendingDown } from "lucide-react";

const metamorphoses = [
  {
    name: "Kasia",
    weight: "-50 kg",
    description:
      "Kasia przyszła do mnie z determinacją, ale bez wiedzy jak efektywnie schudnąć. Wspólnie opracowaliśmy plan treningowy i żywieniowy, który pozwolił jej zrzucić 50 kg i całkowicie odmienić swoje życie. Dziś Kasia jest pełna energii i inspiruje innych do zmian.",
    beforeImage: "/placeholder.svg",
    afterImage: "/placeholder.svg",
  },
  {
    name: "Asia i Dominik",
    weight: "-20 kg / -25 kg",
    description:
      "Para, która postanowiła zmienić swoje życie razem. Asia schudła 20 kg, a Dominik 25 kg. Wspólne treningi i wzajemne wsparcie były kluczem do ich sukcesu. Dziś prowadzą aktywny tryb życia i cieszą się zdrowiem.",
    beforeImage: "/placeholder.svg",
    afterImage: "/placeholder.svg",
  },
  {
    name: "Filip",
    weight: "-30 kg",
    description:
      "Filip zmagał się z nadwagą przez wiele lat. Dzięki systematycznym treningom i odpowiedniej diecie udało mu się zrzucić 30 kg. Zmiana była nie tylko fizyczna, ale przede wszystkim mentalna – Filip odzyskał pewność siebie.",
    beforeImage: "/placeholder.svg",
    afterImage: "/placeholder.svg",
  },
];

export const MetamorphosesSection = () => {
  return (
    <section id="metamorfozy" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4 animate-fade-in-up">
            <span className="text-primary">Metamorfozy</span> moich podopiecznych
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            Prawdziwe historie, prawdziwe rezultaty. Zobacz, jak zmieniło się życie osób, które mi zaufały.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {metamorphoses.map((item, index) => (
            <div
              key={item.name}
              className="group bg-card rounded-lg overflow-hidden card-hover animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10" />
                <div className="grid grid-cols-2 h-full">
                  <img
                    src={item.beforeImage}
                    alt={`${item.name} przed`}
                    className="w-full h-full object-cover grayscale"
                  />
                  <img
                    src={item.afterImage}
                    alt={`${item.name} po`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-bold z-20 flex items-center gap-1">
                  <TrendingDown className="w-4 h-4" />
                  {item.weight}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-display text-primary mb-3">{item.name}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#" className="btn-outline inline-flex items-center gap-2">
            Pokaż wszystkie metamorfozy
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};
