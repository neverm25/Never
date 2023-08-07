// #region Global Imports
import * as React from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import Link from "next/link";
// #endregion Global Imports

// #region Local Imports
import { Error } from "@DJobs/Components";
// #endregion Local Imports

// #region Interface Imports
import { IErrorPage } from "@Interfaces";
import { Typography } from "@Global/Components/Basic/Typography";
import { Button } from "@Global/Components/Basic/Button";
import { Box } from "reflexbox";
import { Row } from "antd";
// import { Container } from "antd";
// #endregion Interface Imports

const GlobalErrorpage = () => (
  // <Container>
    <Row>
      <Box mt={"150px"} ml={"200px"}>
        <Box pb={"30px"}>
          <Typography styleName="headingOne" color="black80">
            {"Error 404"}
          </Typography>
          <Typography styleName="headingTwo" color="black80">
            {"No Page Found"}
          </Typography>
        </Box>
        <Link passHref href="/" prefetch={false}>
          <Button buttonCategory="main" variant="plain">
            Go Back
          </Button>
        </Link>
      </Box>
    </Row>
  // </Container>
);

const DjobsErrorPage = Error;

const Custom404: NextPage<IErrorPage.IProps> = ({}) => {
  const router = useRouter();
  const IS_GLOBAL_PAGE = router.asPath.startsWith("/Global");

  const Error = IS_GLOBAL_PAGE ? GlobalErrorpage : DjobsErrorPage;

  return <Error />;
};

export default Custom404;
