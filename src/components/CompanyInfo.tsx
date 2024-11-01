import React from 'react';
import { Globe, Users, Rocket, Map, Mail, Phone, Building, ExternalLink } from 'lucide-react';

export default function CompanyInfo() {
  return (
    <div className="pt-20 bg-white">
      {/* Hero Section */}
      <div className="relative h-[400px] mb-16">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
          alt="モダンなオフィス空間" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50">
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="max-w-3xl text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                世界中に美しい場所を創造する
              </h1>
              <p className="text-xl opacity-90">
                イネブラは、特別なコミュニティを構築し、新しい価値を創造するプロジェクトです。
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Vision & Mission */}
      <div className="container mx-auto px-4 mb-20">
        <div className="grid md:grid-cols-2 gap-12">
          <VisionCard
            icon={<Globe className="w-8 h-8" />}
            title="ビジョン"
            description="世界3000カ所、そして宇宙へ。イネブラは、革新的な宿泊施設と体験の場を創造し続けます。"
          />
          <VisionCard
            icon={<Users className="w-8 h-8" />}
            title="ミッション"
            description="コミュニティを軸とした新しい宿泊体験の提供と、テクノロジーと人間性の融合による未来志向の生活空間の創造。"
          />
        </div>
      </div>

      {/* CEO Profile */}
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">代表取締役について</h2>
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-64 h-64 rounded-full overflow-hidden flex-shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
                  alt="濱田 優貴"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">濱田 優貴</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  東京理科大学在学中に起業し、サイブリッジの共同創業を経て、株式会社メルカリの創業期に参画。
                  メルカリでは取締役や上級執行役員研究開発として、プロダクト開発全般に従事。
                  AIの進化と社会への影響を深く考察した結果、人々のつながりと体験の価値を再認識し、
                  イネブラを立ち上げ、コミュニティを軸とした新しい価値創造に挑戦しています。
                </p>
                <a 
                  href="#" 
                  className="text-blue-600 hover:text-blue-700 flex items-center gap-2 font-medium"
                >
                  個人ページを見る
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Philosophy */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">私たちの哲学</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <PhilosophyQuote
                quote="建築とは空間に翻訳された時代の意思である"
                author="ミース・ファン・デル・ローエ"
              />
              <PhilosophyQuote
                quote="家は住むための機械である"
                author="ル・コルビュジエ"
              />
            </div>
            <p className="text-gray-600 mt-8 text-center">
              これらの言葉を指針として、イネブラは現代のライフスタイルと技術を融合させた、
              革新的な「住まい」の概念を追求し続けます。
            </p>
          </div>
        </div>
      </div>

      {/* Contact */}
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">お問い合わせ</h2>
          <div className="max-w-2xl mx-auto">
            <div className="space-y-6">
              <ContactInfo icon={<Mail />} text="info@enabler.fun" />
              <ContactInfo icon={<Phone />} text="090-7409-0407" />
              <ContactInfo 
                icon={<Building />} 
                text="〒102-0074 東京都千代田区九段南１丁目６−５ 九段会館テラス ２F" 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function VisionCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="bg-gray-50 p-8 rounded-xl">
      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-6">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}

function PhilosophyQuote({ quote, author }: { quote: string, author: string }) {
  return (
    <div className="bg-gray-50 p-8 rounded-xl">
      <blockquote className="text-xl font-medium mb-4">"{quote}"</blockquote>
      <p className="text-gray-600">- {author}</p>
    </div>
  );
}

function ContactInfo({ icon, text }: { icon: React.ReactNode, text: string }) {
  return (
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
        {icon}
      </div>
      <p className="text-gray-600">{text}</p>
    </div>
  );
}