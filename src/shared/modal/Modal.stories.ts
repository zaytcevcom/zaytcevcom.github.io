import type { Meta } from '@storybook/react';
import { Modal } from './Modal';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Modal> = {
  title: 'Modal',
  component: Modal,
  tags: ['autodocs'],
};

export default meta;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Visible = {
  args: {
    visible: true,
    children: 'text example',
  },
};

export const Hidden = {
  args: {
    visible: false,
  },
};
