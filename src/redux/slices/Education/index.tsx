import { EducationAPI } from "@API";
import { EducationHistoryProps } from "@DJobs/Components/Common/EducationHistory/EducationHistory";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState: {
  educationData: EducationHistoryProps.EducationHistory[];
} = {
  educationData: [],
};

export const fetchEducationDataThunk = createAsyncThunk(
  "education/fetchEducationDataThunk",
  () => {
    return EducationAPI.getEducation().then(response => response.data);
  }
);
export const addEducationDataThunk = createAsyncThunk(
  "education/addEducationDataThunk",
  (data: EducationHistoryProps.EducationHistory) => {
    return EducationAPI.postEducation(data)
      .then(response => response.data)
      .catch(error => console.log("Error", error));
  }
);
export const deleteEducationDataThunk = createAsyncThunk(
  "education/deleteEducationDataThunk",
  (id: number) => {
    return EducationAPI.deleteEducation(id)
      .then(_response => id)
      .catch(error => console.log("Error", error));
  }
);
export const updateEducationDataThunk = createAsyncThunk(
  "education/updateEducationDataThunk",
  (data: { id: number; raw: EducationHistoryProps.EducationHistory }) => {
    return EducationAPI.updateEducation(data.id, data.raw)
      .then(response => response.data)
      .catch(error => console.log("Error", error));
  }
);

const educationSlice = createSlice({
  name: "education",
  initialState,
  reducers: {
    setClearEducation: () => {
      return initialState;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchEducationDataThunk.fulfilled, (state, action) => {
        state.educationData = action.payload;
      })
      .addCase(fetchEducationDataThunk.rejected, state => {
        state.educationData = [];
      });
  },
});

export const educationActions = educationSlice.actions;
export const educationReducer = educationSlice.reducer;
