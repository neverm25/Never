// #region Global Imports
import React from "react";
import ReactHtmlParser from "react-html-parser";
// #endregion Global Imports

// #region Local Imports
import { DjobsButton } from "@DJobs/Components/Basic/";
import {
  TabComponentsWrapper,
  FilterCount,
  FilteredCounter,
} from "@DJobs/Components/CompanyProfile/Styles/CompanyProfileStyles";
import styled from "styled-components";
import { CompanyProfileCommon } from "../Common";
import { actions, useAppDispatch } from "@Redux";
import { CompanyProfileProps } from "@Redux/slices/CompanyProfile/CompanyProfile";
// #rendegion Local Imports

export const CompanySection = ({
  companyData,
  activeJobs,
}: CompanyProfileProps.CompanySection) => {
  const dispatch = useAppDispatch();
  return (
    <MainContainer>
      <CompanyProfileCommon.TabComponent
        title={`About ${companyData.company_name}`}
        description={
          companyData.description
            ? ReactHtmlParser(companyData.description)
            : ""
        }
      />
      <TabComponentsWrapper>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "0.1em",
          }}
        >
          <CompanyProfileCommon.Title title={`Latest Jobs`} />
          <FilteredCounter>
            <FilterCount>{activeJobs}</FilterCount>
          </FilteredCounter>
        </div>
        <div style={{ paddingTop: "30px" }}>
          <CompanyProfileCommon.Description
            description={
              activeJobs > 0
                ? `${companyData?.company_name} is hiring! Find the latest jobs here.`
                : `${companyData?.company_name} is currently not hiring. Check back soon!`
            }
          />
        </div>
        <div style={{ paddingTop: "18px" }}>
          <DjobsButton.NavActions
            variant="View"
            label="View Jobs"
            onClick={() => dispatch(
                // @ts-ignore
                actions.company.setActiveTab("jobs")
            )}
          />
        </div>
      </TabComponentsWrapper>
    </MainContainer>
  );
};
const MainContainer = styled.div`
  gap: 10px;
  display: flex;
  flex-direction: column;
  @media (min-width: 992px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 50px;
  }
  @media (min-width: 1600px) {
    gap: 72px;
  }
`;
