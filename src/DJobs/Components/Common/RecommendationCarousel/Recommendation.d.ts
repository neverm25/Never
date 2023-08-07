import { JobListCommon } from "@DJobs/Components/Common/JobListCommon/JobListCommon";

declare namespace IRecommendation {
  export interface IProps {
    setJobSelId?: Dispatch<SetStateAction<number>>;
    align?: "center" | "left";
  }
}

export default IRecommendation;
