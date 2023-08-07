import React from "react";
import styled from "styled-components";
import HowItWorks from "./HowItWorks";
import { IPostTypes } from "./PostTypesProps";
import { SwitchBase } from "@Global/Components/Basic/SwitchBase";
import { theme } from "@Global/Theme";

const Addition = ({
  checked,
  setChecked,
  title,
  explanation,
}: IPostTypes.AdditionProps) => {
  return (
    <AdditionContainer>
      <TitleFrame>
        <AdditionTitle>{title}</AdditionTitle>
        <SwitchBase
          checkedProp={checked}
          setCheckedProp={checked => {
            setChecked(!checked);
          }}
        />
      </TitleFrame>
      <HowItWorksFrame>
        <HowItWorks Content={explanation} />
      </HowItWorksFrame>
    </AdditionContainer>
  );
};
export default Addition;

const AdditionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: auto;
  background: ${theme.colors.white100};
  margin-top: 14px;
  border: 1px solid ${theme.colors.black20};
  border-radius: 10px;
  @media (min-width: 800px) {
    flex-direction: row;
  }
`;

const TitleFrame = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px;
  @media (min-width: 800px) {
    width: 20%;
    margin: 20px;
    flex-direction: column;
  }
  @media (min-width: 992px) {
    width: auto;
  }
  .ant-switch {
    margin: 0 20px;
    @media (min-width: 800px) {
      margin: 20px 0;
    }
  }
`;

const AdditionTitle = styled.span`
  color: ${theme.colors.primaryBlack};
  ${theme.text.subTitleOne};
`;

const HowItWorksFrame = styled.div`
  padding: 18px;
  margin: 20px;
  width: 90%;
  height: auto;
  border: 1px solid ${theme.colors.black20};
  background: ${theme.colors.white110};
  box-sizing: border-box;
  border-radius: 8px;

  @media (min-width: 800px) {
    width: 80%;
    margin: 30px;
  }

  @media (min-width: 992px) {
    width: 60%;
  }
`;
