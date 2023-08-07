declare namespace AdditionalProps {
  interface AdditionalInfoFormValues {
    alternate_phone: string;
    dob_day: string;
    dob_month: stirng;
    dob_year: string;
    dateOfBirth?: string;
    nationality: number;
    citizenship: string;
    idnumber: string;
    work_permit: string;
    passport_number: string;
    drivers_licence_code: string;
    drivers_licence: boolean;
    is_disabled: boolean;
    disabled_description: string;
    notice_period: string;
    current_remuneration: number;
    desired_remuneration: number;
    own_transport: boolean;
    willing_to_relocate: boolean;
  }

  interface EditModeState {
    IsEditMode: boolean;
    setIsEditMode: Dispatch<SetStateAction<boolean>>;
  }
  interface AdditionalInfoFormValuesState {
    AdditionalInfoFormValues: AdditionalInfoFormValues;
    setAdditionalInfoFormValues: Dispatch<
      SetStateAction<AdditionalInfoFormValues>
    >;
  }

  type Context = EditModeState & {
    onSubmitHandler: (values: AdditionalInfoFormValues) => void;
  };
}

export { AdditionalProps };
