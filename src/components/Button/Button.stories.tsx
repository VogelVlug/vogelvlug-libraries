import type { Meta, StoryObj } from "@storybook/react";
import { Plus } from "lucide-react";

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

export const defaultButton: Story = {
  args: {
    children: "Button",
    variant: "default",
  },
};

export const accentButton: Story = {
  args: {
    children: "Button",
    variant: "secondary",
  },
};

export const outlinedButton: Story = {
  args: {
    children: "Button",
    variant: "outline",
  },
};

export const destructiveButton: Story = {
  args: {
    children: "Button",
    variant: "destructive",
  },
};

export const ghostButton: Story = {
  args: {
    children: "Button",
    variant: "ghost",
  },
};

export const linkButton: Story = {
  args: {
    children: "Button",
    variant: "link",
  },
};

export const smallButton: Story = {
  args: {
    children: "Button",
    size: "sm",
  },
};

export const defaultSizeButton: Story = {
  args: {
    children: "Button",
    size: "default",
  },
};

export const largeButton: Story = {
  args: {
    children: "Button",
    size: "lg",
  },
};

export const iconButton: Story = {
  args: {
    children: <Plus className="h-6 w-6" />,
    size: "icon",
    variant: "outline",
  },
};
