import { PipelineCardsProps } from "./PipelineCards";

import { PipelineIcons } from "@Global/Components/Icons";

export const pipelineData: PipelineCardsProps.pipelineDataProps = {
  screening: {
    Icon: PipelineIcons.PipePhoneIcon,
    TextColor: "darkBlue",
    FillColor: "blue40",
    SuccessColor: "green80",
  },
  shortlist: {
    Icon: PipelineIcons.ShortlistIcon,
    TextColor: "darkBlue",
    FillColor: "blue50",
    SuccessColor: "green80",
  },
  interview: {
    Icon: PipelineIcons.SmileyIcon,
    TextColor: "darkBlue",
    FillColor: "blue80",
    SuccessColor: "green80",
  },
  "offer made": {
    Icon: PipelineIcons.DemoCardIcon,
    TextColor: "white100",
    FillColor: "purple80",
    SuccessColor: "green80",
  },
  onboarding: {
    Icon: PipelineIcons.OnBoardIcon,
    TextColor: "white100",
    FillColor: "blue100",
    SuccessColor: "green80",
  },
};
