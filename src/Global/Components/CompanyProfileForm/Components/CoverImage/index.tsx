import * as React from "react";
import styled from "styled-components";
import Image from "next/image";

import { CompanyProfileContext } from "../../Context/CompanyProfileContext";
import { PhotoUploadButton } from "../../../Common/PhotoUploadButton";
import { PhotoUploadButtonProps } from "../../../Common/PhotoUploadButton/PhotoUploadButton";
import { theme } from "@Global/Theme";

export const CoverImage = () => {
  const { coverImage, setCoverImage } = React.useContext(CompanyProfileContext);
  const isEdit = coverImage ? true : false;
  const buttonName = isEdit ? "upload / edit cover" : "upload cover";

  const PhotoUploadButtonProps: PhotoUploadButtonProps.Button = {
    modalTitle: "Cover Image",
    buttonName,
    fileContent: coverImage,
    setFileContent: setCoverImage,
    aspectWidth: 5,
    aspectHeight: 1,
    showFileList: false,
  };

  return (
    <CoverImageContainer>
      {isEdit && (
        <CoverImageComponent alt="Cover Image" layout="fill" src={coverImage} />
      )}
      <UploadButtonWrapper>
        <PhotoUploadButton {...PhotoUploadButtonProps} />
      </UploadButtonWrapper>
    </CoverImageContainer>
  );
};

const CoverImageComponent = styled(Image)`
  border-radius: 20px 20px 0 0;
`;
const CoverImageContainer = styled.div`
  position: relative;
  border: 1px solid ${theme.colors.black90};
  border-radius: 20px 20px 0 0;
  border-bottom: 20px solid ${theme.colors.black100};
  height: 240px;
  overflow: hidden;
  background: #787f9699;
`;
const UploadButtonWrapper = styled.div`
  position: absolute;
  bottom: 20px;
  right: 28px;
`;
