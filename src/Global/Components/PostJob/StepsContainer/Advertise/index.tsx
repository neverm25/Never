import * as React from "react";
import { useState } from "react";
import styled from "styled-components";

import Addition from "./Additions";
import SelectPostTypes from "./SelectPostTypes";
import { Button } from "@Global/Components/Basic/Button/";
import { IPostJob } from "@Global/Components/PostJob/PostJob";
import { InputBase } from "@Global/Components/Basic/InputBase";
import { IPostTypes } from "./PostTypesProps";
import { theme } from "@Global/Theme";

const Advertise = (props: IPostJob.StepComponentProps) => {
  const { setActiveStepNumber } = props;
  const { setPostJobApplicationInputs } = props;
  const { jobDetailInputs } = props;
  const { advertiseInputs, setAdvertiseInputs } = props;

  //Local state management Start
  const [selectedPostType, setSelectedPostType] = useState(
    advertiseInputs.selectedPostType
  );
  const [sendToPartnerEnabled, toggleSendToPartnerEnabled] = useState(
    advertiseInputs.sendToPartnerEnabled
  );
  const [budgetAlertsEnabled, toggleBudgetAlertsEnabled] = useState(
    advertiseInputs.budgetAlertsEnabled
  );
  const [customApplyURL, setCustomApplyURL] = useState(
    advertiseInputs.customApplyURL
  );

  const updateAdvertiseInputs = () => {
    const newAdvertiseInputs = {
      selectedPostType,
      sendToPartnerEnabled,
      budgetAlertsEnabled,
      customApplyURL,
    };

    const NewPostJobInputs = {
      jobDetailInputs,
      advertiseInputs: newAdvertiseInputs,
    };
    setPostJobApplicationInputs(NewPostJobInputs);
    setAdvertiseInputs(newAdvertiseInputs);
  };
  //Local state management End

  return (
    <AdvertiseFrame>
      <SelectPostTypes
        selectedPostTypeName={selectedPostType}
        setSelectedPostType={setSelectedPostType}
      />
      <Addition
        {...SendToPartnerLink}
        checked={sendToPartnerEnabled}
        setChecked={toggleSendToPartnerEnabled}
      />
      <Addition
        {...BudgetAlerts}
        checked={budgetAlertsEnabled}
        setChecked={toggleBudgetAlertsEnabled}
      />
      <InputWrapper>
        <InputBase
          key={"CustomApplyURL"}
          hasLabel={true}
          label={"Custom Apply URL"}
          name={"CustomApplyURL"}
          value={customApplyURL}
          isSearch={false}
          type="text"
          placeholder={"eg. www.domain.com"}
          onChangeHandler={event => {
            setCustomApplyURL(event.target.value);
          }}
        />
      </InputWrapper>
      <ButtonWrapper>
        <Button
          variant="success"
          buttonCategory="main"
          onClick={updateAdvertiseInputs}
        >
          Complete Post
        </Button>
      </ButtonWrapper>
      <PreviousStepLink
        onClick={() => {
          updateAdvertiseInputs();
          setActiveStepNumber(1);
        }}
      >
        {"Previous Step"}
      </PreviousStepLink>
    </AdvertiseFrame>
  );
};
export default Advertise;

const SendToPartnerLink: IPostTypes.AdditionContent = {
  title: "Send To Partner Link",
  explanation: `incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
    Excepteur sint occaecat cupidatat non proiden.`,
};
const BudgetAlerts: IPostTypes.AdditionContent = {
  title: "Budget Alerts",
  explanation: `incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
    Excepteur sint occaecat cupidatat non proiden.`,
};

const AdvertiseFrame = styled.div`
  display: flex;
  flex-direction: column;
`;
const ButtonWrapper = styled.div`
  margin-top: 50px;
  margin-bottom: 20px;
`;
const InputWrapper = styled.div`
  width: 90%;
  align-items: stretch;
  @media (min-width: 1000px) {
    width: 35%;
  }
`;
const PreviousStepLink = styled.a`
  ${theme.text.interactiveTextRegular};
  color: ${theme.colors.black80};
  text-transform: uppercase;
  width: fit-content;

  &:hover {
    ${theme.text.interactiveTextHover};
    color: ${theme.colors.blue100};
    text-transform: uppercase;
  }
`;
