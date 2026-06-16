import Link from 'next/link';

const images = [
  'https://images.unsplash.com/photo-1759760300494-7378d88180f9?w=400&q=75',
  'https://images.unsplash.com/photo-1652107937402-20106955a1c2?w=400&q=75',
  'https://images.unsplash.com/photo-1583147625872-30f552771594?w=400&q=75',
  'https://images.unsplash.com/photo-1480099225005-2513c8947aec?w=400&q=75',
  'https://images.unsplash.com/photo-1573056020034-fc367ec5ff3a?w=400&q=75',
  'https://images.unsplash.com/photo-1574763386858-234d2f588e2c?w=400&q=75',
  'https://images.unsplash.com/photo-1511208973145-b6f3f4d0c1d2?w=400&q=75',
];

export function GallerySection() {
  return (
    <section className="py-16 md:py-32 bg-team-maroon">
      <div className="section-container">
        <h2 className="section-heading mb-12 md:mb-16 text-center text-white">GALLERY</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-500"
            >
              <div className="w-full aspect-square bg-gray-100 overflow-hidden">
                <img
                  src={image}
                  alt={`試合風景 ${index + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover md:group-hover:scale-110 transition-transform duration-700 ease-out"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 md:mt-16">
          <Link href="/gallery" className="btn-outline-white">
            VIEW MORE
          </Link>
        </div>
      </div>
    </section>
  );
}
