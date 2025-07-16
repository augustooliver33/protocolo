import React, { useState } from 'react';
import Logo from './components/Logo';

function App() {
  const [showButton, setShowButton] = useState(false);
  const [timeLeft, setTimeLeft] = useState(180); // 3 minutos em segundos

  // Carregar script da VSL
  React.useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://scripts.converteai.net/0335ec20-c9d4-4221-a36e-428ccf9162ce/players/6877d2e30fe8209acf4cca58/v4/player.js";
    script.async = true;
    document.head.appendChild(script);
    
    return () => {
      // Cleanup se necessário
      const existingScript = document.querySelector(`script[src="${script.src}"]`);
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  // Timer effect
  React.useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setShowButton(true);
    }
  }, [timeLeft]);

  const scrollToCheckout = () => {
    window.location.href = 'https://pay.kirvano.com/51c9da2f-ca9e-4fa4-ae34-f0e646202aba';
  };

  return (
    <div className="min-h-screen bg-white font-inter">
      {/* Header Fixo */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50 py-3 md:py-4">
        <div className="container mx-auto px-4 flex justify-center items-center">
          <Logo />
        </div>
      </header>

      {/* Hero Section com VSL */}
      <section className="pt-20 md:pt-24 pb-8 md:pb-12 bg-gradient-to-b from-green-50 to-white min-h-screen flex flex-col justify-center">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-gray-800 mb-8 md:mb-10 leading-tight font-playfair tracking-tight">
            Você sente dores no JOELHO ao andar ou na<br className="hidden sm:block" />
            <span className="block mt-1 sm:mt-2">COLUNA ao se abaixar?</span><br />
            <span className="text-green-600 bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent drop-shadow-sm block mt-1 sm:mt-2">
              Isso pode NÃO ser culpa<br className="hidden sm:block" />
              <span className="block mt-1 sm:mt-2 text-red-600 bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl drop-shadow-md">
                da sua idade.
              </span>
            </span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed px-2 font-medium">
            Descubra o protocolo caseiro que está devolvendo a liberdade de milhares de brasileiros, 
            <strong className="text-green-600 font-bold"> sem remédios caros nem efeitos colaterais.</strong>
          </p>

          {/* VSL Player */}
          <div className="max-w-xs mx-auto mb-8 md:mb-10" id="vsl-container">
            <div 
              dangerouslySetInnerHTML={{
                __html: `<vturb-smartplayer id="vid-6877d2e30fe8209acf4cca58" style="display: block; margin: 0 auto; width: 100%; max-width: 400px;"></vturb-smartplayer>`
              }}
            />
          </div>

          {showButton && (
            <div className="px-4">
              <button 
                onClick={scrollToCheckout}
                className="w-full sm:w-auto bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 sm:px-12 py-4 sm:py-5 rounded-full text-lg sm:text-xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 max-w-sm mx-auto block border-2 border-green-500"
              >
                SIM, QUERO ALÍVIO IMEDIATO!
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Rodapé */}
      <footer className="bg-gray-800 text-white py-10 md:py-12 mt-auto">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-10">
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-8 mb-8 text-sm md:text-base">
              <a href="#" className="hover:text-green-400 transition-colors duration-200 font-medium">Termos de Uso</a>
              <a href="#" className="hover:text-green-400 transition-colors duration-200 font-medium">Política de Privacidade</a>
              <a href="#" className="hover:text-green-400 transition-colors duration-200 font-medium">Suporte</a>
            </div>
          </div>
          
          <div className="text-center text-gray-400 text-sm md:text-base px-4 leading-relaxed">
            © 2024 Protocolo Alívio Já. Todos os direitos reservados.
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;
