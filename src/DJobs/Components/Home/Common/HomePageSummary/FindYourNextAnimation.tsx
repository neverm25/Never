import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

import { djobsTheme } from "@DJobs/Theme";

export const FindYourNextAnimation = () => {
  const FIND_YOUR_NEXT_PLACEHOLDERS = [
    "Job",
    "Move",
    "Career",
    "Mission",
    "Opportunity",
    "Purpose",
    "Challenge-1",
    "Calling",
    "Pursuit",
  ];
  const [findYourNextIndex, setFindYourNextIndex] = useState(0);
  const [animationFlag, setAnimationFlag] = useState(false);

  const nextIndex =
    (findYourNextIndex + 1) % FIND_YOUR_NEXT_PLACEHOLDERS.length;

  // const t1 = setTimeout(() => {
  //   setFindYourNextIndex(nextIndex);
  //   setAnimationFlag(!animationFlag);
  // }, 1450);

  // setTimeout(() => clearTimeout(t1), 15000);
  useEffect(() => {
    const t1 = setTimeout(() => {
      setFindYourNextIndex(nextIndex);
      setAnimationFlag(!animationFlag);
    }, 1450);

    setTimeout(() => clearTimeout(t1), 15000);

    return () => clearTimeout(t1); // Clear the timeout when the component is unmounted
  }, [findYourNextIndex, nextIndex, animationFlag]);

  return (
    <AnimationContainer>
      {animationFlag && (
        <AnimationText>
          {FIND_YOUR_NEXT_PLACEHOLDERS[findYourNextIndex]}
        </AnimationText>
      )}
      {!animationFlag && (
        <AnimationText>
          {FIND_YOUR_NEXT_PLACEHOLDERS[findYourNextIndex]}
        </AnimationText>
      )}
    </AnimationContainer>
  );
};

const fadeOutUp = keyframes`
  0% {
    opacity: 0.8;
    transform: translateY(50px);
  }
  10% {
    opacity: 1;
    transform: translateY(0px);
  }
  80% {
    opacity: 1;
    transform: translateY(0px);
  }
  100% {
    opacity: 0;
    transform: translateY(-100px);
  }
`;
const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const AnimationText = styled.div`
  font-family: Montserrat;
  font-size: 48px;
  font-weight: 900;
  line-height: 44px;
  letter-spacing: 0.30000001192092896px;
  text-align: left;
  color: ${djobsTheme.colors.blue100};
  animation: ${fadeOutUp} 1500ms linear;
  animation-iteration-count: infinite;

  @media (min-width: 992px) {
    font-size: 80px;
    padding-top: 16px;
  }
  @media (min-width: 1600px) {
    padding-top: 25px;
    font-size: 100px;
  }
`;
