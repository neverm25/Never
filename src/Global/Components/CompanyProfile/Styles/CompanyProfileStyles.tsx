// #region Global Imports
import { theme } from "@Global/Theme";
import styled from "styled-components";
// #endregion Global Imports

export const CoverImageContainer = styled.div<{
  width: string;
  height: string;
  bgColor: string;
}>`
  width: ${({ width }) => width || "259px"};
  height: ${({ height }) => height || "97px"};
  background: ${({ theme, bgColor }) => bgColor || theme.colors.white100};
  border-radius: 8px 8px 0px 0px;
`;

export const CoverImageSubContainer = styled.div<{
  width: string;
  height: string;
  bgColor?: string;
}>`
  margin-top: 20px;
  width: ${({ width }) => width || "259px"};
  height: ${({ height }) => height || "208px"};
  background: ${({ theme, bgColor }) => bgColor || theme.colors.black100};
  border-radius: 0px 0px 15px 15px;
`;

export const CompanyInfoContainer = styled.div<{
  width: string;
  bgColor?: string;
  showMore?: boolean;
}>`
  width: ${({ width }) => width || "259px"};
  display: flex;
  align-items: center;
  background: ${({ bgColor }) => bgColor || theme.colors.black100};
  border-radius: 14px 14px 0px 0px;
  top: 44%;
  margin: -12% 0 -12% 0;
  box-shadow: ${theme.effects.boxShadow};
  padding-bottom: 5px;
  background: linear-gradient(
      90.06deg,
      #e9abd9 0.06%,
      #785bea 35.68%,
      #3495ee 70.14%,
      #7ec1ef 93.14%,
      #b0def0 109.2%
    )
    left bottom ${theme.colors.black100} no-repeat;
  background-size: 100% 4px;

  a {
    text-decoration: none;
  }
  :&hover  {
    text-decoration-color: ${theme.colors.blue80};
    text-decoration: underline;
  }
`;

export const CompanyProfileImage = styled.div<{
  width: string;
  height: string;
  bgURL: string;
}>`
  width: ${({ width }) => width || "196px"};
  height: ${({ height }) => height || "196px"};
  border: 5px solid ${theme.colors.background};
  box-sizing: border-box;
  box-shadow: 0px 2.17px 2.17px rgba(0, 0, 0, 0.19);
  border-radius: 107px;
  background: url(${({ bgURL }) => bgURL || ""}) no-repeat;
  background-position: top center;

  svg {
    margin-left: 72%;
    margin-top: 76%;
  }
`;

export const Container = styled.div`
  background-color: ${theme.colors.white100};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px 25px;
`;

export const PhotoGalleryContainer = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  flex-wrap: wrap;
  margin-top: 2%;
  margin-left: 1%;
  cursor: pointer;
`;

export const ImageContainer = styled.div<{
  width: string;
  height: string;
  bgURL?: string;
}>`
  width: ${({ width }) => width || "196px"};
  height: ${({ height }) => height || "196px"};
  box-sizing: border-box;
  box-shadow: 0px 2.17px 2.17px rgba(0, 0, 0, 0.19);
  border-radius: 18.5858px;
  background: url(${({ bgURL }) => bgURL || ""}) no-repeat center;
  margin: 20px;
  padding: 20px;

  &:hover {
    box-shadow: 0px 4px 4px rgba(117, 120, 131, 0.54),
      inset 0px 2px 1px rgba(227, 227, 227, 0.26);
    backdrop-filter: blur(11px);
    outline: 4px solid ${theme.colors.blue100};
  }
`;

export const LightBoxModalDiv = styled.div<{
  width?: string;
  height?: string;
  bgURL?: string;
}>`
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 2;
  cursor: pointer;
`;

export const LightBoxCloseDiv = styled.div`
  top: 4%;
  right: 2%;
  position: absolute;
`;

export const LightBoxModalContent = styled.div<{
  width?: string;
  height?: string;
  bgURL?: string;
}>`
  width: ${({ width }) => width || "729px"};
  height: ${({ height }) => height || "570px"};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  box-shadow: 0px 2.17px 2.17px rgba(0, 0, 0, 0.19);
  background: linear-gradient(
    218.61deg,
    #308af4 8.95%,
    #785bea 35.98%,
    #5f9fcf 68.7%,
    #e9abd9 100%
  );
  border-radius: 15.5161px;
`;

export const LightBoxModalImage = styled.div<{
  width: string;
  height: string;
  bgURL?: string;
}>`
  width: ${({ width }) => width || "286px"};
  height: ${({ height }) => height || "196px"};
  box-sizing: border-box;
  box-shadow: 0px 2.17px 2.17px rgba(0, 0, 0, 0.19);
  background: url(${({ bgURL }) => bgURL || ""}) no-repeat;
  margin-top: 18.9%;
  transform: scale(2.46);
  border-top-right-radius: 6.5161px;
  border-top-left-radius: 6.5161px;
`;

export const ImageContent = styled.div<{
  width?: string;
  height?: string;
  bgURL?: string;
}>`
  width: ${({ width }) => width || "712px"};
  height: ${({ height }) => height || "150px"};
  display: flex;
  flex-direction: column;
  align-content: center;
  box-sizing: border-box;
  box-shadow: 0px 2.17px 2.17px rgba(0, 0, 0, 0.19);
  margin: 14% 2% 1% 2%;
  padding-top: 6%;
  background-color: ${theme.colors.white100};
  border-bottom-right-radius: 13.5161px;
  border-bottom-left-radius: 13.5161px;

  div {
    margin: 1%;
  }
`;

export const CompanyJobPostCount = styled.span`
  width: 38px;
  height: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 2%;
  padding: 20px;
  border-radius: 50%;
  cursor: pointer;
  background: ${theme.colors.blue100};
`;

export const ViewMore = styled.div`
  cursor: pointer;
  .Typography__TypoContainer-sc-k9d4z5-0 div:hover {
    color: ${theme.colors.blue150};
  }
`;
