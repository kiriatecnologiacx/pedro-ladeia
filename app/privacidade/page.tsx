import type { Metadata } from 'next';
import Link from 'next/link';
import { CREDENTIALS, PHONE_DISPLAY } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Política de Privacidade | Dr. Pedro Ladeia',
  description: 'Como tratamos os seus dados pessoais, conforme a LGPD (Lei nº 13.709/2018).',
};

export default function PrivacidadePage() {
  const h2 = 'font-serif text-xl sm:text-2xl text-brand-black mt-10 mb-3';
  const p = 'text-sm sm:text-base text-brand-charcoal/90 leading-relaxed font-light';
  return (
    <main className="min-h-screen bg-brand-beige-light text-brand-black px-5 sm:px-8 py-16 sm:py-24">
      <article className="max-w-3xl mx-auto">
        <Link href="/" className="text-xs uppercase tracking-widest text-brand-beige-dark font-semibold hover:text-brand-black">
          ← Voltar ao site
        </Link>
        <h1 className="font-serif text-3xl sm:text-5xl mt-6 mb-2">Política de Privacidade</h1>
        <p className="text-xs text-brand-charcoal/60 mb-8">Última atualização: novembro de 2026</p>

        <p className={p}>
          Esta política explica como o site do Dr. Pedro Henrique Ladeia Cruz ({CREDENTIALS}) trata os dados pessoais
          de quem o visita ou entra em contato, em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018, LGPD).
        </p>

        <h2 className={h2}>1. Quais dados coletamos</h2>
        <p className={p}>
          Este site não possui formulários de cadastro nem área restrita. Os dados que tratamos são aqueles que você
          mesmo nos envia ao clicar em um botão de WhatsApp e conversar com a nossa equipe, como nome, telefone e as
          informações que decidir compartilhar sobre a sua saúde ocular. Também podemos coletar dados técnicos de
          navegação (como tipo de dispositivo e páginas acessadas) por meio de cookies ou ferramentas de estatística, se estiverem ativas.
        </p>

        <h2 className={h2}>2. Para que usamos os dados</h2>
        <p className={p}>
          Usamos os dados para responder ao seu contato, agendar consultas, prestar informações sobre atendimento e
          entender de forma agregada de onde vêm os contatos (por exemplo, a mensagem “vim pelo site”). Não vendemos
          nem compartilhamos seus dados para fins de publicidade de terceiros.
        </p>

        <h2 className={h2}>3. Dados de saúde</h2>
        <p className={p}>
          Informações sobre saúde são dados pessoais sensíveis. Pedimos que, no WhatsApp, você compartilhe apenas o
          necessário para o agendamento. Detalhes clínicos são tratados na consulta, com sigilo médico e conforme o
          Código de Ética Médica.
        </p>

        <h2 className={h2}>4. Compartilhamento</h2>
        <p className={p}>
          Os dados podem ser tratados por prestadores essenciais ao serviço (como a plataforma WhatsApp e a hospedagem do
          site), sempre nos limites necessários, ou quando houver obrigação legal.
        </p>

        <h2 className={h2}>5. Por quanto tempo guardamos</h2>
        <p className={p}>
          Mantemos os dados pelo tempo necessário para a finalidade do contato e para cumprir obrigações legais e
          regulatórias. Prontuários médicos seguem os prazos de guarda previstos na legislação e nas normas do CFM.
        </p>

        <h2 className={h2}>6. Seus direitos</h2>
        <p className={p}>
          Você pode solicitar confirmação de que tratamos seus dados, acesso, correção, anonimização ou eliminação de dados
          desnecessários, portabilidade, informações sobre compartilhamento e a revogação do consentimento, nos termos do
          art. 18 da LGPD.
        </p>

        <h2 className={h2}>7. Como falar com a gente</h2>
        <p className={p}>
          Para exercer seus direitos ou tirar dúvidas sobre esta política, envie uma mensagem pelo WhatsApp {PHONE_DISPLAY}.
        </p>

        <h2 className={h2}>8. Alterações</h2>
        <p className={p}>
          Podemos atualizar esta política para refletir mudanças legais ou no site. A data da última atualização fica
          sempre no topo desta página.
        </p>
      </article>
    </main>
  );
}
