// #region Global Imports
import React from "react";
import { Col, Grid, Row } from "antd";
import Image from "next/image";
import { useRouter } from "next/router";
// #endregion Global Imports

// #region Local Imports
import { djobsTheme } from "@DJobs/Theme";
import { BuildingIcon } from "@DJobs/Components/Icons";
import styled from "styled-components";
import { DjobsTheme } from "@DJobs/Theme/styled";
import { useAppSelector } from "@Redux";

// #endregion Local Imports

const JobTitleContainer = () => {
  const { jobData } = useAppSelector(state => state);
  const { applyJobData } = jobData;
  const screens = Grid.useBreakpoint();
  const router = useRouter();

  return (
    <MainContainer>
      <CompanyLogo>
        <Image
          src={applyJobData.company_photo}
          alt="company-logo"
          width="44"
          height="44"
          loading="lazy"
        />
      </CompanyLogo>
      <JobTitle>
        <JobTitleEllipsis styleName="djCardsCompanyAlt" color="black100">
          {applyJobData.title}
        </JobTitleEllipsis>
        <Row
          align="middle"
          gutter={[10, 0]}
          style={{
            alignItems: "center",
            width: "100%",
            flexFlow: "nowrap",
          }}
        >
          <Col
            style={{
              padding: "0px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <BuildingIcon
              color={djobsTheme.colors.black110}
              size={screens.lg ? 15 : 12}
            />
          </Col>
          <Col>
            <JobTitleEllipsis
              styleName="djCardsCompanyAlt"
              color="blue100"
              onClick={() => {
                applyJobData?.is_internal &&
                  router.push(
                    `/company-profile?id=${applyJobData?.company_id}`
                  );
              }}
            >
              {applyJobData.company_name}
            </JobTitleEllipsis>
          </Col>
        </Row>
      </JobTitle>
    </MainContainer>
  );
};

export default JobTitleContainer;

const MainContainer = styled.div`
  display: flex;
  margin: auto;
  width: 100%;
  justify-content: flex-start;
  background: ${djobsTheme.colors.white100};
  box-shadow: ${djobsTheme.effects.cardShadow};
  padding: 24px 33px;
  border-radius: 24px;
  align-items: center;
  @media (min-width: 768px) {
    padding: 30px 38px;
    width: 493px;
  }
  @media (min-width: 1600px) {
    width: 600px;
  }
`;
const CompanyLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    border: 5px solid ${djobsTheme.colors.blue10}30 !important;
    border-radius: 8px !important;
    overflow: hidden !important;
  }
`;
const JobTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin-left: 20px;
  width: calc(100% - 100px);
  @media (min-width: 768px) {
    gap: 10px;
  }
`;
const JobTitleEllipsis = styled.div<{
  color: keyof DjobsTheme.DjobsColorsWithGlobal;
  styleName: keyof DjobsTheme.DjobsText;
}>`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
  color: ${({ color }) => djobsTheme.colors[color]};
  ${({ styleName }) => djobsTheme.text[styleName].sm};
  @media (min-width: 992px) {
    ${({ styleName }) => djobsTheme.text[styleName].lg};
  }
`;
