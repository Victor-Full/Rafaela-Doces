import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const location = site?.href.replace(/&/g, '&amp;').replace(/</g, '&lt;');
  const sitemap = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...(location ? [`  <url><loc>${location}</loc></url>`] : []),
    '</urlset>',
    '',
  ].join('\n');

  return new Response(sitemap, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
