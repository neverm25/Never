import { djobsTheme } from "@DJobs/Theme";
import styled, { css } from "styled-components";

type InputContainerProps = {
  containerWidth: string;
  value: string;
  hasError: boolean;
};
const DefaultInputField = css<InputContainerProps>`
  width: 100% !important;
  border-radius: 6px !important;
  border: 1px solid
    ${({ value, hasError }) =>
      value && !hasError
        ? djobsTheme.colors.InputFilledBorder
        : djobsTheme.colors.black20} !important;
  background: ${({ value, hasError }) =>
    value && !hasError
      ? djobsTheme.colors.green10
      : djobsTheme.colors.black30} !important;
  box-shadow: ${djobsTheme.effects.insetBoxShadow} !important;

  @media (min-width: 768px) {
    width: ${({ containerWidth }) => containerWidth};
    min-width: 150px;
  }
`;
const DefaultInputFieldText = css<InputContainerProps>`
  ${djobsTheme.text.djInputValue.sm} !important;
  color: ${({ value, hasError }) =>
    value && !hasError
      ? djobsTheme.colors.green160
      : djobsTheme.colors.black80} !important;

  @media (min-width: 768px) {
    ${djobsTheme.text.djInputValue.md} !important;
  }
  @media (min-width: 992px) {
    ${djobsTheme.text.djInputValue.lg} !important;
  }
  @media (min-width: 1600px) {
    ${djobsTheme.text.djInputValue.xl} !important;
  }
`;
const DefaultInputFieldHover = css<InputContainerProps>`
  border: 1px solid
    ${({ hasError }) =>
      hasError
        ? djobsTheme.colors.black20
        : djobsTheme.colors.blue50} !important;
  box-shadow: ${djobsTheme.effects.insetBoxShadow},
    ${({ hasError }) =>
      hasError
        ? djobsTheme.effects.errorOutline
        : djobsTheme.effects.activeBorder} !important;
`;
const DefaultInputFieldFocus = css<InputContainerProps>`
  border: 1px solid
    ${({ hasError }) =>
      hasError
        ? djobsTheme.colors.black20
        : djobsTheme.colors.dittoBlue} !important;
  box-shadow: ${djobsTheme.effects.insetBoxShadow},
    ${({ hasError }) =>
      hasError
        ? djobsTheme.effects.errorOutline
        : djobsTheme.effects.activeBorder} !important;
`;
const DefaultInputFieldPlaceholder = css<InputContainerProps>`
  ${djobsTheme.text.djInputPlaceholder.sm} !important;
  color: ${djobsTheme.colors.black50} !important;
  text-transform: capitalize !important;

  @media (min-width: 768px) {
    ${djobsTheme.text.djInputPlaceholder.md} !important;
  }
  @media (min-width: 992px) {
    ${djobsTheme.text.djInputPlaceholder.lg} !important;
  }
  @media (min-width: 1600px) {
    ${djobsTheme.text.djInputPlaceholder.xl} !important;
  }
`;
const WhiteInputField = css<InputContainerProps>`
  background: ${({ value, hasError }) =>
    value && !hasError
      ? djobsTheme.colors.green10
      : djobsTheme.colors.white100} !important;
`;
const QuestionairreInputContainer = css<InputContainerProps>`
  background: ${({ hasError }) =>
    hasError ? djobsTheme.colors.red10 : djobsTheme.colors.white110} !important;
  border: 1px solid ${djobsTheme.colors.red10} !important;
  box-shadow: ${djobsTheme.effects.questionairresBox} !important;
  border-radius: 13px !important;
  padding: 30px 20px !important;

  @media (min-width: 768px) {
    min-width: 150px !important;
    width: ${({ containerWidth }) => containerWidth} !important;
    padding: 30px 40px !important;
  }
`;
const QuestionairreInputField = css<InputContainerProps>`
  background: ${({ hasError }) =>
    hasError
      ? djobsTheme.colors.white110
      : djobsTheme.colors.white100} !important;
`;
export const DjobsInputFieldCommonStyles = {
  DefaultInputField,
  DefaultInputFieldText,
  DefaultInputFieldHover,
  DefaultInputFieldFocus,
  DefaultInputFieldPlaceholder,
  WhiteInputField,
  QuestionairreInputContainer,
  QuestionairreInputField,
};

//#region Styled Components
const FieldWrapper = styled.div`
  padding-top: 10px;
`;
const LabelWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const DJobsInputStyledComponents = { FieldWrapper, LabelWrapper };
//#endregion
