import type { Meta, StoryObj } from "@storybook/react";

import { Divider as Component } from "./Divider";

const meta: Meta<typeof Component> = {
  title: "Fundamentals/Divider",
  component: Component,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Component>;

export const Divider: Story = {
  args: {
    className: "my-4",
  },
};
