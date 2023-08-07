import React from "react";
import { Meta, Story } from "@storybook/react";
import { SelectBase } from "@Global/Components/Basic/SelectBase/index";
import "../../../App.css";
import styled from "styled-components";

const Container = styled.div`
  max-width: 400px;
`;

const meta: Meta = {
  title: "Components/Basic/SelectBase",
  component: SelectBase,
  argTypes: {
    hasError: { control: "boolean" },
    disabled: { control: "boolean" },
  },
};

export default meta;

const Template: Story = args => (
  <Container>
    <SelectBase
      {...args}
      value=""
      hasLabel={true}
      label="Select"
      options={[
        { value: "1", label: "One" },
        { value: "2", label: "Two" },
      ]}
    />
  </Container>
);

export const Default = Template.bind({});

Default.args = {};
