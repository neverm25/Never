//#region Global Imports
import styled from "styled-components";
// #endregion Global Imports

// #region Local Imports
import { djobsTheme } from "@DJobs/Theme";
// #endregion Local Imports

export const ContentWrapper = styled.div`
  margin-top: 22px;
  padding: 0 0 5px 0;

  @media (min-width: 992px) {
    margin-top: 27px;
    padding: 0 25px 5px 25px;
  }
`;

export const CloseAccountPhase = styled.div`
  background: ${djobsTheme.colors.red10};
  border-radius: 14px;
  margin-top: 29px;
  padding: 20px 20px 34px 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.14);

  @media (min-width: 992px) {
    background: ${djobsTheme.colors.red05};
    padding: 20px;
  }
  @media (min-width: 1600px) {
    padding: 0px;
  }
`;

export const Confirmation = styled.div`
  background: ${djobsTheme.colors.red05};
  padding:15px;

  border-radius: 14px;
  border: 1px solid ${djobsTheme.colors.red20};
  @media (min-width: 992px) {
    width: 289px;
    border-radius: 14px;
    background: ${djobsTheme.colors.red10};
  }

  @media (min-width: 1600px) {
    border-bottom-right-radius: 0px;
    border-bottom-left-radius: 0px;
    border: none;
    width: 100%;
    background: ${djobsTheme.colors.red10};
  }
`;
export const FormContainer = styled.div`
  max-width: 286px;

  @media (min-width: 992px) {
    max-width: 289px;
  }

  @media (min-width: 1600px) {
    padding: 0px 20px 20px 20px;
  }
`;
export const FieldWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 2px;
  margin-top: 0px !important;

  input {
    background: ${djobsTheme.colors.black30};
    border: 1px solid rgba(0, 0, 0, 0.08);
  }

  .bwMrDu {
    padding-top: 0px !important;
  }
`;

export const Cancel = styled.div`
  margin-left: 6px;
`;
