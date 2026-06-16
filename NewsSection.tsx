import Link from 'next/link';

const newsItems = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1759760300494-7378d88180f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    date: '2026.04.10',
    title: '入学式がありました',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1652107937402-20106955a1c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    date: '2026.03.02',
    title: '卒部式・卒業式が行われました',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1583147625872-30f552771594?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    date: '2026.02.24',
    title: '全九州高等学校新人大会結果',
  },
];

export function NewsSection() {
  return (
    <section className="py-16 md:py-32 bg-team-maroon">
      <div className="section-container">
        <h2 className="section-heading mb-12 md:mb-16 text-center text-white">NEWS</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
          {newsItems.map((item) => (
            <Link
              key={item.id}
              href={`/news/${item.id}`}
              className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]"
            >
              <div className="w-full aspect-[4/3] bg-gray-100 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="p-6 md:p-8">
                <p className="font-body text-gray-500 mb-3 text-[13px] tracking-widest">
                  {item.date}
                </p>
                <h3 className="font-body text-team-black text-base font-semibold leading-relaxed">
                  {item.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12 md:mt-16">
          <Link href="/news" className="btn-outline-white">
            VIEW ALL NEWS
          </Link>
        </div>
      </div>
    </section>
  );
}
