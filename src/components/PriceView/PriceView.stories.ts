import type { Meta, StoryObj } from "@storybook/react";

import { PriceView as Component } from "./PriceView";

const meta: Meta<typeof Component> = {
  title: "Category/PriceView",
  component: Component,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Component>;

export const PriceView: Story = {
  args: {
    price: 100,
    currencyCode: "EUR",
  },
};

export const PriceViewWithDiscount: Story = {
  args: {
    price: 50,
    discount: 20,
  },
};

export const PriceViewUSD: Story = {
  args: {
    price: 100,
    currencyCode: "USD",
  },
};

export const PriceViewSmall: Story = {
  args: {
    price: 100,
    variant: "h4",
    originalPriceVariant: "h6",
    discount: 20,
    currencyCode: "EUR",
  },
};
