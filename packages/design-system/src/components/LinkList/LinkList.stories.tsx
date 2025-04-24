import type { Meta, StoryObj } from "@storybook/react";
import {
  DollarSignIcon,
  DownloadIcon,
  FilmIcon,
  HelpCircleIcon,
  LogOutIcon,
  SettingsIcon,
  UserIcon,
} from "lucide-react";
import { LinkList } from "./LinkList";

const meta: Meta<typeof LinkList> = {
  title: "Navigation/LinkList",
  component: LinkList,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof LinkList>;

// Sample routes for the stories
const sampleRoutes = [
  {
    title: "Features",
    path: "/features",
    icon: FilmIcon,
    subroutes: [
      {
        title: "Silence Removal",
        path: "/features/silence-removal",
        icon: FilmIcon,
        description: "Remove silence from your audio files",
      },
      {
        title: "Podcast Edit",
        path: "/features/podcast-edit",
        icon: FilmIcon,
        description: "Edit your podcasts with ease",
      },
    ],
  },
  {
    title: "Pricing",
    path: "/#pricing",
    icon: DollarSignIcon,
  },
  {
    title: "Downloads",
    path: "/downloads",
    icon: DownloadIcon,
  },
  {
    title: "Support",
    path: "/support",
    icon: HelpCircleIcon,
  },
];

const userRoutes = [
  {
    title: "Dashboard",
    path: "/app",
    icon: UserIcon,
  },
  {
    title: "Settings",
    path: "/app/settings",
    icon: SettingsIcon,
  },
  {
    title: "Logout",
    callback: () => console.log("Logout clicked"),
    icon: LogOutIcon,
  },
];

export const Default: Story = {
  args: {
    routes: sampleRoutes,
  },
};

export const UserRoutes: Story = {
  args: {
    routes: userRoutes,
  },
};
