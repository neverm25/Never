import styled from "styled-components";

import { djobsTheme } from "@DJobs/Theme";

const ApplicationStepContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 57px;
  @media (min-width: 992px) {
    gap: 60px;
  }
`;
const ApplicationStepContainerSmall = styled(ApplicationStepContainer)`
  @media (min-width: 1200px) {
    width: 670px;
  }
`;
const ButtonsWrapper = styled.div<{
  isBorder?: boolean;
}>`
  display: flex;
  flex-direction: row;
  padding: 36px 0 0px 0;
  width: 100%;
  gap: 30px;
  justify-content: flex-end;
  border-top: ${({ isBorder = true }) =>
    `${isBorder ? "1px" : "0px"} solid ${djobsTheme.colors.black40}`};
  margin-top: 36px;

  @media (min-width: 768px) {
    margin-top: 50px;
    padding: 31px 25px 29px 0px;
  }
`;

export const CvParsingAnimationContainer = styled.div`
  margin: 0 auto;
`;

export const ApplicationStepperStyles = {
  ButtonsWrapper,
  ApplicationStepContainer,
  ApplicationStepContainerSmall,
  CvParsingAnimationContainer,
};
