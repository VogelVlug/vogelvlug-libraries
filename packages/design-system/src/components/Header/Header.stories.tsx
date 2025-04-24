import type { Meta, StoryObj } from "@storybook/react";
import {
  DollarSignIcon,
  DownloadIcon,
  FilmIcon,
  HelpCircleIcon,
  LogInIcon,
  LogOutIcon,
  SettingsIcon,
  UserIcon,
  UserPlusIcon,
} from "lucide-react";
import { Header } from "./Header";

const meta: Meta<typeof Header> = {
  title: "Navigation/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

// Define auth routes for all stories that need them
const loginRoute = {
  title: "Login",
  path: "/login",
  icon: LogInIcon,
};

const signupRoute = {
  title: "Sign Up",
  path: "/signup",
  icon: UserPlusIcon,
};

export const Default: Story = {
  args: {
    mainRoutes: [
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
        path: "#pricing",
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
    ],
    userRoutes: [
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
    ],
    loginRoute,
    signupRoute,
  },
};

export const WithoutUserMenu: Story = {
  args: {
    mainRoutes: [
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
    ],
  },
};

export const WithLoggedInUser: Story = {
  args: {
    ...Default.args,
    user: {
      name: "John Doe",
      avatarUrl: "https://i.pravatar.cc/150?u=john",
    },
  },
};

export const WithLogoutCallback: Story = {
  args: {
    ...WithLoggedInUser.args,
    userRoutes: [
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
    ],
  },
};

export const WithLanguageSwitcher: Story = {
  args: {
    ...Default.args,
    languageSwitcher: (
      <div className="flex items-center gap-2">
        <button className="border-input bg-background rounded-md border px-3 py-1 text-sm">
          EN
        </button>
        <button className="border-input bg-background rounded-md border px-3 py-1 text-sm">
          DE
        </button>
      </div>
    ),
  },
};

export const HiddenOnPage: Story = {
  args: {
    ...Default.args,
    hideMenuOnPage: true,
  },
};
