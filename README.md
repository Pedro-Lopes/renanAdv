# Redlien Advocacia - Site Institucional

Site institucional moderno e responsivo para o escritório de advocacia Redlien Advocacia.

## 🚀 Tecnologias Utilizadas

- **React 18** - Biblioteca JavaScript para construção de interfaces
- **Vite** - Build tool rápido e moderno
- **TailwindCSS** - Framework CSS utility-first
- **Framer Motion** - Biblioteca de animações
- **React Icons** - Biblioteca de ícones

## 🎨 Características

### Design
- ✅ Paleta de cores institucional (Azul #122e61 e Dourado #c19744)
- ✅ Tipografia elegante (Playfair Display + Inter)
- ✅ Layout moderno e minimalista
- ✅ Animações suaves com Framer Motion
- ✅ 100% responsivo (Mobile First)

### Funcionalidades
- ✅ Header com navegação fixa
- ✅ Hero Section com CTA
- ✅ Seção Sobre o Escritório
- ✅ Áreas de Atuação com cards interativos
- ✅ Diferenciais do escritório
- ✅ Seção de Ética Profissional
- ✅ Formulário de contato integrado
- ✅ Botão flutuante de WhatsApp
- ✅ Banner de cookies (LGPD)
- ✅ SEO básico configurado
- ✅ Footer institucional

### Conformidade
- ✅ Respeita regras da OAB
- ✅ Publicidade informativa
- ✅ Sem promessa de resultados
- ✅ Linguagem sóbria e técnica

## 📦 Instalação

```bash
# Instalar dependências
npm install

# Executar em modo de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build de produção
npm run preview
```

## 🔧 Configuração

### Personalização de Dados

Edite os seguintes arquivos para personalizar as informações:

1. **Dados de Contato** - [src/components/ContactSection.jsx](src/components/ContactSection.jsx)
   - Endereço
   - Telefone/WhatsApp
   - E-mail
   - Website

2. **Número do WhatsApp** - Atualizar em:
   - [src/components/HeroSection.jsx](src/components/HeroSection.jsx)
   - [src/components/WhatsAppButton.jsx](src/components/WhatsAppButton.jsx)
   - [src/components/ContactSection.jsx](src/components/ContactSection.jsx)

3. **Google Maps** - [src/components/ContactSection.jsx](src/components/ContactSection.jsx)
   - Substituir URL do iframe pelo mapa correto

4. **Imagens** - [src/components/AboutSection.jsx](src/components/AboutSection.jsx)
   - Adicionar imagens reais do escritório

## 📱 Estrutura de Componentes

```
src/
├── components/
│   ├── Header.jsx              # Navegação fixa
│   ├── Footer.jsx              # Rodapé
│   ├── HeroSection.jsx         # Seção principal
│   ├── AboutSection.jsx        # Sobre o escritório
│   ├── PracticeAreasSection.jsx # Áreas de atuação
│   ├── DifferentialsSection.jsx # Diferenciais
│   ├── EthicsSection.jsx       # Ética profissional
│   ├── ContactSection.jsx      # Contato
│   ├── WhatsAppButton.jsx      # Botão flutuante
│   └── CookieBanner.jsx        # Banner LGPD
├── App.jsx                     # Componente principal
├── main.jsx                    # Entry point
└── index.css                   # Estilos globais
```

## 🎯 Áreas de Atuação Incluídas

1. **Direito Imobiliário**
   - Regularização de imóveis
   - Escritura e registro
   - Usucapião
   - Adjudicação compulsória
   - Inventário e partilha
   - Planejamento sucessório

2. **Execução Fiscal e Defesa Tributária**
   - Defesa em execuções fiscais
   - Impugnações
   - Bloqueios judiciais
   - Prescrição e nulidades
   - Parcelamentos

3. **Estatuto do Desarmamento**
   - Orientação legal
   - Regularização
   - Processos administrativos
   - Defesa judicial

4. **Direito Civil e Contratual**
   - Elaboração de contratos
   - Responsabilidade civil
   - Obrigações patrimoniais
   - Contencioso estratégico

## 🌐 SEO

O site está configurado com:
- Meta tags otimizadas
- Descrição e palavras-chave
- Estrutura semântica HTML5
- Acessibilidade (ARIA labels)

## 📄 Licença

Este projeto é proprietário da Redlien Advocacia.

## 👨‍💻 Suporte

Para dúvidas ou suporte técnico, entre em contato através do e-mail: contato@redlien.com.br

---

**Redlien Advocacia** - Atuação estratégica, técnica e personalizada
