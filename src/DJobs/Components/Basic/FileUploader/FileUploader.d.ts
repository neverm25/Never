declare namespace IFileUploader {
  interface FileDataFromAPI {
    id: string;
    mime: string;
    name: string;
    path: string;
    size: number;
    type: string;
    uploaded_on?: string;
  }
  type FilesUploadedByCandidate = FileDataFromAPI[];

  interface SubmittedFileDataFromAPI {
    ats_company_id: number;
    ats_user_id: number;
    file_id: number;
    id: number;
  }
  type FilesSubmittedToCompany = SubmittedFileDataFromAPI[];

  export interface IProps {
    fileList: FilesUploadedByCandidate;
    isProgressBarShown: boolean;
    isStepper?: boolean;
    selectedFileId: string;
    setSelectedFileId: React.Dispatch<setStateAction<string>>;
    progressBar: number;
    setSelectedFileId: Dispatch<setStateAction<string>>;
    deleteFileFromList: (string) => void;
    downloadFileFromList: (string, string) => void;
    uploadFile: (any) => void;
    isLoading: boolean;
    checkSubmitted?: (fileId: string) => boolean;
  }
  export interface IUploadedFilesListProps {
    fileData: FileDataFromAPI;
    selectedFileId: string;
    deleteFileFromList: (deleteFileIndex: string) => void;
    handleSetSelectedFileId: (id: string) => void;
    isStepper?: boolean;
    downloadFileFromList: (fileId: string, fileName: string) => void;
    submitted?: boolean;
  }
}
export { IFileUploader };
