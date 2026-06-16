import { Instagram, Heart, MessageCircle } from 'lucide-react';

const posts = [
  { id: 1, image: 'https://images.unsplash.com/photo-1759760300494-7378d88180f9?w=600&q=80', likes: 245, comments: 12 },
  { id: 2, image: 'https://images.unsplash.com/photo-1652107937402-20106955a1c2?w=600&q=80', likes: 198, comments: 8 },
  { id: 3, image: 'https://images.unsplash.com/photo-1583147625872-30f552771594?w=600&q=80', likes: 312, comments: 15 },
  { id: 4, image: 'https://images.unsplash.com/photo-1480099225005-2513c8947aec?w=600&q=80', likes: 276, comments: 10 },
  { id: 5, image: 'https://images.unsplash.com/photo-1573056020034-fc367ec5ff3a?w=600&q=80', likes: 189, comments: 7 },
  { id: 6, image: 'https://images.unsplash.com/photo-1574763386858-234d2f588e2c?w=600&q=80', likes: 221, comments: 9 },
];

const INSTAGRAM_URL = 'https://www.instagram.com/kgrc.ac.ob.og/';

export function InstagramSection() {
  return (
    <section className="py-16 md:py-32 bg-team-maroon">
      <div className="section-container">
        <div className="flex flex-col items-center mb-12 md:mb-16 gap-8 md:gap-10">
          <h2 className="section-heading text-white">INSTAGRAM</h2>
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer"
            className="active:scale-95 md:hover:scale-110 transition-transform duration-500">
            <Instagram size={56} className="text-white" strokeWidth={1.2} />
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {posts.map((post) => (
            <a key={post.id} href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer"
              className="group rounded-lg overflow-hidden shadow-lg md:hover:shadow-2xl transition-all duration-500">
              <div className="relative w-full aspect-square bg-gray-100 overflow-hidden">
                <img
                  src={post.image}
                  alt={`Instagram投稿 ${post.id}`}
                  loading="lazy"
                  className="w-full h-full object-cover md:group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-black/0 md:group-hover:bg-black/60 transition-all duration-500 flex items-center justify-center opacity-0 md:group-hover:opacity-100 pointer-events-none">
                  <div className="flex gap-6 text-white">
                    <div className="flex items-center gap-2">
                      <Heart size={24} fill="white" />
                      <span className="font-heading font-bold text-lg">{post.likes}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MessageCircle size={24} fill="white" />
                      <span className="font-heading font-bold text-lg">{post.comments}</span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
