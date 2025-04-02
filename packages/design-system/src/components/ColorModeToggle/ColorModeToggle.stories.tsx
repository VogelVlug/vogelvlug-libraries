import type { Meta, StoryObj } from "@storybook/react";
import { ColorModeToggle } from "./ColorModeToggle";

const meta = {
  title: "Fundamentals/ColorModeToggle",
  component: ColorModeToggle,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ColorModeToggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {}; 