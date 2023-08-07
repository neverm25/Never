import * as React from "react";
import styled from "styled-components";

import PostTypesContainer from "./PostTypesContainer";
import PostTypeHowItWorks from "../HowItWorks";
import { IPostTypes } from "../PostTypesProps";
import { theme } from "@Global/Theme";

const SelectPostTypes = (props: IPostTypes.SelectPostTypesProps) => (
  <SelectPostTypesContainer>
    <Title>{"Select Post Type"}</Title>
    <PostTypesContainer {...props} />
    <PostTypeHowItWorks Content={PostTypeHowItWorksContent} />
  </SelectPostTypesContainer>
);
export default SelectPostTypes;

const SelectPostTypesContainer = styled.div`
  background: ${theme.colors.white110};
  border-radius: 10px;
  border: 1px solid ${theme.colors.black20};
  padding: 30px 25px;
`;

const Title = styled.div`
  ${theme.text.subTitleOne};
  height: 21px;
  color: ${theme.colors.black100};
  margin: auto;
  margin-bottom: 0;
  width: fit-content;

  @media (min-width: 800px) {
    margin: 0;
  }
`;
const PostTypeHowItWorksContent = `Lorem ipsum dolor sit amet, 
  consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
  Ut enim ad minim veniam, 
  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
  Excepteur sint occaecat cupidatat non proident, 
  sunt in culpa qui officia deserunt mollit anim id est laborum.`;
