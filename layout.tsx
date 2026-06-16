import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: '九州学院高等学校ラグビー部',
  description: '九州学院高等学校ラグビー部の公式サイト。花園出場を目指し日々練習に励んでいます。',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="min-h-screen bg-team-maroon overflow-x-hidden">
        <Header />
        <main className="overflow-x-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
