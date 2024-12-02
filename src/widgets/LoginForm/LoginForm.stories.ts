import type { Meta } from '@storybook/react';
import { LoginForm } from 'src/widgets/LoginForm/LoginForm';

const meta: Meta<typeof LoginForm> = {
  title: 'LoginForm',
  component: LoginForm,
  tags: ['autodocs'],
};

export default meta;

export const LoginFormStory = {};
