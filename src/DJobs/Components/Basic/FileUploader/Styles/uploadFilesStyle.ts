// #region Global Imports
import styled from "styled-components";
import { Upload } from "antd";
// #endregion Global Imports

// #region Local Imports
import { djobsTheme } from "@DJobs/Theme";
//end Local Imports

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ProgressBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media (min-width: 992px) {
    width: 25vw;
  }
`;

export const UploadComponent = styled(Upload)`
  padding: 0px 0;
  width: 100%;
  cursor: pointer;
  margin-bottom: 40px;
  .ant-upload-list {
    display: none;
  }
  .ant-upload.ant-upload-select {
    display: block;
  }
  @media (min-width: 1200px) {
    margin-bottom: 60px;
  }
  @media (min-width: 1600px) {
    margin-bottom: 55px;
  }
`;

export const UploadFileButton = styled.div`
  height: 63px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 5px;
  justify-content: center;
  background: ${djobsTheme.colors.white100};
  border: 1px dashed #b6b9bb;
  box-shadow: 0px 8.00808px 8.00808px -8.00808px rgba(168, 174, 182, 0.5);
  border-radius: 6.40646px;
  font-family: Montserrat;
  font-weight: 900;
  font-size: 16px;
  line-height: 32px;
  color: ${djobsTheme.colors.black80};
  text-align: center;
  padding: 22px;

  @media (min-width: 1200px) {
    margin-left: 0px;
  }

  @media (min-width: 768px) {
    padding: 0px 0px;
  }

  span {
    background: ${djobsTheme.gradients.purpleHover};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  &:hover {
    background: ${djobsTheme.colors.green10};
    box-shadow: inset 1px -4px 12px rgba(0, 159, 112, 0.24);
  }
`;

export const FileDetailContainer = styled.div<{
  checked?: boolean;
  onClick: () => void;
  disabled: boolean;
}>`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 46px;
  align-items: center;
  justify-content: space-between;
  background: ${({ checked }) =>
    checked ? djobsTheme.colors.green20 : djobsTheme.colors.white100};
  border: 0.800808px solid #d0dadf;
  box-shadow: ${({ checked }) =>
    checked && "0px 8.00808px 8.00808px -8.00808px #a8aeb6"};

  border-radius: 6.40646px;
  padding: 0 5px;
  gap: 3px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

  &:hover {
    box-shadow: ${({ disabled }) =>
      !disabled && djobsTheme.effects.greenShadow};
    background: ${({ disabled }) =>
      !disabled && djobsTheme.gradients.dragAndDropHover};
  }

  @media (min-width: 992px) {
    gap: 10px;
    padding: 8px 12px 8px 20px;
  }
`;

export const FileListWrapper = styled.div<{
  selectedFile: boolean;
  isStepper: boolean;
  disabled: boolean;
}>`
  display: flex;
  align-items: center;
  margin-bottom: 14px;
  gap: 10px;
  justify-content: space-between;
  cursor: pointer;
  width: 100%;

  @media (min-width: 992px) {
    gap: 15px;
    width: ${({ selectedFile, isStepper }) =>
      selectedFile || !isStepper ? "calc(100% - 57px)" : "calc(100% - 94px)"};
  }
`;

export const FileSize = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  @media (min-width: 992px) {
    gap: 10px;
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 1200px) {
    margin-bottom: 25px;
    margin-left: 0px;
  }
  @media (min-width: 1600px) {
    margin-bottom: 22px;
  }
`;

export const FileActions = styled.a`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`;
