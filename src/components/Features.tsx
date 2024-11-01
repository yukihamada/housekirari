import React from 'react';
import { Shield, Clock, CreditCard, Star } from 'lucide-react';

export default function Features() {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">選ばれる4つの理由</h2>
          <p className="text-gray-600">お客様に安心と満足をお届けする、ハウスキラリの強み</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          <FeatureCard
            icon={<Shield className="w-6 h-6" />}
            title="信頼の品質"
            description="研修を受けた専門スタッフが、確かな技術で清掃を行います"
          />
          <FeatureCard
            icon={<Clock className="w-6 h-6" />}
            title="柔軟な対応"
            description="急な依頼にも可能な限り対応。24時間受付可能です"
          />
          <FeatureCard
            icon={<CreditCard className="w-6 h-6" />}
            title="明確な料金"
            description="追加料金なし。見積り時の金額で安心してご依頼いただけます"
          />
          <FeatureCard
            icon={<Star className="w-6 h-6" />}
            title="高評価実績"
            description="お客様満足度98%以上。確かな実績でサービスを提供"
          />
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="text-center p-6">
      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}