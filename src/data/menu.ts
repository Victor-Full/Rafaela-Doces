export const categories = [
  { id: 'salgados', name: 'Salgados', icon: 'snack', cover: 'paozinho-recheado' },
  { id: 'doces', name: 'Doces e bolos', icon: 'cake', cover: 'bolo-com-cobertura' },
  { id: 'paes', name: 'Pães', icon: 'bread', cover: 'pao-caseiro' },
] as const;

type Category = (typeof categories)[number]['id'];
type Crop = [left: number, top: number, width: number];

export interface MenuItem {
  id: string;
  name: string;
  category: Category;
  whatsappQuestion: string;
  source?: 'rosca';
  crop: Crop;
}

export type OrderProduct = Pick<MenuItem, 'name' | 'whatsappQuestion'>;

export function menuOrderMessage(product: OrderProduct, quantity = 1) {
  return `Olá, Rafaela! Vim pelo cardápio e gostaria de fazer este pedido.\n\n${quantity} × ${product.name}\n\n${product.whatsappQuestion}`;
}

// Each origin and width is measured in pixels on the original photo. The
// card's aspect ratio supplies the height without changing the original file.
export const menu: MenuItem[] = [
  {
    id: 'paozinho-recheado', name: 'Pãozinho recheado', category: 'salgados', crop: [232, 566, 298],
    whatsappQuestion: 'Qual é o recheio e quanto fica a porção?',
  },
  {
    id: 'rosca-doce', name: 'Rosca doce', category: 'doces', source: 'rosca', crop: [0, 564, 720],
    whatsappQuestion: 'Qual é o tamanho da rosca e quanto custa a unidade?',
  },
  {
    id: 'enroladinho-salsicha', name: 'Enroladinho de salsicha', category: 'salgados', crop: [246, 226, 248],
    whatsappQuestion: 'Você vende por unidade ou por porção? Pode me passar o valor?',
  },
  {
    id: 'bolo-com-cobertura', name: 'Bolo com cobertura', category: 'doces', crop: [270, 939, 216],
    whatsappQuestion: 'Qual é o sabor da massa e da cobertura? Quais tamanhos posso encomendar?',
  },
  {
    id: 'pao-caseiro', name: 'Pão caseiro', category: 'paes', crop: [0, 881, 265],
    whatsappQuestion: 'Quanto custa o pão inteiro e para quando consigo encomendar?',
  },
  {
    id: 'rosquinha-espiral', name: 'Rosquinha espiral', category: 'doces', crop: [0, 554, 221],
    whatsappQuestion: 'Quantas rosquinhas vêm na porção e qual é o valor?',
  },
  {
    id: 'assado-em-fatias', name: 'Salgado assado em fatias', category: 'salgados', crop: [504, 261, 216],
    whatsappQuestion: 'Qual é o recheio e como as fatias são vendidas?',
  },
  {
    id: 'enroladinho-doce', name: 'Enroladinho doce', category: 'doces', crop: [0, 246, 236],
    whatsappQuestion: 'Pode me dizer qual é o sabor e o prazo para encomendar?',
  },
  {
    id: 'pao-trancado', name: 'Pão trançado', category: 'paes', crop: [503, 935, 195],
    whatsappQuestion: 'Qual é o tamanho do pão e quanto fica uma encomenda?',
  },
  {
    id: 'paozinho-redondo', name: 'Pãozinho redondo', category: 'paes', crop: [538, 649, 173],
    whatsappQuestion: 'Quantos pãezinhos vêm por porção? Queria saber o preço para o café.',
  },
  {
    id: 'paozinho-doce', name: 'Pãozinho doce', category: 'doces', crop: [272, 1236, 222],
    whatsappQuestion: 'Como é a cobertura e qual é o valor por unidade ou por porção?',
  },
  {
    id: 'paozinho-enrolado', name: 'Pãozinho enrolado', category: 'paes', crop: [499, 1239, 201],
    whatsappQuestion: 'É possível encomendar uma porção? Pode me passar a quantidade e o valor?',
  },
  {
    id: 'pao-doce-com-coco', name: 'Pão doce com coco', category: 'doces', crop: [0, 1203, 268],
    whatsappQuestion: 'Qual é o tamanho da porção e para quando posso encomendar?',
  },
];
