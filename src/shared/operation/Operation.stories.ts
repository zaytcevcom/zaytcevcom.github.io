import type { Meta } from '@storybook/react';
import { Operation } from './Operation';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Operation> = {
  title: 'Operation',
  component: Operation,
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
  },
};
