import React, { createContext, useContext } from "react";
import { Button } from "@Global/Components/Basic";

import { theme } from "@Global/Theme";
import { UploadImageIconPlus } from "@Global/Components/Icons";
import { UploadModal } from "./Components/UploadModal";
import { PhotoGalleryElement } from "./Components/PhotoGalleryElements";
import { CompanyProfileProps } from "../../../../CompanyProfile";
import { CompanyProfileContext } from "../../../../Context/CompanyProfileContext";
import {
  PhotoGalleryContainer,
  AddPhotoButtonWrapper,
  PhotoContainer,
  PhotoGalleryTitle,
} from "./Styles/PhotoGalleryStyles";

export const PhotoGalleryContext = createContext(
  {} as CompanyProfileProps.PhotoGalleryContextProps
);

export const PhotoGallery = () => {
  const {
    photoGallery,
    showModal,
    setShowModal,
    modalType,
    setModalType,
  } = useContext(CompanyProfileContext);

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const PhotoGalleryContextProps: CompanyProfileProps.PhotoGalleryContextProps = {
    selectedIndex,
    setSelectedIndex,
  };

  return (
    <PhotoGalleryContext.Provider value={PhotoGalleryContextProps}>
      <PhotoGalleryContainer>
        <PhotoGalleryTitle>{"Photo Gallery"}</PhotoGalleryTitle>
        <PhotoContainer>
          <AddPhotoButtonWrapper>
            <Button
              variant="plain"
              buttonCategory="icon"
              prefixIcon={
                <UploadImageIconPlus color={theme.colors.black90} size={16} />
              }
              onClick={() => {
                setShowModal(true);
                setModalType("add");
              }}
            >
              {"Add Photo"}
            </Button>
          </AddPhotoButtonWrapper>
          {showModal && modalType === "add" && <UploadModal />}
          {photoGallery.map((photoElementProps, index) => (
            <PhotoGalleryElement
              key={photoElementProps.title}
              PhotoElement={photoElementProps}
              currentIndex={index}
            />
          ))}
        </PhotoContainer>
      </PhotoGalleryContainer>
    </PhotoGalleryContext.Provider>
  );
};
