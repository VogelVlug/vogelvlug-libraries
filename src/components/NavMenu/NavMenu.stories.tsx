import type { Meta, StoryObj } from "@storybook/react";

import { NavMenu as Component, NavMenuItem, NavSubMenuItem } from "./NavMenu";

const meta: Meta<typeof Component> = {
  title: "Navigation/NavMenu",
  component: Component,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Component>;

export const NavMenu: Story = {
  args: {
    children: (
      <>
        <NavMenuItem href="/" title="Home" />
        <NavMenuItem href="/about" title="About">
          <NavSubMenuItem
            href="/about/history"
            title="History"
            description="Learn about our history"
          />
        </NavMenuItem>
        <NavMenuItem href="/services" title="Services">
          <NavSubMenuItem
            href="/services/consulting"
            title="Consulting"
            description="Professional consulting services"
          />
          <NavSubMenuItem
            href="/services/development"
            title="Development"
            description="Custom software development"
          />
        </NavMenuItem>
      </>
    ),
  },
};
