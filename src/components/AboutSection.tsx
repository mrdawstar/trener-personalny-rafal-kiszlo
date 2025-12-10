import trainerImage from "@/assets/rafal-kiszlo.jpg";

export const AboutSection = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative animate-slide-in-left">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-transparent rounded-lg blur-xl" />
            <img
              src={trainerImage}
              alt="Rafał Kiszło - Trener Personalny"
              className="relative w-full max-w-md mx-auto rounded-lg shadow-2xl"
            />
          </div>

          {/* Content */}
          <div className="animate-slide-in-right">
            <h2 className="heading-lg mb-6">
              O <span className="text-primary">trenerze</span>
            </h2>
            
            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p>
                Nazywam się Rafał Kiszło i jestem trenerem personalnym z ponad 15-letnim doświadczeniem. Moją pasją jest pomaganie ludziom w osiąganiu ich celów fitness, niezależnie od tego, czy chodzi o redukcję wagi, budowanie masy mięśniowej, czy poprawę ogólnej kondycji.
              </p>
              <p>
                Jestem absolwentem Wyższej Szkoły Wychowania Fizycznego i Turystyki w Białymstoku na kierunku Wychowanie Fizyczne. Przez lata zdobyłem liczne certyfikaty i uprawnienia instruktorskie, które pozwalają mi oferować profesjonalne i bezpieczne treningi.
              </p>
              <p>
                Moje podejście do treningu jest indywidualne – nie ma dwóch takich samych osób, więc nie powinno być dwóch takich samych planów treningowych. Analizuję potrzeby, możliwości i cele każdego podopiecznego, aby stworzyć program, który przyniesie najlepsze rezultaty.
              </p>
              <p>
                Wierzę, że motywacja jest kluczem do sukcesu. Dlatego nie tylko prowadzę treningi, ale również wspieram moich podopiecznych mentalnie, pomagając im przełamywać bariery i wychodzić ze strefy komfortu.
              </p>
              <p className="text-primary font-semibold text-lg">
                Razem możemy osiągnąć wszystko!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
