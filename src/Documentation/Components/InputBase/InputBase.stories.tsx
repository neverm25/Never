import React, { useState } from "react";
import { Meta, Story } from "@storybook/react";
import styled from "styled-components";

import { InputBase } from "@Global/Components/Basic/InputBase";
import {
  SearchIcon,
  PasswordEyeIcon,
  YouTubeIcon,
  InstagramIcon,
  FacebookIcon,
  LinkedInIcon,
} from "@Global/Components/Icons";
import "../../../App.css";
import { IInputBase } from "@Global/Components/Basic/InputBase/InputBase";

const prefixIcons = {
  YouTubeIcon: <YouTubeIcon />,
  InstagramIcon: <InstagramIcon />,
  FacebookIcon: <FacebookIcon />,
  LinkedInIcon: <LinkedInIcon />,
};

const meta: Meta = {
  title: "Components/Basic/InputBase",
  component: InputBase,
  argTypes: {
    type: {
      options: ["text", "password", "email", "number", "tel", "url"],
      control: { type: "radio" },
    },
    hasError: { control: "boolean" },
    disabled: { control: "boolean" },
    isSearch: { control: "boolean" },
    prefix: {
      options: Object.keys(prefixIcons),
      mapping: prefixIcons,
      control: { type: "select" },
    },
  },
};

export default meta;

const Template: Story<IInputBase.IProps> = (args: IInputBase.IProps) => (
  <Container>
    <InputBase
      {...args}
      label="Text Input"
      name="namo"
      errorMsg="Dummy Error Message"
    />
  </Container>
);
const Container = styled.div`
  max-width: 400px;
`;

export const Default = Template.bind({});
Default.args = {
  type: "text",
  label: "Text Input",
};

export const SearchInput = Template.bind({});
SearchInput.args = {
  type: "text",
  label: "Locations",
  isSearch: true,
  placeholder: "Search City",
  suffix: <SearchIcon />,
};

export const SocialLinks = Template.bind({});
SocialLinks.storyName = "Social Links";
SocialLinks.args = {
  type: "url",
  label: "Social Links",
  placeholder: "Enter URL",
  prefix: <FacebookIcon />,
};

export const PasswordInput: Story<IInputBase.IProps> = (
  args: IInputBase.IProps
) => {
  const [showPassword, setShowPassword] = useState(true);
  const passwordProps = { showPassword, setShowPassword };
  return (
    <Container>
      <InputBase
        {...args}
        type={showPassword ? "text" : "password"}
        suffix={<PasswordEyeIcon {...passwordProps} />}
      />
    </Container>
  );
};
PasswordInput.storyName = "Password Input";
PasswordInput.args = {
  name: "password",
  value: "John Doe.",
  label: "Password Input",
};
