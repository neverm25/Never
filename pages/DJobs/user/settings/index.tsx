// #Global Imports
import * as React from "react";
import { NextPage } from "next";
// #Global Imports

// #region Local Imports
import { CandidateSettings } from "@DJobs/Components";
import AuthCheck from "src/Auth";
// #endregion Local Imports

const CandidateSettingsPage: NextPage = () => (
  <AuthCheck >
    <CandidateSettings />
  </AuthCheck>
);

const Extended = CandidateSettingsPage;

export default Extended;
