import type { Meta } from '@storybook/react';
import { ModalWithInput } from './ModalWithInput';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof ModalWithInput> = {
  title: 'ModalWithInput',
  component: ModalWithInput,
  tags: ['autodocs'],
};

export default meta;

export const ModalWithInputStory = {
  args: {},
};
