import type { Meta, StoryObj } from "@storybook/react";

import { NavMenu as Component } from "./NavMenu";

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
    routes: [
      {
        href: "/",
        title: "Home",
      },
      {
        href: "/about",
        title: "About",
        subRoutes: [
          {
            href: "/about/history",
            title: "History",
            description: "Learn about our history",
          },
        ],
      },
      {
        href: "/services",
        title: "Services",
        subRoutes: [
          {
            href: "/services/consulting",
            title: "Consulting",
            description: "Professional consulting services",
          },
          {
            href: "/services/development",
            title: "Development",
            description: "Custom software development",
          },
        ],
      },
      {
        href: "/contact",
        title: "Contact",
      },
    ],
  },
};
