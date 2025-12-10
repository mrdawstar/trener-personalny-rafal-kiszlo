const galleryImages = Array(12).fill("/placeholder.svg");

export const GallerySection = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4 animate-fade-in-up">
            <span className="text-primary">Galeria</span> treningów
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            Zobacz jak wyglądają treningi w moim studio
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-square overflow-hidden rounded-lg animate-fade-in-up cursor-pointer"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <img
                src={image}
                alt={`Trening ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-primary font-display text-xl">Zobacz</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
