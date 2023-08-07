import * as React from "react";
import { theme } from "@Global/Theme";
import { Box, Flex } from "reflexbox";

import { Typography } from "@Global/Components/Basic/Typography";
import { Card } from "@Global/Components/Basic/Card";
import { activityData } from "./Utils/ActivityUtils";

export const Activity = () => (
  <Box>
    {activityData?.map((data, index) => {
      return (
        <Box mt="17px" alignItems="center" key={index}>
          <Card
            bgColor={`${theme.colors.white100}`}
            width={"100%"}
            height={"5rem"}
            borderRadius="5px"
          >
            <Box
              justifyContent="center"
              alignItems="center"
              width={"100%"}
              pb="0.75rem"
              pt="0.625rem"
            >
              <Flex mb="11px" alignItems="center" pl="0.938rem">
                <Flex mr="9px">{data.icon}</Flex>
                <Typography styleName="fileNameText" color="primaryBlack">
                  {data.activityName}
                </Typography>
              </Flex>
              <Flex
                alignItems="center"
                justifyContent="space-between"
                pr="1.25rem"
                pl="1rem"
              >
                <Flex alignItems="end">
                  <Flex mr="6px">{data.userIcon}</Flex>
                  <Typography styleName="bodySmall" color="black10">
                    {data.userName}
                  </Typography>
                </Flex>
                {data.date}
              </Flex>
            </Box>
          </Card>
        </Box>
      );
    })}
  </Box>
);
