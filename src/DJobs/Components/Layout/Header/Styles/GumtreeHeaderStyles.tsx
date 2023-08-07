import styled from "styled-components";

import { djobsTheme } from "@DJobs/Theme";

export const GumtreeHeaderMainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${djobsTheme.colors.black100};
  height: 67px;
  padding: 0px 20px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
  cursor: pointer;

  @media (min-width: 992px) {
    padding: 0px 45px;
    justify-content: center;
  }
`;
