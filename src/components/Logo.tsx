import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center gap-3">
      {/* SVG Logo baseado na imagem */}
      <div className="relative">
        <svg 
          width="40" 
          height="48" 
          viewBox="0 0 100 120" 
          className="md:w-12 md:h-14 lg:w-14 lg:h-16"
        >
          {/* Escudo */}
          <path
            d="M50 5 C30 5, 15 15, 15 30 C15 50, 25 80, 50 115 C75 80, 85 50, 85 30 C85 15, 70 5, 50 5 Z"
            fill="none"
            stroke="#059669"
            strokeWidth="4"
            className="drop-shadow-sm"
          />
          
          {/* Preenchimento do escudo */}
          <path
            d="M50 8 C32 8, 18 17, 18 30 C18 48, 27 75, 50 108 C73 75, 82 48, 82 30 C82 17, 68 8, 50 8 Z"
            fill="#f0fdf4"
            className="opacity-90"
          />
          
          {/* Joelho - parte superior */}
          <ellipse cx="45" cy="35" rx="8" ry="12" fill="none" stroke="#059669" strokeWidth="2.5"/>
          
          {/* Joelho - articulação */}
          <circle cx="45" cy="45" r="6" fill="none" stroke="#059669" strokeWidth="2.5"/>
          
          {/* Joelho - parte inferior */}
          <rect x="41" y="50" width="8" height="20" rx="4" fill="none" stroke="#059669" strokeWidth="2.5"/>
          
          {/* Linhas de movimento/flexibilidade */}
          <path d="M35 30 Q40 35 35 40" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round"/>
          <path d="M32 35 Q37 40 32 45" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round"/>
          <path d="M29 40 Q34 45 29 50" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round"/>
          
          {/* Folha - símbolo natural */}
          <path
            d="M60 65 C60 65, 70 60, 75 70 C75 75, 70 80, 65 80 C60 75, 60 65, 60 65 Z"
            fill="#10b981"
            className="drop-shadow-sm"
          />
          
          {/* Nervura da folha */}
          <path
            d="M62 67 Q67 70 72 75"
            fill="none"
            stroke="#059669"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </div>
      
      {/* Texto do Logo */}
      <div className="flex flex-col">
        <span className="text-lg md:text-xl lg:text-2xl font-bold text-gray-800 font-playfair leading-tight">
          PROTOCOLO
        </span>
        <span className="text-lg md:text-xl lg:text-2xl font-bold text-green-600 font-playfair leading-tight -mt-1">
          ALÍVIO JÁ
        </span>
      </div>
    </div>
  );
};

export default Logo;