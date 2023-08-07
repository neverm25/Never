import { theme } from "@Global/Theme";
import styled, { css } from "styled-components";

export const PhotoContainer = styled.div`
  height: 120px;
  margin: 20px;
  width: calc(100% - 40px);
  border: 1px solid ${theme.colors.black20};
  box-sizing: border-box;
  box-shadow: 0px 0px 1px rgba(21, 21, 21, 0.02),
    0px 2px 4px rgba(21, 21, 21, 0.08);
  border-radius: 5px;
  background: ${theme.colors.white100};
  display: flex;
  flex-direction: row;
`;
export const PhotoPreviewWrapper = styled.div`
  margin: 10px;
  height: 100px;
  width: 100px;
  border: 1.5px solid ${theme.colors.black100};
  border-radius: 6px;
`;
export const PhotoPreview = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 4px;
`;
export const DescriptionContainer = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;x
`;

export const Title = styled.div``;
export const TitleHeading = styled.span`
  ${theme.text.smallBold};
  color: ${theme.colors.black90};
`;
export const TitleDescription = styled.span`
  ${theme.text.bodySmall}
  color: ${theme.colors.black90};
`;
export const Caption = styled.div``;

export const CaptionHeading = styled.span`
  ${theme.text.smallBold}
  color: ${theme.colors.black90};
`;
export const CaptionDescription = styled.span`
  ${theme.text.bodySmall}
  color: ${theme.colors.black90};
`;

export const IconButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 5px;
`;

const IconButtonWrapper = css`
  background: white;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  box-sizing: border-box;
  box-shadow: inset 0px -0.836836px 2.51051px 0.836836px rgba(125, 22, 16, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const EditButton = styled.button`
  border: 1px solid ${theme.colors.black100};
  ${IconButtonWrapper};
`;
export const DeleteButton = styled.button`
  margin: 0 10px;
  border: 1px solid ${theme.colors.red80};
  ${IconButtonWrapper};
`;
