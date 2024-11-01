import React from 'react';
import { Check } from 'lucide-react';

export default function Pricing() {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">料金プラン</h2>
          <p className="text-gray-600">お客様のニーズに合わせた柔軟な料金プラン</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <PriceCard
            title="スポット清掃"
            price="12,000"
            description="1回限りの清掃サービス"
            features={[
              "基本清掃（2時間）",
              "水回り清掃",
              "掃除機がけ",
              "拭き掃除",
              "ゴミ処理"
            ]}
            isPopular={false}
          />
          <PriceCard
            title="定期清掃"
            price="9,800"
            description="月4回の定期清掃プラン"
            features={[
              "基本清掃（2時間）",
              "水回り清掃",
              "掃除機がけ",
              "拭き掃除",
              "ゴミ処理",
              "20%割引適用"
            ]}
            isPopular={true}
          />
          <PriceCard
            title="フルクリーニング"
            price="38,000"
            description="徹底的な大掃除向け"
            features={[
              "全室清掃（6時間）",
              "エアコン清掃",
              "換気扇清掃",
              "床ワックス",
              "水回り完全洗浄",
              "窓・サッシ清掃"
            ]}
            isPopular={false}
          />
        </div>

        <p className="text-center text-gray-500 mt-8">
          ※料金は税抜価格です。物件の状況により変動する場合があります。
        </p>
      </div>
    </div>
  );
}

function PriceCard({ 
  title, 
  price, 
  description, 
  features,
  isPopular
}: { 
  title: string, 
  price: string, 
  description: string, 
  features: string[],
  isPopular: boolean
}) {
  return (
    <div className={`bg-white rounded-xl p-8 border ${isPopular ? 'border-blue-500 shadow-lg relative' : 'border-gray-100'}`}>
      {isPopular && (
        <div className="absolute top-0 right-8 transform -translate-y-1/2">
          <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm">人気プラン</span>
        </div>
      )}
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="mb-6">
        <span className="text-4xl font-bold">¥{price}</span>
        <span className="text-gray-600">/回〜</span>
      </div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <Check className="w-5 h-5 text-green-500" />
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      <button className={`w-full py-3 rounded-lg font-medium transition ${
        isPopular 
          ? 'bg-blue-600 text-white hover:bg-blue-700' 
          : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
      }`}>
        見積もりを依頼
      </button>
    </div>
  );
}