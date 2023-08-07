import React, { createContext, useState } from "react";
import { Row, Col } from "antd";

import { CandidatesList } from "./CandidatesList";
import { CandidateProfile } from "./CandidateProfile";
import { PipelineProps } from "./Pipeline";
import { FilterComponent } from "./FilterComponent";
import { Topbar } from "./Topbar";
import { candidateListInitialData } from "./Utils/PipelineUtils";
import { jobData } from "./Utils/PipelineUtils";

export const getCandidateCountInPipelinePhase = (
  candidateList: PipelineProps.CandidateList
) => {
  const candidateCountInPipelineStatus: PipelineProps.CandidateCountInPipelineStatus = {
    screening: 0,
    shortlist: 0,
    interview: 0,
    "offer made": 0,
    onboarding: 0,
  };
  candidateList.forEach(candidateData => {
    candidateCountInPipelineStatus[candidateData.status] += 1;
  });
  return candidateCountInPipelineStatus;
};
export const getCandidateCountInRating = (
  candidateList: PipelineProps.CandidateList
) => {
  const candidateCountInPipelineStatus: PipelineProps.CandidateCountInRating = {
    "Good fit": 0,
    Maybe: 0,
    "Bad fit": 0,
  };
  candidateList.forEach(candidateData => {
    candidateCountInPipelineStatus[candidateData.rating] += 1;
  });
  return candidateCountInPipelineStatus;
};

export const PipelineContext = createContext(
  {} as PipelineProps.PipelineContextProps
);

export const Pipeline = () => {
  //State management
  const [candidateList, setCandidateList] = useState(candidateListInitialData);
  const [filteredCandidateList, setFilteredCandidateList] = useState(
    candidateListInitialData
  );
  const [selectedCandidate, setSelectedCandidate] = useState(
    filteredCandidateList[0]
  );
  const [ratingFilterLabel, setRatingFilterLabel] = useState<
    "ALL" | PipelineProps.Rating
  >("ALL");
  const [ratingFilterValue, setRatingFilterValue] = useState<
    PipelineProps.Rating | ""
  >("");
  const [statusFilterValue, setStatusFilterValue] = useState<
    PipelineProps.PipelineStatus | ""
  >("");
  const [statusFilterLabel, setStatusFilterLabel] = useState<
    "ALL" | PipelineProps.PipelineStatus
  >("ALL");

  //Candidate updation
  const updateSelectedCandidateField = (
    props: PipelineProps.UpdateCandidateProps
  ) => {
    const { fieldName, fieldValue } = props;
    const newCandidateData = { ...selectedCandidate };
    newCandidateData[fieldName as string] = fieldValue;

    const newCandidateList = candidateList.map(candidateData => {
      const isUpdatedCandidate =
        selectedCandidate.candidateId === candidateData.candidateId;
      return isUpdatedCandidate ? newCandidateData : candidateData;
    });

    setSelectedCandidate(newCandidateData);
    setCandidateList(newCandidateList);
  };

  //Context provider
  const pipelineContextProps: PipelineProps.PipelineContextProps = {
    candidateList,
    setCandidateList,
    filteredCandidateList,
    setFilteredCandidateList,
    selectedCandidate,
    setSelectedCandidate,

    ratingFilterLabel,
    setRatingFilterLabel,
    ratingFilterValue,
    setRatingFilterValue,

    statusFilterLabel,
    setStatusFilterLabel,
    statusFilterValue,
    setStatusFilterValue,

    updateSelectedCandidateField,

    jobData,
  };

  return (
    <PipelineContext.Provider value={pipelineContextProps}>
      <Topbar />

      <Row gutter={10}>
        <Col span={7}>
          <FilterComponent />
          <CandidatesList />
        </Col>
        <Col span={17}>
          <CandidateProfile />
        </Col>
      </Row>
    </PipelineContext.Provider>
  );
};
