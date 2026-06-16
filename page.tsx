import type { Metadata } from 'next';
import { MatchResultsSection } from '@/components/MatchResultsSection';

export const metadata: Metadata = { title: 'MATCH RESULTS | 九州学院ラグビー部' };

export default function ResultsPage() {
  return (
    <div className="pt-16 md:pt-0 bg-team-maroon min-h-screen">
      <MatchResultsSection />
    </div>
  );
}
