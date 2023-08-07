import * as React from "react";
import { NextPage } from "next";

import { IPostCompanyProfile } from "@Interfaces";
import { CompanyProfileForm } from "@Global/Components/CompanyProfileForm";

const CompanyProfilePage: NextPage<
  IPostCompanyProfile.IProps,
  IPostCompanyProfile.InitialProps
> = () => <CompanyProfileForm />;

CompanyProfilePage.getInitialProps = async (): Promise<
  IPostCompanyProfile.InitialProps
> => {
  return { namespacesRequired: ["common"] };
};

export default CompanyProfilePage;
