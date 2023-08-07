// #region Global Imports
import { NextRouter } from "next/router";
// #endregion Global Imports

export const getBreadCrumbsPath = (currentRouter: NextRouter) => {
  switch (currentRouter.pathname) {
    case "/":
      return "";
    case "/Global/home":
      return "Dashboard";
    case "/Global/jobs":
      return "Jobs";
    case "/Global/post-job":
      return "Home";
    case "/Global/jobs/pipeline/[id]":
      return `pipeline / ${currentRouter.query.id}`;
    case "/Global/settings/company-profile":
      return "settings / company-profile";
    case "/Global/settings/team-settings":
      return "settings / Team Settings";
    case "/Global/settings/company-profile/update":
      return "settings / Create a Company Profile";
    default:
      return "";
  }
};

export const getBreadCrumbsTitle = (currentRouter: NextRouter) => {
  switch (currentRouter.pathname) {
    case "/":
      return "Dashboard";
    case "/Global/jobs":
      return "Your Job Posts";
    case "/Global/home/post-job":
      return "Post A Job";
    case "/Global/settings/company-profile":
      return "Company Profile";
    case "/Global/settings/team-settings":
      return "Team Settings";
    case "/Global/settings/company-profile/update":
      return "Create a Company Profile";
    case "/Global/jobs/pipeline/[id]":
      return `${currentRouter.query.id}`;
    default:
      return "404";
  }
};
