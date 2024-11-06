import type { Meta, StoryObj } from "@storybook/react";

import { ClickableLogo as Component } from "./ClickableLogo";

const meta: Meta<typeof Component> = {
  title: "Navigation/ClickableLogo",
  component: Component,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Component>;

export const ClickableLogo: Story = {
  args: {},
};
