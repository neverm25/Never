// #Global Imports
import * as React from "react";
import { NextPage } from "next";
// #Global Imports

// #region Local Imports
import { IJobsPage } from "@Interfaces";
import Jobs from "@Global/Components/Jobs";
// #endregion Local Imports

const JobsPage: NextPage<IJobsPage.InitialProps> = () => <Jobs />;

JobsPage.getInitialProps = async (): Promise<IJobsPage.InitialProps> => {
  return { namespacesRequired: ["common"] };
};

const Extended = JobsPage;

export default Extended;
