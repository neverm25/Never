import { DjobsTheme } from "@DJobs/Theme/styled";

declare namespace EducationHistoryProps {
  interface EducationInfoFormValues {
    qualification: string;
    institution: string;
    startedFrom_month: string;
    startedFrom_year: number;
    studiedTill_month: string;
    studiedTill_year: number;
    description: string;
  }
  interface EducationHistory {
    id?: number;
    qualification: string;
    institution: string;
    year_from: number;
    year_to: number;
    description: string;
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
  interface EducationHistoryState {
    educationHistories: EducationHistory[];
    setEducationHistories: Dispatch<SetStateAction<EducationHistory[]>>;
  }
  interface EducationInfo {
    educationHistory: EducationHistory;
    deleteData: (string) => void;
    updateData: (educationData: EducationInfoFormValues) => void;
  }
  interface EducationInfoFormAddProps {
    createEducationData: (educationData: EducationInfoFormValues) => void;
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

export { EducationHistoryProps };
