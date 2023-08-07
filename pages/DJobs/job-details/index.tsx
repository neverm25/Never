import * as React from "react";
import * as cookie from "cookie";
import { GetServerSidePropsContext } from "next";

import { JobDetails } from "@DJobs/Components";
import { JobAPI } from "@API/JobAPI";
import { LOCAL_STORAGE_KEY } from "@DJobs/DjobsUtils/LocalStorageKeys";
import store, { actions } from "@Redux";
import { SearchedJobsList } from "@Redux/slices/SearchedJobsList/SearchedJobsList";

type JobDetailsPageProps = {
  jobData: SearchedJobsList.ApplyJobData;
  source: string;
};
const JobDetailsPage = ({ jobData, source }: JobDetailsPageProps) => (
  <JobDetails {...{ jobData, source }} />
);

export default JobDetailsPage;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const query = context.query;
  const notFound = { notFound: true };

  const job_id = typeof query.id === "object" ? query.id[0] : query.id;
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
  const origin: SearchedJobsList.origin = "job";

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
