import React, { useState, createContext, useContext } from "react";
import styled from "styled-components";

import { DjobsButton, DJobsTypography } from "@DJobs/Components/Basic";
import { GradientIcons } from "@Global/Components/Icons";
import { CandidateOverview } from "./Overview";
import { CandidateProfileContext } from "../..";
import { DeviceTypeHelpers } from "@Helpers/DeviceTypeHelpers";
import { CandidateLanguagesAPI, CandidateSkillsAPI } from "@API";
import { useAppSelector } from "@Redux";
import { CandidateDetails } from "@API/CandidateDetails";

import dynamic from "next/dynamic";
const ViewComponents = dynamic(import("./ViewComponents").then(module => module.ViewComponents));
const EditComponents = dynamic(import("./EditComponents").then(module => module.EditComponents));

export const CandidateOverviewContext = createContext(
  {} as CandidateOverview.Context
);

export const Overview = () => {
  const { skills, languages } = useAppSelector(state => state);

  const { deviceType } = useContext(CandidateProfileContext);
  const isMobileorSmall = DeviceTypeHelpers.isDeviceIsOrSmall({
    comparedTo: "mobile",
    currentDevice: deviceType,
  });

  const [isEditMode, setIsEditMode] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState("");
  const [isMouseOverEditIcon, setIsMouseOverEditIcon] = useState(false);

  const getSkills = () => skills.candidateSkillsList.map(skill => skill.name);

  const contextValue: CandidateOverview.Context = {
    isEditMode,
    setIsEditMode,
    profilePhoto,
    setProfilePhoto,
    getSkills,
  };

  const handleDownload = () => {
    CandidateDetails.generateCandidateCv()
      .then(response => {
        const content = new Blob([response?.data], { type: "application/pdf" });
        const encodedUrl = window.URL.createObjectURL(content);

        const link = document.createElement("a") as HTMLAnchorElement;
        link.href = encodedUrl;
        link.download = "CV";
        link.click();
      })
      .catch(error => console.log(error, "error"));
  };

  React.useEffect(() => {
    skills.skillsList.length === 0 && CandidateSkillsAPI.getSkillsList();
    skills.candidateSkillsList.length === 0 &&
      CandidateSkillsAPI.getCandidateSkills();
    languages.langugagesList.length === 0 &&
      CandidateLanguagesAPI.getLanguagesList();

    languages.candidateLanguages.length === 0 &&
      CandidateLanguagesAPI.getCandidateLanguages();
  }, [
    skills.skillsList.length,
    skills.candidateSkillsList.length,
    languages.langugagesList.length,
    languages.candidateLanguages.length,
  ]);

  return (
    <CandidateOverviewContext.Provider value={contextValue}>
      <Container>
        {!isMobileorSmall && (
          <Title>
            <DJobsTypography styleName="djHeadingTwo" color="black90">
              My Profile
            </DJobsTypography>
            <ButtonsWrapper>
              <DjobsButton.Main
                variant="Primary"
                label="Download"
                onClick={handleDownload}
              />
              {!isEditMode && (
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setIsEditMode(true);
                    setIsMouseOverEditIcon(false);
                  }}
                  onMouseOver={() => setIsMouseOverEditIcon(true)}
                  onMouseLeave={() => setIsMouseOverEditIcon(false)}
                >
                  {isMouseOverEditIcon ? (
                    <GradientIcons.EditIconHover />
                  ) : (
                    <GradientIcons.EditIcon />
                  )}
                </div>
              )}
            </ButtonsWrapper>
          </Title>
        )}
        {isEditMode ? <EditComponents /> : <ViewComponents />}
      </Container>
    </CandidateOverviewContext.Provider>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 30px;
`;
