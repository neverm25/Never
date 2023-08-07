import { FilesUploadAPI } from "@API";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  filesData: [],
};

export const fetchFilesListThunk = createAsyncThunk(
  "files/fetchFilesListThunk",
  () => {
    return FilesUploadAPI.getFiles()
      .then(response => {
        return response.data;
      })
      .catch(error => console.log("Error", error));
  }
);

export const uploadFileThunk = createAsyncThunk(
  "files/uploadFileThunk",
  (data: FormData) => {
    return FilesUploadAPI.postFiles(data)
      .then(response => {
        return response.data;
      })
      .catch(error => console.log("Error", error));
  }
);

export const deleteFileFromListThunk = createAsyncThunk(
  "files/deleteFileFromListThunk",
  (id: string) => {
    return FilesUploadAPI.deleteFiles(id)
      .then(_response => id)
      .catch(error => console.log("Error", error));
  }
);

const careerSlice = createSlice({
  name: "files",
  initialState,
  reducers: {
    setClearFiles: () => {
      return initialState;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchFilesListThunk.fulfilled, (state, action) => {
      state.filesData = action.payload;
    });
  },
});

export const filesUploadedActions = careerSlice.actions;
export const filesUploadedReducer = careerSlice.reducer;
