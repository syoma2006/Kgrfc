'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ChevronUp } from 'lucide-react';

const matches = [
  {
    id: 1,
    date: '2026.02.22',
    tournament: '九州新人大会',
    ourTeam: '九州学院',
    ourScore: 8,
    opponentTeam: '高鍋高校',
    opponentScore: 42,
    firstHalfOur: 3,
    firstHalfOpponent: 21,
    secondHalfOur: 5,
    secondHalfOpponent: 21,
  },
  {
    id: 2,
    date: '2026.02.21',
    tournament: '九州新人大会',
    ourTeam: '九州学院',
    ourScore: 5,
    opponentTeam: '東福岡高校',
    opponentScore: 73,
    firstHalfOur: 5,
    firstHalfOpponent: 35,
    secondHalfOur: 0,
    secondHalfOpponent: 38,
  },
  {
    id: 3,
    date: '2026.01.25',
    tournament: '熊本県新人戦',
    ourTeam: '九州学院',
    ourScore: 19,
    opponentTeam: '熊本西高校',
    opponentScore: 12,
    firstHalfOur: 7,
    firstHalfOpponent: 5,
    secondHalfOur: 12,
    secondHalfOpponent: 7,
  },
];

export function MatchResultsSection() {
  const [expandedMatch, setExpandedMatch] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-32 bg-team-maroon">
      <div className="section-container">
        <h2 className="section-heading mb-12 md:mb-16 text-center text-white">MATCH RESULTS</h2>

        <div className="flex flex-col gap-5 md:gap-8">
          {matches.map((match) => (
            <div
              key={match.id}
              className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-500 overflow-hidden"
            >
              <div
                className="p-4 md:p-8 cursor-pointer"
                onClick={() => setExpandedMatch(expandedMatch === match.id ? null : match.id)}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3 md:mb-4 gap-2">
                  <span className="font-body text-gray-600" style={{ fontSize: 'clamp(12px, 3vw, 14px)' }}>
                    {match.date}
                  </span>
                  <div className="flex items-center gap-2 md:gap-4">
                    <span
                      className="font-body text-team-maroon px-3 md:px-4 py-1 bg-team-maroon/10 rounded-full font-medium"
                      style={{ fontSize: 'clamp(11px, 3vw, 14px)' }}
                    >
                      {match.tournament}
                    </span>
                    {expandedMatch === match.id
                      ? <ChevronUp size={20} className="text-gray-400" />
                      : <ChevronDown size={20} className="text-gray-400" />}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex-1 text-right pr-2 md:pr-8">
                    <p className="font-body text-team-black font-medium" style={{ fontSize: 'clamp(14px, 4vw, 20px)' }}>
                      {match.ourTeam}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 md:gap-6 px-2">
                    <span className="font-heading text-team-maroon font-bold" style={{ fontSize: 'clamp(24px, 7vw, 36px)' }}>
                      {match.ourScore}
                    </span>
                    <span className="font-heading text-gray-400" style={{ fontSize: 'clamp(16px, 5vw, 24px)' }}>-</span>
                    <span className="font-heading text-gray-600 font-bold" style={{ fontSize: 'clamp(24px, 7vw, 36px)' }}>
                      {match.opponentScore}
                    </span>
                  </div>
                  <div className="flex-1 text-left pl-2 md:pl-8">
                    <p className="font-body text-team-black font-medium" style={{ fontSize: 'clamp(14px, 4vw, 20px)' }}>
                      {match.opponentTeam}
                    </p>
                  </div>
                </div>
              </div>

              {expandedMatch === match.id && (
                <div className="px-4 md:px-8 pb-4 md:pb-8 border-t border-gray-100 pt-4 md:pt-6">
                  <div className="grid grid-cols-2 gap-3 md:gap-4">
                    {[
                      { label: '前半', our: match.firstHalfOur, opp: match.firstHalfOpponent },
                      { label: '後半', our: match.secondHalfOur, opp: match.secondHalfOpponent },
                    ].map(({ label, our, opp }) => (
                      <div key={label} className="text-center p-3 md:p-4 bg-gray-50 rounded-lg">
                        <p className="font-body text-gray-600 mb-2" style={{ fontSize: 'clamp(12px, 3vw, 14px)' }}>
                          {label}
                        </p>
                        <p className="font-heading font-bold" style={{ fontSize: 'clamp(18px, 5vw, 24px)' }}>
                          <span className="text-team-maroon">{our}</span>
                          <span className="text-gray-400 mx-1 md:mx-2">-</span>
                          <span className="text-gray-600">{opp}</span>
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12 md:mt-16">
          <Link href="/results" className="btn-outline-white">
            VIEW ALL RESULTS
          </Link>
        </div>
      </div>
    </section>
  );
}
