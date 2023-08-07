// #region Global Imports
import React, { useEffect } from "react";
import styled from "styled-components";
// #endregion Global Imports

// #region Local Imports
import { MainContainer } from "./Styles/SettingOptionsStyles";
import { ISettingOptionsProps } from "./SettingOptions";
import EmailUpdates from "./Components/EmailUpdates";
import { emailUpdatesSettingsData } from "./Utils/SettingOptionsData";
import ResetPassword from "./Components/ResetPassword";
import AdvancedOptions from "./Components/AdvancedOptions";
import Accordian from "./Components/Accordian";
import { djobsTheme } from "@DJobs/Theme";
import { useAppSelector } from "@Redux";
// #endregion Local Imports

const SettingOptions: React.FC<ISettingOptionsProps.IProps> = ({ data }) => {
  const emailUpdatesData = useAppSelector(state => state.candidateDetails);
  const [checked, setIsChecked] = React.useState({
    email_updates: false,
    email_job_alerts: false,
    email_company_news: false,
  });

  const [closeAccountPhase, setCloseAccountPhase] = React.useState<boolean>(
    false
  );
  const [isAccordianOpen, setAccordianOpen] = React.useState("");

  useEffect(() => {
    const {
      email_updates,
      email_job_alerts,
      email_company_news,
    } = emailUpdatesData;
    setIsChecked({
      email_updates: email_updates ?? false,
      email_job_alerts: email_job_alerts ?? false,
      email_company_news: email_company_news ?? false,
    });
  }, [emailUpdatesData, isAccordianOpen]);

  const settingsOptions = {
    emailUpdate: (
      <EmailUpdates
        checked={checked}
        setIsChecked={setIsChecked}
        data={emailUpdatesSettingsData}
        setAccordianOpen={setAccordianOpen}
      />
    ),
    resetPassword: <ResetPassword setAccordianOpen={setAccordianOpen} />,
    other: (
      <AdvancedOptions
        closeAccountPhase={closeAccountPhase}
        setCloseAccountPhase={setCloseAccountPhase}
      />
    ),
  };

  return (
    <MainContainer>
      {data.map((value, index) => (
        <React.Fragment key={index}>
          <Accordian
            title={value.title}
            titleIcon={value.titleIcon}
            subTitle={value.subTitle}
            key={index}
            setAccordianOpen={setAccordianOpen}
            isAccordianOpen={isAccordianOpen}
            option={value.optionName}
          >
            {settingsOptions[value.optionName]}
          </Accordian>
          {data.length - 1 > index && <BorderDiv />}
        </React.Fragment>
      ))}
    </MainContainer>
  );
};

export default SettingOptions;

const BorderDiv = styled.div`
  border-bottom: 1px solid ${djobsTheme.colors.black20};
  @media (min-width: 992px) {
    margin: 0px 25px;
  }
`;
