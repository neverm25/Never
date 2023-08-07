import { theme } from "@Global/Theme";
import styled from "styled-components";

export const PhotoGalleryContainer = styled.div`
  margin-top: 50px;
`;
export const PhotoGalleryTitle = styled.div`
  padding: 20px 0;
  ${theme.text.headingThree}
`;
export const PhotoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  background: ${theme.colors.white110};
  min-height: 70px;
  border: 1px solid ${theme.colors.black20};
  box-sizing: border-box;

  box-shadow: ${theme.effects.boxShadow};
  border-radius: 10px;
`;
export const AddPhotoButtonWrapper = styled.div`
  margin: 20px;
`;
