import React from 'react';
import { Star } from 'lucide-react';

export default function Reviews() {
  const reviews = [
    {
      name: "田中 美咲",
      role: "民泊オーナー",
      content: "定期的に利用していますが、毎回丁寧な清掃で感動します。お客様からの評価も上がり、予約率が向上しました。",
      rating: 5
    },
    {
      name: "佐藤 健一",
      role: "マンション管理者",
      content: "複数の物件の定期清掃をお願いしていますが、クオリティが安定していて信頼できます。",
      rating: 5
    },
    {
      name: "山田 優子",
      role: "個人宅利用",
      content: "年末の大掃除で利用しました。プロの技術で家中ピカピカになり、新年を気持ちよく迎えられました。",
      rating: 5
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">お客様の声</h2>
          <p className="text-gray-600">実際にご利用いただいたお客様からの評価</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex gap-1 text-yellow-400 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">{review.content}</p>
              <div className="border-t pt-4">
                <p className="font-semibold">{review.name}</p>
                <p className="text-sm text-gray-500">{review.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}