import * as React from "react";

import { CoverImage } from "./Components/CoverImage";
import { CompanyForm } from "./Components/CompanyForm";
import { CompanyLogo } from "./Components/CompanyLogo";
import { CompanyProfileProps } from "./CompanyProfile";
import { CompanyProfileContext } from "./Context/CompanyProfileContext";
import { CompanyProfileContainer } from "./Styles/CompanyProfileFormStyles";

export const CompanyProfileForm = () => {
  const [coverImage, setCoverImage] = React.useState("");
  const [companyLogo, setCompanyLogo] = React.useState("");
  const [formFields, setFormFields] = React.useState(
    {} as CompanyProfileProps.InputFields
  );
  const [photoGallery, setPhotoGallery] = React.useState(
    [] as CompanyProfileProps.photoGallery
  );
  const [showModal, setShowModal] = React.useState(false);
  const [modalType, setModalType] = React.useState(
    "add" as CompanyProfileProps.modalType
  );

  const companyProfileStateManagementProps: CompanyProfileProps.CompanyProfileContextProps = {
    coverImage,
    setCoverImage,
    companyLogo,
    setCompanyLogo,
    formFields,
    setFormFields,
    photoGallery,
    setPhotoGallery,
    showModal,
    setShowModal,
    modalType,
    setModalType,
  };

  return (
    <CompanyProfileContext.Provider value={companyProfileStateManagementProps}>
      <CompanyProfileContainer>
        <CoverImage />
        <CompanyLogo />
        <CompanyForm />
      </CompanyProfileContainer>
    </CompanyProfileContext.Provider>
  );
};
