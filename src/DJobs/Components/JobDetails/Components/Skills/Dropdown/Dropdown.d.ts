import { JobType } from "@DJobs/Components/JobDetails/JobDetails";
import React from "react";

declare namespace IDropdown {
  interface IProps {
    data: JobType;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    isOpen: boolean;
  }
  type SkillOrIndustryProps = {
    index: number;
    value: string;
  };
}

export { IDropdown };
