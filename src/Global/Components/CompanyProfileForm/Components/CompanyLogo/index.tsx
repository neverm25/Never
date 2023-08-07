import React, { useContext } from "react";
import styled from "styled-components";

import { AddCompanyLogo } from "./Components/AddCompanyLogo";
import { EditCompanyLogo } from "./Components/EditCompanyLogo";
import { PhotoUploadButton } from "../../../Common/PhotoUploadButton";
import { CompanyProfileContext } from "../../Context/CompanyProfileContext";
import { theme } from "@Global/Theme";

export const CompanyLogo = () => {
  const { companyLogo, setCompanyLogo } = useContext(CompanyProfileContext);
  const isEdit = companyLogo ? true : false;

  return (
    <PhotoUploadButton
      modalTitle="Company Logo"
      fileContent={companyLogo}
      setFileContent={setCompanyLogo}
      showFileList={false}
    >
      <CompanyLogoContainer isEdit={isEdit}>
        {isEdit ? (
          <EditCompanyLogo companyLogo={companyLogo} />
        ) : (
          <AddCompanyLogo />
        )}
      </CompanyLogoContainer>
    </PhotoUploadButton>
  );
};

const CompanyLogoContainer = styled.div<{ isEdit: boolean }>`
  position: absolute;
  bottom: -50px;
  left: 50px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 5px solid
    ${({ isEdit }) => (isEdit ? theme.colors.black100 : theme.colors.white110)};
  box-sizing: border-box;
  box-shadow: ${theme.effects.boxShadow};
  background-color: ${theme.colors.black80};
`;
