import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Dr. Pedro Ladeia — Oftalmologia de Alta Precisão | Córnea & Catarata',
  description:
    'Mais de 15 anos de excelência médica e autoridade cirúrgica em Córnea, Catarata e Ceratocone. Atendimento privativo em Nova Lima e Santa Luzia.',
  keywords: [
    'Dr. Pedro Ladeia',
    'Oftalmologista Nova Lima',
    'Oftalmologista Santa Luzia',
    'Cirurgia de Catarata MG',
    'Lentes Premium',
    'Ceratocone Especialista',
    'Cirurgia Refrativa Laser',
    'Córnea Belo Horizonte',
  ],
  authors: [{ name: 'Dr. Pedro Henrique Ladeia Cruz' }],
  openGraph: {
    title: 'Dr. Pedro Ladeia — Oftalmologia de Alta Precisão',
    description:
      'Mais de 15 anos de autoridade cirúrgica em Córnea, Catarata e Ceratocone. Atendimento em Nova Lima e Santa Luzia.',
    url: 'https://pedroladeia.com.br',
    siteName: 'Dr. Pedro Ladeia Oftalmologia',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Pedro Ladeia — Oftalmologia de Alta Precisão',
    description:
      'Mais de 15 anos de autoridade cirúrgica em Córnea, Catarata e Ceratocone. Atendimento em Nova Lima e Santa Luzia.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans bg-brand-navy text-brand-offwhite min-h-screen selection:bg-brand-gold/30">
        {children}
      </body>
    </html>
  );
}
