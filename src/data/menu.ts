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
  source?: 'rosca';
  crop: Crop;
}

// Each origin and width is measured in pixels on the original photo. The
// card's aspect ratio supplies the height without changing the original file.
export const menu: MenuItem[] = [
  { id: 'paozinho-recheado', name: 'Pãozinho recheado', category: 'salgados', crop: [232, 566, 298] },
  { id: 'rosca-doce', name: 'Rosca doce', category: 'doces', source: 'rosca', crop: [0, 564, 720] },
  { id: 'enroladinho-salsicha', name: 'Enroladinho de salsicha', category: 'salgados', crop: [246, 226, 248] },
  { id: 'bolo-com-cobertura', name: 'Bolo com cobertura', category: 'doces', crop: [270, 939, 216] },
  { id: 'pao-caseiro', name: 'Pão caseiro', category: 'paes', crop: [0, 881, 265] },
  { id: 'rosquinha-espiral', name: 'Rosquinha espiral', category: 'doces', crop: [0, 554, 221] },
  { id: 'assado-em-fatias', name: 'Salgado assado em fatias', category: 'salgados', crop: [504, 261, 216] },
  { id: 'enroladinho-doce', name: 'Enroladinho doce', category: 'doces', crop: [0, 246, 236] },
  { id: 'pao-trancado', name: 'Pão trançado', category: 'paes', crop: [503, 935, 195] },
  { id: 'paozinho-redondo', name: 'Pãozinho redondo', category: 'paes', crop: [538, 649, 173] },
  { id: 'paozinho-doce', name: 'Pãozinho doce', category: 'doces', crop: [272, 1236, 222] },
  { id: 'paozinho-enrolado', name: 'Pãozinho enrolado', category: 'paes', crop: [499, 1239, 201] },
  { id: 'pao-doce-com-coco', name: 'Pão doce com coco', category: 'doces', crop: [0, 1203, 268] },
];
