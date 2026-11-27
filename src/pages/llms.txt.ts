import type { APIRoute } from 'astro';
import { brand, hasWhatsApp, whatsappLink } from '../data/site';

export const GET: APIRoute = ({ site }) => {
  const home = site?.href ?? '/';
  const menu = site ? new URL('cardapio.md', site).href : '/cardapio.md';
  const text = [
    `# ${brand.name}`, '',
    `> ${brand.description}`, '',
    hasWhatsApp ? 'Os pedidos são feitos na conversa pelo WhatsApp.' : 'O contato comercial para pedidos será disponibilizado no site.', '',
    '## Cardápio e pedidos', '',
    `- [Cardápio online](${home}): produtos e informações sobre o pedido.`,
    `- [Cardápio em Markdown](${menu}): lista de produtos por categoria.`,
    ...(hasWhatsApp ? [`- [WhatsApp para pedidos](${whatsappLink()}): canal de atendimento.`] : []),
    '',
  ].join('\n');

  return new Response(text, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
