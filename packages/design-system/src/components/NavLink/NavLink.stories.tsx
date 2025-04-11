import type { Meta, StoryObj } from "@storybook/react";
import { NavLink } from "./NavLink";
import { HomeIcon } from "lucide-react";

const meta: Meta<typeof NavLink> = {
  title: "Navigation/NavLink",
  component: NavLink,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof NavLink>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockRoute = {
  title: "Home",
  path: "/",
  icon: HomeIcon,
};

const mockRouteWithDescription = {
  title: "Home",
  path: "/",
  icon: HomeIcon,
  description: "Go to the homepage",
};

const mockRouteWithCallback = {
  title: "Click me",
  icon: HomeIcon,
  callback: () => alert("Clicked!"),
};

export const Default: Story = {
  args: {
    route: mockRoute,
    variant: "default",
  },
};

export const WithDescription: Story = {
  args: {
    route: mockRouteWithDescription,
    variant: "withDescription",
  },
};

export const WithCallback: Story = {
  args: {
    route: mockRouteWithCallback,
    variant: "default",
  },
};

export const WithoutIcon: Story = {
  args: {
    route: {
      title: "No Icon",
      path: "/no-icon",
    },
    variant: "default",
  },
};

export const WithDescriptionNoIcon: Story = {
  args: {
    route: {
      title: "No Icon",
      path: "/no-icon",
      description: "A link without an icon",
    },
    variant: "withDescription",
  },
};
