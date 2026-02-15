# Configuração do EmailJS para Formulário de Contato

Este guia explica como configurar o EmailJS para que o formulário de contato do site envie emails para **rredlien@adv.oabrj.org.br**.

## Passo 1: Criar Conta no EmailJS

1. Acesse [https://www.emailjs.com/](https://www.emailjs.com/)
2. Clique em **"Sign Up"** (ou "Create Account")
3. Faça login com Google ou crie uma conta com email

## Passo 2: Adicionar Serviço de Email

1. No painel do EmailJS, vá em **"Email Services"**
2. Clique em **"Add New Service"**
3. Escolha seu provedor de email:
   - **Gmail** (se usar Gmail)
   - **Outlook/Hotmail** (se usar email da Microsoft)
   - **Outro provedor**
4. Conecte sua conta de email **rredlien@adv.oabrj.org.br**
5. Copie o **Service ID** que aparece (algo como `service_xxxxxxx`)

## Passo 3: Criar Template de Email

1. Vá em **"Email Templates"**
2. Clique em **"Create New Template"**
3. Configure o template com os seguintes campos:

### Configurações do Template:

**Subject (Assunto):**
```
Nova mensagem do site - {{subject}}
```

**Content (Corpo do email):**
```
Você recebeu uma nova mensagem através do formulário de contato do site Redlien Advocacia.

Nome: {{from_name}}
Email: {{from_email}}
Telefone: {{from_phone}}
Assunto: {{subject}}

Mensagem:
{{message}}

---
Esta mensagem foi enviada através do formulário de contato do site.
```

**To Email:**
```
{{to_email}}
```

4. Clique em **"Save"**
5. Copie o **Template ID** (algo como `template_xxxxxxx`)

## Passo 4: Obter Public Key

1. Vá em **"Account"** > **"General"**
2. Encontre a seção **"Public Key"**
3. Copie a **Public Key** (algo como `xxxxxxxxxxxxxxxx`)

## Passo 5: Configurar Variáveis de Ambiente

1. Abra o arquivo `.env` na raiz do projeto
2. Cole as credenciais copiadas:

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxx
```

3. Salve o arquivo

## Passo 6: Reiniciar o Servidor

Para que as variáveis de ambiente sejam carregadas, reinicie o servidor de desenvolvimento:

```bash
# Pare o servidor (Ctrl+C)
# E inicie novamente:
npm run dev
```

## Testando

1. Acesse o site
2. Preencha o formulário de contato
3. Clique em **"Enviar Mensagem"**
4. Verifique sua caixa de entrada em **rredlien@adv.oabrj.org.br**

## Limites do Plano Gratuito

O plano gratuito do EmailJS permite:
- ✅ **200 emails por mês**
- ✅ **Uso ilimitado de templates**
- ✅ **Todos os provedores de email**

Se precisar de mais emails, há planos pagos a partir de $7/mês.

## Problemas Comuns

### Email não chega
- Verifique a pasta de spam/lixo eletrônico
- Confirme que o email está conectado corretamente no EmailJS
- Teste enviando um email de teste pelo painel do EmailJS

### Erro "Failed to send email"
- Verifique se as variáveis de ambiente estão corretas
- Certifique-se de ter reiniciado o servidor após configurar o `.env`
- Verifique o console do navegador para mais detalhes do erro

### Gmail bloqueia o envio
- Ative "Acesso de apps menos seguros" nas configurações do Gmail
- OU use "Senhas de app" se tiver autenticação de 2 fatores ativada

## Suporte

Se tiver dúvidas, consulte a documentação oficial: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
