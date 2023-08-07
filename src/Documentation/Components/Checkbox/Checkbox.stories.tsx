import * as React from "react";
import { Meta, Story } from "@storybook/react";

import { CheckboxInput } from "@Global/Components/Basic";

const meta: Meta = {
  title: "Components/Basic/CheckBoxComponent",
  component: CheckboxInput,
  argTypes: {
    checked: { control: "boolean" },
  },
};
export default meta;

const Template: Story = _args => {
  const [checked, setChecked] = React.useState(false);
  const checkedStateProps = { checked, setChecked };
  return <CheckboxInput {...checkedStateProps} />;
};

export const Default = Template.bind({});

Default.args = { checked: false };
