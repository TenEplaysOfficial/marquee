import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Marquee } from "../lib/components/Marquee";

const meta: Meta<typeof Marquee> = {
  component: Marquee,
};

export default meta;
type Story = StoryObj<typeof Marquee>;

export const Marquee_Test: Story = {
  args: {
    children: (
      <>
        <img src="https://via.placeholder.com/150" alt="Testing Marquee" />
      </>
    ),
  },
};
