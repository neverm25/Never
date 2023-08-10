// #region Global Imports
import React from "react";
import ReactHtmlParser from "react-html-parser";
import { Grid } from "antd";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
// #endregion Global Imports

// #region Local Imports
import {
  MainContainer,
  TitleWrapper,
  CompanyInfoContainer,
  TitleContainer,
  BorderContainer,
  ProfileImage,
  LinkContainer,
  LocationContainer,
  ProfileSection,
  TabContainer,
  FilterCount,
  FilteredCounter,
  TabSectionContainer,
  TabSectionHeader,
  TabSectionBody,
  CompanyProfileInfoContainer,
  CompanyDescription,
  CompanyDescriptionMain,
  CompanyDescriptionWrapper,
  CompanyMetaDataWrapper,
} from "./Styles/CompanyProfileStyles";
import { DJobsTypography, BackButton } from "@DJobs/Components/Basic/";
import { LocationPinIcon } from "../Icons";
import { djobsTheme } from "@DJobs/Theme";
import QualificationContainer from "./Components/Qualification";
import * as TabItems from "./Components/TabItems";
import { CompanyProfileProps } from "@Redux/slices/CompanyProfile/CompanyProfile";
import { actions, useAppDispatch, useAppSelector } from "@Redux";
// #endregion Local Imports

const CompanyProfile = ({
  companyData,
  companyId,
}: CompanyProfileProps.ICompany) => {
  const router = useRouter();
  const screen = Grid.useBreakpoint();

  const { activeTab } = useAppSelector(store => store.company);
  const dispatch = useAppDispatch();

  const activeJobs = companyData.total_jobs;
  const TabbarComponents = {
    company: (
      <TabItems.CompanySection
        companyData={companyData}
        activeJobs={activeJobs}
      />
    ),
    jobs: (
      <TabItems.JobsSection companyId={companyId} activeJobs={activeJobs} />
    ),
    "upload-cv": <TabItems.UploadCvSection companyData={companyData} />,
  };
  //#region Tabbar
  const userId = router.query.u_id?.toString();
  const tabBarData: CompanyProfileProps.tabData[] = [
    { label: "About Us", labelValue: "company", value: 0 },
    {
      label: "Jobs",
      labelValue: "jobs",
      value: activeJobs,
    },
  ];
  if (userId) {
    tabBarData.push({ label: "Upload CV", labelValue: "upload-cv", value: 0 });
  }

  const companyDescription = (
    <React.Fragment>
      <CompanyDescription>
        {ReactHtmlParser(companyData.short_description)}
      </CompanyDescription>
      <LinkContainer href={companyData.website} target="_blanks">
        <DJobsTypography styleName="djLinkSmall" color="blue50">
          {companyData.website}
        </DJobsTypography>
      </LinkContainer>
    </React.Fragment>
  );

  const seoRender =
    companyData !== undefined ? (
      <NextSeo
        title={companyData?.company_name + " | Ditto Jobs"}
        description="Ready to move up? Welcome to Ditto Jobs. Discover thousands of new opportunities daily! Sign up and kickstart your job search today."
        openGraph={{
          site_name: "Ditto Jobs",
          type: "website",
          url: `${process.env.NEXT_PUBLIC_BASE_URL}/company-profile?id=${companyData?.id}`,
          title: `${companyData?.company_name} is hiring!`,
          description: `Apply now and join the ${companyData.company_name} Team! Sign up today and discover thousands of new vacancies on Ditto Jobs.`,
          images: [
            {
              url: `${
                process.env.NEXT_PUBLIC_BASE_URL
              }/api/company-profile?companyLogo=${
                companyData?.photo
              }&companyName=${companyData?.company_name.replace("&", " ")}`,
              width: 1200,
              height: 630,
              alt: "Og Image Alt",
            },
          ],
        }}
      />
    ) : (
      ""
    );

  return (
    <MainContainer>
      {seoRender}
      <TitleWrapper>
        <BackButton btnType="redirectToPreviousPage" />
        <TitleContainer>
          <DJobsTypography styleName="djHeadingOne" color="black100">
            Company Profile
          </DJobsTypography>
          <BorderContainer />
        </TitleContainer>
      </TitleWrapper>
      <CompanyProfileInfoContainer bgURL={companyData.cover_image}>
        <div>
          <CompanyInfoContainer>
            <ProfileSection>
              <ProfileImage bgURL={companyData.photo} />
              <CompanyMetaDataWrapper>
                <div>
                  <DJobsTypography styleName="djSubTitleOne" color="white100">
                    {companyData.company_name}
                  </DJobsTypography>
                  <LocationContainer>
                    <LocationPinIcon
                      color={djobsTheme.colors.purple50}
                      size={screen.lg ? 18 : 14}
                    />
                    <DJobsTypography styleName="djLocation" color="purple50">
                      {companyData?.location}
                    </DJobsTypography>
                  </LocationContainer>
                </div>
                <CompanyDescriptionMain>
                  {companyDescription}
                </CompanyDescriptionMain>
              </CompanyMetaDataWrapper>
            </ProfileSection>
            <CompanyDescriptionWrapper>
              {companyDescription}
            </CompanyDescriptionWrapper>
          </CompanyInfoContainer>
          <QualificationContainer companyData={companyData} />
        </div>

        <TabSectionContainer>
          <TabSectionHeader>
            {tabBarData.map((tabData, index) => {
              const isActiveTab = tabData.labelValue === activeTab;
              const handleClick = () =>
                dispatch(actions.company.setActiveTab(
                    // @ts-ignore
                    tabData.labelValue
                ));
              return (
                <TabContainer key={index} onClick={handleClick}>
                  <DJobsTypography
                    styleName={
                      isActiveTab ? "djActiveTabDefault" : "djTabDefault"
                    }
                    color="white100"
                  >
                    {tabData.label}
                  </DJobsTypography>
                  {tabData.labelValue === "jobs" && (
                    <FilteredCounter>
                      <FilterCount>{`${tabData.value}`}</FilterCount>
                    </FilteredCounter>
                  )}
                </TabContainer>
              );
            })}
          </TabSectionHeader>
          <TabSectionBody>{TabbarComponents[activeTab]}</TabSectionBody>
        </TabSectionContainer>
      </CompanyProfileInfoContainer>
    </MainContainer>
  );
};

export default CompanyProfile;
