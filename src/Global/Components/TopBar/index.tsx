// #Global Imports
import * as React from "react";
import { useRouter } from "next/router";
import { Flex, Box } from "reflexbox/styled-components";
import { Dropdown } from "antd";
import Image from "next/image";
// #Global Imports

// # Local Imports
import { Button } from "../Basic/Button";
import { BreadCrumbs } from "@Global/Components/Basic/BreadCrumbs";
import { NotificationIcon, StaticCharticon, DownCircleIcon } from "../Icons";
import { Typography } from "@Global/Components/Basic/Typography";
import { TopBarMenu } from "./Components/TopBarMenu";
// #end Local Imports

const TopBar = () => {
  const router = useRouter();

  return (
    <Flex
      width={["100%"]}
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      height="80px"
      pl={["50px"]}
      pr={["50px"]}
      marginTop="25px"
    >
      <Box>
        <BreadCrumbs from={"Pages"} />
      </Box>
      <Box>
        <Flex flexDirection="row" justifyContent="flex-end" alignItems="center">
          {router.pathname.includes("/") && (
            <Box m={"10px"}>
              <Button
                variant="primary"
                buttonCategory="main"
                onClick={() => router.push("/Global/home/post-job")}
              >
                <Typography styleName="commentText" color="white100">
                  POST A JOB
                </Typography>
              </Button>
            </Box>
          )}
          <Box m={"10px"}>
            <NotificationIcon />
          </Box>
          <Box m={"10px"}>
            <StaticCharticon />
          </Box>
          <Box ml={"17px"}>
            <Image
              src={`/static/images/profile.png`}
              alt="profile-image"
              width={65.31}
              height={65.31}
              loading="lazy"
            />
          </Box>
          <Dropdown
            overlay={TopBarMenu}
            placement="bottomRight"
            arrow
            overlayStyle={{
              minWidth: "150px",
              boxShadow:
                "0px 0px 1px rgb(21 21 21 / 2%), 0px 2px 4px rgb(21 21 21 / 8%)",
            }}
          >
            <Box ml={"10px"}>
              <DownCircleIcon />
            </Box>
          </Dropdown>
        </Flex>
      </Box>
    </Flex>
  );
};

export { TopBar };
