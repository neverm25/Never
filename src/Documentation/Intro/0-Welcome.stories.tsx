import React from "react";
import { theme } from "../../Global/Theme";
import { ThemeProvider } from "styled-components";
import { Typography } from "../../Global/Components/Basic/Typography/index";

const Welcome = () => {
  return (
    <ThemeProvider theme={theme}>
      <Typography styleName="headingOne" color="black100">
        Introducing the UI Library for Talent Solutions
      </Typography>
      <Typography styleName="headingFour" color="black80">
        More guidelines on using the UI Library will get populated here over
        time
      </Typography>
    </ThemeProvider>
  );
};
export default {
  title: "USAGE GUIDE/Welcome",
  component: Welcome,
};
export const ToStorybook = () => <Welcome />;

ToStorybook.story = {
  name: "Introduction",
};
