import type { Meta, StoryObj } from "@storybook/react";

import { Textarea } from "./Textarea";

const meta: Meta<typeof Textarea> = {
  title: "Form/Textarea",
  component: Textarea,
  tags: ["autodocs"],
  argTypes: {
    disabled: {
      control: "boolean",
    },
    placeholder: {
      control: "text",
    },
    rows: {
      control: "number",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {
    placeholder: "Enter your message here...",
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "This textarea is disabled",
    disabled: true,
  },
};

export const WithRows: Story = {
  args: {
    placeholder: "This textarea has 5 rows",
    rows: 5,
  },
};

export const Invalid: Story = {
  args: {
    placeholder: "This textarea is invalid",
    "aria-invalid": true,
  },
};

export const WithValue: Story = {
  args: {
    defaultValue:
      "This is a pre-filled message. You can edit it if you want to.",
  },
};
