import React, { createContext, useContext, useState } from "react";
import styled from "styled-components";

import { AdditionalDetailsForm } from "./AdditionalForm";
import { AdditionalDetailView } from "./AdditionalDetailView";
import { AdditionalProps } from "./Additional";
import { updateCandidateData } from "@Redux/slices/CandidateDetails";
import { djobsTheme } from "@DJobs/Theme";
import { CandidateProfileContext } from "../..";
import { DeviceTypeHelpers } from "@Helpers/DeviceTypeHelpers";
import { useAppDispatch } from "@Redux";
import { DJobsTypography } from "@DJobs/Components/Basic";

export const AdditionalInfoContext = createContext(
  {} as AdditionalProps.Context
);

export const Additional = () => {
  const [IsEditMode, setIsEditMode] = useState(false);

  const dispatch = useAppDispatch();

  const updateAdditionalData = (
    additionalData: AdditionalProps.AdditionalInfoFormValues
  ) => {
    const raw = {
      nationality:
        typeof additionalData.nationality === "string"
          ? 0
          : additionalData.nationality,
      citizenship: additionalData.citizenship,
      alternate_phone: additionalData.alternate_phone,
      idnumber: additionalData.idnumber,
      passport_number: additionalData.passport_number,
      work_permit: additionalData.work_permit,
      dob_day: additionalData.dateOfBirth.split("/")[0],
      dob_month: additionalData.dateOfBirth.split("/")[1],
      dob_year: additionalData.dateOfBirth.split("/")[2],
      notice_period: additionalData.notice_period,
      own_transport: additionalData.own_transport,
      current_remuneration:
        typeof additionalData.current_remuneration === "string"
          ? 0
          : additionalData.current_remuneration,
      desired_remuneration:
        typeof additionalData.desired_remuneration === "string"
          ? 0
          : additionalData.desired_remuneration,
      drivers_licence: additionalData.drivers_licence,
      drivers_licence_code: additionalData.drivers_licence_code,
      willing_to_relocate: additionalData.willing_to_relocate,
      is_disabled: additionalData.is_disabled,
      disabled_description: additionalData.disabled_description,
    };

    dispatch(updateCandidateData(raw));
  };
  const onSubmitHandler = (
    values: AdditionalProps.AdditionalInfoFormValues
  ) => {
    updateAdditionalData(values);
    setIsEditMode(false);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const additionalInfoContextValue: AdditionalProps.Context = {
    IsEditMode,
    setIsEditMode,
    onSubmitHandler,
  };

  const { deviceType } = useContext(CandidateProfileContext);
  const isMobile = DeviceTypeHelpers.isDeviceIsOrSmall({
    currentDevice: deviceType,
    comparedTo: "mobile",
  });

  return (
    <AdditionalInfoContext.Provider value={additionalInfoContextValue}>
      <Container isMobile={isMobile}>
        <div style={{ marginBottom: "30px" }}>
          <DJobsTypography color="blue100" styleName="djSubTitleOne">
            Additional Information
          </DJobsTypography>
        </div>
        {!IsEditMode ? <AdditionalDetailView /> : <AdditionalDetailsForm />}
      </Container>
    </AdditionalInfoContext.Provider>
  );
};

const Container = styled.div<{ isMobile: boolean }>`
  ${({ isMobile }) =>
    isMobile &&
    `background:${djobsTheme.colors.white100};
    padding:31px 20px 39px 20px;
    box-shadow:${djobsTheme.effects.cardShadow};
    border: 0.658436px solid ${djobsTheme.colors.black10};
    border-radius: 16px 16px 15.8025px 15.8025px;
    `};
`;
