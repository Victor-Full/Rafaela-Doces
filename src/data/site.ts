export const brand = {
  name: 'Rafaela Macedo Kitandas',
  description: 'Cardápio de salgados, doces, bolos e pães da Rafaela Macedo Kitandas. Pedidos pelo WhatsApp.',
  logo: '/images/logo-rafaela-macedo.jpg',
};

const configuredNumber = import.meta.env.PUBLIC_WHATSAPP_NUMBER?.trim();
const whatsappNumber = configuredNumber?.replace(/[^\d]/g, '');

if (configuredNumber && !/^55[1-9]\d{9,10}$/.test(whatsappNumber ?? '')) {
  throw new Error('Configure PUBLIC_WHATSAPP_NUMBER com 55, DDD e número do WhatsApp.');
}

export const hasWhatsApp = Boolean(whatsappNumber);

const configuredInstagram = import.meta.env.PUBLIC_INSTAGRAM_URL?.trim();
export const instagramUrl = configuredInstagram?.split(/[?#]/, 1)[0] || undefined;

if (instagramUrl && !/^https:\/\/(?:www\.)?instagram\.com\/[a-z\d._]+\/?$/i.test(instagramUrl)) {
  throw new Error('Configure PUBLIC_INSTAGRAM_URL com o endereço completo do perfil do Instagram.');
}

export function whatsappLink(product?: string) {
  if (!whatsappNumber) return '#';

  const message = product
    ? `Olá, Rafaela! Gostaria de saber mais sobre ${product}.`
    : 'Olá, Rafaela! Vim pelo cardápio e gostaria de fazer um pedido.';

  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}
