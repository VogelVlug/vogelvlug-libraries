import type { Meta, StoryObj } from "@storybook/react";

import { Switch as Component } from "./Switch";

const meta: Meta<typeof Component> = {
  title: "Form/Switch",
  component: Component,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Component>;

export const Switch: Story = {
  args: {},
};

export const AccentSwitch: Story = {
  args: {
    variant: "accent",
  },
};
