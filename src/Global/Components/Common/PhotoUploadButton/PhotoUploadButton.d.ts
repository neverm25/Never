import { UploadChangeParam } from "antd/lib/upload";

declare namespace PhotoUploadButtonProps {
  export interface uploadedFileState {
    fileContent: string;
    setFileContent: Dispatch<SetStateAction<string>>;
  }
  export interface uploadedFileObjectState {
    fileObject?: UploadFile;
    setFileObject?: Dispatch<SetStateAction<UploadFile>>;
  }
  export interface uploadProps {
    modalTitle: string;
    showFileList: boolean;
    disabled?: boolean;
    buttonName?: string;
    aspectWidth?: number;
    aspectHeight?: number;
    children?: JSX.Element;
    allowDragAndDrop?: boolean;
    onFileUpload?: (UploadFile: UploadFile) => void;
  }
  export interface formikFieldProps {
    fieldName?: string;
    fieldError?: string;
    fieldTouched?: boolean;
    setFieldError?: (field: string, message: string) => void;
    setFieldValue?: (
      field: string,
      value: any,
      shouldValidate?: boolean
    ) => void;
    setFieldTouched?: (
      field: string,
      isTouched?: boolean,
      shouldValidate?: boolean
    ) => void;
  }

  export type Button = uploadedFileState &
    uploadedFileObjectState &
    uploadProps & { formikProps?: formikFieldProps };

  export type ImgCropProps = {
    modalTitle: string | undefined;
    aspect: number;
    showGrid: boolean;
    beforeCrop:
      | ((file: File, fileList: File[]) => boolean | Promise<boolean>)
      | undefined;
  };
}
export { PhotoUploadButtonProps };
