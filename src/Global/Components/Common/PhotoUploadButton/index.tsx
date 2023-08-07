import React from "react";
import styled, { css } from "styled-components";
import { Upload } from "antd";
import ImgCrop from "antd-img-crop";

import { Button } from "@Global/Components/Basic";
import { RcFile, UploadFile, UploadProps } from "antd/lib/upload/interface";
import { UploadChangeParam } from "antd/lib/upload";
import { theme } from "@Global/Theme";
import { EditIcon, UploadImageIconPlus } from "@Global/Components/Icons";
import { PhotoUploadButtonProps } from "./PhotoUploadButton";

export const getBase64StringOfUploadFile = async (
  uploadFile: UploadFile
): Promise<string> => {
  const { url, originFileObj } = uploadFile;
  if (url) return url;
  return await new Promise(resolve => {
    const reader = new FileReader();
    reader.readAsDataURL(originFileObj as Blob);
    reader.onload = () => resolve(reader.result as string);
  });
};
export const getBase64StringOfRCFile = async (
  file: RcFile
): Promise<string> => {
  return await new Promise(resolve => {
    const reader = new FileReader();
    reader.readAsDataURL(file as Blob);
    reader.onload = () => resolve(reader.result as string);
  });
};

export const PhotoUploadButton = (props: PhotoUploadButtonProps.Button) => {
  const {
    buttonName,
    fileContent,
    setFileContent,
    modalTitle,
    fileObject,
    setFileObject,
    showFileList,
    disabled,
    allowDragAndDrop = false,
    onFileUpload,
  } = props;
  const {
    fieldName,
    setFieldTouched,
    setFieldValue,
  } = props as PhotoUploadButtonProps.formikFieldProps;
  const isEdit = fileContent ? true : false;

  const width = props.aspectWidth || 1;
  const height = props.aspectHeight || 1;

  const imgCropProps: PhotoUploadButtonProps.ImgCropProps = {
    aspect: width / height,
    beforeCrop: file => file.size > 0,
    showGrid: false,
    modalTitle,
  };

  const iconProps = { color: theme.colors.black90, size: 16 };
  const defaultFileList = fileObject && [fileObject];
  const buttonIcon = isEdit ? (
    <EditIcon {...iconProps} />
  ) : (
    <UploadImageIconPlus {...iconProps} />
  );

  //#region handlers
  const setTouched = () => {
    if (setFieldTouched) setFieldTouched(fieldName, true);
  };
  const handleChange = (uploadChangeParams: UploadChangeParam) => {
    if (uploadChangeParams.file.status === "done") {
      const fileObject = uploadChangeParams.file;
      getBase64StringOfUploadFile(fileObject).then(value => {
        setFileContent(value ? value : "");
        if (setFileObject) setFileObject(fileObject);
        if (setFieldValue) setFieldValue(fieldName, value ? value : "");
        setTouched();
      });
      onFileUpload(fileObject);
    }
  };
  const handleRemove = () => {
    setFileContent("");
    if (setFileObject) setFileObject("");
    if (setFieldValue) setFieldValue(fieldName, "");
  };
  //#endregion

  const uploadProps: UploadProps = {
    accept: "image/png, image/jpeg",
    listType: "picture",
    name: buttonName,
    onRemove: handleRemove,
    onChange: handleChange,
    maxCount: 1,
    defaultFileList: defaultFileList,
    disabled: disabled,
    action: "/api/health-check",
  };
  const uploadChild = props.children ? (
    props.children
  ) : (
    <Button variant="plain" buttonCategory="icon" prefixIcon={buttonIcon}>
      {buttonName}
    </Button>
  );

  return (
    <Container showFileList={showFileList}>
      <ImgCrop {...imgCropProps} onModalCancel={setTouched}>
        {allowDragAndDrop ? (
          <UploadDragComponent {...uploadProps}>
            {uploadChild}
          </UploadDragComponent>
        ) : (
          <UploadComponent {...uploadProps}>{uploadChild}</UploadComponent>
        )}
      </ImgCrop>
    </Container>
  );
};

const Container = styled.div<{ showFileList: boolean }>`
  .ant-upload {
    width: 100%;
  }
  .ant-upload-list {
    ${({ showFileList }) =>
      showFileList
        ? `position: relative;
    bottom: 10px !important;
    left: 20px;`
        : `display:none;`}
  }
  .ant-upload .ant-upload-btn {
    padding: 0;
  }
`;

const UploadStyle = css`
  position: relative;
  display: flex;
  align-items: start;
  padding: 0;
  background: none !important;
  border: 0 !important;
`;
const UploadDragComponent = styled(Upload.Dragger)`
  ${UploadStyle}
`;
const UploadComponent = styled(Upload)`
  ${UploadStyle}
`;
