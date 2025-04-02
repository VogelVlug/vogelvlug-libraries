import type { Meta, StoryObj } from "@storybook/react";

import {
  CollapsibleContent,
  CollapsibleTrigger,
  Collapsible as Component,
} from "./Collapsible";

const meta: Meta<typeof Component> = {
  title: "Surfaces/Collapsible",
  component: Component,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Component>;

export const Collapsible: Story = {
  args: {
    children: (
      <>
        <CollapsibleTrigger className="w-48">
          Click to expand
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div className="w-48">
            This is the content that will be shown when expanded. It can contain
            any React elements or text content.
          </div>
        </CollapsibleContent>
      </>
    ),
  },
};
