import type { Meta } from '@storybook/react';
import { ProductForm } from 'src/widgets/ProductForm/ProductForm';

const meta: Meta<typeof ProductForm> = {
  title: 'ProductForm',
  component: ProductForm,
  tags: ['autodocs'],
};

export default meta;

export const ProductFormStory = {};
