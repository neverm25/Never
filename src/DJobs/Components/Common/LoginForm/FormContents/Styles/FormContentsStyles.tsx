import { djobsTheme } from "@DJobs/Theme";
import styled from "styled-components";

const FieldWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 2px;
  margin-top: -16px !important;
`;
const CheckBoxContainer = styled.div`
  margin-top: 5px;
  display: flex;
  gap: 5px;
  align-items: center;
  width: 100%;

  .ant-checkbox-wrapper span {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  div {
    text-transform: initial !important;
  }
`;
const SuccessContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  height: 49.62px;
  width: 100%;
  padding: 0 18px;
  margin-bottom: 30px;
  align-items: center;
  background: ${djobsTheme.colors.green80}90;
  border-radius: 65.5755px;
`;

export const FormContentsStyles = {
  FieldWrapper,
  CheckBoxContainer,
  SuccessContent,
};
