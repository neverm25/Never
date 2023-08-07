import { UploadFile } from "antd/lib/upload/interface";

declare namespace CompanyProfileProps {
  export interface InputFields {
    companyDisplayName: string;
    locations: string;
    CompanySize: string;
    companyBio: string;
    companyDescription: string;
  }

  export interface PhotoElement {
    title: string;
    caption: string;
    uploadedContent?: string;
    fileContent: string;
    fileObject: UploadFile | undefined;
  }
  export type photoGallery = PhotoElement[];
  export type modalType = "add" | "edit";

  export interface CompanyProfileContextProps {
    coverImage: string;
    setCoverImage: Dispatch<SetStateAction<string>>;
    companyLogo: string;
    setCompanyLogo: Dispatch<SetStateAction<string>>;
    formFields: InputFields;
    setFormFields: Dispatch<SetStateAction<InputFields>>;
    photoGallery: photoGallery;
    setPhotoGallery: Dispatch<SetStateAction<photoGallery>>;
    showModal: boolean;
    setShowModal: Dispatch<SetStateAction<boolean>>;
    modalType: modalType;
    setModalType: Dispatch<SetStateAction<modalType>>;
  }

  export interface PhotoGalleryContextProps {
    selectedIndex: number;
    setSelectedIndex: Dispatch<SetStateAction<number>>;
  }
  export type PhotoGalleryElement = {
    PhotoElement: PhotoElement;
    currentIndex: number;
  };
  export type UploadModalForm = {
    handleSubmit: (values: PhotoElement) => void;
    handleCancel: () => void;
    initialValues: PhotoElement;
    setFileContent: Dispatch<SetStateAction<string>>;
    setFileObject: Dispatch<SetStateAction<UploadFile>>;
  };
  export type uploadButtonFieldProps = {
    fileContent: string;
    setFileContent: React.Dispatch<React.SetStateAction<string>>;
    fileObject: UploadFile<any>;
    setFileObject: React.Dispatch<React.SetStateAction<UploadFile<any>>>;
  };
}
export { CompanyProfileProps };
