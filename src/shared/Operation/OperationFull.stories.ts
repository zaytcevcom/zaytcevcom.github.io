import type { Meta } from '@storybook/react';
import { OperationFull } from './OperationFull';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof OperationFull> = {
  title: 'OperationFull',
  component: OperationFull,
  tags: ['autodocs'],
};

export default meta;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const OperationStory = {
  args: {
    amount: 240,
    category: 'Овощи и фрукты',
    name: 'Яблоки',
    description: 'Вкусные, свежие, домашние',
    createdAt: '24.09.2024',
  },
};
