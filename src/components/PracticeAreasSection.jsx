import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  FaHome, 
  FaLandmark, 
  FaGavel, 
  FaFileContract,
  FaCheckCircle 
} from 'react-icons/fa';

/**
 * Componente PracticeAreasSection - Áreas de Atuação
 */
const PracticeAreasSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const areas = [
    {
      icon: FaHome,
      title: 'Direito Imobiliário',
      description: 'Regularização de imóveis, escritura e registro, usucapião e planejamento sucessório.',
      items: [
        'Regularização de imóveis',
        'Escritura e registro',
        'Usucapião',
        'Adjudicação compulsória',
        'Inventário e partilha',
        'Planejamento sucessório'
      ],
      color: 'from-primary to-primary/80'
    },
    {
      icon: FaLandmark,
      title: 'Execução Fiscal e Defesa Tributária',
      description: 'Defesa especializada em execuções fiscais e questões tributárias complexas.',
      items: [
        'Defesa em execuções fiscais',
        'Impugnações',
        'Bloqueios judiciais',
        'Prescrição e nulidades',
        'Parcelamentos tributários'
      ],
      color: 'from-secondary to-secondary/80'
    },
    {
      icon: FaGavel,
      title: 'Estatuto do Desarmamento',
      description: 'Orientação legal e defesa em processos relacionados ao porte e posse de armas.',
      items: [
        'Orientação legal',
        'Regularização de armas',
        'Processos administrativos',
        'Defesa judicial',
        'Recursos e impugnações'
      ],
      color: 'from-primary to-primary/80'
    },
    {
      icon: FaFileContract,
      title: 'Direito Civil e Contratual',
      description: 'Elaboração de contratos, responsabilidade civil e contencioso estratégico.',
      items: [
        'Elaboração de contratos',
        'Responsabilidade civil',
        'Obrigações patrimoniais',
        'Contencioso estratégico',
        'Revisão contratual'
      ],
      color: 'from-secondary to-secondary/80'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="areas" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Áreas de <span className="text-secondary">Atuação</span>
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6" />
          <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
            Atuação especializada em diversas áreas do direito, sempre com foco em 
            soluções estratégicas e personalizadas.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {areas.map((area, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-neutral-200 hover:border-secondary"
            >
              {/* Gradiente de fundo no hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${area.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              <div className="relative p-8">
                {/* Ícone */}
                <div className="mb-6 flex items-center justify-between">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
                    <area.icon className="text-3xl text-white" />
                  </div>
                  
                  {/* Número decorativo */}
                  <span className="text-6xl font-bold text-neutral-100 group-hover:text-secondary/20 transition-colors">
                    0{index + 1}
                  </span>
                </div>

                {/* Título */}
                <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors duration-300">
                  {area.title}
                </h3>

                {/* Descrição */}
                <p className="text-neutral-600 mb-6 leading-relaxed">
                  {area.description}
                </p>

                {/* Lista de serviços */}
                <ul className="space-y-2">
                  {area.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-neutral-700">
                      <FaCheckCircle className="text-secondary mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Linha decorativa inferior */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PracticeAreasSection;
