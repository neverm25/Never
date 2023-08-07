import React, { useState } from "react";
import styled from "styled-components";
import { Grid, Tooltip } from "antd";

import {
  DeleteIcon,
  UilFile,
  DownloadIcon,
  TickIconSubmit,
} from "@DJobs/Components/Icons";
import { DJobsTypography, RadioButton } from "@DJobs/Components/Basic/";
import { djobsTheme } from "@DJobs/Theme";
import {
  FileDetailContainer,
  FileActions,
  FileListWrapper,
  FileSize,
} from "./Styles/uploadFilesStyle";
import { IFileUploader } from "./FileUploader";
import PDFIcon from "@DJobs/Components/Icons/PDFIcon";
import { DeleteModal } from "../DeleteModal";
import { TextWithLeadingEllipsis } from "../TextWithLeadingEllipsis";

const calculateFileSize = fileSize => {
  const KB = 1024;
  const MB = 1024 * KB;
  const size =
    fileSize < MB
      ? Math.round(fileSize / KB).toString() + "KB"
      : Math.round(fileSize / MB).toString() + "MB";
  return size;
};

export const UploadedFileList = ({
  fileData,
  selectedFileId,
  deleteFileFromList,
  handleSetSelectedFileId,
  downloadFileFromList,
  isStepper,
  submitted = false,
}: IFileUploader.IUploadedFilesListProps) => {
  const screen = Grid.useBreakpoint();
  const selected = fileData?.id === selectedFileId;

  const [showModal, setShowModal] = useState(false);
  //Hover state of icons
  const [isMouseOverDownloadIcon, setIsMouseOverDownloadIcon] = useState(false);
  const [isMouseOverDeleteIcon, setIsMouseOverDeleteIcon] = useState(false);

  const TEXT_COLOR = "blueGrey90";
  const DOWNLOAD_ICON_COLOR = isMouseOverDownloadIcon
    ? "black50"
    : "blueGrey90";
  const DELETE_ICON_COLOR = isMouseOverDeleteIcon ? "black50" : "blueGrey90";
  const FileIcons = {
    pdf: <PDFIcon color={djobsTheme.colors[TEXT_COLOR]} />,
  };

  const margin = screen.md ? 15 : 5;
  const showFileSize = !selected && screen.md;

  return (
    <FileListWrapper
      selectedFile={fileData?.id === selectedFileId}
      isStepper={isStepper}
      disabled={submitted}
    >
      <FileDetailContainer
        checked={fileData?.id === selectedFileId}
        onClick={() => {
          if (submitted) return;
          handleSetSelectedFileId(fileData?.id);
        }}
        disabled={submitted}
      >
        <FileName>
          {!submitted && isStepper && (
            <div
              onClick={() => {
                if (submitted) return;
                handleSetSelectedFileId(fileData?.id);
              }}
              style={{
                marginLeft: "12px",
                marginRight: selected ? `${margin}px` : `${margin + 3}px`,
              }}
            >
              <RadioButton variant="green" checked={selected} size="large" />
            </div>
          )}

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {FileIcons[fileData?.type] ? (
              FileIcons[fileData?.type]
            ) : (
              <UilFile size={25} color={djobsTheme.colors[TEXT_COLOR]} />
            )}
          </div>
          <div style={{ marginLeft: `${margin}px` }}>
            <TextWithLeadingEllipsis
              styleName="djFileTitle"
              color={TEXT_COLOR}
              maxLineLength={1}
              content={fileData?.name}
            />
          </div>
        </FileName>
        {showFileSize && (
          <FileSize>
            <DJobsTypography styleName="djFileTitle" color={TEXT_COLOR}>
              {`${calculateFileSize(fileData?.size)} `}
            </DJobsTypography>
            <DJobsTypography styleName="djFileTitle" color={TEXT_COLOR}>
              {fileData?.uploaded_on}
            </DJobsTypography>
          </FileSize>
        )}
        {submitted && (
          <Tooltip placement="right" title="submitted">
            <CheckContainer>
              <TickIconSubmit />
            </CheckContainer>
          </Tooltip>
        )}
      </FileDetailContainer>
      <FileActions
        onClick={() => {
          setIsMouseOverDownloadIcon(false);
          downloadFileFromList(fileData?.id, fileData?.name);
        }}
        onMouseOver={() => setIsMouseOverDownloadIcon(true)}
        onMouseLeave={() => setIsMouseOverDownloadIcon(false)}
      >
        <DownloadIcon fillColor={djobsTheme.colors[DOWNLOAD_ICON_COLOR]} />
      </FileActions>
      {(fileData?.id === selectedFileId || !isStepper) && (
        <FileActions
          onClick={() => {
            setShowModal(true);
            setIsMouseOverDeleteIcon(false);
          }}
          onMouseOver={() => setIsMouseOverDeleteIcon(true)}
          onMouseLeave={() => setIsMouseOverDeleteIcon(false)}
        >
          <DeleteIcon fillColor={djobsTheme.colors[DELETE_ICON_COLOR]} />
        </FileActions>
      )}
      <DeleteModal
        {...{ showModal, setShowModal }}
        onDelete={() => deleteFileFromList(fileData?.id)}
        deletedItemName="File"
      />
    </FileListWrapper>
  );
};

const FileName = styled.div`
  display: flex;
  align-items: center;
`;

const CheckContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 22px;
  width: 22px;
  border-radius: 50%;
  padding: 5px;
  background: ${djobsTheme.colors.green30};
`;
