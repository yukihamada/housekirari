import React from 'react';
import { Building2, Users, TrendingUp, CheckCircle2 } from 'lucide-react';

export default function Franchise() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[400px]">
        <img 
          src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80"
          alt="フランチャイズビジネスのイメージ" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-900/60">
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="max-w-2xl text-white">
              <h1 className="text-4xl font-bold mb-4">
                ハウスキラリ フランチャイズ募集
              </h1>
              <p className="text-xl mb-8">
                確立されたブランドと実績のあるシステムで、<br />
                あなたのビジネスを成功へ導きます。
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">フランチャイズオーナーの特典</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <BenefitCard
              icon={<Building2 className="w-8 h-8" />}
              title="確立されたブランド"
              description="市場で認知された信頼のブランドを活用できます"
            />
            <BenefitCard
              icon={<Users className="w-8 h-8" />}
              title="充実したサポート"
              description="研修プログラムと継続的なサポート体制を完備"
            />
            <BenefitCard
              icon={<TrendingUp className="w-8 h-8" />}
              title="成長市場"
              description="拡大する清掃市場で、安定した収益を実現"
            />
          </div>
        </div>
      </div>

      {/* Requirements Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">加盟条件</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="space-y-4">
                <RequirementItem text="初期投資：300万円〜" />
                <RequirementItem text="ロイヤリティ：売上の5%" />
                <RequirementItem text="契約期間：5年（更新可）" />
                <RequirementItem text="対象エリア：全国主要都市" />
                <RequirementItem text="必要面積：事務所20㎡以上" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">フランチャイズに関するお問い合わせ</h2>
          <p className="text-gray-600 mb-8">
            フランチャイズについての詳細資料をご用意しております。<br />
            お気軽にお問い合わせください。
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
            資料請求・お問い合わせ
          </button>
        </div>
      </div>
    </div>
  );
}

function BenefitCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="text-center p-6">
      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function RequirementItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3">
      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
      <span className="text-gray-700">{text}</span>
    </div>
  );
}