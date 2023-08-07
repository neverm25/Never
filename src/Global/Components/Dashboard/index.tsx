// #region Global Imports
import * as React from "react";
import { Flex, Box } from "reflexbox";
import Link from "next/link";
import { Row, Col } from "antd";
// #endregion Global Imports

// #region Local Imports
import { Card } from "@Global/Components/Basic/Card";
import DemoCardIcon from "@Global/Components/Icons/DemoCardIcon";
import {
  UserImageBox,
  DemoCardIconWrapper,
  PipelineWrapper,
} from "./Styles/DashboardStyles";
import { CalenderIcon, LocationIcon } from "@Global/Components/Icons";
import { Chart } from "@Global/Components/Basic/Chart";
import { Typography } from "@Global/Components/Basic/Typography";
import { chartData } from "./Utils/DashboardUtils";
import { theme } from "@Global/Theme";
import PipelineCards from "../PipelineCards";
// #endregion Local Imports

export const Dashboard = () => {
  return (
    <React.Fragment>
      <Row gutter={[16, 34]} style={{ marginBottom: "20px" }}>
        <Flex
          flexDirection={"row"}
          width={"100%"}
          justifyContent={"space-between"}
          alignItems={"top"}
        >
          <Col span={6}>
            <Card
              width={"auto"}
              height={"117px"}
              bgColor={`${theme.colors.white100}`}
            >
              <Flex alignItems={"center"}>
                <Box ml={"15px"}>
                  <DemoCardIconWrapper>
                    <DemoCardIcon width="18" height="18" />
                  </DemoCardIconWrapper>
                </Box>
                <Flex flexDirection="column" ml={"10px"}>
                  <Typography styleName="subTitleTwo" color="black90">
                    Active Jobs
                  </Typography>
                  <Typography styleName="captionsRegular" color="black80">
                    Last 30 days
                  </Typography>
                  <Typography styleName="headingTwo" color="black100">
                    15
                  </Typography>
                </Flex>
              </Flex>
            </Card>
          </Col>
          <Col span={6}>
            <Card
              width={"auto"}
              height={"117px"}
              bgColor={`${theme.colors.white100}`}
            >
              <Flex alignItems={"center"}>
                <Box ml={"15px"}>
                  <DemoCardIconWrapper>
                    <DemoCardIcon width="18" height="18" />
                  </DemoCardIconWrapper>
                </Box>
                <Flex flexDirection="column" ml={"10px"}>
                  <Typography styleName="subTitleTwo" color="black90">
                    Candidate Reviews
                  </Typography>
                  <Typography styleName="captionsRegular" color="black80">
                    Last 30 days
                  </Typography>
                  <Typography styleName="headingTwo" color="black100">
                    15
                  </Typography>
                </Flex>
              </Flex>
            </Card>
          </Col>
          <Col span={6}>
            <Card
              width={"auto"}
              height={"117px"}
              bgColor={`${theme.colors.white100}`}
            >
              <Flex alignItems={"center"}>
                <Box ml={"15px"}>
                  <DemoCardIconWrapper>
                    <DemoCardIcon width="18" height="18" />
                  </DemoCardIconWrapper>
                </Box>
                <Flex flexDirection="column" ml={"10px"}>
                  <Typography styleName="subTitleTwo" color="black90">
                    Job Views
                  </Typography>
                  <Typography styleName="captionsRegular" color="black80">
                    Last 30 days
                  </Typography>
                  <Typography styleName="headingTwo" color="black100">
                    15
                  </Typography>
                </Flex>
              </Flex>
            </Card>
          </Col>
          <Col span={6}>
            <Card
              width={"auto"}
              height={"117px"}
              bgColor={`${theme.gradients.purple100}`}
            >
              <Flex
                flexDirection="column"
                ml={"25px"}
                alignSelf={"center"}
                alignContent={"center"}
              >
                <Typography styleName="subTitleTwo" color="white100">
                  Applications
                </Typography>
                <Typography styleName="captionsRegular" color="white100">
                  Last 30 days
                </Typography>
                <Typography styleName="headingTwo" color="white100">
                  2
                </Typography>
              </Flex>
            </Card>
          </Col>
        </Flex>

        <Col span={17}>
          <Card
            width={"auto"}
            height={"345px"}
            bgColor={`${theme.colors.white100}`}
          >
            <Flex
              flexDirection={"column"}
              width={"100%"}
              alignItems={"center"}
              mx={"45px"}
            >
              <Flex width={"100%"} my={"35px"} justifyContent={"space-between"}>
                <Box>
                  <Typography styleName="headingThree" color="black100">
                    Applications
                  </Typography>
                  <Box mb={"15px"}></Box>
                  <Typography styleName="captionsRegular" color="black50">
                    Last 30 days
                  </Typography>
                </Box>
                <CalenderIcon />
              </Flex>
              <Chart
                width={"100%"}
                height={"55%"}
                data={chartData}
                type={"monotone"}
                dataKey={"Applicant"}
                stroke={"#563BFF"}
                strokeWidth={"3"}
              />
            </Flex>
          </Card>
        </Col>

        <Col span={7}>
          <Card
            width={"auto"}
            height={"345px"}
            bgColor={`${theme.colors.white100}`}
          >
            <Flex
              flexDirection={"column"}
              alignItems={"center"}
              justifyContent={"center"}
              width={"100%"}
            >
              <UserImageBox />
              <Typography styleName="headingTwo" color="black100">
                Ditto Hire
              </Typography>
              <Flex
                m={"10px"}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <LocationIcon color={theme.colors.black80} />
                <Typography styleName="bodySmall" color="black80">
                  Cape Town, ZA
                </Typography>
              </Flex>
              <Box margin={"10px"}>
                <Link href={"settings/company-profile/update"} prefetch={false}>
                  <a>
                    <Typography
                      styleName="interactiveTextSmall"
                      color="blue100"
                    >
                      Edit Company Profile
                    </Typography>
                  </a>
                </Link>
              </Box>
              <Box margin={"10px"}>
                <Link href={"settings/company-profile"} prefetch={false}>
                  <a>
                    <Typography
                      styleName="interactiveTextSmall"
                      color="blue100"
                    >
                      View Company Profile
                    </Typography>
                  </a>
                </Link>
              </Box>
            </Flex>
          </Card>
        </Col>

        <Box ml={"25px"}>
          <Typography styleName="headingThree" color="black100">
            Hiring Progress
          </Typography>
        </Box>
        <Col span={24}>
          <PipelineWrapper>
            <PipelineCards variant="primary" />
          </PipelineWrapper>
        </Col>
      </Row>
    </React.Fragment>
  );
};
