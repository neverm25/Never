import React from "react";
import { useRouter } from "next/router";

import { ProfileDropDownContainer } from "../Styles/HeaderStyles";
import { DJobsTypography } from "@DJobs/Components/Basic/";
import { IUserPopup } from "./UserPopup";
import {
  GradientEditIcon,
  GradientLogoutIcon,
  GradientSettingIcon,
} from "@DJobs/Components/Icons";
import styled from "styled-components";
import { DJOBS_ROUTES } from "@DJobs/DjobsUtils";
import { reduxActions } from "@Redux/actions";
import { useAppSelector } from "@Redux";

const UserActionTitle = ({ title }: { title: string }) => (
  <DJobsTypography styleName="djHeadMenu" color="white100">
    {title}
  </DJobsTypography>
);

const UserPopup = ({ setIsModalOpen, ref }: IUserPopup.IProps) => {
  const router = useRouter();
  const { login } = useAppSelector(store => store);
  const { isLoggedin } = login;

  return (
    <ProfileDropDownContainer ref={ref}>
      <Content
        onClick={() => {
          router.push(DJOBS_ROUTES.userProfile);
          setIsModalOpen(false);
        }}
      >
        <GradientEditIcon color="white" />
        <UserActionTitle title="Edit profile" />
      </Content>
      <Content
        onClick={() => {
          router.push(DJOBS_ROUTES.userSettings);
          setIsModalOpen(false);
        }}
      >
        <GradientSettingIcon color="white" />
        <UserActionTitle title="Settings" />
      </Content>
      <Content
        onClick={() => {
          if (isLoggedin) {
            reduxActions.login.LogoutFromDjobs();
          } else {
            router.push(DJOBS_ROUTES.login);
          }
          setIsModalOpen(false);
        }}
      >
        <GradientLogoutIcon />
        <UserActionTitle title={isLoggedin ? "Sign Out" : "Sign In"} />
      </Content>
    </ProfileDropDownContainer>
  );
};

export default UserPopup;

const Content = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: start;
  gap: 27px;

  svg {
    margin-right: 0px;
  }
`;
