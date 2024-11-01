import React from 'react';
import { CheckCircle2, Home, Sparkles, Clock, MapPin } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: '定期清掃サービス',
      description: '定期的な清掃で快適な空間を維持します',
      features: [
        '共用部分の清掃',
        'フロア清掃',
        'トイレ清掃',
        '定期的な品質チェック'
      ],
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80'
    },
    {
      title: '民泊清掃',
      description: 'プロフェッショナルな民泊清掃サービス',
      features: [
        'ベッドメイキング',
        'バスルーム清掃',
        'キッチン清掃',
        'アメニティ補充'
      ],
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80'
    },
    {
      title: '特殊清掃',
      description: '特別な状況に対応する専門清掃',
      features: [
        '原状回復清掃',
        '引越し後清掃',
        'カーペットクリーニング',
        'エアコンクリーニング'
      ],
      image: 'https://images.unsplash.com/photo-1527515545081-5db817172677?auto=format&fit=crop&q=80'
    }
  ];

  return (
    <div className="bg-white py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            プロフェッショナルな清掃サービス
          </h2>
          <p className="text-xl text-gray-600">
            お客様のニーズに合わせた最適な清掃プランをご提供します
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        <Features />
      </div>
    </div>
  );
}

function ServiceCard({ title, description, features, image }: {
  title: string;
  description: string;
  features: string[];
  image: string;
}) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="h-48 relative">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Features() {
  const features = [
    {
      icon: <Home className="w-6 h-6" />,
      title: '信頼性',
      description: '10年以上の実績と経験'
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: '品質保証',
      description: '徹底した品質管理システム'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: '迅速対応',
      description: '24時間365日対応可能'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: '対応エリア',
      description: '都内・熱海・北海道道東地域'
    }
  ];

  return (
    <div className="mt-24">
      <h3 className="text-3xl font-bold text-center mb-12">
        選ばれる理由
      </h3>
      <div className="grid md:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-4">
              {feature.icon}
            </div>
            <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}