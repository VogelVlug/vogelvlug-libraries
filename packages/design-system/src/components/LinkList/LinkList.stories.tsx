import type { Meta, StoryObj } from "@storybook/react";
import {
  DollarSignIcon,
  DownloadIcon,
  FilmIcon,
  HelpCircleIcon,
  LogOutIcon,
  MenuIcon,
  SettingsIcon,
  UserIcon,
} from "lucide-react";
import { Button } from "../Button/Button";
import { Sheet, SheetContent, SheetTrigger } from "../Sheet/Sheet";
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

export const WithSheetClose: Story = {
  render: (args) => (
    <div className="flex flex-col items-center gap-4">
      <p className="text-sm text-muted-foreground">
        Click the button below to open the sheet
      </p>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon">
            <MenuIcon className="h-5 w-5" />
            <span className="sr-only">Open menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[300px] sm:w-[400px]">
          <LinkList {...args} useSheetClose />
        </SheetContent>
      </Sheet>
    </div>
  ),
  args: {
    routes: sampleRoutes,
  },
};

export const UserRoutes: Story = {
  args: {
    routes: userRoutes,
  },
};
