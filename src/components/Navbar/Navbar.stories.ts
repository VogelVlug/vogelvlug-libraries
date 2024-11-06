import type { Meta, StoryObj } from "@storybook/react";

import { Navbar as Component } from "./Navbar";

const meta: Meta<typeof Component> = {
  title: "Navigation/Navbar",
  component: Component,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Component>;

export const Navbar: Story = {
  args: {
    routes: [],
  },
};
