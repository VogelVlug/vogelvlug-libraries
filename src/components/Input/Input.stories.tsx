import type { Meta, StoryObj } from '@storybook/react';

import { Input as Component } from './Input';

const meta: Meta<typeof Component> = {
  title: 'Form/Input',
  component: Component,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Component>;

export const Input: Story = {
  args: {
    placeholder: 'some placeholder',
  },
};