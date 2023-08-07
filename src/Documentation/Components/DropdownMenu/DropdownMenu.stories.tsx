// #Global Imports
import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import { Flex } from "reflexbox";
// #end Global Imports

// #Local Imports
import { DropdownMenu } from "@Global/Components/Basic/DropdownMenu";
import {
  FilterIcon,
  SettingsIcon,
  GradientIcons,
} from "@Global/Components/Icons";
// #Local Imports

const defaultData = [
  {
    value: "VIEW",
    label: "VIEW",
  },
  { value: "EDIT", label: "EDIT" },
  { value: "ARCHIVE", label: "ARCHIVE" },
];
const data = [
  {
    value: "ALL",
    label: "ALL",
  },
  {
    value: "VIEW",
    label: "VIEW",
  },
  { value: "EDIT", label: "EDIT" },
  { value: "ARCHIVE", label: "ARCHIVE" },
];
/* DropdownMenu with Button Stories */
storiesOf("Components/Basic/DropdownMenu", module).add("Button Type", () => {
  const [selectedValue1, setSelectedValue1] = useState(defaultData[0].value);
  const [selectedValue2, setSelectedValue2] = useState(data[0].value);
  const [selectedValue3, setSelectedValue3] = useState(data[0].value);
  const [selectedValue4, setSelectedValue4] = useState(defaultData[0].value);

  return (
    <Flex justifyContent="space-between">
      <DropdownMenu
        menuItemBackground="gradient"
        menuItems={defaultData}
        selectedValue={selectedValue1}
        selectedLabel={selectedValue1}
        onClickHandler={value => {
          setSelectedValue1(value);
        }}
      />
      <DropdownMenu
        menuItemBackground="primary"
        menuItems={data}
        Icons={{ Icon: FilterIcon, GradientIcon: GradientIcons.FilterIcon }}
        name="Name"
        selectedLabel={selectedValue2}
        selectedValue={selectedValue2}
        onClickHandler={value => {
          setSelectedValue2(value);
        }}
      />
      <DropdownMenu
        menuItemBackground="gradient"
        menuItems={data}
        Icons={{ Icon: FilterIcon, GradientIcon: GradientIcons.FilterIcon }}
        name="Name"
        selectedLabel={selectedValue3}
        selectedValue={selectedValue3}
        count={100}
        onClickHandler={value => {
          setSelectedValue3(value);
        }}
      />
      <DropdownMenu
        menuItemBackground="primary"
        menuItems={defaultData}
        selectedValue={selectedValue4}
        Icons={{ Icon: SettingsIcon }}
        onClickHandler={value => {
          setSelectedValue4(value);
        }}
      />
    </Flex>
  );
});
