import { djobsTheme } from "@DJobs/Theme";
import styled from "styled-components";

export const JobDataContainer = styled.div`
  padding: 22px 20px;
  margin-top: 20px;
  background: ${djobsTheme.colors.white100};
  box-shadow: ${djobsTheme.effects.boxShadow};
  border: 1px solid ${djobsTheme.colors.black10};
  border-radius: 20px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 8px;
  isolation: isolate;
  flex-grow: 1;
  width: calc(100% - 45px);
  cursor: pointer;
`;

export const IconTextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
`;

export const TextEllipsisContainer = styled.div`
  ${djobsTheme.text.djCardsTitle.sm}
  color: ${djobsTheme.colors.black90};
    display: -webkit-box !important;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    white-space: normal;
    overflow: hidden;
    text-overflow: ellipsis;
`;
