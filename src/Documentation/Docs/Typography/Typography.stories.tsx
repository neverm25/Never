import React from "react";
import { Meta, Story } from "@storybook/react";
import { Typography } from "@Global/Components/Basic/Typography/index";

const meta: Meta = {
  title: "Components/Basic/Typography",
  component: Typography,
  argTypes: {
    color: {
      options: ["black", "primary", "bodyTextColor"],
      control: { type: "radio" },
    },
  },
};

export default meta;

const Template: Story = args => (
  <Typography styleName="headingOne" color="black100" {...args}>
    {" "}
  </Typography>
);

export const Default = Template.bind({});

Default.args = {
  types: "headingOne",
  el: "h1",
  width: "100%",
};
