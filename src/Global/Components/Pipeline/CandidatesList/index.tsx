import React from "react";

import { PaginationBase } from "@Global/Components/Basic";
import { Candidate } from "./Candidate";
import { PipelineContext } from "..";

export const CandidatesList = () => {
  const { filteredCandidateList } = React.useContext(PipelineContext);

  return (
    <React.Fragment>
      {filteredCandidateList.map((candidate, index) => (
        <Candidate
          candidate={candidate}
          index={index}
          key={`${candidate.name}_${index}`}
        />
      ))}
      <PaginationBase totalItems={20} />
    </React.Fragment>
  );
};
