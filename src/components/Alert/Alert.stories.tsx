import type { Meta, StoryObj } from "@storybook/react";

import { Alert as Component } from "./Alert";

const meta: Meta<typeof Component> = {
  title: "Feedback/Alert",
  component: Component,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Component>;

export const Alert: Story = {
  args: {
    variant: "default",
    title: "Alert Title",
    children: "Alert Description",
  },
};

export const Success: Story = {
  args: {
    variant: "success",
    title: "Success Alert",
    children: "Operation completed successfully",
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
    title: "Warning Alert",
    children: "Please review this important warning",
  },
};

export const Error: Story = {
  args: {
    variant: "error",
    title: "Error Alert",
    children: "An error occurred while processing your request",
  },
};

export const Info: Story = {
  args: {
    variant: "info",
    title: "Info Alert",
    children: "Here's some helpful information",
  },
};

export const NoTitle: Story = {
  args: {
    variant: "default",
    children: "Alert without a title",
  },
};
