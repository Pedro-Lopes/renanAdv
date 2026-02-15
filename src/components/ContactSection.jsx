import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { 
  FaPhone, 
  FaEnvelope, 
  FaGlobe,
  FaWhatsapp,
  FaPaperPlane
} from 'react-icons/fa';

/**
 * Componente ContactSection - Seção de Contato
 */
const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setFormStatus('sending');

    // Parâmetros para o template do EmailJS
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      from_phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
      to_email: 'rredlien@adv.oabrj.org.br'
    };

    // Enviar email usando EmailJS
    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      templateParams,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then((response) => {
        console.log('Email enviado com sucesso!', response.status, response.text);
        setFormStatus('success');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        
        setTimeout(() => {
          setFormStatus('');
        }, 5000);
      })
      .catch((error) => {
        console.error('Erro ao enviar email:', error);
        setFormStatus('error');
        
        setTimeout(() => {
          setFormStatus('');
        }, 5000);
      });
  };

  const contactInfo = [
    {
      icon: FaPhone,
      title: 'Telefone',
      info: '(21) 97022-6415',
      link: 'tel:+5521970226415'
    },
    {
      icon: FaEnvelope,
      title: 'E-mail',
      info: 'rredlien@adv.oabrj.org.br',
      link: 'mailto:rredlien@adv.oabrj.org.br'
    },
    {
      icon: FaGlobe,
      title: 'Website',
      info: 'www.redlien.com.br',
      link: 'https://www.redlien.com.br'
    }
  ];

  const phoneNumber = '5521970226415';
  const whatsappMessage = encodeURIComponent('Olá! Gostaria de solicitar uma consulta jurídica.');

  return (
    <section id="contato" className="py-20 bg-gradient-to-br from-neutral-50 to-white" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Entre em <span className="text-secondary">Contato</span>
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6" />
          <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
            Estamos à disposição para esclarecer dúvidas e agendar uma consulta personalizada.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Informações de contato */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-primary mb-8">
              Informações de Contato
            </h3>

            <div className="space-y-6 mb-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="text-white text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">{item.title}</h4>
                    {item.link ? (
                      <a
                        href={item.link}
                        className="text-neutral-600 hover:text-secondary transition-colors"
                      >
                        {item.info}
                      </a>
                    ) : (
                      <>
                        <p className="text-neutral-600">{item.info}</p>
                        {item.info2 && <p className="text-neutral-600">{item.info2}</p>}
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA WhatsApp */}
            <div className="bg-gradient-to-r from-primary to-primary/90 p-6 rounded-lg text-white">
              <h4 className="font-bold text-xl mb-3">Atendimento Rápido</h4>
              <p className="mb-4 text-neutral-100">
                Prefere falar por WhatsApp? Clique no botão abaixo para iniciar uma conversa.
              </p>
              <a
                href={`https://wa.me/${phoneNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                <FaWhatsapp className="text-xl" />
                Iniciar Conversa
              </a>
            </div>
          </motion.div>

          {/* Formulário de contato */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-primary mb-8">
              Envie uma Mensagem
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                  placeholder="Seu nome completo"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">
                    Telefone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                    placeholder="(XX) XXXXX-XXXX"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-2">
                  Assunto *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                  placeholder="Assunto da consulta"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all resize-none"
                  placeholder="Descreva brevemente sua necessidade jurídica..."
                />
              </div>

              <button
                type="submit"
                disabled={formStatus === 'sending'}
                className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {formStatus === 'sending' ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    Enviar Mensagem
                  </>
                )}
              </button>

              {formStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg"
                >
                  Mensagem enviada com sucesso! Entraremos em contato em breve.
                </motion.div>
              )}

              {formStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg"
                >
                  Erro ao enviar mensagem. Por favor, tente novamente ou entre em contato por WhatsApp.
                </motion.div>
              )}

              <p className="text-xs text-neutral-500 text-center">
                * Campos obrigatórios. Seus dados serão tratados com total sigilo.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
