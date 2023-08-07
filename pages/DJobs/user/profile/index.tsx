import * as React from "react";

import { CandidateProfile } from "@DJobs/Components";
import AuthCheck from "src/Auth";

const CandidateProfilePage = () => {
  return (
    <AuthCheck>
      <CandidateProfile />
    </AuthCheck>
  );
};
export default CandidateProfilePage;
