import type { Meta, StoryObj } from '@storybook/react';

import { Skeleton as Component } from './Skeleton';

const meta: Meta<typeof Component> = {
  title: 'Feedback/Skeleton',
  component: Component,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Component>;

export const Skeleton: Story = {
  args: {
    className: 'h-12 w-[250px]'
  },
};
