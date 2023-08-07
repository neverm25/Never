// #Global Imports
import * as React from "react";
// #Global Imports

// #region Local Imports
import CompanyProfile from "@DJobs/Components/CompanyProfile";
import { CompanyAPI } from "@API/CompanyAPI";
// #endregion Local Imports

const CompanyProfilePage = ({ companyData, id }) => (
  <CompanyProfile companyData={companyData} companyId={id} />
);
export default CompanyProfilePage;

export async function getServerSideProps(context) {
  const query = context.query;
  if (!query) return { notFound: true };

  const { id, source = "dittojobs" } = query;
  if (!id) return { notFound: true };

  return CompanyAPI.getCompanyData(id)
    .then(response => response.json())
    .then(data => {
      if (data.detail && data.detail[0].type.includes("error")) {
        return { notFound: true };
      } else {
        return { props: { companyData: data, source, id } };
      }
    })
    .catch(() => ({ notFound: true }));
}
