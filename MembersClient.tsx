'use client';

import { useState } from 'react';

const allMembers = [
  { id: 1, name: '桑鶴 恵舟', position: 'HO', positionType: 'FW', year: '3年', height: '173cm', weight: '93kg', juniorHighSchool: '託麻中学校', image: 'https://images.unsplash.com/photo-1570878786170-0723365bdf35?w=400&q=80' },
  { id: 2, name: '東 佑晟', position: 'SO', positionType: 'BK', year: '3年', height: '171cm', weight: '74kg', juniorHighSchool: '西合志中学校', image: 'https://images.unsplash.com/photo-1583147625872-30f552771594?w=400&q=80' },
  { id: 3, name: '相川 亮人', position: 'PR', positionType: 'FW', year: '3年', height: '170cm', weight: '85kg', juniorHighSchool: '住吉中学校（福岡）', image: 'https://images.unsplash.com/photo-1652107937402-20106955a1c2?w=400&q=80' },
  { id: 4, name: '有江 孝介', position: 'FL', positionType: 'FW', year: '3年', height: '178cm', weight: '82kg', juniorHighSchool: '九州学院中学校', image: 'https://images.unsplash.com/photo-1480099225005-2513c8947aec?w=400&q=80' },
  { id: 5, name: '江隈 礼', position: 'PR', positionType: 'FW', year: '3年', height: '173cm', weight: '88kg', juniorHighSchool: '九州学院中学校', image: 'https://images.unsplash.com/photo-1573056020034-fc367ec5ff3a?w=400&q=80' },
  { id: 6, name: '門脇 佑樹', position: 'LO', positionType: 'FW', year: '3年', height: '180cm', weight: '88kg', juniorHighSchool: '託麻中学校', image: 'https://images.unsplash.com/photo-1574763386858-234d2f588e2c?w=400&q=80' },
  { id: 7, name: '齊藤 啓心', position: 'SH', positionType: 'BK', year: '3年', height: '165cm', weight: '67kg', juniorHighSchool: '託麻中学校', image: 'https://images.unsplash.com/photo-1511208973145-b6f3f4d0c1d2?w=400&q=80' },
  { id: 8, name: '佐藤 結仁', position: 'FL', positionType: 'FW', year: '3年', height: '171cm', weight: '80kg', juniorHighSchool: '北部中学校', image: 'https://images.unsplash.com/photo-1515399211521-0a52016f42f4?w=400&q=80' },
  { id: 9, name: '田島 風雅', position: 'FB', positionType: 'BK', year: '3年', height: '170cm', weight: '70kg', juniorHighSchool: '九州学院中学校', image: 'https://images.unsplash.com/photo-1583147625872-30f552771594?w=400&q=80' },
  { id: 10, name: '本田 謙信', position: 'PR', positionType: 'FW', year: '3年', height: '176cm', weight: '100kg', juniorHighSchool: '九州学院中学校', image: 'https://images.unsplash.com/photo-1652107937402-20106955a1c2?w=400&q=80' },
  { id: 11, name: '岩永 勝琉', position: 'WTB', positionType: 'BK', year: '2年', height: '166cm', weight: '67kg', juniorHighSchool: '帯山中学校', image: 'https://images.unsplash.com/photo-1574763386858-234d2f588e2c?w=400&q=80' },
  { id: 12, name: '甲斐 蓮士', position: 'WTB', positionType: 'BK', year: '2年', height: '171cm', weight: '71kg', juniorHighSchool: '龍田中学校', image: 'https://images.unsplash.com/photo-1511208973145-b6f3f4d0c1d2?w=400&q=80' },
  { id: 13, name: '川上 敬晃', position: 'FL', positionType: 'FW', year: '2年', height: '162cm', weight: '65kg', juniorHighSchool: '出水中学校', image: 'https://images.unsplash.com/photo-1515399211521-0a52016f42f4?w=400&q=80' },
  { id: 14, name: '近藤 久軌', position: 'LO', positionType: 'FW', year: '2年', height: '178cm', weight: '67kg', juniorHighSchool: '山鹿中学校', image: 'https://images.unsplash.com/photo-1570878786170-0723365bdf35?w=400&q=80' },
  { id: 15, name: '田中 アッシャー', position: 'LO', positionType: 'FW', year: '2年', height: '178cm', weight: '78kg', juniorHighSchool: '京陵中学校', image: 'https://images.unsplash.com/photo-1583147625872-30f552771594?w=400&q=80' },
];

type PositionFilter = 'ALL' | 'FW' | 'BK' | 'STAFF';
type YearFilter = 'ALL' | '3年' | '2年' | '1年';

export function MembersClient() {
  const [selectedPosition, setSelectedPosition] = useState<PositionFilter>('ALL');
  const [selectedYear, setSelectedYear] = useState<YearFilter>('ALL');

  const filtered = allMembers
    .filter((m) => selectedPosition === 'ALL' || m.positionType === selectedPosition)
    .filter((m) => selectedYear === 'ALL' || m.year === selectedYear);

  const filterBtn = (active: boolean) =>
    `px-6 md:px-8 py-3 rounded-md font-body font-semibold tracking-widest transition-all duration-300 border-2 text-sm ${
      active
        ? 'bg-black text-white border-black'
        : 'bg-transparent text-white border-white hover:bg-white hover:text-team-maroon'
    }`;

  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-32 bg-team-maroon min-h-screen">
      <div className="section-container">
        <h1 className="page-heading mb-12 md:mb-16 text-center text-white">MEMBERS</h1>

        <div className="mb-12 md:mb-16 flex flex-col gap-5">
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            <span className="font-body text-white self-center text-sm tracking-widest">学年:</span>
            {(['ALL', '3年', '2年', '1年'] as const).map((year) => (
              <button key={year} onClick={() => setSelectedYear(year)} className={filterBtn(selectedYear === year)}>
                {year === 'ALL' ? '全て' : year}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            <span className="font-body text-white self-center text-sm tracking-widest">分類:</span>
            {(['ALL', 'FW', 'BK', 'STAFF'] as const).map((pos) => (
              <button key={pos} onClick={() => setSelectedPosition(pos)} className={filterBtn(selectedPosition === pos)}>
                {pos === 'ALL' ? '全て' : pos}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {filtered.map((member) => (
            <div key={member.id} className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
              <div className="w-full aspect-[3/4] bg-gray-100 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="p-6">
                <p className="font-body text-gray-500 mb-2 text-[13px] tracking-wide">
                  {member.year} / {member.positionType} / {member.position}
                </p>
                <h3 className="font-body text-team-black text-lg font-semibold mb-3">{member.name}</h3>
                <p className="font-body text-gray-600 text-[13px] mb-1">{member.height} / {member.weight}</p>
                <p className="font-body text-gray-600 text-xs">{member.juniorHighSchool}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
