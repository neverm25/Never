import * as React from "react";
import { NextPage } from "next";

import { IPipelinePage } from "@Interfaces";
import { Pipeline } from "@Global/Components/Pipeline";

const PipelinePage: NextPage<
  IPipelinePage.IProps,
  IPipelinePage.InitialProps
> = () => <Pipeline />;

PipelinePage.getInitialProps = async (): Promise<
  IPipelinePage.InitialProps
> => {
  return { namespacesRequired: ["common"] };
};

export default PipelinePage;
