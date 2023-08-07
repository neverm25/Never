// #Global Imports
import * as React from "react";
import { Box, Flex } from "reflexbox";
// #Global Imports

// #region Local Imports
import {
  teamSettingsTableData,
  teamSettingsColumnsData,
} from "./Utils/TeamSettingsUtils";
import { theme } from "@Global/Theme";
import { Button, Card, Modal, Table } from "@Global/Components/Basic";
import { UserPlusIcon } from "@Global/Components/Icons";
import { TeamSettingsTableRow } from "./Components/TeamSettingsTableRow";
import AddUserModalInputs from "./Components/AddUserModalInputs";
import { IAddUserFields } from "./Components/AddUserModalInputs/AddUserModalInputs";
// #region Local Imports

const TeamSettings: React.FC = () => {
  const [showModal, setShowModal] = React.useState<boolean>(false);
  const [teamData, setTeamData] = React.useState(teamSettingsTableData);
  const [newUser, saveNewUser] = React.useState(null);

  const removeUser = (selectedUserId: string) => {
    setTimeout(() => {
      const tempData = teamData.filter(data => data?.id !== selectedUserId);
      setTeamData(tempData);
    }, 4000);
  };

  const updateUserRole = (id, value) => {
    const tempData = teamData.filter(data =>
      data?.id === id ? (data.role = value) : data
    );
    setTeamData(tempData);
  };

  const initialAddUserInputs: IAddUserFields.IProps = {
    firstName: "",
    lastName: "",
    email: "",
    role: "",
  };

  React.useEffect(() => {
    if (newUser !== null) {
      setTeamData(preValue => [...preValue, newUser]);
    }
  }, [newUser]);

  return (
    <Card bgColor={theme.colors.white100} width={"100%"} height={"auto"}>
      <Box width="100%" p="40px 20px 60px 20px">
        <Flex alignItems="center">
          <Button
            buttonCategory="icon"
            variant="plain"
            prefixIcon={<UserPlusIcon color={theme.colors.black100} />}
            onClick={() => setShowModal(true)}
          >
            add user
          </Button>
        </Flex>
        <Table
          id={newUser?.id}
          data={teamData}
          columns={teamSettingsColumnsData}
          customRow={TeamSettingsTableRow}
          isPagination={false}
          tableDataHandler={removeUser}
          updateUserRole={updateUserRole}
        />
      </Box>

      <Modal isModalOpen={showModal}>
        <AddUserModalInputs
          teamData={teamData}
          addUserFields={initialAddUserInputs}
          addNewUser={saveNewUser}
          setShowModal={setShowModal}
        />
      </Modal>
    </Card>
  );
};

export default TeamSettings;
