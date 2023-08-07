// #region Global Imports
import React from "react";
import Image from "next/image";
// #endregion Global Imports

// #region Local Imports
import LottieSuccess from "../../../../../../../public/static/images/93814-success-graduation.gif";
import {
  Container,
  ImageContainer,
  SliderContainer,
  TabComponentsWrapper,
} from "./Styles/UploadCvSectionStyles";
import { RecommendationCarousel } from "@DJobs/Components/Common/RecommendationCarousel";
import { DJobsGradientText, DJobsTypography } from "@DJobs/Components/Basic";
import { useAppSelector } from "@Redux";
// #rendegion Local Imports

export default function StepTwo() {
  const [, setJobSelId] = React.useState<number>(null);
  const { candidateDetails  } = useAppSelector(store => store);
  
  return (
    <TabComponentsWrapper>
      <Container>
        <div style={{ paddingLeft: "64px", width: "100%" }}>
          <div>
            <DJobsGradientText gradient="purpleHover" styleName="djSubTitleOne">
              Nice!
            </DJobsGradientText>
          </div>
          <div style={{ paddingTop: "10px", width: "70%" }}>
            <DJobsTypography styleName="djUploadDocText" color="blue20">
              Thanks for uploading your CV.
            </DJobsTypography>
          </div>
        </div>
        <ImageContainer>
          <Image
            alt="Mountains"
            src={LottieSuccess}
            layout="fixed"
            width={320}
            height={320}
            loading="lazy"
          />
        </ImageContainer>
      </Container>
      <SliderContainer>
        {candidateDetails.job_recommendations.length > 0 && (
          <RecommendationCarousel setJobSelId={setJobSelId} />
        )}
      </SliderContainer>
    </TabComponentsWrapper>
  );
}
