import React from "react";

import { theme } from "@Global/Theme";
import { UploadImageIconPlus } from "@Global/Components/Icons";
import styled from "styled-components";

export const AddCompanyLogo = () => (
  <React.Fragment>
    <UploadImageIconPlus color={theme.colors.white110} size={50} />
    <HelpText>{"Upload Logo"}</HelpText>
  </React.Fragment>
);

const HelpText = styled.div`
  padding-top: 20px;
  color: ${theme.colors.white110};
  ${theme.text.regularBold};
`;
