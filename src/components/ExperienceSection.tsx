import { 
  Dumbbell, 
  Waves, 
  Target, 
  Heart, 
  Bike, 
  Star,
  Shield,
  Zap,
  Activity,
  Award
} from "lucide-react";

const experiences = [
  { name: "Redukcja bez liczenia kalorii", icon: Target },
  { name: "Nurek CMASS — Instruktor", icon: Waves },
  { name: "Kettlebells — Instruktor", icon: Dumbbell },
  { name: "Kulturystyka — Instruktor", icon: Dumbbell },
  { name: "Trening funkcjonalny — Instruktor", icon: Activity },
  { name: "Trójbój siłowy — Instruktor", icon: Dumbbell },
  { name: "Samoobrona — Instruktor", icon: Shield },
  { name: "Indoor cycling — Instruktor", icon: Bike },
  { name: "Speening star — Instruktor", icon: Star },
  { name: "Zdrowy kręgosłup – Certyfikat IFAA", icon: Heart },
  { name: "Patologie kręgosłupa – Certyfikat IFAA", icon: Heart },
  { name: "Biodro staw życia – Biernat", icon: Activity },
  { name: "Kolano – biodra i stopy – Biernat", icon: Activity },
  { name: "Redukcja bez liczenia kalorii – Tadeusz Sowiński", icon: Target },
  { name: "Tułów – baza do ruchu – Biernat", icon: Activity },
  { name: "Kończyna dolna – Movement strategy", icon: Zap },
  { name: "Trening TRX — Certyfikat", icon: Award },
  { name: "Worek bułgarski – Certyfikat IFAA", icon: Dumbbell },
  { name: "Ergonometr wioślarski – Jatomi", icon: Waves },
  { name: "Mobility Conditioning – Maxwell SC™", icon: Activity },
];

export const ExperienceSection = () => {
  return (
    <section id="doswiadczenie" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4 animate-fade-in-up">
            Doświadczenie & <span className="text-primary">Certyfikaty</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            Ciągły rozwój i zdobywanie nowych kwalifikacji to podstawa mojej pracy.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {experiences.map((item, index) => (
            <div
              key={index}
              className="group bg-card p-4 md:p-6 rounded-lg border border-border/50 transition-all duration-300 hover:border-primary/50 hover:bg-card/80 animate-fade-in-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="text-sm md:text-base font-medium text-foreground/90 leading-tight">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
