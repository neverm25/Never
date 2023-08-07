// #Global Imports
import React, { useState } from "react";
import { Box, Flex } from "reflexbox";
// #Global Imports

// #region Local Imports
import {
  jobsTableData,
  menuItemsData,
  jobsTableColumnsData,
} from "./Utils/JobsUtils";
import { Card } from "@Global/Components/Basic/Card";
import { InputBase } from "@Global/Components/Basic/InputBase";
import {
  FilterIcon,
  GradientIcons,
  SearchIcon,
} from "@Global/Components/Icons";
import { DropdownMenu } from "@Global/Components/Basic";
import { Table } from "@Global/Components/Basic/Table";
import { JobsTableRow } from "./Components/JobsTableRow";
import { theme } from "@Global/Theme";
import { IDropdownMenu } from "@Global/Components/Basic/DropdownMenu/DropdownMenu";
// #region Local Imports

const Jobs = () => {
  const [tableData, setTableData] = useState(jobsTableData);
  const [searchedInputValue, setSearchedInputValue] = useState("");
  const [filterStatusValue, setFilterStatusValue] = useState(
    menuItemsData[0].value
  );
  const [filterStatusLabel, setFilterStatusLabel] = useState(
    menuItemsData[0].label
  );

  React.useEffect(() => {
    let tempdata = [...jobsTableData];
    if (searchedInputValue) {
      tempdata = tempdata.filter(data =>
        data.jobTitle.toLowerCase().includes(searchedInputValue?.toLowerCase())
      );
    }
    if (filterStatusValue !== menuItemsData[0].value) {
      tempdata = tempdata.filter(
        data => data.status.toLowerCase() === filterStatusValue.toLowerCase()
      );
    }
    setTableData(tempdata);
  }, [searchedInputValue, filterStatusValue]);

  return (
    <Card bgColor={theme.colors.white100} width={"100%"} height={"auto"}>
      <Box width="100%" p="5px 20px 20px 20px">
        <Flex alignItems="center">
          <InputBase
            type={"text"}
            name={"globalFilter"}
            value={searchedInputValue}
            onChangeHandler={e => {
              setSearchedInputValue(e.target.value);
            }}
            isSearch={true}
            placeholder="Search"
            hasLabel={false}
            suffix={<SearchIcon fill={`${theme.colors.black90}`} />}
          />
          <Flex mx="15px" mt="15px">
            <DropdownMenu
              Icons={{
                Icon: FilterIcon,
                GradientIcon: GradientIcons.FilterIcon,
              }}
              count={tableData.length}
              menuItemBackground="gradient"
              menuItems={menuItemsData}
              selectedValue={filterStatusValue}
              name="Status"
              selectedLabel={filterStatusLabel}
              onClickHandler={(item: IDropdownMenu.MenuiItem) => {
                setFilterStatusLabel(item.label);
                setFilterStatusValue(item.value);
              }}
            />
          </Flex>
        </Flex>
        <Table
          data={tableData}
          columns={jobsTableColumnsData}
          customRow={JobsTableRow}
          isPagination={true}
        />
      </Box>
    </Card>
  );
};

export default Jobs;
