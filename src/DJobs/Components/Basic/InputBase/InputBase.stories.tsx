// #Global Imports
import React from "react";
import { storiesOf } from "@storybook/react";
// #end Global Imports

// #Local Imports
import InputBase from ".";
import { SearchIcon } from "@DJobs/Components/Icons";
// #Local Imports

/* Primary Buttons Stories */
storiesOf("Components/DJobs/InputBase", module).add("InputBase", () => {
  return (
    <React.Fragment>
      <InputBase
        type="text"
        name="headerSearchBar"
        placeholder="Search"
        isSearch={true}
        suffix={<SearchIcon />}
      />
    </React.Fragment>
  );
});
