// #region Global Imports
import { theme } from "@Global/Theme";
import styled from "styled-components";
// #endregion Global Imports

export const StartProgressDiv = styled.div<{
  width?: string;
  bgColor?: string;
  color?: string;
  sacleValue?: string;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 6px;
  width: ${({ width }) => width || "230px"};
  height: 138px;
  position: relative;
  background: ${({ bgColor }) => bgColor || theme.colors.background};
  clippath: path(
    "M0 27C0 12.0883 12.0883 0 27 0H168.697C178.104 0 186.833 4.89632 191.737 12.924L216.6 53.6215C221.774 62.0911 221.885 72.7166 216.888 81.2918L191.654 124.594C186.816 132.895 177.933 138 168.326 138H27C12.0883 138 0 125.912 0 111V27Z"
  );
  @media only screen and (max-width: 1280px) {
    width: 228px;
  }
`;

export const MiddleProgressDiv = styled.div<{
  width?: string;
  bgColor?: string;
  color?: string;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => width || "240px"};
  height: 144px;
  position: relative;
  background: ${({ bgColor }) => bgColor || theme.colors.background};
  clippath: path(
    "M12 104.742C12.1977 119.939 13.2614 128.503 18.9843 134.225C26.0137 141.255 37.3275 141.255 59.9549 141.255H170.164C184.082 141.255 191.042 141.255 196.875 138.063C202.707 134.871 206.459 129.009 213.962 117.286L225.983 98.502C234.027 85.934 238.049 79.6499 238.049 72.6274C238.049 65.605 234.027 59.3209 225.983 46.7529L212.192 25.2035C205.555 14.8329 202.236 9.64757 197.076 6.82378C191.916 4 185.76 4 173.447 4H59.9549C37.3274 4 26.0137 4 18.9843 11.0294C13.6593 16.3544 12.3681 24.1387 12.0551 37.438L23.9634 57.8144C28.9673 66.3766 28.8745 76.9929 23.7217 85.4664L12 104.742Z"
  );
  @media only screen and (max-width: 1280px) {
    width: 246px;
  }
`;

export const EndProgressDiv = styled.div<{
  width?: string;
  bgColor?: string;
  color?: string;
}>`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: ${({ width }) => width || "240px"};
  height: 144px;
  position: relative;
  background: ${({ bgColor }) => bgColor || theme.colors.background};
  clippath: path(
    "M12 104.415C12.1952 119.657 13.253 128.238 18.9853 133.971C26.0147 141 37.3284 141 59.9558 141H178.956C203.469 141 215.725 141 223.341 133.385C230.956 125.77 230.956 113.513 230.956 89V72.5V50C230.956 28.3154 230.956 17.4731 224.219 10.7365C217.483 4 206.64 4 184.956 4H59.9558C37.3284 4 26.0147 4 18.9853 11.0294C13.6828 16.3319 12.3801 24.072 12.0601 37.267L23.9193 57.5595C28.9232 66.1217 28.8304 76.738 23.6776 85.2115L12 104.415Z"
  );
  @media only screen and (max-width: 1280px) {
    width: 246px;
  }
`;
