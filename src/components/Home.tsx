import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Services from './Services';
import Features from './Features';
import Reviews from './Reviews';

export default function HomePage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[600px]">
        <img 
          src="https://images.unsplash.com/photo-1527515545081-5db817172677?auto=format&fit=crop&q=80"
          alt="清掃イメージ" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-900/60">
          <div className="container mx-auto px-4 h-full flex items-center">
            <motion.div 
              className="max-w-2xl text-white"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl font-bold mb-6">
                プロフェッショナルな<br />清掃サービス
              </h1>
              <p className="text-xl mb-8">
                都内・熱海・北海道道東地域で<br />
                快適な空間づくりをサポートします
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-white text-blue-900 px-8 py-3 rounded-lg hover:bg-blue-50 transition"
                >
                  お問い合わせ
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Trust Indicators */}
      <motion.div 
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeIn}
        transition={{ duration: 0.6 }}
        className="bg-white py-12"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-3xl font-bold text-blue-600 mb-2">10年+</h3>
              <p className="text-gray-600">業界経験</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-blue-600 mb-2">5,000+</h3>
              <p className="text-gray-600">清掃実績</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-blue-600 mb-2">98%</h3>
              <p className="text-gray-600">顧客満足度</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-blue-600 mb-2">24/7</h3>
              <p className="text-gray-600">サポート対応</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Services Section */}
      <Services />
      
      {/* Features Section */}
      <Features />
      
      {/* Reviews Section */}
      <Reviews />
    </div>
  );
}