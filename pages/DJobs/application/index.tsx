import * as React from "react";
import { GetServerSidePropsContext } from "next";
import * as cookie from "cookie";

import { Application } from "@DJobs/Components";
import AuthCheck from "src/Auth";
import { LOCAL_STORAGE_KEY } from "@DJobs/DjobsUtils/LocalStorageKeys";
import store, { actions } from "@Redux";
import { SearchedJobsList } from "@Redux/slices/SearchedJobsList/SearchedJobsList";
import { JobAPI } from "@API/JobAPI";

type ApplicationPageProps = {
  jobData: SearchedJobsList.ApplyJobData;
};
const ApplicationPage = ({ jobData }: ApplicationPageProps) => (
  <AuthCheck jobData={jobData}>
    <Application />
  </AuthCheck>
);

export default ApplicationPage;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const query = context.query;
  const notFound = { notFound: true };

  const job_id =
    typeof query.job_id === "object" ? query.job_id[0] : query.job_id;
  if (!job_id) return notFound;

  let source =
    typeof query.source === "object" ? query.source[0] : query.source || "";
  if (!source?.trim()) source = "dittojobs";

  let access_token = "";
  if (context.req.headers.cookie) {
    const parsedCookies = cookie.parse(context.req.headers.cookie);
    access_token = parsedCookies[LOCAL_STORAGE_KEY.ACCESS_TOKEN];
  }

  const { applyJobData: jobData, source: oldSource } = store.getState().jobData;
  const hasJobDataForId = jobData.id === job_id;
  const sameSource = source === oldSource;
  if (hasJobDataForId && sameSource) return { props: { jobData, source } };
  const origin: SearchedJobsList.origin = "application";

  return JobAPI.postJobData({ job_id, source, access_token, origin })
    .then(response => {
      const { data } = response;
      if (data.detail && data.detail[0].type.includes("error")) return notFound;
      const jobData: SearchedJobsList.ApplyJobData = data;
      store.dispatch(actions.jobData.setApplyJobData(jobData));
      store.dispatch(actions.jobData.setSource(source));
      return { props: { jobData, source } };
    })
    .catch(() => notFound);
}
