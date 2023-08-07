declare namespace IPostJob {
  export type StepNumber = 1 | 2;
  export type StepStatus = "pending" | "active" | "completed";
  export type PostName = "Standard" | "Starter" | "Pro";

  export interface isHideSidebarProps {
    isHideSidebar: boolean;
  }

  export interface StepProps {
    stepNumber: StepNumber;
    stepTitle: string;
    StepIcon: ({ width, height }: IIcons.IconProps) => JSX.Element;
    stepStatus?: StepStatus;
  }

  //ProgressBar
  export interface ProgressBarProps {
    steps: StepProps[];
    activeStepNumber: StepNumber;
  }

  //Step Container
  export interface PostJobStateManagementObject {
    activeStepNumber: StepNumber;
    setActiveStepNumber: Dispatch<SetStateAction<StepNumber>>;

    postJobApplicationInputs: PostJobApplicationInputsProps;
    setPostJobApplicationInputs: Dispatch<
      SetStateAction<PostJobApplicationInputsProps>
    >;
  }
  export interface StepContainerProps {
    activeStepProps: StepProps;
    postJobStateManagementObject: PostJobStateManagementObject;
  }

  //Step Component
  export interface StepComponentProps {
    activeStepNumber: StepNumber;
    setActiveStepNumber: Dispatch<SetStateAction<StepNumber>>;

    postJobApplicationInputs: PostJobApplicationInputsProps;
    setPostJobApplicationInputs: Dispatch<
      SetStateAction<PostJobApplicationInputsProps>
    >;

    jobDetailInputs: IPostJob.JobDetailInputsProps;
    setJobDetailInputs: Dispatch<SetStateAction<IPostJob.JobDetailInputsProps>>;

    advertiseInputs: IPostJob.AdvertiseInputsProps;
    setAdvertiseInputs: Dispatch<SetStateAction<IPostJob.AdvertiseInputsProps>>;
  }

  //Inputs from Step 1
  export interface JobDetailInputsProps {
    jobTitle: string;
    location: string;
    workSituation: string;
    employmentType: string;
    industry: string;
    skillsRequired: string;
    experienceRequired: string;
    jobDescription: string;
  }
  //Inputs from Step 2
  export interface AdvertiseInputsProps {
    selectedPostType: PostName;
    sendToPartnerEnabled: boolean;
    budgetAlertsEnabled: boolean;
    customApplyURL: string;
  }
  //Inputs from PostJob Container
  export interface PostJobApplicationInputsProps {
    jobDetailInputs: JobDetailInputsProps;
    advertiseInputs: AdvertiseInputsProps;
  }
}
export { IPostJob };
