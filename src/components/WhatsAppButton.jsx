import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaTimes } from 'react-icons/fa';

/**
 * Componente WhatsAppButton - Botão flutuante de contato
 */
const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  // Número do WhatsApp (substituir pelo número real)
  const phoneNumber = '5500000000000'; // Formato: 55 + DDD + Número
  const message = encodeURIComponent('Olá! Gostaria de solicitar uma consulta jurídica.');

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Esconder tooltip após 5 segundos
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3"
        >
          {/* Tooltip */}
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="relative bg-white shadow-lg rounded-lg px-4 py-2 hidden md:block"
              >
                <p className="text-sm font-medium text-primary whitespace-nowrap">
                  Fale conosco no WhatsApp!
                </p>
                <button
                  onClick={() => setShowTooltip(false)}
                  className="absolute -top-2 -right-2 bg-neutral-200 rounded-full p-1"
                >
                  <FaTimes className="text-xs text-neutral-600" />
                </button>
                {/* Seta */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
                  <div className="w-0 h-0 border-t-8 border-b-8 border-l-8 border-transparent border-l-white" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Botão WhatsApp */}
          <motion.a
            href={`https://wa.me/${phoneNumber}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl transition-colors duration-300 flex items-center justify-center"
            aria-label="Contato via WhatsApp"
          >
            <FaWhatsapp className="text-3xl" />
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WhatsAppButton;
