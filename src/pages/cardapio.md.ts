import type { APIRoute } from 'astro';
import { categories, menu } from '../data/menu';
import { brand, sitePath, whatsappLink } from '../data/site';

export const GET: APIRoute = ({ site }) => {
  const home = site ? new URL(sitePath(), site).href : sitePath();
  const text = [
    `# Cardápio da ${brand.name}`, '',
    brand.description, '',
    ...categories.flatMap(({ id, name }) => [
      `## ${name}`, '',
      ...menu.filter((item) => item.category === id).map((item) => `- [${item.name}](${home}#${item.id})`),
      '',
    ]),
    '## Pedidos', '',
    `Consulte valores e disponibilidade pelo [WhatsApp](${whatsappLink()}).`,
    '',
  ].join('\n');

  return new Response(text, { headers: { 'Content-Type': 'text/markdown; charset=utf-8' } });
};
