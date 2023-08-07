import React from "react";
import { Meta, Story } from "@storybook/react";
import { TextAreaInput } from "@Global/Components/Basic";
import { TextAreaProps } from "@Global/Components/Basic/TextArea/TextArea";

const meta: Meta = {
  title: "Components/Basic/TextArea",
  component: TextAreaInput,
  argTypes: {
    maxLength: { control: "number" },
    showCount: { control: "boolean" },
    minRows: { control: "number" },
    maxRows: { control: "number" },
  },
};
export default meta;

const Template: Story<TextAreaProps.IProps> = args => {
  return <TextAreaInput {...args} />;
};

export const Default = Template.bind({});
Default.args = { maxLength: 100, showCount: true, minRows: 3, maxRows: 6 };
