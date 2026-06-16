import Link from 'next/link';
import { Instagram } from 'lucide-react';

const navItems = [
  { label: 'ニュース', path: '/news' },
  { label: 'メンバー紹介', path: '/members' },
  { label: '試合結果', path: '/results' },
  { label: '試合風景', path: '/gallery' },
  { label: '進路実績', path: '/career' },
  { label: 'OBページ', path: '/ob' },
  { label: 'リンク', path: '/links' },
];

export function Footer() {
  return (
    <footer className="bg-team-black text-white py-16 md:py-20">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 mb-12 md:mb-16">
          <div>
            <h3 className="font-heading text-white font-bold text-xl mb-4">
              九州学院高等学校ラグビー部
            </h3>
            <p className="font-body text-white/70 leading-relaxed text-sm">
              熊本の地から全国へ。<br />
              One for All, All for One
            </p>
          </div>

          <div>
            <h4 className="font-body text-white font-medium text-base mb-4">
              サイトマップ
            </h4>
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className="font-body text-white/70 hover:text-team-maroon transition-colors duration-300 text-sm"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-body text-white font-medium text-base mb-4">
              SNS
            </h4>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/kgrc.ac.ob.og/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-team-maroon transition-colors duration-300"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center">
          <p className="font-body text-white/60 text-sm">
            &copy; 2026 Kyushu Gakuin High School Rugby Football Club. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
