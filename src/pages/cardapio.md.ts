import type { APIRoute } from 'astro';
import { categories, menu } from '../data/menu';
import { brand, hasWhatsApp, whatsappLink } from '../data/site';

export const GET: APIRoute = ({ site }) => {
  const text = [
    `# Cardápio da ${brand.name}`, '',
    brand.description, '',
    ...categories.flatMap(({ id, name }) => [
      `## ${name}`, '',
      ...menu.filter((item) => item.category === id).map((item) => {
        const link = site ? new URL(`#${item.id}`, site).href : `/#${item.id}`;
        return `- [${item.name}](${link})`;
      }),
      '',
    ]),
    '## Pedidos', '',
    hasWhatsApp
      ? `Consulte valores e disponibilidade pelo [WhatsApp](${whatsappLink()}).`
      : 'O contato comercial para pedidos será disponibilizado no site.',
    '',
  ].join('\n');

  return new Response(text, { headers: { 'Content-Type': 'text/markdown; charset=utf-8' } });
};
