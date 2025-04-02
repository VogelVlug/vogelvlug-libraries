import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../Button/Button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./Tooltip";

const meta: Meta<typeof Tooltip> = {
  title: "Feedback/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <TooltipProvider>
        <Story />
      </TooltipProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Basic: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Hover me</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Add to cart</p>
      </TooltipContent>
    </Tooltip>
  ),
};

export const WithLongContent: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Hover for more info</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>
          This is a longer tooltip message that explains more details about the
          feature.
        </p>
      </TooltipContent>
    </Tooltip>
  ),
};

export const OnText: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger className="text-blue-500 cursor-help underline">
        Hover over this text
      </TooltipTrigger>
      <TooltipContent>
        <p>This shows how tooltips work on text elements</p>
      </TooltipContent>
    </Tooltip>
  ),
};
