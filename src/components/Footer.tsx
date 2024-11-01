import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">プロンプトハウス</h3>
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                〒102-0074 東京都千代田区九段南１丁目６−５
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                090-7409-0407
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                info@enabler.fun
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">サービスエリア</h3>
            <ul className="space-y-2">
              <li>東京都内</li>
              <li>熱海</li>
              <li>北海道道東地域</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">リンク</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-gray-300">ホーム</Link></li>
              <li><Link to="/about" className="hover:text-gray-300">会社概要</Link></li>
              <li><Link to="/services" className="hover:text-gray-300">サービス</Link></li>
              <li><Link to="/contact" className="hover:text-gray-300">お問い合わせ</Link></li>
              <li><Link to="/franchise" className="hover:text-gray-300">FC募集</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p>&copy; {new Date().getFullYear()} プロンプトハウス by Enabler. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;