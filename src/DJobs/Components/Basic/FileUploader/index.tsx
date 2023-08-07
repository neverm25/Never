import React from "react";
import { Grid, Progress, Upload, UploadProps } from "antd";
import { toast } from "react-toastify";

import { DJobsTypography } from "@DJobs/Components/Basic";
import { DJobsGradientText } from "../DJobsGradientText";
import {
  Container,
  ProgressBarContainer,
  UploadComponent,
  UploadFileButton,
} from "./Styles/uploadFilesStyle";
import { djobsTheme } from "@DJobs/Theme";
import { UploadedFileList } from "./UploadedFileList";
import { IFileUploader } from "./FileUploader";

export const FileUploader = ({
  isStepper,
  selectedFileId,
  setSelectedFileId,
  isProgressBarShown,
  deleteFileFromList,
  downloadFileFromList,
  progressBar,
  isLoading,
  checkSubmitted,
  uploadFile,
  fileList,
}: IFileUploader.IProps) => {
  if (!selectedFileId && fileList?.length > 0) {
    setSelectedFileId(fileList[0].id);
  }

  const screen = Grid.useBreakpoint();
  const fileTypeArray = [
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ];

  const uploadProps: UploadProps = {
    accept: fileTypeArray.join(", "),
    beforeUpload: file => {
      const isAccpetedFile = fileTypeArray.includes(file.type);
      if (!isAccpetedFile) {
        toast.error(`${file.name} is not a valid file`);
        return false;
      }

      const KB = 1024;
      const MB = 1024 * KB;
      if (file.size > 5 * MB) {
        toast.error("File size should be less than 5mb");
        return false;
      }
      uploadFile(file);
      return isAccpetedFile || Upload.LIST_IGNORE;
    },
  };

  const handleSetSelectedFileId = id => {
    setSelectedFileId(id);
  };

  const isFileListEmpty = fileList?.length === 0;

  return (
    <Container>
      {isProgressBarShown && (
        <ProgressBarContainer>
          <div
            style={{
              width: screen.xs ? "100%" : "25vw",
              marginTop: "20px",
              marginBottom: screen.xs ? "20px" : "65px",
            }}
          >
            <div>
              <Progress
                percent={progressBar}
                showInfo={false}
                strokeColor={djobsTheme.colors.green80}
                strokeWidth={14}
              />
            </div>
          </div>
        </ProgressBarContainer>
      )}

      {!isProgressBarShown && (
        <React.Fragment>
          <div style={{ padding: "18px 0 46px 0" }}>
            <DJobsTypography styleName="djFormsRegular" color="blue60">
              Please upload your latest resume / CV.
            </DJobsTypography>
          </div>
          <UploadComponent {...uploadProps}>
            <UploadFileButton>
              <DJobsGradientText styleName="djLinkBold" gradient="purple100">
                {screen.xl
                  ? "Drag & Drop Your Files Or Browse:"
                  : "Browse to upload files:"}
              </DJobsGradientText>
              <DJobsTypography styleName="djUploadFileSizeText" color="black80">
                (Max 5mb)
              </DJobsTypography>
            </UploadFileButton>
          </UploadComponent>
        </React.Fragment>
      )}

      {isFileListEmpty && !isLoading ? (
        <div style={{ padding: "13px 0px", textAlign: "center" }}>
          <DJobsTypography styleName="djFileTitle" color="blue20">
            No files uploaded
          </DJobsTypography>
        </div>
      ) : (
        <div>
          {isFileListEmpty && isLoading ? (
            <DJobsTypography styleName="djSubHeadingThree" color="black100">
              Loading...
            </DJobsTypography>
          ) : (
            <React.Fragment>
              <div style={{ paddingBottom: "15px" }}>
                {!isFileListEmpty && (
                  <div style={{ paddingBottom: "15px" }}>
                    <DJobsTypography
                      styleName="djSubTitleSix"
                      color="textDarker"
                    >
                      UPLOADED DOCUMENTS
                    </DJobsTypography>
                  </div>
                )}
                {fileList?.map(item => (
                  <UploadedFileList
                    key={item.id}
                    downloadFileFromList={downloadFileFromList}
                    fileData={item}
                    selectedFileId={selectedFileId}
                    handleSetSelectedFileId={handleSetSelectedFileId}
                    deleteFileFromList={deleteFileFromList}
                    isStepper={isStepper}
                    submitted={checkSubmitted ? checkSubmitted(item.id) : false}
                  />
                ))}
              </div>
            </React.Fragment>
          )}
        </div>
      )}
    </Container>
  );
};
