import { djobsTheme } from "@DJobs/Theme";
import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  background: ${djobsTheme.colors.white100};
  box-shadow: ${djobsTheme.effects.cardShadow};
  padding: 24px 0 24px 33px;
  border-radius: 24px;
  margin: 0 auto;
  align-items: center;

  @media (min-width: 768px) {
    padding: 22px 0 22px 38px;
  }
`;

export const CompanyLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    border: 5px solid rgba(197, 203, 208, 0.3) !important;
    border-radius: 8px !important;
    overflow: hidden !important;
  }
`;

export const JobTitle = styled.div`
  margin-left:20px;
  }
`;
