import React from "react";
import { Grid } from "antd";

import {
  BriefcaseIcon,
  ClockIcon,
  LocationPinIcon,
  NewspaperIcon,
} from "@DJobs/Components/Icons";
import { djobsTheme } from "@DJobs/Theme";

import {
  MainContainer,
  MainDiv,
  Qualification,
} from "./Styles/QualificationStyles";
import { DJobsTypography } from "@DJobs/Components/Basic";
import { SocilaIcons } from "../SocilaIcons";
import { CompanyProfileProps } from "@Redux/slices/CompanyProfile/CompanyProfile";

export const CompanyMetadata = ({
  data,
}: CompanyProfileProps.CompanyMetadata) => {
  const screen = Grid.useBreakpoint();
  return (
    <MainDiv>
      {data.map((value, index) => (
        <Qualification key={`${value.title}_${index}`}>
          {value.icon}
          <DJobsTypography
            styleName={`${screen.xs ? "djBodySmall" : "djIconPrefixRegular"}`}
            color="black80"
          >
            {value.title}
          </DJobsTypography>
        </Qualification>
      ))}
    </MainDiv>
  );
};

const QualificationContainer: React.FC<CompanyProfileProps.ICompany> = ({
  companyData,
}) => {
  const screen = Grid.useBreakpoint();
  const isValidValue = val => {
    if (val === "" || val === null || val === undefined) {
      return false;
    }
    return true;
  };

  const iconProps = {
    color: djobsTheme.colors.purple100,
    size: screen.lg ? 18 : 12,
  };
  const {
    company_size,
    company_contact_number,
    founded_year,
    location,
  } = companyData;
  const companySize = {
    title: "Company Size: " + company_size,
    icon: <BriefcaseIcon {...iconProps} />,
  };
  const companyContactNumber = {
    title: company_contact_number,
    icon: <NewspaperIcon {...iconProps} />,
  };
  const foundedYear = {
    title: `Est. Since ${founded_year}`,
    icon: <ClockIcon {...iconProps} />,
  };
  const companyLocation = {
    title: location,
    icon: <LocationPinIcon {...iconProps} />,
  };
  const companyDetails = [];
  if (isValidValue(company_size)) companyDetails.push(companySize);
  if (isValidValue(company_contact_number))
    companyDetails.push(companyContactNumber);
  if (isValidValue(founded_year)) companyDetails.push(foundedYear);
  if (isValidValue(location)) companyDetails.push(companyLocation);

  const isFaceBookExists = companyData?.social_facebook !== "";
  const isLinkedinExists = companyData?.social_linkedin !== "";
  const isTwitterExists = companyData?.social_twitter !== "";
  const isSocialIconsNeeded =
    isFaceBookExists || isLinkedinExists || isTwitterExists;

  return (
    <MainContainer id="scrollTabItem">
      <CompanyMetadata data={companyDetails} />
      {isSocialIconsNeeded && <SocilaIcons companyData={companyData} />}
    </MainContainer>
  );
};

export default QualificationContainer;
