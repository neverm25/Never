import instance from "@Axios/axios-user";
import { UpdatePasswordFormFieldsProps } from "@DJobs/Components/CandidateSettings/Components/MySettings/Components/SettingOptions/Components/ResetPassword/Utils/FormFieldsData";
import { DJOBS_API_PATHS } from "@DJobs/DjobsUtils";
import { IEmailUpdatesProps } from "@DJobs/Components/CandidateSettings/Components/MySettings/Components/SettingOptions/Components/EmailUpdates/EmailUpdates";
import { AdvancedOptionsFormFieldProps } from "@DJobs/Components/CandidateSettings/Components/MySettings/Components/SettingOptions/Components/AdvancedOptions/Utils/AdvancedOptions";

const updatePassword = (values: UpdatePasswordFormFieldsProps.Fields) => {
  const formData = new FormData();
  formData.append("current_password", values.currentPassword);
  formData.append("new_password", values.newPassword);
  return instance.put(DJOBS_API_PATHS.updatePassword, formData);
};

const getEmailUpdate = (data: IEmailUpdatesProps.state) => {
  const formdata = new FormData();
  formdata.append("email_updates", String(data.email_updates));
  formdata.append("email_job_alerts", String(data.email_job_alerts));
  formdata.append("email_company_news", String(data.email_company_news));
  return instance.put(DJOBS_API_PATHS.emailUpdate, formdata);
};
const closeAccount = (value: AdvancedOptionsFormFieldProps.Fields) => {
  const formData = new FormData();
  formData.append("current_password", value.currentPassword);
  return instance.delete(DJOBS_API_PATHS.deleteAccount, { data: formData });
};
export const CandidateSettingsApi = {
  closeAccount,
  getEmailUpdate,
  updatePassword,
};
