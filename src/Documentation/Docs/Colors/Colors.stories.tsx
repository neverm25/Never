import React from "react";
import { Meta, Story } from "@storybook/react";
import { Colors } from "./index";

const meta: Meta = {
  title: "Docs/Colors",
  component: Colors,
  argTypes: {
    colorName: {
      options: [],
      control: { type: "radio" },
    },
    children: {
      defaultValue: "",
    },
  },
};

export default meta;

const Template: Story = args => <Colors colorName={["blue100"]} {...args} />;

export const Default = Template.bind({});

Default.args = {
  colorName: ["blue100"],
};

export const Primary = Template.bind({});

export const Green = Template.bind({});

export const Purple = Template.bind({});

export const Black = Template.bind({});

export const Gradients = Template.bind({});

Primary.args = {
  colorName: ["blue100", "blue80", "blue60", "blue150"],
};

Green.args = {
  colorName: ["green100", "green80", "green60", "green150"],
};

Purple.args = {
  colorName: ["purple100", "purple80", "purple60", "purple150"],
};

Black.args = {
  colorName: ["black100", "black80", "black60"],
};

Gradients.args = {
  colorName: ["gradientPurple", "gradientBlue"],
};
