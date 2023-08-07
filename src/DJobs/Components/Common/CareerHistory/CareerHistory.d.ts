import { DjobsTheme } from "@DJobs/Theme/styled";
declare namespace CareerHistoryProps {
  interface CareerInfoFormValues {
    jobTitle: string;
    companyName: string;
    startedFrom_month: string;
    startedFrom_year: number;
    workedTill_month: string;
    workedTill_year: number;
    isCurrentPosition: boolean;
    description: string;
    reasonForLeaving: string;
  }
  interface CareerHistory {
    id?: number;
    job_title: string;
    company: string;
    from_year: number;
    from_month: number;
    to_month: number;
    to_year: number;
    is_to_present: boolean;
    description: string;
    reason_for_leaving: string;
  }
  interface CareerInfoFormAdd {
    createCareerData: (careerData: CareerInfoFormValues) => void;
  }
  interface CareerInfo {
    careerHistory: CareerHistory;
    deleteData: (string) => void;
    updateData: (careerData: CareerInfoFormValues) => void;
  }
  interface IsAddFormOpenState {
    isAddFormOpen: boolean;
    setIsAddFormOpen: Dispatch<SetStateAction<boolean>>;
  }
  interface IsEditFormOpenState {
    isEditFormOpen: boolean;
    setIsEditFormOpen: Dispatch<SetStateAction<boolean>>;
  }
  interface EditComponentIdState {
    editComponentId: number;
    setEditComponentId: Dispatch<SetStateAction<number>>;
  }
  interface CareerHistoryState {
    careerHistories: CareerHistory[];
    setCareerHistories: Dispatch<SetStateAction<CareerHistory[]>>;
  }
  interface AddOrEditOpenState {
    isAddOrEditOpen: boolean;
    setAddOrEditOpen: Dispatch<SetStateAction<boolean>>;
  }
  interface SaveInitiatedState {
    saveInitiated: boolean;
    setSaveInitiated: Dispatch<SetStateAction<boolean>>;
  }
  interface CancelHandlers {
    onCancelHandlerAdd: () => void;
    onCancelHandlerEdit: () => void;
  }

  type Context = IsAddFormOpenState &
    IsEditFormOpenState &
    EditComponentIdState &
    SaveInitiatedState &
    CancelHandlers;

  interface IProps {
    setIsAddOrEditFormOpen?: Dispatch<SetStateAction<boolean>>;
    titleStyleName?: keyof DjobsTheme.DjobsText;
    gradient?: boolean;
  }
}

export { CareerHistoryProps };
