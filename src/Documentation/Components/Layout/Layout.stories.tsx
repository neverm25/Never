import React from "react";
import { Meta, Story } from "@storybook/react";

import { Layout } from "@Global/Components/Layout";

const meta: Meta = {
  title: "Components/Basic/Layout",
  component: Layout,
};
export default meta;

export const Template: Story = () => (
  <Layout>
    <div>{"Content goes here..."}</div>
  </Layout>
);
