// #region Global Imports
import * as React from "react";
import { Flex, Box } from "reflexbox";
// #endregion Global Imports

// #region Local Imports
import { Typography } from "@Global/Components/Basic/Typography";
import { theme } from "@Global/Theme";
import {
  EndProgressDiv,
  MiddleProgressDiv,
  StartProgressDiv,
} from "./Styles/ProgressBarStyles";
import {
  TelephoneIcon,
  ShortlistIcon,
  SmileyIcon,
  DemoCardIcon,
  OnBoardIcon,
} from "@Global/Components/Icons";
import { IProgressBar } from "./ProgressBar";

// #endregion Local Imports

export const ProgressBar: React.FunctionComponent<IProgressBar.IProps> = ({
  isHideSidebar,
}): JSX.Element => {
  return (
    <div
      style={{
        marginBottom: isHideSidebar ? "0px" : "10px",
        marginTop: isHideSidebar ? "-2.9rem" : "-4%",
      }}
    >
      <Flex justifyContent="center">
        <StartProgressDiv bgColor={"#242938"}>
          <Box mr={"28px"} mb={"60px"}>
            <TelephoneIcon size={46} />
          </Box>
          <Box mt={"30px"} textAlign={"end"}>
            <Typography styleName="headingFour" color="white100">
              Screening
            </Typography>
            <Typography styleName="headingTwo" color="white100">
              15
            </Typography>
          </Box>
        </StartProgressDiv>
        <MiddleProgressDiv bgColor={`${theme.colors.purple150}`}>
          <Box mr={"28px"} mb={"60px"}>
            <ShortlistIcon height={"46"} width={"46"} />
          </Box>
          <Box mt={"30px"} textAlign={"end"}>
            <Typography styleName="headingFour" color="white100">
              Shortlist
            </Typography>
            <Typography styleName="headingTwo" color="white100">
              15
            </Typography>
          </Box>
        </MiddleProgressDiv>
        <MiddleProgressDiv bgColor={`${theme.colors.blue100}`}>
          <Box mr={"28px"} mb={"60px"}>
            <SmileyIcon height={"46"} width={"46"} />
          </Box>
          <Box mt={"30px"} textAlign={"end"}>
            <Typography styleName="headingFour" color="white100">
              Interview
            </Typography>
            <Typography styleName="headingTwo" color="white100">
              15
            </Typography>
          </Box>
        </MiddleProgressDiv>
        <MiddleProgressDiv bgColor={`${theme.colors.blue80}`}>
          <Box mr={"28px"} mb={"60px"}>
            <DemoCardIcon height={"40"} width={"40"} />
          </Box>
          <Box mt={"30px"} textAlign={"end"}>
            <Typography styleName="headingFour" color="white100">
              Offer Made
            </Typography>
            <Typography styleName="headingTwo" color="white100">
              15
            </Typography>
          </Box>
        </MiddleProgressDiv>
        <EndProgressDiv bgColor={`${theme.gradients.purple100}`}>
          <Box mb={"60px"}>
            <OnBoardIcon height={"46"} width={"46"} />
          </Box>
          <Box mt={"30px"} textAlign={"end"}>
            <Typography styleName="headingFour" color="white100">
              Onboarding
            </Typography>
            <Typography styleName="headingTwo" color="white100">
              15
            </Typography>
          </Box>
        </EndProgressDiv>
      </Flex>
    </div>
  );
};
