import { djobsTheme } from "@DJobs/Theme";
import styled from "styled-components";

export const AdditionalContainer = styled.div`
  padding: 18px;
  width: 100%;
  box-shadow: ${djobsTheme.effects.aditionalShadow};
  border-radius: 7px;
  border: 1px solid transparent;
  background: ${djobsTheme.gradients.aditionalAccent};

  @media (min-width: 992px) {
    padding: 18px 31px 44px 50px;
  }
`;
export const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (min-width: 992px) {
    flex-direction: row;
  }
`;
export const Column = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 992px) {
    width: 50%;
  }
`;
export const FlexStyle = styled.div`
  margin-top: 24px;
  @media (min-width: 992px) {
    display: flex;
  }
`;
