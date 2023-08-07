import React, { useContext } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import {
  ProfileContainer,
  ProfileImage,
  AuthWrapper,
  LoginMainContainer,
  UserIconContainer,
} from "../Styles/HeaderStyles";
import {
  DjobsButton,
  DJobsTypography,
  TextWithLeadingEllipsis,
} from "@DJobs/Components/Basic";
import UserPopup from "../UserPopup";
import { DJOBS_ROUTES } from "@DJobs/DjobsUtils/Routes";
import { UserBlueIcon } from "@DJobs/Components/Icons";
import { useAppDispatch, useAppSelector } from "@Redux";
import { DjobsHeaderContext } from "../DjobsHeader";
import { loginActions } from "@Redux/slices/Login";

export const LoginRegisterButtons = () => {
  const router = useRouter();
  const { login, candidateDetails } = useAppSelector(state => state);
  const dispatch = useAppDispatch();
  const {
    isUserModalOpen,
    setIsUserModalOpen,
    outsideClickRef,
    setIsCountryCityModalOpen,
  } = useContext(DjobsHeaderContext);

  const profilePhotoPath = candidateDetails.photo;

  return (
    <LoginMainContainer>
      {!login.isLoggedin ? (
        <AuthWrapper>
          <div
            onClick={() => {
              router.push(DJOBS_ROUTES.login);
              dispatch(
                loginActions.setUrlBeforeInitiatinLogin(window.location.href)
              );
            }}
            style={{
              cursor: "pointer",
            }}
          >
            <DJobsTypography color="white100" styleName="djButtonText">
              Sign in
            </DJobsTypography>
          </div>

          <DjobsButton.Main
            variant="Success"
            label="Register"
            onClick={() => {
              router.push(DJOBS_ROUTES.register);
              dispatch(
                loginActions.setUrlBeforeInitiatinLogin(window.location.href)
              );
            }}
          />
        </AuthWrapper>
      ) : (
        <React.Fragment>
          <ProfileContainer
            onClick={() => {
              setIsUserModalOpen(!isUserModalOpen);
              setIsCountryCityModalOpen("");
            }}
          >
            <ProfileImage>
              {login.isLoggedin && profilePhotoPath ? (
                <Image
                  src={profilePhotoPath}
                  alt="profile-image"
                  width={35}
                  height={35}
                  style={{ borderRadius: "50%" }}
                  loading="lazy"
                />
              ) : (
                <UserIconContainer>
                  <UserBlueIcon />
                </UserIconContainer>
              )}
            </ProfileImage>
            <div>
              <TextWithLeadingEllipsis
                styleName="djPlaceholder"
                color="white100"
                content={
                  candidateDetails.first_name.charAt(0).toLocaleUpperCase() +
                  candidateDetails.first_name.slice(1)
                }
              />
            </div>
          </ProfileContainer>
          {isUserModalOpen && (
            <UserPopup
              ref={outsideClickRef}
              setIsModalOpen={setIsUserModalOpen}
              rotate="rotate(-90deg)"
            />
          )}
        </React.Fragment>
      )}
    </LoginMainContainer>
  );
};
