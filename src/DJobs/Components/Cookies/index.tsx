// # Global Imports
import React, { useState } from "react";
import styled from "styled-components";
// #Global Imports

// #region Local Imports
import { djobsTheme } from "@DJobs/Theme";
import { DjobsButton, DJobsTypography, Modal } from "@DJobs/Components/Basic";
import CloseIcon from "../Icons/CloseIcon";
import { enablePageScroll } from "@Pages/_app";
import { DJOBS_ROUTES } from "@DJobs/DjobsUtils";
// #region Local Imports

const Cookies = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const closeModal = () => {
    setIsModalOpen(false);
    enablePageScroll();
  };

  return (
    <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
      <DeleteWrapper>
        <CloseButtonContainer onClick={closeModal}>
          <CloseIcon />
        </CloseButtonContainer>
        <CookiesHeadingContainer>
          <DJobsTypography styleName="djCookiesHeading">
            We do things with cookies!
          </DJobsTypography>
        </CookiesHeadingContainer>
        <CookiesDescribContainer>
          This website uses cookies to enhance your experience. Quite a normal
          thing to do, but if you would like to read more about how we use
          cookies or how we collect and process your data, visit our{" "}
          <a href={DJOBS_ROUTES.legalTerms}>legal section</a>.
        </CookiesDescribContainer>
        <ButtonContainer>
          <DjobsButton.Actions
            variant="Submit"
            label="got it"
            onClick={() => {
              localStorage.setItem("isCookiesAccepted", JSON.stringify(true));
              closeModal();
            }}
          />
        </ButtonContainer>
      </DeleteWrapper>
    </Modal>
  );
};

export default Cookies;

const DeleteWrapper = styled.div`
  width: 355px;
  border-radius: 8px;
  box-shadow: ${djobsTheme.effects.popUpShadow};
  background: ${djobsTheme.colors.white110};
  @media (min-width: 1200px) {
    width: 432px;
  }
`;
const CloseButtonContainer = styled.div`
  display: flex;
  cursor: pointer;
  justify-content: flex-end;
  padding: 23px 19px 0px 0px;
  @media (min-width: 1200px) {
    padding: 17px 18px 0px 0px;
  }
`;
const CookiesHeadingContainer = styled.div`
  margin: 20px 44px 31px 42px;
  @media (min-width: 1200px) {
    margin: 60px 46px 62px 37px;
  }
`;
const CookiesDescribContainer = styled.div`
  margin: 0px 47px 41px 46px;
  font-family: Lexend, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: center;
  a {
    text-decoration: underline;
    cursor: pointer;
  }
  @media (min-width: 1200px) {
    margin: 0px 48px 48px 38px;
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 58px;
  @media (min-width: 1200px) {
    padding-bottom: 78px;
  }
`;
