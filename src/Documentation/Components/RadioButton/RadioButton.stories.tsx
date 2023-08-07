import React from "react";
import { Meta, Story } from "@storybook/react";

import { RadioButton } from "@Global/Components/Basic";

const meta: Meta = {
  title: "Components/Basic/RadioButton",
  component: RadioButton,
  argTypes: {
    checked: {
      control: "boolean",
    },
    size: {
      options: ["small", "medium", "large"],
      defaultValue: "medium",
    },
    disabled: {
      control: "boolean",
      defaultValue: false,
    },
    variant: {
      options: ["default", "green"],
      defaultValue: "default",
    },
  },
};
export default meta;

const Template: Story = args => {
  return <RadioButton checked={true} {...args} />;
};

export const Default = Template.bind({});

Default.args = { variant: "default" };
