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
  
  const [utmParams, setUtmParams] = useState('');

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

   // Capturar parâmetros UTM na inicialização
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const utmParameters = [];
    
    // Lista de parâmetros UTM e outros parâmetros de tracking
    const trackingParams = [
      'utm_source',
      'utm_medium', 
      'utm_campaign',
      'utm_term',
      'utm_content',
      'click_id',
      'fbclid',
      'gclid',
      'ttclid'
    ];
    
    trackingParams.forEach(param => {
      const value = urlParams.get(param);
      if (value) {
        utmParameters.push(`${param}=${encodeURIComponent(value)}`);
      }
    });
    
    if (utmParameters.length > 0) {
      setUtmParams('&' + utmParameters.join('&'));
    }
  }, []);

  // Função para adicionar UTMs aos links de checkout
  const addUtmToCheckoutUrl = (baseUrl: string) => {
    return baseUrl + utmParams;
  };

  const scrollToCheckout = () => {
    window.location.href = getCheckoutUrl("https://pay.kirvano.com/51c9da2f-ca9e-4fa4-ae34-f0e646202aba");
  };

  return (
    return baseUrl + utmParams;
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
