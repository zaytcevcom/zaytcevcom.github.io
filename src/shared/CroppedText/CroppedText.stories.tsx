import React from 'react';
import type { Meta } from '@storybook/react';
import { CroppedText, CroppedTextProps } from './CroppedText';

const Wrapper = (props: CroppedTextProps) => (
  <div style={{ width: '260px', border: '1px solid rgb(240, 240, 240)', padding: '12px' }}>
    <CroppedText {...props} />
  </div>
);

const meta: Meta<typeof CroppedText> = {
  title: 'CroppedText',
  component: Wrapper,
  argTypes: {
    rows: { control: { type: 'number', min: 0 } },
  },
  tags: ['autodocs'],
};

export default meta;

export const CroppedTextStory = {
  args: {
    opened: false,
    rows: 1,
    children: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid at, dolore earum enim est eveniet facilis illo impedit in, itaque maxime necessitatibus nesciunt nihil non officiis placeat provident quasi reiciendis.`,
  },
};
