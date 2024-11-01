import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="w-10 h-10">
        <img 
          src="/logo.png" 
          alt="ハウスキラリ" 
          className="w-full h-full object-contain"
        />
      </div>
      <div className="text-2xl font-bold text-blue-600">
        ハウスキラリ
      </div>
    </div>
  );
};

export default Logo;