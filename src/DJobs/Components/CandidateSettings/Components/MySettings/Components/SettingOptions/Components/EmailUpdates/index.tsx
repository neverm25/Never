// #region Global Imports
import React from "react";
import styled from "styled-components";
import { Row, Switch } from "antd";
import { toast } from "react-toastify";
// #endregion Global Imports

// #region Local Imports
import { djobsTheme } from "@DJobs/Theme";
import { DjobsButton, DJobsTypography } from "@DJobs/Components/Basic";
import { IEmailUpdatesProps } from "./EmailUpdates";
import { useAppDispatch } from "@Redux";
import { fetchEmailUpdateThunk } from "@Redux/slices/CandidateDetails";
// #endregion Local Imports

const EmailUpdates: React.FC<IEmailUpdatesProps.IProps> = ({
  checked,
  setIsChecked,
  data,
  setAccordianOpen,
}) => {
  const dispatch = useAppDispatch();
  const emailUpdateHandelr = () => {
    dispatch(fetchEmailUpdateThunk(checked))
      .unwrap()
      .then(() => {
        toast.success("Your settings sucessfully updated");
        setAccordianOpen("");
      })
      .catch(e => {
        toast.error(e.message);
      });
  };
  return (
    <ContentWrapper>
      {data.map((value, index) => (
        <Content key={index} isOn={checked[value.id]}>
          <DJobsTypography styleName="djIconText" color="black80">
            {value.value}
          </DJobsTypography>
          <Switch
            checked={checked[value.id]}
            onChange={() => {
              setIsChecked({ ...checked, [value.id]: !checked[value.id] });
            }}
          />
        </Content>
      ))}
      <Row justify="end" style={{ marginTop: "16px" }}>
        <DjobsButton.Actions
          variant="Submit"
          label="Update"
          onClick={emailUpdateHandelr}
        />
      </Row>
    </ContentWrapper>
  );
};

export default EmailUpdates;

export const ContentWrapper = styled.div`
  margin-top: 35px;

  @media (min-width: 992px) {
    padding: 0 25px 5px 25px;
  }
`;

export const Content = styled.div<{
  isOn: boolean;
}>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid transparent;
  background: linear-gradient(${djobsTheme.colors.white100} 0 0) padding-box,
    linear-gradient(#9f71e9, #504edb, #3580c6, #26ade2) border-box;
  padding: 14px 0;

  @media (min-width: 992px) {
    border-bottom: 1px solid ${djobsTheme.colors.black80};
    background: none;
  }
  .ant-switch-handle::before {
    background-color: ${({ isOn }) =>
      isOn ? djobsTheme.colors.white100 : djobsTheme.colors.blue80};
    bottom: ${({ isOn }) => !isOn && "1px"};
    left: ${({ isOn }) => !isOn && "-1px"};
  }
  .ant-switch {
    background: ${({ isOn }) =>
      isOn ? djobsTheme.colors.blue80 : djobsTheme.colors.white100};
    border: ${({ isOn }) => !isOn && "0.773988px solid #a0d5fc"};
  }
`;
