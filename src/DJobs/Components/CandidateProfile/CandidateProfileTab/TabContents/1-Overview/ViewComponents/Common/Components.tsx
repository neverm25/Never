import { DJobsTypography } from "@DJobs/Components/Basic";
import { djobsTheme } from "@DJobs/Theme";
import styled from "styled-components";

type TitleProps = {
  name: string;
};
type CountProps = {
  count: number;
};

const Title = ({ name }: TitleProps) => (
  <DJobsTypography styleName="djSubTitleTwo" color="textDarker">
    {name}
  </DJobsTypography>
);
const Count = ({ count }: CountProps) => (
  <CountWrapper>
    <DJobsTypography styleName="djCountText" color="black100">
      {count}
    </DJobsTypography>
  </CountWrapper>
);

const CountWrapper = styled.div`
  width: 34px;
  height: 33px;
  border-radius: 50%;
  background: ${djobsTheme.colors.green50};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const OverviewCommonComponents = { Title, Count };
