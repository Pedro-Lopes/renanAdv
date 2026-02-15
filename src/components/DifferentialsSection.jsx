import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  FaUserTie, 
  FaShieldAlt, 
  FaComments, 
  FaChartLine, 
  FaLock,
  FaClock
} from 'react-icons/fa';

/**
 * Componente DifferentialsSection - Diferenciais do escritório
 */
const DifferentialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const differentials = [
    {
      icon: FaUserTie,
      title: 'Atendimento Personalizado',
      description: 'Cada cliente recebe atenção individualizada e acompanhamento direto do advogado responsável.'
    },
    {
      icon: FaShieldAlt,
      title: 'Responsabilidade Técnica Direta',
      description: 'Atuação com compromisso ético, sigilo profissional e independência técnica absoluta.'
    },
    {
      icon: FaChartLine,
      title: 'Estratégia Jurídica Individualizada',
      description: 'Cada caso é analisado de forma única para construir a melhor solução possível.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="diferenciais" className="py-20 bg-gradient-to-br from-neutral-50 to-neutral-100" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Nossos <span className="text-secondary">Diferenciais</span>
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6" />
          <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
            O que nos torna referência em advocacia técnica e personalizada.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {differentials.map((differential, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-2xl transition-all duration-500 h-full border border-transparent hover:border-secondary relative overflow-hidden">
                {/* Background pattern no hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  {/* Ícone */}
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 mx-auto">
                      <differential.icon className="text-2xl text-white" />
                    </div>
                  </div>

                  {/* Título */}
                  <h3 className="text-xl font-bold text-primary mb-3 text-center group-hover:text-secondary transition-colors duration-300">
                    {differential.title}
                  </h3>

                  {/* Linha decorativa */}
                  <div className="w-12 h-1 bg-secondary mx-auto mb-4 group-hover:w-20 transition-all duration-300" />

                  {/* Descrição */}
                  <p className="text-neutral-600 text-center leading-relaxed">
                    {differential.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Callout adicional */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-r from-primary to-primary/90 p-8 md:p-12 rounded-xl shadow-2xl text-white text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Compromisso com a <span className="text-secondary">Excelência Jurídica</span>
            </h3>
            <p className="text-lg text-neutral-100 leading-relaxed">
              Nossa atuação é pautada pela ética, transparência e respeito absoluto ao Código de Ética da OAB. 
              Não prometemos resultados, mas garantimos dedicação técnica, responsabilidade e comprometimento 
              com cada cliente.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
