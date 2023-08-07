import React from "react";
import { ThemeProvider } from "styled-components";
import { Flex, Box } from "reflexbox/styled-components";

import { Card } from ".";
import { Typography } from "../Typography";
import { theme } from "@Global/Theme";
import DemoCardIcon from "../../Icons/DemoCardIcon";

export const DefaultCard = () => (
  <ThemeProvider theme={theme}>
    <Card width={"259px"} height={"97px"} bgColor={"white100"}>
      <React.Fragment>
        <Box ml={"15px"}>
          <DemoCardIcon />
        </Box>
        <Flex flexDirection="column" ml={"10px"}>
          <Typography styleName="headingFour" color={"black50"}>
            Title
          </Typography>
          <Typography styleName="headingTwo" color={"black50"}>
            Content
          </Typography>
        </Flex>
      </React.Fragment>
    </Card>
  </ThemeProvider>
);

export const CustomizedBgColor = () => (
  <ThemeProvider theme={theme}>
    <Card
      width={"259px"}
      height={"97px"}
      bgColor={
        "linear-gradient(42.65deg, #E9ABD9 -13.19%, #785BEA 20.83%, #3495EE 53.75%, #B0DEF0 91.07%)"
      }
    >
      <React.Fragment>
        <Box ml={"15px"}>
          <DemoCardIcon />
        </Box>
        <Flex flexDirection="column" ml={"10px"}>
          <Typography styleName="headingFour" color={"black50"}>
            Title
          </Typography>
          <Typography styleName="headingTwo" color={"black50"}>
            Content
          </Typography>
        </Flex>
      </React.Fragment>
    </Card>
  </ThemeProvider>
);

export const CustomizedSize = () => (
  <ThemeProvider theme={theme}>
    <Card
      width={"719px"}
      height={"345px"}
      bgColor={
        "linear-gradient(42.65deg, #E9ABD9 -13.19%, #785BEA 20.83%, #3495EE 53.75%, #B0DEF0 91.07%)"
      }
    >
      <Box ml={"15px"}>
        <DemoCardIcon />
      </Box>
      <Flex flexDirection="column" ml={"10px"}>
        <Typography styleName="headingFour" color={"black50"}>
          Title
        </Typography>
        <Typography styleName="headingTwo" color={"black50"}>
          Content
        </Typography>
      </Flex>
    </Card>
  </ThemeProvider>
);
