import type { Meta } from '@storybook/react';
import { ProductFull } from './ProductFull';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof ProductFull> = {
  title: 'ProductFull',
  component: ProductFull,
  tags: ['autodocs'],
};

export default meta;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const ProductFullStory = {
  args: {
    photo: 'https://barskayatrapeza.ru/image/cache/catalog/frukty/krasnyejabloki-750x670.jpg',
    category: 'Овощи и фрукты',
    name: 'Яблоки',
    description: 'Вкусные, свежие, домашние',
    price: 240,
  },
};
