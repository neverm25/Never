import { CareerAPI } from "@API";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Career } from "./Career";

const initialState: Career.State = {
  careerList: [],
};

export const fetchCareerDataThunk = createAsyncThunk(
  "career/fetchCareerData",
  () => CareerAPI.getCareer().then(response => response.data)
);

export const addCareerDataThunk = createAsyncThunk(
  "career/addCareerData",
  (data: Career.CareerHistory) =>
    CareerAPI.postCareer(data)
      .then(response => response.data)
      .catch(error => console.log("Error", error))
);

export const deleteCareerDataThunk = createAsyncThunk(
  "career/deleteCareerData",
  (id: string) =>
    CareerAPI.deleteCareer(id)
      .then(_response => id)
      .catch(error => console.log("Error", error))
);
export const updateCareerThunk = createAsyncThunk(
  "career/updateCareer",
  (data: { id: string; raw: Career.CareerHistory }) =>
    CareerAPI.updateCareer(data.id, data.raw)
      .then(response => response.data)
      .catch(error => console.log("Error", error))
);

const careerSlice = createSlice({
  name: "career",
  initialState,
  reducers: {
    setClearCareer: () => initialState,
  },
  extraReducers: builder => {
    builder.addCase(fetchCareerDataThunk.fulfilled, (state, action) => {
      state.careerList = action.payload;
    });
    builder.addCase(fetchCareerDataThunk.rejected, state => {
      state.careerList = [];
    });
  },
});

export const careerActions = careerSlice.actions;
export const careerReducer = careerSlice.reducer;
