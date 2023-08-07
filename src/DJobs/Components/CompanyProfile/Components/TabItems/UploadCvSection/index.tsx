// #region Global Imports
import React, { useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
// #endregion Global Imports

// #region Local Imports
import { djobsTheme } from "@DJobs/Theme";
import { DjobsButton, FileUploader } from "@DJobs/Components/Basic";
import StepTwo from "./StepTwo";
import { ActionContainer } from "./Styles/UploadCvSectionStyles";
import instance from "@Axios/axios-user";
import { DJOBS_API_PATHS, DJOBS_ROUTES } from "@DJobs/DjobsUtils";
import { UploadCvSectionProps } from "./UploadCvSection";
import { IFileUploader } from "@DJobs/Components/Basic/FileUploader/FileUploader";
import { useAppDispatch, useAppSelector } from "@Redux";
import {
  deleteFileFromListThunk,
  fetchFilesListThunk,
  uploadFileThunk,
} from "@Redux/slices/Files";
import { CompanyProfileCommon } from "../Common";
import { loginActions } from "@Redux/slices/Login";
// #rendegion Local Imports

const fetchSubmittedFileList = async (companyId: string) => {
  try {
    const URL = `${DJOBS_API_PATHS.submittedCV}/${companyId}`;
    const response = await instance.get(URL);
    const submittedFiles: UploadCvSectionProps.FilesSubmittedToCompany =
      response.data;
    return submittedFiles;
  } catch (error) {
    console.log("error", error);
  }
};
const submitFileToCompany = (
  fileId: string,
  companyId: string,
  userId: string
) => {
  const URL = `${DJOBS_API_PATHS.submitCV}`;
  const body = {
    ats_company_id: companyId,
    ats_user_id: userId,
    file_id: fileId,
  };
  instance
    .post(URL, body)
    .then(response => console.log("SUBMIT RESPONSE", response))
    .catch(error => console.log("error", error));
};

export const UploadCvSection = ({
  companyData,
}: UploadCvSectionProps.IProps) => {
  const router = useRouter();
  const companyId = router.query.id?.toString();
  const userId = router.query.u_id?.toString();

  const [activeStep, setActiveStep] = useState(
    0 as UploadCvSectionProps.activeStep
  );

  const [submittedFileList, setSubmittedFileList] = useState([]);
  const [selectedFileId, setSelectedFileId] = useState("");
  const [progressBar, setProgressBar] = useState(0);
  const [isProgressBarShown, setIsProgressBarShown] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { files, login } = useAppSelector(store => store);
  const { filesData: fileList } = files;
  const { isLoggedin } = login;

  const dispatch = useAppDispatch();
  const fetchFileList = async () => {
    setIsLoading(true);
    const submittedFileList = await fetchSubmittedFileList(companyId);
    setSubmittedFileList(submittedFileList);

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
        setSelectedFileId(null);
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

  const checkSubmitted = (fileId: string) => {
    const index = submittedFileList.findIndex(
      file => file.file_id.toString() === fileId
    );
    return index >= 0;
  };

  React.useEffect(() => {
    isLoggedin && fetchFileList();
  }, [isLoggedin]);

  const fileUploaderProps: IFileUploader.IProps = {
    isStepper: true,
    fileList,
    selectedFileId,
    setSelectedFileId,
    isProgressBarShown,
    uploadFile,
    progressBar,
    deleteFileFromList,
    downloadFileFromList,
    isLoading,
    checkSubmitted,
  };

  const fileUploaderContent = (
    <React.Fragment>
      <FileUploader {...fileUploaderProps} />
      {selectedFileId && !checkSubmitted(selectedFileId) && userId && (
        <ActionContainer>
          <DjobsButton.Actions
            variant="Submit"
            label="Submit"
            onClick={() => {
              setActiveStep(1);
              submitFileToCompany(selectedFileId, companyId, userId);
            }}
          />
        </ActionContainer>
      )}
    </React.Fragment>
  );
  const notLoggedinContent = (
    <NotLoggedinContentWrapper>
      <CompanyProfileCommon.Description
        description={`Please Sign In or Register to submit your CV to ${companyData.company_name} `}
      />
      <DjobsButton.Apply
        variant="Primary"
        label="Get Started"
        onClick={() => {
          router.push(DJOBS_ROUTES.login);
          dispatch(
            loginActions.setUrlBeforeInitiatinLogin(window.location.href)
          );
        }}
      />
    </NotLoggedinContentWrapper>
  );

  return (
    <React.Fragment>
      {activeStep === 0 && (
        <TabComponentsWrapper>
          <CompanyProfileCommon.Title title={`Upload your files`} />
          {isLoggedin ? fileUploaderContent : notLoggedinContent}
        </TabComponentsWrapper>
      )}
      {activeStep === 1 && <StepTwo />}
    </React.Fragment>
  );
};

const TabComponentsWrapper = styled.div`
  padding: 30px 20px 35px 20px;
  background: ${djobsTheme.colors.white100};
  border: 0.658436px solid ${djobsTheme.colors.black10};
  box-shadow: ${djobsTheme.effects.boxShadow};
  border-radius: 16px 16px 15.8025px 15.8025px;
  margin: 0px 10px;

  @media (min-width: 992px) {
    max-width: 600px;
    box-shadow: none;
    border: none;
    padding: 0;
  }
`;
const NotLoggedinContentWrapper = styled.div`
  padding-top: 10px;
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;
