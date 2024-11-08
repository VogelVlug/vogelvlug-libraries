import type { Meta, StoryObj } from "@storybook/react";

import { Sheet as Component, SheetContent, SheetTrigger } from "./Sheet";
import { Button } from "../Button/Button";

const meta: Meta<typeof Component> = {
  title: "Navigation/Sheet",
  component: Component,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Component>;

export const Sheet: Story = {
  args: {
    children: (
      <>
        <SheetTrigger asChild>
          <Button variant="outline">Open Sheet</Button>
        </SheetTrigger>
        <SheetContent>
          <div className="grid gap-4">
            <h2 className="text-lg font-semibold">Sheet Title</h2>
            <p className="text-sm text-muted-foreground">
              This is a basic sheet component that slides in from the side of the screen.
            </p>
            <div className="flex flex-col gap-2">
              <Button>Action 1</Button>
              <Button variant="outline">Action 2</Button>
            </div>
          </div>
        </SheetContent>
      </>
    ),
  },
};

export const SheetTop: Story = {
  args: {
    children: (
      <>
        <SheetTrigger asChild>
          <Button variant="outline">Open Top Sheet</Button>
        </SheetTrigger>
        <SheetContent side="top">
          <div className="grid gap-4">
            <h2 className="text-lg font-semibold">Top Sheet</h2>
            <p className="text-sm text-muted-foreground">
              This sheet slides in from the top of the screen.
            </p>
            <div className="flex gap-2">
              <Button>Action 1</Button>
              <Button variant="outline">Action 2</Button>
            </div>
          </div>
        </SheetContent>
      </>
    ),
  },
};

export const SheetBottom: Story = {
  args: {
    children: (
      <>
        <SheetTrigger asChild>
          <Button variant="outline">Open Bottom Sheet</Button>
        </SheetTrigger>
        <SheetContent side="bottom">
          <div className="grid gap-4">
            <h2 className="text-lg font-semibold">Bottom Sheet</h2>
            <p className="text-sm text-muted-foreground">
              This sheet slides in from the bottom of the screen.
            </p>
            <div className="flex gap-2">
              <Button>Action 1</Button>
              <Button variant="outline">Action 2</Button>
            </div>
          </div>
        </SheetContent>
      </>
    ),
  },
};

export const SheetLeft: Story = {
  args: {
    children: (
      <>
        <SheetTrigger asChild>
          <Button variant="outline">Open Left Sheet</Button>
        </SheetTrigger>
        <SheetContent side="left">
          <div className="grid gap-4">
            <h2 className="text-lg font-semibold">Left Sheet</h2>
            <p className="text-sm text-muted-foreground">
              This sheet slides in from the left side of the screen.
            </p>
            <div className="flex flex-col gap-2">
              <Button>Action 1</Button>
              <Button variant="outline">Action 2</Button>
            </div>
          </div>
        </SheetContent>
      </>
    ),
  },
};
