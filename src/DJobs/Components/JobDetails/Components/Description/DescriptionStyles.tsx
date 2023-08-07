import styled from "styled-components";
// #endregion Global Imports

// #region Local Imports
import { djobsTheme } from "@DJobs/Theme";
// #endregion Local Imports

export const MainContainer = styled.div`
  background: ${djobsTheme.colors.white100};
  box-shadow: ${djobsTheme.effects.cardShadow};
  padding: 31px 30px 44px 30px;
  border-radius: 10px;

  @media (min-width: 992px) {
    padding: 33px 48px 52px 48px;
  }
`;

export const TextEllipsisContainer = styled.div<{
         clampLine?: number;
       }>`
  ${djobsTheme.text.djTextMedium.sm}
  color: ${djobsTheme.colors.black90};
    display: -webkit-box !important;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: ${({ clampLine }) => clampLine};
    white-space: normal;
    overflow: hidden;
    text-overflow: ellipsis;
  @media (min-width: 992px) {
    ${djobsTheme.text.djJobviewDescription.lg}
  }
  
`;
