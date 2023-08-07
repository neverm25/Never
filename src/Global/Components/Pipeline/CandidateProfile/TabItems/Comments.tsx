import * as React from "react";
import { theme } from "@Global/Theme";
import { Box, Flex } from "reflexbox";

import { Typography } from "@Global/Components/Basic/Typography";
import { Card } from "@Global/Components/Basic/Card";
import { Button } from "@Global/Components/Basic";
import { commentData } from "../../Utils/CommentsUtils";

export const Comments = () => (
  <Box>
    <Box mr="0.5rem" mt="1.625rem" alignItems="center">
      <Button buttonCategory="main" variant="primary">
        ADD COMMENT
      </Button>
    </Box>
    {commentData?.map((data, index) => {
      return (
        <Box mt="17px" alignItems="center" key={index}>
          <Card
            bgColor={`${theme.colors.white100}`}
            width={"100%"}
            height={"auto"}
            borderRadius="5px"
          >
            <Box
              justifyContent="center"
              alignItems="center"
              width={"100%"}
              pb="0.75rem"
              pt="0.625rem"
            >
              <Flex mt="10px" mb="11px" alignItems="center" pl="0.938rem">
                <Typography styleName="fileNameText" color="primaryBlack">
                  {data.comments}
                </Typography>
              </Flex>
              <Flex
                alignItems="center"
                justifyContent="space-between"
                pr="1.25rem"
                pl="0.938rem"
              >
                <Flex alignItems="end">
                  <Flex mr="6px">{data.icon}</Flex>
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
