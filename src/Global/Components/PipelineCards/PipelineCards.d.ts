import { GlobalTheme } from "@Global/Theme/styled";
import { PipelineProps } from "../Pipeline/Pipeline";

declare namespace PipelineCardsProps {
  export type Positon = 1 | 2 | 3 | 4 | 5;
  export type Variant = "primary" | "secondary";
  export type PipelineStatus =
    | "screening"
    | "shortlist"
    | "interview"
    | "offer made"
    | "onboarding";

  export interface PipelineCardDataProps {
    pipelinePhase: PipelineStatus;
    icon: JSX.Element;
  }
  interface pipelineData {
    Icon: ({ width, height, fillColor }: IIcons.IconProps) => JSX.Element;
    TextColor: keyof GlobalTheme.Colors;
    FillColor: keyof GlobalTheme.Colors;
    SuccessColor: keyof GlobalTheme.Colors;
  }
  export type pipelineDataProps = {
    [key in PipelineStatus]: pipelineData;
  };
  export interface PipelineCardProps {
    pipelineStatus: PipelineStatus;
    variant: Variant;
    candidateCount: number;
    isActivePhase: boolean;
  }
  export interface IProps {
    variant: Variant;
    candidateList?: PipelineProps.CandidateList;
  }
}
export { PipelineCardsProps };
