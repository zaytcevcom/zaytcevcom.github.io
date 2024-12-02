import type { Meta } from '@storybook/react';
import { AddToCart } from './AddToCart';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof AddToCart> = {
  title: 'AddToCart',
  component: AddToCart,
  tags: ['autodocs'],
};

export default meta;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Empty = {
  args: {
    count: 0,
    disabled: false,
  },
};

export const SetValue = {
  args: {
    count: 5,
    disabled: false,
  },
};

export const Disabled = {
  args: {
    count: 0,
    disabled: true,
  },
};
