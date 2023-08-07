// #Global Imports
import * as React from "react";
import { NextPage } from "next";
import { Box, Flex } from "reflexbox";
import { useRouter } from "next/router";
// #endglobal Imports

// #region Interface Imports
import { IPostCompanyProfile } from "@Interfaces";
import { Typography } from "@Global/Components/Basic/Typography";
import {
  CoverImageContainer,
  CoverImageSubContainer,
  CompanyInfoContainer,
  CompanyProfileImage,
  PhotoGalleryContainer,
  ImageContainer,
  LightBoxModalDiv,
  LightBoxModalImage,
  LightBoxModalContent,
  ImageContent,
  LightBoxCloseDiv,
  CompanyJobPostCount,
  ViewMore,
} from "./Styles/CompanyProfileStyles";
import { theme } from "@Global/Theme";
import {
  LocationIcon,
  CloseIcon,
  EditIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  NavigationLeftIcon,
  NavigationRightIcon,
  YouTubeIcon,
} from "@Global/Components/Icons";
import { Button } from "@Global/Components/Basic";
import {
  charityImageData,
  companyDescription,
} from "./Utils/CompanyProfileUtils";
import styled from "styled-components";
import { Row, Col } from "antd";
// #endregion Interface Imports

export const CompanyProfile: NextPage<
  IPostCompanyProfile.IProps,
  IPostCompanyProfile.InitialProps
> = () => {
  const router = useRouter();
  const [visibleLightBox, setVisibleLightBox] = React.useState(false);
  const [showMore, setShowMore] = React.useState(false);
  const [charityImageId, setCharityImageId] = React.useState(1);

  return (
    <CompanyProfileContainer>
      <Row>
        <Col span={24}>
          <Flex flexDirection="column" alignItems={"center"} mb={"10%"}>
            <CoverImageContainer
              width={"100%"}
              height={"160px"}
              bgColor={`${theme.colors.white100}`}
            >
              <CoverImage
                width="100%"
                alt="cover image"
                src="/static/images/company-cover-image.png"
              />
            </CoverImageContainer>
            <CoverImageSubContainer width={"100%"} height={"139px"} />
            <CompanyInfoContainer
              width={"96%"}
              bgColor={`${theme.colors.black100}`}
              showMore={showMore}
            >
              <Box m={"5%"}>
                <CompanyProfileImage
                  width={"196px"}
                  height={"196px"}
                  bgURL={"/static/images/company-profile-image.jpg"}
                />
              </Box>
              <Box my={"4%"}>
                <Typography styleName="headingOne" color="white100">
                  Charity Recruitment
                </Typography>
                <Flex
                  mt={"20px"}
                  mb={"20px"}
                  alignItems={"center"}
                  justifyContent="space-between"
                  width={"22%"}
                >
                  <LocationIcon color={theme.colors.blue50} />
                  <Typography styleName="subTitleTwo" color="blue50">
                    Cape Town, ZA
                  </Typography>
                </Flex>
                <Box width={"85%"} textAlign="justify">
                  <Typography styleName="bodyRegular" color="background">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore
                  </Typography>
                </Box>
                <Box my={"2.5%"}>
                  <a
                    href="https://charityrecruitment.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Typography
                      styleName="interactiveTextRegular"
                      color="white100"
                    >
                      www.charityrecruitment.com
                    </Typography>
                  </a>
                </Box>
                <Button
                  buttonCategory="icon"
                  variant="plain"
                  prefixIcon={<EditIcon />}
                  onClick={() => router.push(`${router.asPath}/update`)}
                >
                  EDIT COMPANY PROFILE
                </Button>
              </Box>
            </CompanyInfoContainer>
          </Flex>
        </Col>
      </Row>
      <Row>
        <Col>
          <Flex
            alignItems="space-between"
            justifyContent="space-between"
            mx={"6%"}
            mt="6%"
          >
            <Box
              width={"60%"}
              pb="4%"
              style={{ borderBottom: `2px solid ${theme.colors.background}` }}
            >
              <Box mb={"2%"}>
                <Typography styleName="headingTwo" color="black100">
                  Company Description
                </Typography>
              </Box>
              <Box textAlign="justify" mb="2%">
                <Typography styleName="bodyRegular" color="bodyTextColor">
                  {showMore
                    ? companyDescription
                    : `${companyDescription.substring(0, 465)}`}
                </Typography>
              </Box>
              <ViewMore onClick={() => setShowMore(!showMore)}>
                <Typography styleName="linkTextMore" color="blue100">
                  {showMore ? "VIEW LESS" : "VIEW MORE"}
                </Typography>
              </ViewMore>
            </Box>
            <Box
              mr="3%"
              pb="4%"
              width={"30%"}
              style={{ borderBottom: `2px solid ${theme.colors.background}` }}
            >
              <SocialLinksHeading>Social Links</SocialLinksHeading>
              <SocialIconsWrapper>
                <FacebookIcon color={theme.colors.black90} size={35} />
                <LinkedInIcon color={theme.colors.black90} size={35} />
                <InstagramIcon color={theme.colors.black90} size={35} />
                <YouTubeIcon color={theme.colors.black90} size={35} />
              </SocialIconsWrapper>
            </Box>
          </Flex>
        </Col>
      </Row>
      <Row>
        <Col>
          <Box
            alignItems="space-between"
            justifyContent="space-between"
            mx={"6%"}
          >
            <Flex mt="4%" alignItems="center">
              <Typography styleName="headingThree" color="black100">
                Latest Jobs
              </Typography>
              <CompanyJobPostCount>
                <Typography styleName="subTitleOne" color="white100">
                  12
                </Typography>
              </CompanyJobPostCount>
            </Flex>
            <Box my="2%">
              <Typography styleName="bodyRegular" color="bodyTextColor">
                Lorem ipsum dolor sit amet, consectetur adLorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. ipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Typography>
            </Box>
            <Box my="2%">
              <Button
                buttonCategory="main"
                variant="primary"
                onClick={() => router.push("/Global/jobs")}
              >
                View Jobs
              </Button>
            </Box>
          </Box>
        </Col>
      </Row>
      <Row>
        <Col>
          <Box
            alignItems="space-between"
            justifyContent="space-between"
            pt="2%"
            mx="6%"
          >
            <Box
              pt="4%"
              style={{ borderTop: `2px solid ${theme.colors.background}` }}
            >
              <Typography styleName="headingThree" color="black100">
                Working at Charity Recruitment
              </Typography>
              <PhotoGalleryContainer>
                {charityImageData.map((data: any, index: number) => (
                  <div
                    key={index}
                    onClick={() => {
                      setVisibleLightBox(!visibleLightBox),
                        setCharityImageId(data.id);
                    }}
                  >
                    <ImageContainer
                      width="250px"
                      height="160px"
                      bgURL={data.src}
                    />
                  </div>
                ))}
              </PhotoGalleryContainer>
              {visibleLightBox && (
                <div>
                  <LightBoxModalDiv id={"lightBoxModal"}>
                    <LightBoxCloseDiv
                      onClick={() => setVisibleLightBox(!visibleLightBox)}
                    >
                      <CloseIcon />
                    </LightBoxCloseDiv>
                    <Box
                      onClick={() =>
                        charityImageId > 1 &&
                        setCharityImageId(charityImageId - 1)
                      }
                    >
                      <NavigationLeftIcon />
                    </Box>
                    <LightBoxModalContent>
                      <LightBoxModalImage
                        width="290px"
                        height="180px"
                        bgURL={`/static/images/charityimage${charityImageId}.png`}
                      />
                      <ImageContent>
                        <Typography styleName="photoTitle" color="primaryBlack">
                          Photo Title
                        </Typography>
                        <Typography styleName="captionSmall" color="black80">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore
                        </Typography>
                      </ImageContent>
                    </LightBoxModalContent>
                    <div
                      onClick={() =>
                        charityImageId < 18 &&
                        setCharityImageId(charityImageId + 1)
                      }
                    >
                      <NavigationRightIcon />
                    </div>
                  </LightBoxModalDiv>
                </div>
              )}
            </Box>
          </Box>
        </Col>
      </Row>
    </CompanyProfileContainer>
  );
};

CompanyProfile.getInitialProps = async (): Promise<
  IPostCompanyProfile.InitialProps
> => {
  return { namespacesRequired: ["common"] };
};

const Extended = CompanyProfile;

export default Extended;

const CoverImage = styled.img``;
const CompanyProfileContainer = styled.div`
  background-color: ${theme.colors.white100};
`;
const SocialLinksHeading = styled.div`
  color: ${props => props.theme.colors.black100};
  ${props => props.theme.text.headingTwo};
  padding-left: 5px;
`;
const SocialIconsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  justify-content: space-around;
  width: 160px;
`;
