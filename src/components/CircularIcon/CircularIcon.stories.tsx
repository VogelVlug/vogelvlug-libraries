import type { Meta, StoryObj } from "@storybook/react";

import { Film } from "lucide-react";
import { CircularIcon as Component } from "./CircularIcon";

const meta: Meta<typeof Component> = {
  title: "Feedback/CircularIcon",
  component: Component,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Component>;

export const CircularIcon: Story = {
  args: {
    Icon: Film,
    variant: "main",
  },
};
