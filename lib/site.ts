export const WHATSAPP_NUMBER = '5531998972000';
export const PHONE_DISPLAY = '(31) 99897-2000';
export const CRM = 'CRM-MG 48344';
export const RQE = 'RQE 40934';
export const CREDENTIALS = `${CRM} · ${RQE}`;

/** Monta link do WhatsApp; toda mensagem leva "vim pelo site" para rastreio na planilha. */
export function wa(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`${message} (vim pelo site)`)}`;
}
