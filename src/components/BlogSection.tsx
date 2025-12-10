import { Calendar, Tag, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    title: "Jak zacząć trening siłowy - poradnik dla początkujących",
    date: "2024-01-15",
    category: "Trening",
    excerpt: "Rozpoczęcie przygody z treningiem siłowym może wydawać się przytłaczające. W tym artykule przedstawiam podstawowe zasady, które pomogą Ci bezpiecznie i efektywnie rozpocząć treningi...",
  },
  {
    title: "Dieta na redukcję - jak jeść, żeby schudnąć",
    date: "2024-01-10",
    category: "Dieta",
    excerpt: "Redukcja tkanki tłuszczowej to nie tylko kwestia ćwiczeń. Dieta odgrywa kluczową rolę w osiągnięciu wymarzonej sylwetki. Poznaj podstawowe zasady żywienia na redukcji...",
  },
  {
    title: "Motywacja do ćwiczeń - jak ją utrzymać",
    date: "2024-01-05",
    category: "Motywacja",
    excerpt: "Brak motywacji to jeden z głównych powodów, dla których ludzie rezygnują z treningów. W tym artykule dzielę się sprawdzonymi sposobami na utrzymanie zapału do ćwiczeń...",
  },
  {
    title: "Regeneracja po treningu - klucz do sukcesu",
    date: "2023-12-28",
    category: "Regeneracja",
    excerpt: "Regeneracja to często pomijany element treningu. Dowiedz się, jak odpowiednio regenerować organizm, aby maksymalizować efekty swoich ćwiczeń...",
  },
  {
    title: "Trening funkcjonalny - co to jest i dla kogo",
    date: "2023-12-20",
    category: "Trening",
    excerpt: "Trening funkcjonalny zyskuje coraz większą popularność. Sprawdź, czym się charakteryzuje i czy jest odpowiedni dla Ciebie...",
  },
  {
    title: "Suplementacja dla sportowców - czy warto?",
    date: "2023-12-15",
    category: "Suplementacja",
    excerpt: "Rynek suplementów diety jest ogromny. Które z nich naprawdę działają, a które to tylko marketing? Poznaj moje rekomendacje...",
  },
];

const categories = ["Wszystkie", "Trening", "Dieta", "Motywacja", "Regeneracja", "Suplementacja"];

const archives = [
  "Styczeń 2024",
  "Grudzień 2023",
  "Listopad 2023",
  "Październik 2023",
  "Wrzesień 2023",
  "Sierpień 2023",
];

export const BlogSection = () => {
  return (
    <section id="blog" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4 animate-fade-in-up">
            <span className="text-primary">Blog</span> o treningu
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            Wiedza, porady i motywacja - wszystko czego potrzebujesz
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="bg-card rounded-lg overflow-hidden card-hover animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString("pl-PL", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Tag className="w-4 h-4" />
                      {post.category}
                    </span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-display text-foreground mb-4 hover:text-primary transition-colors cursor-pointer">
                    {post.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {post.excerpt}
                  </p>

                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all"
                  >
                    Czytaj więcej
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Latest Posts */}
            <div className="bg-card rounded-lg p-6">
              <h3 className="text-xl font-display text-primary mb-4">Ostatnie posty</h3>
              <ul className="space-y-4">
                {blogPosts.slice(0, 4).map((post, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-foreground/80 hover:text-primary transition-colors text-sm leading-tight block"
                    >
                      {post.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Categories */}
            <div className="bg-card rounded-lg p-6">
              <h3 className="text-xl font-display text-primary mb-4">Kategorie</h3>
              <ul className="space-y-2">
                {categories.map((category, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-foreground/80 hover:text-primary transition-colors text-sm flex items-center gap-2"
                    >
                      <span className="w-2 h-2 bg-primary/50 rounded-full" />
                      {category}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Archives */}
            <div className="bg-card rounded-lg p-6">
              <h3 className="text-xl font-display text-primary mb-4">Archiwum</h3>
              <ul className="space-y-2">
                {archives.map((archive, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-foreground/80 hover:text-primary transition-colors text-sm"
                    >
                      {archive}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
