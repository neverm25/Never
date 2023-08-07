import React, { useContext } from "react";
import styled from "styled-components";

import { DJobsTypography } from "@DJobs/Components/Basic";
import { DjobsHomeContext } from "@DJobs/Components/Home";
import { djobsTheme } from "@DJobs/Theme";
import { PlaceHolder } from "../PlaceHolders";

export const About = () => {
  const { deviceType } = useContext(DjobsHomeContext);
  return (
    <Container>
      <DJobsTypography styleName="djSubTitleOne" color="blue100">
        About Me
      </DJobsTypography>
      <Wrapper>
        <div>
          <PlaceHolder height={12} type="Dark" width="100%" isHeading={false} />
          <PlaceHolder height={12} type="Dark" width="100%" isHeading={false} />
          <PlaceHolder height={12} type="Dark" width="100%" isHeading={false} />
          <PlaceHolder height={12} type="Dark" width="100%" isHeading={false} />
        </div>
        {deviceType === "large" && (
          <div style={{ marginTop: "10px" }}>
            <PlaceHolder
              height={12}
              type="Dark"
              width="100%"
              isHeading={false}
            />
          </div>
        )}
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  background: ${djobsTheme.colors.black10};
  box-shadow: ${djobsTheme.effects.modals};
  border-radius: 2px;
  padding: 10px 24px;
`;
const Wrapper = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
