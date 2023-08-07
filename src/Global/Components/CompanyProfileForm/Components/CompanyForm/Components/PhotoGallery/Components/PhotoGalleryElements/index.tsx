import React, { useContext } from "react";
import { toast } from "react-toastify";

import { theme } from "@Global/Theme";
import { DeleteIcon, EditIcon } from "@Global/Components/Icons";
import { CompanyProfileProps } from "../../../../../../CompanyProfile";
import { PhotoGalleryContext } from "../..";
import { UploadModal } from "../UploadModal";
import { CompanyProfileContext } from "@Global/Components/CompanyProfileForm/Context/CompanyProfileContext";
import {
  PhotoContainer,
  Caption,
  CaptionDescription,
  CaptionHeading,
  DeleteButton,
  DescriptionContainer,
  EditButton,
  IconButtonContainer,
  PhotoPreview,
  PhotoPreviewWrapper,
  Title,
  TitleDescription,
  TitleHeading,
} from "./Styles/PhotoGalleryElementStyles";

export const PhotoGalleryElement = (
  props: CompanyProfileProps.PhotoGalleryElement
) => {
  const {
    modalType,
    setModalType,
    showModal,
    setShowModal,
    photoGallery,
    setPhotoGallery,
  } = useContext(CompanyProfileContext);
  const { selectedIndex, setSelectedIndex } = useContext(PhotoGalleryContext);

  const { title, caption, fileContent } = props.PhotoElement;
  const { currentIndex } = props;

  const handleDelete = () => {
    const newPhotoGallery = photoGallery.filter(
      (_, itemIndex) => itemIndex !== currentIndex
    );
    setPhotoGallery(newPhotoGallery);
    toast.error("Photo deleted successfully");
  };
  const handleEdit = () => {
    setSelectedIndex(currentIndex);
    setShowModal(true);
    setModalType("edit");
  };

  return (
    <React.Fragment>
      {showModal && modalType === "edit" && currentIndex === selectedIndex ? (
        <UploadModal currentIndex={currentIndex} />
      ) : (
        <PhotoContainer key={title}>
          <PhotoPreviewWrapper>
            <PhotoPreview alt={title} src={fileContent} width={"100%"} />
          </PhotoPreviewWrapper>
          <DescriptionContainer>
            <Title>
              <TitleHeading>{"Title: "}</TitleHeading>
              <TitleDescription>{title}</TitleDescription>
            </Title>
            <Caption>
              <CaptionHeading>{"Caption: "}</CaptionHeading>
              <CaptionDescription>{caption}</CaptionDescription>
            </Caption>
            <IconButtonContainer>
              <EditButton onClick={handleEdit}>
                <EditIcon size={16} color={theme.colors.black100} />
              </EditButton>
              <DeleteButton onClick={handleDelete}>
                <DeleteIcon size={16} color={theme.colors.red80} />
              </DeleteButton>
            </IconButtonContainer>
          </DescriptionContainer>
        </PhotoContainer>
      )}
    </React.Fragment>
  );
};
