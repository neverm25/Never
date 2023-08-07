// #Global Imports
import * as React from "react";
import { NextPage } from "next";
// #Global Imports

// #region Local Imports
import { ITeamSettings } from "@Interfaces";
import TeamSettings from "@Global/Components/TeamSettings";
// #endregion Local Imports

const TeamSettingsPage: NextPage<ITeamSettings.InitialProps> = () => (
  <TeamSettings />
);

TeamSettingsPage.getInitialProps = async (): Promise<
  ITeamSettings.InitialProps
> => {
  return { namespacesRequired: ["common"] };
};

const Extended = TeamSettingsPage;

export default Extended;
