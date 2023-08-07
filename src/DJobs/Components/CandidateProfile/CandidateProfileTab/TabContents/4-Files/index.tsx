//#region Global Imports
import React, { useState } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";
//#end Global Imports

//#Local Imports
import { FileUploader } from "@DJobs/Components/Basic";
import { StepHeading } from "@DJobs/Components/Common/StepHeading";
import { djobsTheme } from "@DJobs/Theme";
import { useAppDispatch, useAppSelector } from "@Redux";
import {
  deleteFileFromListThunk,
  fetchFilesListThunk,
  uploadFileThunk,
} from "@Redux/slices/Files";
import instance from "@Axios/axios-user";
import { IFileUploader } from "@DJobs/Components/Basic/FileUploader/FileUploader";
//#end Local Imports

export const Files = () => {
  const [selectedFileId, setSelectedFileId] = React.useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [isProgressBarShown, setIsProgressBarShown] = useState(false);
  const [progressBar, setProgressBar] = useState(0);
  const fileList = useAppSelector(state => state.files.filesData);
  const dispatch = useAppDispatch();

  const fetchFileList = async () => {
    setIsLoading(true);
    dispatch(fetchFilesListThunk()).then(() => {
      setIsLoading(false);
    });
  };

  const uploadFile = file => {
    setIsProgressBarShown(true);
    const timer = setInterval(() => {
      if (progressBar < 90) setProgressBar(prev => prev + 10);
    }, 1000);
    const formData = new FormData();
    formData.append("files", file);

    dispatch(uploadFileThunk(formData))
      .then(_response => {
        clearInterval(timer);
        setProgressBar(100);
        setTimeout(() => {
          setIsProgressBarShown(false);
          setProgressBar(0);
          fetchFileList();
        }, 1000);
      })
      .catch(error => {
        toast.error("Error while uploading file", error);
        setIsProgressBarShown(false);
        setProgressBar(0);
      });
  };

  const deleteFileFromList = (fileId: string) => {
    dispatch(deleteFileFromListThunk(fileId))
      .then(_response => {
        fetchFileList();
      })
      .catch(error => console.log("error", error));
  };

  const downloadFileFromList = (fileId: string, fileName: string) => {
    instance
      .get(`${process.env.NEXT_PUBLIC_TS_API}/candidates-file/${fileId}`, {
        responseType: "blob",
      })
      .then(response => {
        const url = window.URL.createObjectURL(response.data);
        const aElement = document.createElement("a") as HTMLAnchorElement;
        aElement.href = url;
        aElement.download = fileName;
        aElement.click();
      })
      .catch(error => console.log("error", error));
  };

  React.useEffect(() => {
    fileList?.length === 0 && fetchFileList();
  }, []);

  const fileUploaderProps: IFileUploader.IProps = {
    isStepper: false,
    fileList,
    selectedFileId,
    setSelectedFileId,
    isProgressBarShown,
    uploadFile,
    progressBar,
    deleteFileFromList,
    downloadFileFromList,
    isLoading,
  };
  return (
    <MainWrapperr>
      <StepHeading stepHeading="Files" />
      <FileUploader {...fileUploaderProps} />
    </MainWrapperr>
  );
};

export const MainWrapperr = styled.div`
  margin-left: 7px;
  background: ${djobsTheme.colors.white100};
  padding: 31px 25px;
  box-shadow: ${djobsTheme.effects.cardShadow};
  border: 0.658436px solid ${djobsTheme.colors.black10};
  border-radius: 16px 16px 15.8025px 15.8025px;

  @media (min-width: 768px) {
    padding: 0px 0px 38px 0px;
    background: none;
    box-shadow: none;
    border: none;
  }

  @media (min-width: 992px) {
    max-width: 591px;
    padding: 0px 0px 38px 0px;
    background: none;
    box-shadow: none;
    border: none;
  }

  @media (min-width: 1600px) {
    padding: 0px 0px 57px 0px;
    background: none;
    box-shadow: none;
    border: none;
    background: none;
  }
`;
