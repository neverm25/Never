// #Global Imports
import React from "react";
import styled from "styled-components";
import { Grid } from "antd";
import { useRouter } from "next/router";
// #endGlobal Imports

// #region Local Imports
import { djobsTheme } from "@DJobs/Theme";
import { DjobsTheme } from "@DJobs/Theme/styled";
import { LegalTabData } from "./Utils";

// #endregion Local Imports

export const TabHeader = () => {
  const { Headers } = LegalTabData;
  const screens = Grid.useBreakpoint();
  const router = useRouter();

  return (
    <Container>
      {Headers.map(
        (header: { mobile: string; desktop: string; route: string }) => {
          const isActive =
            header.route.split("/").pop() === router.pathname.split("/").pop();
          return (
            <React.Fragment key={header.desktop}>
              <Heading
                key={header.desktop}
                styleName={"djLegalTabNavDefault"}
                color={isActive ? "green50" : "white100"}
                onClick={() => router.push(header?.route)}
              >
                {screens.md ? header.desktop : header.mobile}
              </Heading>
            </React.Fragment>
          );
        }
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: space-around;
  align-items: center;
  height: 61px;
  background: ${djobsTheme.colors.dittoBlue};
  box-shadow: ${djobsTheme.effects.buttonNormal};
  padding: 0 35px;
  border-radius: 10px;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    border-radius: 24px 24px 0 0;
    margin-bottom: 0px;
  }
`;

const Heading = styled.span<{
  styleName: keyof DjobsTheme.DjobsText;
  color: keyof DjobsTheme.DjobsColorsWithGlobal;
}>`
  align-self: center;
  cursor: pointer;
  margin-right: 0px;
  @media (min-width: 768px) {
    margin-right: 60px;
  }

  ${({ styleName }) => djobsTheme.text[styleName].sm};
  color: ${({ color }) => djobsTheme.colors[color]};
  @media (min-width: 768px) {
    ${({ styleName }) => djobsTheme.text[styleName].md}
  }
  @media (min-width: 1200px) {
    ${({ styleName }) => djobsTheme.text[styleName].lg}
  }
  @media (min-width: 1600px) {
    ${({ styleName }) => djobsTheme.text[styleName].xl}
  }

  &:hover {
    text-decoration: underline;
    color: ${djobsTheme.colors["green50"]};
  }
`;
