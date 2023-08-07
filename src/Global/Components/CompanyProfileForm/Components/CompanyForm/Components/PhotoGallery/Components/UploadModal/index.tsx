import React, { useContext, useState } from "react";

import { CompanyProfileProps } from "../../../../../../CompanyProfile";
import { UploadModalForm } from "./Components/UploadModalForm";
import { CompanyProfileContext } from "../../../../../../Context/CompanyProfileContext";
import { ModalContainer, Title } from "./Styles/UploadModalStyles";

type UploadModalProps = { currentIndex?: number };

export const UploadModal = ({ currentIndex }: UploadModalProps) => {
  const { photoGallery, setPhotoGallery, setShowModal, modalType } = useContext(
    CompanyProfileContext
  );

  //Initial Values
  const initialValues_Add = {} as CompanyProfileProps.PhotoElement;
  const initialValues_Edit = { ...photoGallery[currentIndex || 0] };
  const initialValues =
    modalType === "add" ? initialValues_Add : initialValues_Edit;

  const [fileContent, setFileContent] = useState(initialValues.fileContent);
  const [fileObject, setFileObject] = useState(initialValues.fileObject);

  //Submit Handler
  const handleSubmit_Add = (values: CompanyProfileProps.PhotoElement) => {
    const { title, caption, uploadedContent } = values;
    const newPhoto = {
      title,
      caption,
      fileContent,
      fileObject,
      uploadedContent,
    };
    const newPhotoGallery = photoGallery.concat(newPhoto);

    setPhotoGallery(newPhotoGallery);
    setShowModal(false);
  };
  const handleSubmit_Edit = (values: CompanyProfileProps.PhotoElement) => {
    const { title, caption, uploadedContent } = values;
    const newPhoto = {
      title,
      caption,
      fileContent,
      fileObject,
      uploadedContent,
    };

    if (currentIndex === undefined) throw new Error("Selected item is invalid");

    const newphotoGallery = [...photoGallery];
    newphotoGallery[currentIndex] = newPhoto;
    setPhotoGallery(newphotoGallery);
    setShowModal(false);
  };
  const handleSubmit =
    modalType === "add" ? handleSubmit_Add : handleSubmit_Edit;

  //Cancel handler
  const handleCancel_Add = () => {
    setShowModal(false);
  };
  const handleCancel_Edit = () => {
    setShowModal(false);
  };
  const handleCancel =
    modalType === "add" ? handleCancel_Add : handleCancel_Edit;

  const UploadModalFormProps: CompanyProfileProps.UploadModalForm = {
    handleCancel,
    handleSubmit,
    initialValues,
    setFileContent,
    setFileObject,
  };
  return (
    <ModalContainer>
      <Title>{"Upload Photo"}</Title>
      <UploadModalForm {...UploadModalFormProps} />
    </ModalContainer>
  );
};
