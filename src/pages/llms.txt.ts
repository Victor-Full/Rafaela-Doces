import type { APIRoute } from 'astro';
import { brand, sitePath, whatsappLink } from '../data/site';

export const GET: APIRoute = ({ site }) => {
  const home = site ? new URL(sitePath(), site).href : sitePath();
  const menu = site ? new URL('cardapio.md', home).href : sitePath('cardapio.md');
  const text = [
    `# ${brand.name}`, '',
    `> ${brand.description}`, '',
    'Os pedidos são feitos na conversa pelo WhatsApp.', '',
    '## Cardápio e pedidos', '',
    `- [Cardápio online](${home}): produtos e informações sobre o pedido.`,
    `- [Cardápio em Markdown](${menu}): lista de produtos por categoria.`,
    `- [WhatsApp para pedidos](${whatsappLink()}): canal de atendimento.`,
    '',
  ].join('\n');

  return new Response(text, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
