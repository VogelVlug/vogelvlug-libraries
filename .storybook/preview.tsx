import type { Preview } from "@storybook/react";
import React from "react";
import { DesignSystemProvider } from "../src/provider/DesignSystemProvider";
import "../src/tailwind.css";
import logo from "./logo.png";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <DesignSystemProvider isNext={false} logo={{ src: logo }}>
        <Story />
      </DesignSystemProvider>
    ),
  ],
};

export default preview;
