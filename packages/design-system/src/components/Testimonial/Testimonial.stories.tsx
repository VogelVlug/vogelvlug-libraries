import type { Meta, StoryObj } from '@storybook/react';

import { Testimonial as Component } from './Testimonial';

const meta: Meta<typeof Component> = {
  title: 'Layout/Testimonial',
  component: Component,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Component>;

export const Testimonial: Story = {
  args: {
    imageSrc: "https://i.pravatar.cc/300",
    name: "Jane Smith",
    tagline: "CEO at TechCorp",
    text: "This product has completely transformed how we work. The interface is intuitive and the features are exactly what we needed. I couldn't be happier with the results we've seen since implementing it."
  },
};