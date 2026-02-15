import React from 'react';
import { FaInstagram, FaLinkedin, FaEnvelope, FaPhone, FaIdBadge } from 'react-icons/fa';

/**
 * Componente Footer - Rodapé institucional
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Coluna 1 - Branding */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Redlien <span className="text-secondary">Advocacia</span>
            </h3>
            <p className="text-neutral-200 text-sm">
              Atuação estratégica, técnica e personalizada.
            </p>
          </div>

          {/* Coluna 2 - Links Rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-secondary">Links Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#sobre" className="hover:text-secondary transition-colors">
                  Sobre o Escritório
                </a>
              </li>
              <li>
                <a href="#areas" className="hover:text-secondary transition-colors">
                  Áreas de Atuação
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-secondary transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 3 - Contato */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-secondary">Contato</h4>
            <ul className="space-y-2 text-sm text-neutral-200">
              <li className="flex items-center gap-2">
                <FaPhone className="text-secondary" />
                <span>(21) 97022-6415</span>
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-secondary" />
                <span>rredlien@adv.oabrj.org.br</span>
              </li>
            </ul>
            <p className="mt-3 text-sm text-neutral-300 flex items-center gap-2">
              <FaIdBadge className="text-secondary" />
              <span>OAB/RJ 262.895</span>
            </p>
            
            {/* Social Media */}
            <div className="flex gap-4 mt-4">
              <a
                href="#"
                className="text-2xl hover:text-secondary transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="text-2xl hover:text-secondary transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-neutral-700 mt-8 pt-8">
          <div className="text-center text-sm text-neutral-300">
            <p className="mb-2">
              © {currentYear} Redlien Advocacia. Todos os direitos reservados.
            </p>
            <p className="text-xs">
              Este site tem caráter meramente informativo, em conformidade com o Código de Ética e Disciplina da OAB.
              Não há promessa ou garantia de êxito nas demandas apresentadas.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
