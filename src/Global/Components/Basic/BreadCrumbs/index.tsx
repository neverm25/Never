// # Global Imports
import React from "react";
import { useRouter } from "next/router";
// #end Global Imports

// # Local Imports
import {
  getBreadCrumbsPath,
  getBreadCrumbsTitle,
} from "./Utils/BreadCrumbsUtils";
import { IBreadCrumbs } from "./BreadCrumbs";
import {
  BreadCrumbsContainer,
  BreadCrumbsPath,
  BreadCrumbsTitle,
} from "./Styles/BreadCrumbsStyles";
// #end Local Imports

export const BreadCrumbs: React.FunctionComponent<IBreadCrumbs.IProps> = () => {
  const router = useRouter();

  return (
    <BreadCrumbsContainer>
      <BreadCrumbsPath>
        <span>{"talent.solutions"}</span> / {getBreadCrumbsPath(router)}
      </BreadCrumbsPath>
      <BreadCrumbsTitle>{getBreadCrumbsTitle(router)}</BreadCrumbsTitle>
    </BreadCrumbsContainer>
  );
};
