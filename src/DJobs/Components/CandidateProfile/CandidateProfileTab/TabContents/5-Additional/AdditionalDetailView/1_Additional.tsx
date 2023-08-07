import React from "react";
// import moment from "moment";

import { AdditionalDetailEntry } from "./AdditionalDetailEntry";
import { AdditionalDetailHeader } from "./AdditionalDetailHeader";
import { Column, DataContainer } from "../Styles/AdditionalStyle";
import { monthsShortName } from "@Helpers/DateHelpers";
import { useAppSelector } from "@Redux";
import { driverLicenceData, nationalityData } from "../Utils";
import { CountryHelpers } from "@Helpers/CountryHelpers";

export const AdditionalView = () => {
  const AddtionalData = useAppSelector(state => state.candidateDetails);
  const {
    alternate_phone,
    citizenship,
    is_disabled,
    dob_year,
    dob_month,
    dob_day,
    disabled_description,
    drivers_licence_code,
    idnumber,
    nationality,
    passport_number,
    work_permit,
    notice_period,
    willing_to_relocate,
    own_transport,
    current_remuneration,
    desired_remuneration,
  } = AddtionalData;

  return (
    <React.Fragment>
      <AdditionalDetailHeader />
      <DataContainer>
        <Column>
          <AdditionalDetailEntry
            label="Nationality"
            value={
              nationality
                ? nationalityData.find(
                    data => data.value === Number(nationality)
                  )?.label
                : ""
            }
          />
          <AdditionalDetailEntry
            label="ID Number"
            value={idnumber ? idnumber : ""}
          />
          <AdditionalDetailEntry
            label="Passport Number"
            value={passport_number ? passport_number : ""}
          />
          <AdditionalDetailEntry
            label="Work Permit"
            value={work_permit ? work_permit : ""}
          />
          <AdditionalDetailEntry
            label="Notice Period"
            value={notice_period ? notice_period : ""}
          />
          <AdditionalDetailEntry
            label="Willing To Relocate"
            value={willing_to_relocate ? "Yes" : "No"}
          />
          <AdditionalDetailEntry
            label="Own Transport"
            value={own_transport ? "Yes" : "No"}
          />
        </Column>
        <Column>
          <AdditionalDetailEntry
            label="Alternate Number"
            value={alternate_phone ? alternate_phone.toString() : ""}
          />
          <AdditionalDetailEntry
            label="Citizenship"
            value={
              citizenship
                ? CountryHelpers.CountryList.find(
                    data => data.code === citizenship
                  )?.name
                : ""
            }
          />
          <AdditionalDetailEntry
            label="Date of Birth"
            value={
              dob_day && dob_month && dob_year
                ? dob_day +
                  " " +
                  monthsShortName[Number(dob_month) - 1] +
                  " " +
                  dob_year
                : ""
            }
          />
          <AdditionalDetailEntry
            label="Driver’s License"
            value={
              drivers_licence_code
                ? driverLicenceData.find(
                    data => data.value === drivers_licence_code
                  ).label
                : ""
            }
          />
          <AdditionalDetailEntry
            label="Current Monthly Remuneration"
            value={current_remuneration ? current_remuneration?.toString() : ""}
          />
          <AdditionalDetailEntry
            label="Desired Monthly Remuneration"
            value={desired_remuneration ? desired_remuneration?.toString() : ""}
          />
          {is_disabled && (
            <AdditionalDetailEntry
              label="Disability"
              value={disabled_description ? disabled_description : ""}
            />
          )}
        </Column>
      </DataContainer>
    </React.Fragment>
  );
};
