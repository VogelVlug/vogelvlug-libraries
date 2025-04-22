import type { Meta, StoryObj } from "@storybook/react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardImage,
  CardTitle,
} from "./Card";

const meta: Meta<typeof Card> = {
  title: "Surfaces/Card",
  component: Card,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This is the main content of the card.</p>
      </CardContent>
      <CardFooter>
        <p>Footer content</p>
      </CardFooter>
    </Card>
  ),
};

export const WithAction: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Card with Action</CardTitle>
        <CardDescription>Card with an action button</CardDescription>
        <CardAction>
          <button className="bg-primary rounded-md px-4 py-2 text-white">
            Action
          </button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p>Content with an action button in the header.</p>
      </CardContent>
    </Card>
  ),
};

export const MinimalCard: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardContent>
        <p>A simple card with only content.</p>
      </CardContent>
    </Card>
  ),
};

export const WithImage: Story = {
  render: () => (
    <Card className="w-[350px]" variant="withImage">
      <CardHeader variant="withImage">
        <CardImage
          src="https://images.unsplash.com/photo-1682687220063-4742bd7fd538"
          alt="Card header image"
        />
        <CardTitle className="mt-4 px-6">Card with Image</CardTitle>
        <CardDescription className="px-6">
          A card featuring a header image
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          This card demonstrates how to include an image in the header section.
        </p>
      </CardContent>
      <CardFooter>
        <p>Image from Unsplash</p>
      </CardFooter>
    </Card>
  ),
};

export const WithHover: Story = {
  render: () => (
    <Card className="w-[350px]" hoverVariant="elevate">
      <CardHeader>
        <CardTitle>Card With Hover Effect</CardTitle>
        <CardDescription>This card elevates on hover</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Hover over this card to see the elevation effect.</p>
      </CardContent>
    </Card>
  ),
};
