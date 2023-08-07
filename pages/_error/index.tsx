// #region Global Imports
import * as React from "react";
import { NextPage } from "next";

// #region Interface Imports
import { IErrorPage } from "@Interfaces";
// #endregion Interface Imports

const Error: NextPage<IErrorPage.IProps, IErrorPage.InitialProps> = ({
  statusCode,
}) => {
  return (
    <div>
      {"common:Error"}
      {statusCode}
    </div>
  );
};

Error.getInitialProps = async ({ res, err }) => {
  let statusCode;

  if (res) {
    ({ statusCode } = res);
  } else if (err) {
    ({ statusCode } = err);
  }

  return {
    namespacesRequired: ["common"],
    statusCode,
  };
};

export default Error;
