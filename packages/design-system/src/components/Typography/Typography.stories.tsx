import type { Meta, StoryObj } from '@storybook/react';

import { Typography as Component } from './Typography';

const meta: Meta<typeof Component> = {
  title: 'Fundamentals/Typography',
  component: Component,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Component>;

export const Body: Story = {
  args: {
    variant: 'body',
    text: 'This is body text',
  },
};

export const BodyCentered: Story = {
  args: {
    variant: 'body',
    text: 'This is a longer body text that demonstrates center alignment. It contains multiple sentences to show how the text wraps across multiple lines while maintaining the center alignment.',
    align: 'center'
  },
};

export const BodyRight: Story = {
  args: {
    variant: 'body', 
    text: 'This is a longer body text that demonstrates right alignment. It contains multiple sentences to show how the text wraps across multiple lines while maintaining the right alignment.',
    align: 'right'
  },
};


export const Heading1: Story = {
  args: {
    variant: 'h1',
    text: 'This is a heading 1 with a very long text to see the wrapping',
    element: 'h1',
    align: 'center'
  },
};

export const Heading2: Story = {
  args: {
    variant: 'h2', 
    text: 'This is a heading 2',
    element: 'h2',
  },
};

export const Heading3: Story = {
  args: {
    variant: 'h3',
    text: 'This is a heading 3',
    element: 'h3'
  },
};

export const Heading4: Story = {
  args: {
    variant: 'h4',
    text: 'This is a heading 4',
    element: 'h4'
  },
};

export const Heading5: Story = {
  args: {
    variant: 'h5',
    text: 'This is a heading 5',
    element: 'h5'
  },
};

export const Heading6: Story = {
  args: {
    variant: 'h6',
    text: 'This is a heading 6',
    element: 'h6'
  },
};

export const Subtitle: Story = {
  args: {
    variant: 'subtitle',
    text: 'This is a subtitle',
  },
};

export const Overtitle: Story = {
  args: {
    variant: 'overtitle',
    text: 'This is an overtitle',
  },
};

export const Label: Story = {
  args: {
    variant: 'label',
    text: 'This is a label',
  },
};

export const Main: Story = {
  args: {
    variant: 'main',
    text: 'This is main text',
  },
};

export const Accent: Story = {
  args: {
    variant: 'accent',
    text: 'This is accent text',
  },
};

export const WithHighlight: Story = {
  args: {
    variant: 'body',
    text: 'This text has highlighted words',
    highlightWords: [2, 3],
  },
};