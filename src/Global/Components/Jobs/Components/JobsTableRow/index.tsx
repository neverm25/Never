// #region Global Imports
import * as React from "react";
import { Flex } from "reflexbox";
import { useRouter } from "next/router";
// #endregion Global Imports

// #region Local Imports
import { Typography } from "@Global/Components/Basic/Typography";
import { theme } from "@Global/Theme";
import {
  CommentAltEditIcon,
  EyeIcon,
  SettingsIcon,
} from "@Global/Components/Icons/Unicons";
import { DropdownMenu } from "@Global/Components/Basic";
import { actionDropdownData } from "./Utils/JobsTableRowUtils";
import { IJobsTableRow } from "./JobsTable";
import { StatusDot, TableBodyRow } from "./Styles/JobsTableRowStyles";
import { IDropdownMenu } from "@Global/Components/Basic/DropdownMenu/DropdownMenu";

// #endregion Local Imports

export const JobsTableRow: React.FunctionComponent<IJobsTableRow.IProps> = ({
  row,
}) => {
  const status = row.values.status;
  const router = useRouter();

  return (
    <TableBodyRow status={status} {...row.getRowProps()}>
      <td>
        <Typography styleName={"tableRowDate"}>
          {row.values.datePosted}
        </Typography>
      </td>
      <td>
        <Flex alignItems="center">
          <StatusDot status={status} />
          <Typography
            styleName={"tableBodyCell"}
            color={
              status === "Expired"
                ? `red80`
                : status === "Active"
                ? `green180`
                : `yellow150`
            }
          >
            {status}
          </Typography>
        </Flex>
      </td>
      <td>
        <Typography styleName={"tableBodyCell"}>
          {row.values.jobTitle}
        </Typography>
      </td>
      <td>
        <Typography styleName={"tableBodyCell"}>
          {row.values.location}
        </Typography>
      </td>
      <td>
        <Flex alignItems="center">
          <Flex mr="8px">
            <EyeIcon color={theme.colors.primaryBlack} />
          </Flex>
          <Typography styleName={"tableBodyCell"}>
            {row.values.unread}
          </Typography>
        </Flex>
      </td>
      <td>
        <Flex alignItems="center">
          <Flex mr="8px">
            <CommentAltEditIcon color={theme.colors.primaryBlack} />
          </Flex>
          <Typography styleName={"tableBodyCell"}>
            {row.values.applied}
          </Typography>
        </Flex>
      </td>
      <td>
        <Typography styleName={"tableRowDate"}>{row.values.endDate}</Typography>
      </td>
      <td>
        <DropdownMenu
          menuItemBackground="primary"
          Icons={{ Icon: SettingsIcon, IconSize: 18 }}
          menuItems={actionDropdownData}
          selectedValue=""
          onClickHandler={(item: IDropdownMenu.MenuiItem) => {
            switch (item.value) {
              case "VIEW":
                router.push("/Global/jobs/pipeline/jobtitle");
              default:
                return null;
            }
          }}
        />
      </td>
    </TableBodyRow>
  );
};
