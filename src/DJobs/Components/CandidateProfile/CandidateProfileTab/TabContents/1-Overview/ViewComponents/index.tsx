import React from "react";
import { CandidateDetails } from "./1-CandiateDetails";
import { AboutCandidate } from "./2-AboutCandidate";
import { CandidateSkills } from "./3-CandidateSkills";
import { Languages } from "./4-Languages";

export const ViewComponents = () => (
  <React.Fragment>
    <CandidateDetails />
    <AboutCandidate />
    <CandidateSkills />
    <Languages />
  </React.Fragment>
);
