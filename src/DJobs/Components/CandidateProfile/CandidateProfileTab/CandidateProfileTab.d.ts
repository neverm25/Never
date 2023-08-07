import { CandidateProfileTabData } from "./Utils";
import { DeviceTypes } from "@Helpers/DeviceTypeHelpers";

declare namespace CandidateProfileContentProps {
  type Header = typeof CandidateProfileTabData.Headers[number];

  interface Context {
    activeHeading: Header;
    setActiveHeading: Dispatch<SetStateAction<Header>>;
    deviceType: DeviceTypes;
  }
}

export { CandidateProfileContentProps };
