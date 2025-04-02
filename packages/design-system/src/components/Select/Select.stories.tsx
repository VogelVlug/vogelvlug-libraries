import type { Meta, StoryObj } from "@storybook/react";

import {
  Select as Component,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./Select";

const meta: Meta<typeof Component> = {
  title: "Form/Select",
  component: Component,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Component>;

export const Select: Story = {
  args: {
    children: (
      <>
        <SelectTrigger className="w-[200px]">
          <SelectValue placeholder="Select a grade" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="a">Grade A</SelectItem>
          <SelectItem value="b">Grade B</SelectItem>
          <SelectItem value="c">Grade C</SelectItem>
          <SelectItem value="d">Grade D</SelectItem>
          <SelectItem value="f">Grade F</SelectItem>
        </SelectContent>
      </>
    ),
  },
};

export const GroupedSelect: Story = {
  args: {
    children: (
      <>
        <SelectTrigger className="w-[200px]">
          <SelectValue placeholder="Select a subject" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="math-header" disabled>
              Mathematics
            </SelectItem>
            <SelectItem value="algebra">Algebra</SelectItem>
            <SelectItem value="calculus">Calculus</SelectItem>
            <SelectItem value="geometry">Geometry</SelectItem>
            <SelectItem value="statistics">Statistics</SelectItem>
          </SelectGroup>
          <SelectGroup>
            <SelectItem value="science-header" disabled>
              Sciences
            </SelectItem>
            <SelectItem value="biology">Biology</SelectItem>
            <SelectItem value="chemistry">Chemistry</SelectItem>
            <SelectItem value="physics">Physics</SelectItem>
            <SelectItem value="astronomy">Astronomy</SelectItem>
          </SelectGroup>
          <SelectGroup>
            <SelectItem value="languages-header" disabled>
              Languages
            </SelectItem>
            <SelectItem value="english">English</SelectItem>
            <SelectItem value="spanish">Spanish</SelectItem>
            <SelectItem value="french">French</SelectItem>
            <SelectItem value="german">German</SelectItem>
          </SelectGroup>
          <SelectGroup>
            <SelectItem value="arts-header" disabled>
              Arts
            </SelectItem>
            <SelectItem value="painting">Painting</SelectItem>
            <SelectItem value="sculpture">Sculpture</SelectItem>
            <SelectItem value="photography">Photography</SelectItem>
            <SelectItem value="music">Music</SelectItem>
          </SelectGroup>
          <SelectGroup>
            <SelectItem value="social-header" disabled>
              Social Studies
            </SelectItem>
            <SelectItem value="history">History</SelectItem>
            <SelectItem value="geography">Geography</SelectItem>
            <SelectItem value="economics">Economics</SelectItem>
            <SelectItem value="psychology">Psychology</SelectItem>
          </SelectGroup>
        </SelectContent>
      </>
    ),
  },
};
