import { CompanyType } from "../../../CompanyProfile";
declare namespace UploadCvSectionProps {
  type activeStep = 0 | 1;

  interface FileDataFromAPI {
    id: string;
    mime: string;
    name: string;
    path: string;
    size: number;
    type: string;
  }
  type FileUploadedByCandidate = FileDataFromAPI[];

  interface SubmittedFileDataFromAPI {
    ats_company_id: number;
    ats_user_id: number;
    file_id: number;
    id: number;
  }
  type FilesSubmittedToCompany = SubmittedFileDataFromAPI[];

  interface IProps {
    companyData: CompanyType;
  }
}

export { UploadCvSectionProps };
