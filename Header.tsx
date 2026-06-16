'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'ニュース', path: '/news' },
  { label: 'メンバー紹介', path: '/members' },
  { label: '試合結果', path: '/results' },
  { label: '試合風景', path: '/gallery' },
  { label: '進路実績', path: '/career' },
  { label: 'OBページ', path: '/ob' },
  { label: '法人サポーター', path: '/corporate-supporters' },
  { label: 'リンク', path: '/links' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-team-black shadow-lg' : 'bg-team-black/90 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-4 py-3 lg:px-8 lg:py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 flex-1 lg:flex-initial">
              {/* エンブレム画像: public/images/IMG_1695.jpeg に配置 */}
              <img
                src="/images/IMG_1695.jpeg"
                alt="九州学院ラグビー部エンブレム"
                className="w-9 h-9 lg:w-11 lg:h-11 rounded-full object-cover flex-shrink-0 bg-white"
              />
              <div>
                <h1 className="font-heading text-white font-bold text-sm lg:text-xl">
                  九州学院ラグビー部HP
                </h1>
                <p className="font-body text-white/80 text-[10px] lg:text-xs hidden sm:block">
                  Kyushu Gakuin High School Rugby Football Club
                </p>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-4 ml-auto">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`font-body text-white hover:text-team-maroon transition-colors duration-300 whitespace-nowrap text-[13px] ${
                    pathname === item.path ? 'text-team-maroon' : ''
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
              aria-label="メニュー"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 top-16 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <nav
        className={`fixed top-16 right-0 w-64 h-[calc(100vh-4rem)] bg-team-black z-50 transform transition-transform duration-300 lg:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col py-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`font-body text-white hover:bg-team-maroon/20 transition-colors duration-300 px-6 py-4 border-b border-white/10 text-base ${
                pathname === item.path ? 'bg-team-maroon text-white' : ''
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
}
