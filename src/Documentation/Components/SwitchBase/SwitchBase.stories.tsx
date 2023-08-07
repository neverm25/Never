import React from "react";
import { Meta, Story } from "@storybook/react";
import { SwitchBase } from "@Global/Components/Basic/SwitchBase/index";
import "../../../App.css";

const meta: Meta = {
  title: "Components/Basic/SwitchBase",
  component: SwitchBase,
  argTypes: {
    label: {
      defaultValue: "Switch Label",
      description: "Label for the switch",
    },
    hasLabel: { control: "boolean", defaultValue: true },
    hasError: { control: "boolean", defaultValue: false },
    errorMsg: { defaultValue: "Dummy Error Message" },
    checkedProp: {
      control: (state: { checked: boolean }) => ({
        checked: state.checked = false,
      }),
    },
    setCheckedProp: {
      action: (state: { setChecked: any }) => ({
        setChecked: state.setChecked,
      }),
    },
    defaultChecked: { control: "boolean" },
  },
};

export default meta;

const Template: Story = args => (
  <SwitchBase checkedProp={false} setCheckedProp={() => {}} {...args} />
);

export const Default = Template.bind({});

Default.args = {
  defaultChecked: false,
};
