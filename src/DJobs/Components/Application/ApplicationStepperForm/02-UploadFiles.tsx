import React, { useContext, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import styled from "styled-components";

import { FileUploader } from "@DJobs/Components/Basic";
import { ApplicationStepperStyles } from "./Common/Styles";
import { ApplicationProcessContext } from ".";
import { BackButton, DjobsButton } from "@DJobs/Components/Basic";
import { StepHeading } from "./Common/StepHeading";
import { IFileUploader } from "@DJobs/Components/Basic/FileUploader/FileUploader";
import { actions, useAppDispatch, useAppSelector } from "@Redux";
import {
  deleteFileFromListThunk,
  fetchFilesListThunk,
  uploadFileThunk,
} from "@Redux/slices/Files";
import instance from "@Axios/axios-user";
import { ApplicationAPI } from "@API/ApplicationAPI";
import CvParsing from "public/static/images/parsing.gif";
import {
  getCandidateData,
  getCandidateOverview,
} from "@Redux/slices/CandidateDetails";
import { CandidateDetailsProps } from "@Redux/slices/CandidateDetails/CandidateDetails";

export const UploadFilesStepTwo = () => {
  const { setStepNumber, setUploadedFilesId, UploadedFilesId } = useContext(
    ApplicationProcessContext
  );
  const { files, jobData, candidateDetails } = useAppSelector(state => state);
  const { filesData } = files;
  const { applyJobData } = jobData;
  const router = useRouter();

  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [isProgressBarShown, setIsProgressBarShown] = useState(false);
  const [progressBar, setProgressBar] = useState(0);
  const [isCvParsingProcessing, isetICvParsingProcessing] = useState<boolean>(
    false
  );

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

  const handleCvParsing = () => {
    let isCvParsingCall = candidateDetails?.should_parse;
    let isApplicationAPICall =
      applyJobData?.is_internal && !applyJobData.questionnaire_data;

    let promise = [];

    if (isCvParsingCall) {
      promise.push(
        new Promise((resolve, reject) => {
          isetICvParsingProcessing(true);
          ApplicationAPI.cvParse(UploadedFilesId)
            .then(() => resolve("Parsing Done"))
            .catch(error => reject(error));
        })
      );
    }
    if (isApplicationAPICall) {
      promise.push(
        new Promise((resolve, reject) => {
          ApplicationAPI.submitApplication(UploadedFilesId, router.query.job_id)
            .then(response => {
              const jobApplications: CandidateDetailsProps.jobApplications =
                response.data;
              dispatch(
                actions.candidateDetails.setJobApplications(jobApplications)
              );
              dispatch(getCandidateOverview());
              resolve("Application submitted");
            })
            .catch(error => reject(error));
        })
      );
    }
    Promise.all(promise)
      .then(d => {
        console.log(d);
      })
      .catch(e => {
        console.log(e);
      })
      .finally(() => {
        const steps = applyJobData.questionnaire_data ? 1 : 2;
        isetICvParsingProcessing(false);
        setStepNumber(prev => prev + steps);
        window.scrollTo(0, 0);
      });
    dispatch(getCandidateData());
    window.scroll(0, 0);
  };

  React.useEffect(() => {
    filesData?.length === 0 && fetchFileList();
  }, []);

  const fileUploaderProps: IFileUploader.IProps = {
    isStepper: true,
    fileList: filesData,
    selectedFileId: UploadedFilesId,
    setSelectedFileId: setUploadedFilesId,
    isProgressBarShown,
    uploadFile,
    progressBar,
    deleteFileFromList,
    downloadFileFromList,
    isLoading,
  };

  return (
    <React.Fragment>
      <ApplicationStepperStyles.ApplicationStepContainerSmall>
        {isCvParsingProcessing ? (
          <ApplicationStepperStyles.CvParsingAnimationContainer>
            <Image alt="Mountains" src={CvParsing} width={436} height={378} loading="lazy"/>
          </ApplicationStepperStyles.CvParsingAnimationContainer>
        ) : (
          <React.Fragment>
            <StepHeading stepHeading="Upload your files" />
            <FileUploaderWrapper>
              <FileUploader {...fileUploaderProps} />
            </FileUploaderWrapper>
          </React.Fragment>
        )}
      </ApplicationStepperStyles.ApplicationStepContainerSmall>

      <ApplicationStepperStyles.ButtonsWrapper
        isBorder={!isCvParsingProcessing}
      >
        {!isCvParsingProcessing && (
          <React.Fragment>
            <BackButton
              handleClick={() => {
                setStepNumber(prev => prev - 1);
                window.scrollTo(0, 0);
              }}
            />
            <DjobsButton.NavActions
              variant="Stepper"
              label="Next"
              onClick={handleCvParsing}
              disabled={UploadedFilesId === null}
            />
          </React.Fragment>
        )}
      </ApplicationStepperStyles.ButtonsWrapper>
    </React.Fragment>
  );
};

const FileUploaderWrapper = styled.div`
  margin-top: -46px;
  @media (min-width: 992px) {
    margin-top: -60px;
  }
`;
