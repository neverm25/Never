// #Global Imports
import * as React from "react";
import { NextPage } from "next";
// #endglobal Imports

// #region Interface Imports
import { IPostJobPage } from "@Interfaces";
import PostJob from "@Global/Components/PostJob";
// #endregion Interface Imports

const PostJobPage: NextPage<
  IPostJobPage.IProps,
  IPostJobPage.InitialProps
> = () => <PostJob />;

PostJobPage.getInitialProps = async (): Promise<IPostJobPage.InitialProps> => {
  return {};
};

const Extended = PostJobPage;

export default Extended;
