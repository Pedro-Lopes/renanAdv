import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaBalanceScale, FaUserShield, FaHandshake, FaBan, FaInfoCircle } from 'react-icons/fa';

/**
 * Componente EthicsSection - Ética Profissional
 */
const EthicsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const ethicsPoints = [
    {
      icon: FaUserShield,
      title: 'Sigilo Profissional',
      description: 'Absoluta confidencialidade em todas as informações e documentos compartilhados.'
    },
    {
      icon: FaBalanceScale,
      title: 'Independência Técnica',
      description: 'Atuação livre de influências externas, pautada exclusivamente pela lei e ética.'
    },
    {
      icon: FaHandshake,
      title: 'Urbanidade Processual',
      description: 'Tratamento respeitoso com todas as partes envolvidas nos processos.'
    },
    {
      icon: FaBan,
      title: 'Vedação à Promessa de Resultados',
      description: 'Compromisso com atuação técnica, sem garantias sobre o desfecho das demandas.'
    },
    {
      icon: FaInfoCircle,
      title: 'Publicidade Informativa',
      description: 'Comunicação clara e objetiva, em total conformidade com as normas da OAB.'
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden" ref={ref}>
      {/* Background decorativo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <FaBalanceScale className="text-primary text-[300px]" />
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Ética <span className="text-secondary">Profissional</span>
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6" />
          <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
            Nossa atuação está fundamentada nos mais altos padrões éticos estabelecidos pelo Código de Ética da OAB.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ethicsPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-neutral-50 to-white p-6 rounded-lg border border-neutral-200 hover:border-secondary hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mb-4">
                    <point.icon className="text-2xl text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-2">
                    {point.title}
                  </h3>
                  <p className="text-sm text-neutral-600">
                    {point.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Aviso institucional */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 bg-neutral-100 border-l-4 border-secondary p-6 rounded-r-lg"
          >
            <p className="text-sm text-neutral-700 leading-relaxed">
              <strong className="text-primary">Aviso Importante:</strong> Este site tem caráter meramente informativo, 
              em conformidade com o Código de Ética e Disciplina da OAB. A advocacia não admite promessa ou garantia 
              de êxito nas causas. Todos os serviços são prestados com base na análise técnica individualizada de cada 
              caso, respeitando os limites legais e éticos da profissão.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EthicsSection;
