import type { Meta } from '@storybook/react';
import { Product } from './Product';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Product> = {
  title: 'Product',
  component: Product,
  tags: ['autodocs'],
};

export default meta;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const ProductStory = {
  args: {
    photo: 'https://barskayatrapeza.ru/image/cache/catalog/frukty/krasnyejabloki-750x670.jpg',
    name: 'Яблоки',
    description: 'Вкусные, свежие, домашние',
    price: 240,
  },
};
