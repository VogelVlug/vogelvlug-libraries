import type { Meta, StoryObj } from '@storybook/react';

import { Checkbox as Component } from './Checkbox';

const meta: Meta<typeof Component> = {
  title: 'Form/Checkbox',
  component: Component,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Component>;

export const Checkbox: Story = {
  args: {
    onCheckedChange: (checked: boolean) => console.log('Checkbox checked:', checked),
  },
};