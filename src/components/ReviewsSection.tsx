import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const reviews = [
  { author: "Anna K.", text: "Rafał to profesjonalista w każdym calu. Dzięki niemu schudłam 15 kg i czuję się świetnie!", rating: 5 },
  { author: "Tomasz M.", text: "Najlepszy trener, z jakim pracowałem. Indywidualne podejście i świetna motywacja.", rating: 5 },
  { author: "Magdalena W.", text: "Polecam każdemu, kto chce zmienić swoje życie. Rafał wie, co robi!", rating: 5 },
  { author: "Piotr S.", text: "Profesjonalne podejście, świetne efekty. Dziękuję za wszystko!", rating: 5 },
  { author: "Karolina D.", text: "Po roku treningów z Rafałem jestem w najlepszej formie w życiu.", rating: 5 },
  { author: "Michał B.", text: "Treningi są wymagające, ale efekty niesamowite. Gorąco polecam!", rating: 5 },
  { author: "Ewa L.", text: "Rafał nie tylko trenuje, ale też edukuje. Nauczyłam się zdrowych nawyków na całe życie.", rating: 5 },
  { author: "Robert J.", text: "Świetna atmosfera i profesjonalizm. Polecam każdemu!", rating: 5 },
  { author: "Marta P.", text: "Trener z powołania. Widać, że kocha to, co robi.", rating: 5 },
  { author: "Adam N.", text: "Najlepsza inwestycja w swoje zdrowie. Efekty przeszły moje oczekiwania.", rating: 5 },
  { author: "Joanna R.", text: "Profesjonalne podejście, elastyczne godziny, świetne rezultaty!", rating: 5 },
  { author: "Krzysztof T.", text: "Rafał pomógł mi wrócić do formy po kontuzji. Polecam!", rating: 5 },
];

export const ReviewsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  return (
    <section id="opinie" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4 animate-fade-in-up">
            <span className="text-primary">Opinie</span> klientów
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            Ponad 108 opinii na Google z oceną 5.0 gwiazdek
          </p>
          <div className="flex items-center justify-center gap-1 mt-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-primary text-primary" />
            ))}
          </div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Quote Icon */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-primary rounded-full flex items-center justify-center">
            <Quote className="w-8 h-8 text-primary-foreground" />
          </div>

          {/* Review Card */}
          <div className="bg-card rounded-lg p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-primary" />
            
            <div className="mb-6 flex items-center justify-center gap-1">
              {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>

            <p className="text-xl md:text-2xl text-foreground/90 leading-relaxed mb-6 italic">
              "{reviews[currentIndex].text}"
            </p>

            <p className="text-primary font-semibold text-lg">
              — {reviews[currentIndex].author}
            </p>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              className="w-12 h-12 bg-card rounded-full flex items-center justify-center border border-border hover:border-primary transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="flex items-center gap-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setCurrentIndex(index);
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? "bg-primary w-8" : "bg-muted hover:bg-muted-foreground"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-12 h-12 bg-card rounded-full flex items-center justify-center border border-border hover:border-primary transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
