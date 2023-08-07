import React from "react";
import { Meta, Story } from "@storybook/react";
import { Typography } from "@Global/Components/Basic/Typography/index";
import { TypographyContainer } from "./index";

const meta: Meta = {
  title: "Docs/Typography",
  component: Typography,
  argTypes: {
    color: {
      options: ["black", "primary", "bodyTextColor"],
      control: { type: "radio" },
    },
    children: {
      defaultValue: "",
    },
  },
};

export default meta;

const Template: Story = args => (
  <TypographyContainer types={args.types}>
    <Typography styleName="headingOne" {...args} />
  </TypographyContainer>
);

export const Default = Template.bind({});

Default.args = {
  types: "headingOne",
  el: "h1",
  width: "100%",
};

export const HeadingOne = Template.bind({});
export const HeadingTwo = Template.bind({});
export const HeadingThree = Template.bind({});
export const HeadingFour = Template.bind({});
export const SubTitleOne = Template.bind({});
export const SubTitleTwo = Template.bind({});
export const SubTitleThree = Template.bind({});
export const CapsAll = Template.bind({});
export const CapsSmall = Template.bind({});
export const BodyRegular = Template.bind({});
export const BodySmall = Template.bind({});

export const CaptionRegular = Template.bind({});
export const CaptionSmall = Template.bind({});

export const TableRowHdr = Template.bind({});
export const TableRowDefault = Template.bind({});
export const TableRowNumbers = Template.bind({});
export const LinkRegular = Template.bind({});
export const LinkSmall = Template.bind({});

HeadingOne.args = {
  types: "headingOne",
  color: "black",
  el: "h1",
};

HeadingTwo.args = {
  types: "headingTwo",
  color: "black",
  el: "h2",
};

HeadingThree.args = {
  types: "headingThree",
  color: "black",
  el: "h3",
};

HeadingFour.args = {
  types: "headingFour",
  color: "black",
  el: "h4",
};

BodyRegular.args = {
  types: "BodyRegular",
  color: "bodyTextColor",
  el: "p",
};

BodySmall.args = {
  types: "BodySmall",
  color: "bodyTextColor",
  el: "p",
};

SubTitleOne.args = {
  types: "SubTitleOne",
  color: "black",
  el: "p",
};

SubTitleTwo.args = {
  types: "SubTitleTwo",
  color: "black",
  el: "p",
};

SubTitleThree.args = {
  types: "SubTitleThree",
  color: "black",
  el: "p",
};

CapsAll.args = {
  types: "CapsAll",
  color: "black",
  el: "p",
};

CapsSmall.args = {
  types: "CapsSmall",
  color: "black100",
  el: "p",
};

CaptionRegular.args = {
  types: "CaptionRegular",
  color: "black",
  el: "p",
};

CaptionSmall.args = {
  types: "CaptionSmall",
  color: "black",
  el: "p",
};

TableRowHdr.args = {
  types: "TableRowHdr",
  color: "black",
  el: "p",
};

TableRowDefault.args = {
  types: "TableRowDefault",
  color: "black",
  el: "p",
};

TableRowNumbers.args = {
  types: "TableRowNumbers",
  color: "black",
  el: "p",
};

LinkRegular.args = {
  types: "LinkRegular",
  color: "primary",
  el: "a",
};

LinkSmall.args = {
  types: "LinkSmall",
  color: "primary",
  el: "a",
};
