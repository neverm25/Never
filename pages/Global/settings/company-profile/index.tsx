import * as React from "react";
import { NextPage } from "next";

import { IPostCompanyProfile } from "@Interfaces";
import { CompanyProfile } from "@Global/Components/CompanyProfile";

const CompanyProfilePage: NextPage<
  IPostCompanyProfile.IProps,
  IPostCompanyProfile.InitialProps
> = () => <CompanyProfile />;

CompanyProfilePage.getInitialProps = async (): Promise<
  IPostCompanyProfile.InitialProps
> => {
  return { namespacesRequired: ["common"] };
};

export default CompanyProfilePage;
