import React from "react";
import { Meta, Story } from "@storybook/react";
import styled from "styled-components";

import { PaginationBase } from "@Global/Components/Basic/Pagination";
import "../../../App.css";
import { IPagination } from "@Global/Components/Basic/Pagination/pagination";

const Container = styled.div`
  max-width: 100%;
`;

const meta: Meta = {
  title: "Components/Basic/Pagination",
  component: PaginationBase,
  argTypes: {},
};

export default meta;

const Template: Story = (args: IPagination.IProps) => (
  <Container>
    <PaginationBase {...args} />
  </Container>
);

export const Default = Template.bind({});
export const MorePage = Template.bind({});
export const Jumper = Template.bind({});
export const DefaultSmall = Template.bind({});
export const MorePageSmall = Template.bind({});
export const JumperSmall = Template.bind({});
export const SimpleDefault = Template.bind({});

Default.args = {
  currentPageNumber: 1,
  totalItems: 50,
} as IPagination.IProps;

MorePage.args = { currentPageNumber: 6, totalItems: 500 } as IPagination.IProps;
Jumper.args = {
  currentPageNumber: 8,
  totalItems: 500,
  showQuickJumper: true,
} as IPagination.IProps;
DefaultSmall.args = {
  currentPageNumber: 1,
  totalItems: 50,
  showQuickJumper: true,
  paginationType: "small",
} as IPagination.IProps;
MorePageSmall.args = {
  currentPageNumber: 6,
  totalItems: 500,
  showQuickJumper: true,
  paginationType: "small",
} as IPagination.IProps;
JumperSmall.args = {
  currentPageNumber: 8,
  totalItems: 500,
  showQuickJumper: true,
  paginationType: "small",
} as IPagination.IProps;

SimpleDefault.args = {
  currentPageNumber: 1,
  totalItems: 50,
  showQuickJumper: true,
} as IPagination.IProps;
