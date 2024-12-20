import type { Meta, StoryObj } from "@storybook/react";
import { Mail, Search, User } from "lucide-react";

import { Input as Component } from "./Input";

const meta: Meta<typeof Component> = {
  title: "Form/Input",
  component: Component,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Component>;

export const Default: Story = {
  args: {
    placeholder: "Enter text...",
  },
};

export const WithPrefix: Story = {
  args: {
    placeholder: "Search...",
    prefix: <Search className="h-4 w-4" />,
  },
};

export const WithSuffix: Story = {
  args: {
    placeholder: "Enter email",
    suffix: <Mail className="h-4 w-4" />,
  },
};

export const WithBothAdornments: Story = {
  args: {
    placeholder: "Enter username",
    prefix: <User className="h-4 w-4" />,
    suffix: <span className="text-xs">Required</span>,
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "Disabled input",
    prefix: <Search className="h-4 w-4" />,
    disabled: true,
  },
};
