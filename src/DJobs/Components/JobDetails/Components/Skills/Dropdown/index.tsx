// #region Global Imports
import React from "react";
// #endregion Global Imports

// #region Local Imports
import { IDropdown } from "./Dropdown";
import { DropdownArrowIcon } from "@DJobs/Components/Icons";
import { DJobsTypography } from "@DJobs/Components/Basic";
import {
  DropDownContainer,
  Maincontainer,
  Wrapper,
} from "./styles/DropdownStyles";
import { DropdownContent } from "./DropdownContent";
// #endregion Local Imports

const Dropdown = ({ data, isOpen, setIsOpen }: IDropdown.IProps) => {
  return (
    <Wrapper isOpen={isOpen}>
      <Maincontainer
        isOpen={isOpen}
        onClick={() => setIsOpen(isOpen => !isOpen)}
      >
        <DJobsTypography styleName="djSubTitleTwo" color="purple100">
          Skills and Industries
        </DJobsTypography>
        <DropdownArrowIcon />
      </Maincontainer>
      {isOpen && (
        <DropDownContainer isOpen={isOpen}>
          {data.skills?.length > 0 && (
            <DropdownContent title="Skills" data={data.skills} />
          )}
          {data.industries?.length > 0 && (
            <DropdownContent title="Industries" data={data.industries} />
          )}
        </DropDownContainer>
      )}
    </Wrapper>
  );
};

export default Dropdown;
