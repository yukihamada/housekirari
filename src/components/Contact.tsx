import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">お問い合わせ</h2>
          <p className="text-gray-600">ご不明な点がございましたら、お気軽にお問い合わせください</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold mb-6">お問い合わせフォーム</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2">お名前 *</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">メールアドレス *</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">電話番号</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">お問い合わせ内容 *</label>
                <textarea
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
                  rows={5}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition"
              >
                送信する
              </button>
            </form>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">お問い合わせ方法</h3>
            <div className="space-y-8">
              <ContactMethod
                icon={<Phone className="w-6 h-6" />}
                title="お電話"
                content="0120-XXX-XXX"
                description="受付時間：9:00-18:00（年中無休）"
              />
              <ContactMethod
                icon={<Mail className="w-6 h-6" />}
                title="メール"
                content="info@housekillari.com"
                description="24時間受付中"
              />
              <ContactMethod
                icon={<MapPin className="w-6 h-6" />}
                title="所在地"
                content="〒XXX-XXXX 東京都新宿区XX-XX"
                description="営業時間：9:00-18:00"
              />
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-bold mb-2">よくあるご質問</h4>
                <p className="text-gray-600 mb-4">
                  お問い合わせの前に、よくあるご質問をご確認ください。
                </p>
                <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                  よくあるご質問を見る →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactMethod({ 
  icon, 
  title, 
  content, 
  description 
}: { 
  icon: React.ReactNode, 
  title: string, 
  content: string, 
  description: string 
}) {
  return (
    <div className="flex gap-4">
      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 flex-shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="font-bold mb-1">{title}</h4>
        <p className="text-lg mb-1">{content}</p>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
}