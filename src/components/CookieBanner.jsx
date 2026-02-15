import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCookie, FaTimes } from 'react-icons/fa';

/**
 * Componente CookieBanner - Banner LGPD de consentimento de cookies
 */
const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Verificar se o usuário já aceitou os cookies
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-primary text-white p-4 shadow-2xl"
        >
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-start gap-3 flex-1">
                <FaCookie className="text-secondary text-2xl flex-shrink-0 mt-1" />
                <div className="text-sm">
                  <p className="font-medium mb-1">Este site utiliza cookies</p>
                  <p className="text-neutral-200 text-xs">
                    Utilizamos cookies para melhorar sua experiência de navegação e analisar o tráfego do site.
                    Ao continuar navegando, você concorda com nossa política de privacidade.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 flex-shrink-0">
                <button
                  onClick={handleReject}
                  className="px-4 py-2 text-sm border border-white/30 rounded hover:bg-white/10 transition-colors"
                >
                  Recusar
                </button>
                <button
                  onClick={handleAccept}
                  className="px-4 py-2 text-sm bg-secondary hover:bg-secondary/90 rounded font-medium transition-colors"
                >
                  Aceitar
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
