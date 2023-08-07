import React from "react";
import { Meta, Story } from "@storybook/react";

import {
  icons,
  SocialMediaIcons,
  UniconsLibraryIcons,
} from "@Global/Components/Icons";
import styled from "styled-components";
import { theme } from "@Global/Theme";

const meta: Meta = {
  title: "Components/Icons",
};
export default meta;

const getIcons = (iconEntries: any[]) => {
  const iconsWithoutModules = iconEntries.filter(
    iconEntry => typeof iconEntry[1] === "function"
  );
  iconsWithoutModules.sort();
  const IconArray = iconsWithoutModules.map(getIconContainerFromEntry);
  return <IconsContainer>{IconArray}</IconsContainer>;
};
const getIconContainerFromEntry = (IconEntry: any) => {
  const [IconName, IconElement] = IconEntry;
  return (
    <IconContainer key={IconName}>
      <IconComponent>
        <IconElement />
      </IconComponent>
      <IconTitle>{IconName}</IconTitle>
    </IconContainer>
  );
};

export const All: Story = () => {
  const iconEntries = Object.entries(icons);
  return getIcons(iconEntries);
};

export const UniconLibraryIcons: Story = () => {
  const iconEntries = Object.entries(UniconsLibraryIcons);
  return getIcons(iconEntries);
};

export const SocialMedia: Story = () => {
  const iconEntries = Object.entries(SocialMediaIcons);
  return getIcons(iconEntries);
};

const IconsContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto auto;
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;

  width: 200px;
  height: 150px;
  border: 1px solid ${theme.colors.black20};
  background-color: theme.colors.blue100;
  border-radius: 6px;
  justify-content: center;
  overflow: hidden;

  &:hover {
    box-shadow: 0 5px 30px rgba(0, 0, 0, 0.06), 0 4px 10px rgba(0, 0, 0, 0.02),
      0 1px 4px rgba(0, 0, 0, 0.03);
  }
`;
const IconTitle = styled.div`
  ${theme.text.bodyRegular};
  width: fit-content;
  margin: auto;
  max-width: 130px;
`;
const IconComponent = styled.div`
  width: fit-content;
  margin: auto;
  padding-top: 10px;
`;
