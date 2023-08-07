import { SearchedJobsList } from "@Redux/slices/SearchedJobsList/SearchedJobsList";

declare namespace ApplicationStepperFormProps {
  //Step-1
  interface UserDetailsFields {
    first_name: string;
    last_name: string;
    country: string;
    city: string;
    dob_day: number;
    dob_month: string;
    dob_year: number;
  }

  //Step-2
  type fileData = {
    id: string;
    name: string;
    size: string;
    uploaded_on: string;
    type: string;
  };
  type UploadedfileList = fileData[];
  interface UploadedFilesData {
    selectedFileId: any;
  }

  //Step-3

  interface Option {
    label: string;
    value: string;
  }
  type Options = Option[];

  //Step-4
  interface ReviewInfoStepNumber {
    stepNumber: 1 | 2;
  }
  interface Context {
    stepNumber: number;
    setStepNumber: Dispatch<SetStateAction<number>>;

    UploadedFilesId: stirng;
    setUploadedFilesId: Dispatch<SetStateAction<stirng>>;

    QuestionairreFields: QuestionairreFields;
    setQuestionairreFields: Dispatch<SetStateAction<QuestionairreFields>>;

    applyJobData: SearchedJobsList.ApplyJobData;
  }
}

export { ApplicationStepperFormProps };
