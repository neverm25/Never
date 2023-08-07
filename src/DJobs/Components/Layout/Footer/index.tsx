import React from "react";
import { Grid } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

import {
  BottomContainer,
  Buttons,
  CompanyLogo,
  FooterContainer,
  MainLinksContainer,
  OtherLinksContainer,
  RegisterButtonContainer,
  SocialContainer,
  TopContainer,
  IconContainer,
  BottomLeft,
  CompanyDetails,
} from "./FooterStyles";
import { DJobsTypography, DjobsButton } from "@DJobs/Components/Basic";
import { DJOBS_ROUTES } from "@DJobs/DjobsUtils/Routes";
import { RootState, useAppDispatch } from "src/redux";
import { getCurrentYear } from "@Helpers/DateHelpers";
import { SocilaIcons } from "./SocialIcons";
import { DittoJobsLogo } from "@DJobs/Components/Common/DittoJobsLogo";
import { loginActions } from "@Redux/slices/Login";

const Footer = () => {
  const isLoggedIn = useSelector((state: RootState) => state.login.isLoggedin);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const screens = Grid.useBreakpoint();
  const isGumtree = router.pathname.startsWith("/DJobs/job/gumtree");

  return isGumtree ? (
    <React.Fragment></React.Fragment>
  ) : (
    <FooterContainer>
      <TopContainer isLoggedIn={isLoggedIn}>
        {!isLoggedIn ? (
          <RegisterButtonContainer>
            <DJobsTypography color="white100" styleName="djFooterText">
              Ready to make your move?
            </DJobsTypography>
            <Buttons>
              <DjobsButton.Main
                variant="Primary"
                label="Sign In"
                onClick={() => {
                  router.push(DJOBS_ROUTES.login);
                  dispatch(
                    loginActions.setUrlBeforeInitiatinLogin(
                      window.location.href
                    )
                  );
                }}
              />
              <DjobsButton.Main
                variant="Success"
                label="Register"
                onClick={() => {
                  router.push(DJOBS_ROUTES.register);
                  dispatch(
                    loginActions.setUrlBeforeInitiatinLogin(
                      window.location.href
                    )
                  );
                }}
              />
            </Buttons>
          </RegisterButtonContainer>
        ) : (
          <div />
        )}

        <SocialContainer>
          <DJobsTypography color="white100" styleName="djFooterText">
            Follow us on:
          </DJobsTypography>
          <IconContainer>
            <SocilaIcons id="" />
          </IconContainer>
        </SocialContainer>
      </TopContainer>
      <BottomContainer>
        <BottomLeft>
          <CompanyDetails>
            <CompanyLogo>
              <Link href={DJOBS_ROUTES.home} prefetch={false}>
                <a>
                  <DittoJobsLogo />
                </a>
              </Link>
            </CompanyLogo>
            {screens.lg && (
              <DJobsTypography color="white100" styleName="djFooter">
                {`\u00A9 Ditto Jobs ${getCurrentYear()}`}
              </DJobsTypography>
            )}
          </CompanyDetails>
          <MainLinksContainer>
            <Link href={DJOBS_ROUTES.home} prefetch={false}>
              <a>
                <DJobsTypography color="white100" styleName="djFooterMainLInk">
                  HOME
                </DJobsTypography>
              </a>
            </Link>
            <Link href={"https://www.dittohire.com"} prefetch={false}>
              <a>
                <DJobsTypography color="white100" styleName="djFooterMainLInk">
                  For recruiters
                </DJobsTypography>
              </a>
            </Link>
            <Link href="https://www.dittohire.com/" prefetch={false}>
              <a>
                <DJobsTypography color="white100" styleName="djFooterMainLInk">
                  Post a job
                </DJobsTypography>
              </a>
            </Link>
          </MainLinksContainer>
        </BottomLeft>
        <OtherLinksContainer>
          <Link href={DJOBS_ROUTES.legalPrivacy} prefetch={false}>
            <a>
              <DJobsTypography color="white90" styleName="djFooterSubLink">
                Privacy Policy
              </DJobsTypography>
            </a>
          </Link>
          <Link href={DJOBS_ROUTES.legalTerms} prefetch={false}>
            <a>
              <DJobsTypography color="white90" styleName="djFooterSubLink">
                Terms & Conditions
              </DJobsTypography>
            </a>
          </Link>
        </OtherLinksContainer>
        {!screens.lg && (
          <div style={{ marginTop: "40px", marginBottom: "40px" }}>
            <DJobsTypography color="white100" styleName="djFooter">
              {`\u00A9 Ditto Jobs ${getCurrentYear()}`}
            </DJobsTypography>
          </div>
        )}
      </BottomContainer>
    </FooterContainer>
  );
};

export default Footer;
