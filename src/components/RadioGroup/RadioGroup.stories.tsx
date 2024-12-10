import type { Meta, StoryObj } from "@storybook/react";

import { Label } from "../Label/Label";
import { RadioGroup as Component, RadioGroupItem } from "./RadioGroup";

const meta: Meta<typeof Component> = {
  title: "Form/RadioGroup",
  component: Component,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Component>;

export const RadioGroup: Story = {
  args: {
    defaultValue: "option1",
    children: [
      <div key="1" className="flex items-center space-x-2">
        <RadioGroupItem value="option1" id="option1" />
        <Label htmlFor="option1">Option 1</Label>
      </div>,
      <div key="2" className="flex items-center space-x-2">
        <RadioGroupItem value="option2" id="option2" />
        <Label htmlFor="option2">Option 2</Label>
      </div>,
      <div key="3" className="flex items-center space-x-2">
        <RadioGroupItem value="option3" id="option3" />
        <Label htmlFor="option3">Option 3</Label>
      </div>,
    ],
  },
};
