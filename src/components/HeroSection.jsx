import React from 'react';
import { motion } from 'framer-motion';

/**
 * Componente HeroSection - Seção principal do site
 */
const HeroSection = () => {

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-primary to-primary/90 text-white overflow-hidden"
    >
      {/* Background Pattern - Grade diagonal moderna */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMC41Ij48cGF0aCBkPSJNMCAwTDQwIDQwTTQwIDBMMCA0MCIvPjwvZz48L3N2Zz4=')]" />
      </div>

      {/* Overlay dourado sutil */}
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/5 to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo/Nome */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
              Redlien <span className="text-secondary">Advocacia</span>
            </h1>
            <div className="w-24 h-1 bg-secondary mx-auto" />
          </motion.div>

          {/* Frase principal */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl md:text-4xl font-serif mb-6 text-secondary"
          >
            Atuação estratégica, técnica e personalizada
          </motion.h2>

          {/* Subtexto institucional */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-neutral-100 mb-32 max-w-3xl mx-auto leading-relaxed"
          >
            Advocacia exercida de forma individualizada, com acompanhamento direto e responsabilidade 
            técnica em cada demanda. O foco está na proteção patrimonial, prevenção de riscos jurídicos 
            e construção de soluções seguras e eficazes.
          </motion.p>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-6 h-10 border-2 border-secondary rounded-full flex items-start justify-center p-2"
            >
              <div className="w-1 h-2 bg-secondary rounded-full" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
