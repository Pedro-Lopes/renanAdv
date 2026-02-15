import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

/**
 * Componente AboutSection - Sobre o Escritório
 */
const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="sobre" className="py-20 bg-neutral-50" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Título da seção */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Sobre <span className="text-secondary">Nós</span>
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Coluna de imagem/visual */}
            <motion.div variants={itemVariants} className="relative">
              <div className="aspect-[3/4] rounded-lg shadow-2xl overflow-hidden relative bg-neutral-100">
                <img 
                  src="/images/natan.jfif" 
                  alt="Sobre o Escritório" 
                  className="w-full h-full object-cover object-center"
                />
                {/* Overlay dourado */}
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent" />
              </div>
              
              {/* Elemento decorativo */}
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-secondary/10 rounded-lg -z-10" />
            </motion.div>

            {/* Coluna de texto */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="prose prose-lg max-w-none">
                <p className="text-neutral-700 leading-relaxed text-justify">
                  Advocacia exercida de forma <strong className="text-primary">individualizada</strong>, 
                  com <strong className="text-primary">acompanhamento direto</strong> e responsabilidade 
                  técnica em cada demanda.
                </p>
                
                <p className="text-neutral-700 leading-relaxed text-justify">
                  O foco está na <strong className="text-secondary">proteção patrimonial</strong>, 
                  prevenção de riscos jurídicos e construção de soluções seguras e eficazes.
                </p>

                <p className="text-neutral-700 leading-relaxed text-justify">
                  O atendimento é orientado pela <strong className="text-primary">transparência</strong>, 
                  com informações claras sobre prazos, custos e riscos processuais, respeitando sempre 
                  os limites éticos da profissão.
                </p>

                <p className="text-neutral-700 leading-relaxed text-justify">
                  A comunicação com o cliente é <strong className="text-secondary">direta</strong>, 
                  sem intermediários. Cada caso é conduzido com sigilo absoluto, independência técnica 
                  e total conformidade com o Código de Ética da OAB.
                </p>

                <p className="text-neutral-700 leading-relaxed text-justify">
                  Não há promessa de resultado. O compromisso é com a atuação técnica, diligente e 
                  fundamentada, sempre respeitando o ordenamento jurídico e a dignidade das partes envolvidas.
                </p>
              </div>

              {/* Destaques */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-secondary">
                  <p className="text-primary font-bold text-2xl mb-1">100%</p>
                  <p className="text-sm text-neutral-600">Atendimento Personalizado</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-secondary">
                  <p className="text-primary font-bold text-xl mb-1">OAB/RJ</p>
                  <p className="text-sm text-neutral-600">262.895</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
