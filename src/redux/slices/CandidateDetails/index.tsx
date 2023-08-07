import { ProfilePhotoAPI } from "@API";
import { CandidateSettingsApi } from "@API/CandidateSettings";
import { CandidateDetails } from "@API/CandidateDetails";
import { IEmailUpdatesProps } from "@DJobs/Components/CandidateSettings/Components/MySettings/Components/SettingOptions/Components/EmailUpdates/EmailUpdates";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { CandidateDetailsProps } from "./CandidateDetails";

const candidateData: CandidateDetailsProps.State = {
  //Personal
  first_name: "",
  last_name: "",
  phone: "",
  email: "",
  city: "",
  city_name: "",
  city_name_country: "",
  //Additional
  alternate_phone: "",
  nationality: -1,
  dob_day: "",
  dob_month: "",
  dob_year: "",
  idnumber: "",
  citizenship: "",
  passport_number: "",
  is_disabled: false,
  disabled_description: "",
  //Work
  notice_period: "",
  drivers_licence: false,
  drivers_licence_code: "",
  willing_to_relocate: false,
  own_transport: false,
  work_permit: "",
  current_remuneration: -1,
  current_remuneration_type: -1,
  desired_remuneration: -1,
  desired_remuneration_type: -1,
  //Candidate overview
  country: "",
  photo: null,
  bio: "",
  job_recommendations: [],
  job_applications: {},

  preferred_name: "",
  confirmed: false,
  gender: "",
  is_client: false,
  race_id: -1,
  is_sa_id: false,
  address1: "",
  address2: "",
  suburb: "",
  province: "",
  postal_code: "",
  marital_status: "",
  employment_equity: false,
  should_parse: false,
  social_facebook: "",
  social_behance: "",
  social_instagram: "",
  social_linkedin: "",
  social_youtube: "",
  social_vimeo: "",
  social_twitter: "",
  social_github: "",
  social_flickr: "",
  social_skype: "",
  date_created: "",
  date_updated: "",
  date_deleted: "",
  email_updates: false,
  email_job_alerts: false,
  email_company_news: false,
};

export const getCandidateData = createAsyncThunk(
  "candidate/getCandidateData",
  () =>
    CandidateDetails.getCandidateData()
      .then(response => response.data)
      .catch(error => console.log("Error in getCandidateData", error))
);
export const getCandidateOverview = createAsyncThunk(
  "candidate/getCandidateOverview",
  () =>
    CandidateDetails.getCandidateOverview()
      .then(response => response.data)
      .catch(error => console.log("Error in getCandidateOverview", error))
);
export const updateCandidateData = createAsyncThunk(
  "candidate/updateCandidatelData",
  (raw: any) =>
    CandidateDetails.updateCandidateData(raw)
      .then(response => response.data)
      .catch(error => console.log("Error", error))
);
export const updateCandidatePhoto = createAsyncThunk(
  "candidate/updateCandidatePhoto",
  (raw: any) =>
    ProfilePhotoAPI.uploadFile(raw)
      .then(response => response.data)
      .catch(error => console.log("Error", error))
);
export const fetchEmailUpdateThunk = createAsyncThunk(
  "email-update/fetchEmailUpdateThunk",
  (data: IEmailUpdatesProps.state, { rejectWithValue }) => {
    return CandidateSettingsApi.getEmailUpdate(data)
      .then(response => response.data)
      .catch(error => rejectWithValue(error));
  }
);

const getPhoto = (photo: string) =>
  photo ? process.env.NEXT_PUBLIC_TS_FILES + photo : null;

const candidateDetailsSlice = createSlice({
  name: "newCandidate",
  initialState: candidateData,
  reducers: {
    setClearCandidate: () => ({ ...candidateData }),
    setJobApplications: (
      state,
      action: CandidateDetailsProps.setJobApplications
    ) => {
      state.job_applications = action.payload || [];
    },
  },
  extraReducers: builder => {
    builder.addCase(getCandidateData.fulfilled, (state, action) => ({
      ...state,
      ...action.payload,
      photo: getPhoto(action.payload?.photo),
    }));
    builder.addCase(getCandidateOverview.fulfilled, (state, action) => ({
      ...state,
      ...action.payload,
      photo: getPhoto(action.payload?.photo),
    }));
    builder.addCase(updateCandidateData.fulfilled, (state, action) => ({
      ...state,
      ...action.payload,
      photo: getPhoto(action.payload?.photo),
    }));
    builder.addCase(updateCandidatePhoto.fulfilled, (state, action) => ({
      ...state,
      photo: getPhoto(action.payload?.photo),
    }));
    builder.addCase(fetchEmailUpdateThunk.fulfilled, (state, action) => ({
      ...state,
      ...action.payload,
    }));
  },
});

export const candidateDetailsActions = candidateDetailsSlice.actions;
export const candidateDetailsReducer = candidateDetailsSlice.reducer;
