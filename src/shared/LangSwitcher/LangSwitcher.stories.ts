import type { Meta } from '@storybook/react';
import { LangSwitcher } from 'src/shared/LangSwitcher/LangSwitcher';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof LangSwitcher> = {
  title: 'LangSwitcher',
  component: LangSwitcher,
  tags: ['autodocs'],
};

export default meta;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const LangSwitcherStory = {};
