import type { Meta, StoryObj } from "@storybook/react";

import { Button as Component } from "./Button";

const meta: Meta<typeof Component> = {
  title: "Navigation/Button",
  component: Component,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Component>;

export const Button: Story = {
  args: {
    children: "Button",
    variant: "primary",
    color: "main",
  },
};
