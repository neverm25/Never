// #region Global Imports
import * as React from "react";
import { Flex } from "reflexbox";
import { Slide, toast } from "react-toastify";
// #endregion Global Imports

// #region Local Imports
import { theme } from "@Global/Theme";
import {
  Button,
  DropdownMenu,
  Modal,
  Typography,
} from "@Global/Components/Basic";
import {
  DeleteIcon,
  EditIcon,
  ShieldIcon,
  TeamMemberIcon,
  UserRemoveIcon,
} from "@Global/Components/Icons/Unicons";
import { userRoleItemsData } from "./Utils/TeamSettingsTableRowUtils";
import { ITeamSettingsTableRow } from "./TeamSettingsTableRow";
import { ModalButtonsContainer } from "../Styles/ModalStyles";
import { ToastNotify } from "../Styles/TostifyStyle";
import { TableBodyRow } from "./Styles/TeamSettingsTableRowStyles";
import { IDropdownMenu } from "@Global/Components/Basic/DropdownMenu/DropdownMenu";
// #endregion Local Imports

export const TeamSettingsTableRow = ({
  id,
  row,
  tableDataHandler,
  updateUserRole,
}: ITeamSettingsTableRow.IProps) => {
  const [showConfirm, setShowConfirm] = React.useState<boolean>(false);
  const [rowBgColor, setRowBgColor] = React.useState<string>(
    theme.colors.white110
  );

  const toastNotification = notifyType => {
    return toast(
      <ToastNotify>
        {notifyType === "user-deleted" ? (
          <UserRemoveIcon color={theme.colors.red50} size={20} />
        ) : (
          <TeamMemberIcon color={theme.colors.blue100} size={20} />
        )}
        {notifyType === "user-deleted"
          ? "Team Member Removed"
          : "User Role Updated"}
      </ToastNotify>,
      {
        position: toast.POSITION.TOP_RIGHT,
        closeOnClick: false,
        closeButton: false,
        hideProgressBar: true,
        theme: "dark",
        autoClose: 3000,
        transition: Slide,
      }
    );
  };

  const callSetTimeout = () => {
    setTimeout(() => {
      setRowBgColor(theme.colors.white110);
    }, 4000);
  };

  const dropdownOnclickHandler = (value: string) => {
    updateUserRole(row.original.id, value);
    toastNotification("user-role-updated");
    setRowBgColor(theme.colors.purple10);
    callSetTimeout();
  };

  const deleteButtonHandler = () => {
    setShowConfirm(false);
    tableDataHandler(row.original.id);
    toastNotification("user-deleted");
    setRowBgColor(theme.colors.red05);
    callSetTimeout();
  };

  //eslint-disable-next-line react-hooks/exhaustive-deps
  React.useEffect(() => {
    if (id === row.original.id) {
      setRowBgColor(theme.colors.purple10);
      callSetTimeout();
    }
  }, [row]);

  return (
    <TableBodyRow {...row.getRowProps()} rowBgColor={rowBgColor}>
      <td style={{ width: "20%" }}>
        <Typography styleName={"tableBodyCell"}>
          {row.values.firstName}
        </Typography>
      </td>
      <td style={{ width: "20%" }}>
        <Typography styleName={"tableBodyCell"}>
          {row.values.lastName}
        </Typography>
      </td>
      <td style={{ width: "25%" }}>
        <Typography styleName={"tableBodyCell"}>{row.values.email}</Typography>
      </td>
      <td style={{ width: "25%" }}>
        <Flex
          alignItems="center"
          justifyContent="flex-start"
          width="max-content"
        >
          <Flex alignItems="center" width="150px">
            {row.values.role === "Team Member" ? (
              <TeamMemberIcon color={theme.colors.primaryBlack} size={20} />
            ) : (
              <ShieldIcon color={theme.colors.primaryBlack} size={20} />
            )}
            <Flex mx="10px">
              <Typography styleName={"tableBodyCell"}>
                {row.values.role}
              </Typography>
            </Flex>
          </Flex>
          {row.values.role !== "Owner" && (
            <DropdownMenu
              menuItemBackground="primary"
              Icons={{ Icon: EditIcon }}
              menuItems={userRoleItemsData}
              selectedValue=""
              onClickHandler={(item: IDropdownMenu.MenuiItem) =>
                item.value !== row.values.role &&
                dropdownOnclickHandler(item.value)
              }
            />
          )}
        </Flex>
      </td>
      <td style={{ width: "10%" }}>
        {row.values.role !== "Owner" && (
          <Flex justifyContent="center">
            <Button
              variant={"cancel"}
              buttonCategory={"icon"}
              prefixIcon={<DeleteIcon color={theme.colors.red80} />}
              onClick={() => {
                setShowConfirm(true);
              }}
            />
          </Flex>
        )}
      </td>
      <Modal isModalOpen={showConfirm}>
        <Flex pb="60px">
          <Typography styleName={"headingThree"} color="black100">
            {`Are you sure you want to remove ${row.values.firstName +
              " " +
              row.values.lastName} as a Team Member?`}
          </Typography>
        </Flex>
        <ModalButtonsContainer>
          <Button
            buttonCategory="main"
            variant="success"
            onClick={deleteButtonHandler}
          >
            yes
          </Button>
          <Button
            buttonCategory="main"
            variant="cancel"
            onClick={() => setShowConfirm(false)}
          >
            cancel
          </Button>
        </ModalButtonsContainer>
      </Modal>
    </TableBodyRow>
  );
};
