// #region Global Imports
import React from "react";
import { Grid } from "antd";
// #endregion Global Imports

// #region Local Imports
import { MainContainer, MainSection } from "./Styles/QualificationStyles";
import { renderQualifications } from "./Utils/QualificationUtils";
import { UniconsLibraryIcons } from "@DJobs/Components/Icons";
import { djobsTheme } from "@DJobs/Theme";
import { useAppSelector } from "@Redux";
// #endregion Local Imports

const QualificationContainer = () => {
  const screen = Grid.useBreakpoint();
  const { jobData } = useAppSelector(store => store);
  const { applyJobData } = jobData;

  const fillColor = djobsTheme.colors.black90;
  const iconProps = { color: fillColor, size: screen.lg ? 18 : 13 };

  const {
    city,
    salary_from,
    salary_to,
    salary_type,
    seniority_level,
    employment_type,
    experience_from,
    experience_to,
  } = applyJobData;
  const qualificationData = [];

  city &&
    qualificationData.push({
      title: city,
      icon: <UniconsLibraryIcons.LocationPinIcon {...iconProps} />,
    });
  salary_from &&
    qualificationData.push({
      title: `${salary_from} ${salary_to ? "- " + salary_to : ""}`,
      icon: <UniconsLibraryIcons.CoinsIcon {...iconProps} />,
    });
  salary_type &&
    qualificationData.push({
      title: salary_type,
      icon: <UniconsLibraryIcons.BriefcaseIcon {...iconProps} />,
    });
  seniority_level &&
    qualificationData.push({
      title: seniority_level,
      icon: <UniconsLibraryIcons.SeniorityIcon {...iconProps} />,
    });
  employment_type &&
    qualificationData.push({
      title: employment_type,
      icon: <UniconsLibraryIcons.NewspaperIcon {...iconProps} />,
    });
  experience_from &&
    qualificationData.push({
      title: `${experience_from} years${
        experience_to ? " - " + experience_to + " years" : ""
      }`,
      icon: <UniconsLibraryIcons.ClockIcon {...iconProps} />,
    });

  return (
    <MainContainer>
      <MainSection>
        {Array.from(Array(screen.md ? 3 : 2), (_x, i) => i).map(i =>
          renderQualifications(i, qualificationData, screen)
        )}
      </MainSection>
    </MainContainer>
  );
};

export default QualificationContainer;
