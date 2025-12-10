import { Trophy } from "lucide-react";

export const AwardSection = () => {
  return (
    <section className="py-16 bg-primary">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
          <div className="w-20 h-20 bg-primary-foreground/10 rounded-full flex items-center justify-center animate-float">
            <Trophy className="w-10 h-10 text-primary-foreground" />
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-display text-primary-foreground">
              Rafał Kiszło
            </h3>
            <p className="text-primary-foreground/90 text-lg md:text-xl font-medium">
              Zwycięzca konkursu <span className="font-bold">Fitness Motywatory 2017</span> w kategorii Trener Personalny
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
