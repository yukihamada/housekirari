import React from 'react';
import { MapPin, Building2, TrendingUp } from 'lucide-react';

export default function ServiceArea() {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">サービス提供エリア</h2>
        <p className="text-center text-gray-600 mb-12">順次エリアを拡大中です</p>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <AreaCard
            icon={<Building2 className="w-8 h-8" />}
            area="東京都内"
            details={["23区全域", "多摩地域", "島しょ部を除く全域"]}
          />
          <AreaCard
            icon={<MapPin className="w-8 h-8" />}
            area="熱海エリア"
            details={["熱海市内", "伊東市", "伊豆地域"]}
          />
          <AreaCard
            icon={<MapPin className="w-8 h-8" />}
            area="北海道道東"
            details={["釧路市", "帯広市", "網走市", "根室市"]}
          />
        </div>

        <div className="bg-blue-50 rounded-2xl p-8 md:p-12">
          <div className="flex items-center justify-center mb-6">
            <TrendingUp className="w-10 h-10 text-blue-600" />
          </div>
          <h3 className="text-2xl font-bold text-center mb-4">フランチャイズオーナー募集中</h3>
          <p className="text-center text-gray-600 mb-6 max-w-2xl mx-auto">
            ハウスキラリは、清掃のプロフェッショナルとして着実に成長を続けています。
            私たちと共に、地域に価値あるサービスを提供していただけるオーナーを募集しています。
          </p>
          <div className="flex justify-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
              フランチャイズについて詳しく見る
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function AreaCard({ icon, area, details }: { icon: React.ReactNode, area: string, details: string[] }) {
  return (
    <div className="bg-white border border-gray-100 p-6 rounded-xl shadow-sm hover:shadow-md transition">
      <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mb-4 mx-auto">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-center mb-4">{area}</h3>
      <ul className="space-y-2">
        {details.map((detail, index) => (
          <li key={index} className="text-gray-600 text-center">{detail}</li>
        ))}
      </ul>
    </div>
  );
}