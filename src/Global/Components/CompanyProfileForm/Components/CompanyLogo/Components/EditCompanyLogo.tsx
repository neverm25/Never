import React from "react";
import styled from "styled-components";
import Image from "next/image";

import { EditIcon } from "@Global/Components/Icons";
import { theme } from "@Global/Theme";

type EditCompanyLogo = { companyLogo: string };
export const EditCompanyLogo = (props: EditCompanyLogo) => (
  <React.Fragment>
    <CompanyLogoImage
      alt="company logo"
      layout="fill"
      src={props.companyLogo}
    />
    <EditIconWrapper>
      <EditIcon color={theme.colors.black100} size={13} />
    </EditIconWrapper>
  </React.Fragment>
);

const CompanyLogoImage = styled(Image)`
  border-radius: 50%;
`;
const EditIconWrapper = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;

  height: 32px;
  width: 32px;
  padding: 5px;

  background-color: ${theme.colors.white100};
  border: 1px solid ${theme.colors.black80};
  box-shadow: 0px 1px 4px rgba(21, 21, 21, 0.02),
    0px 8px 12px rgba(21, 21, 21, 0.08);
  border-radius: 8.5px;

  display: flex;
  align-items: center;
  justify-content: center;
`;
