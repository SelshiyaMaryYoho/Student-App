import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GetProfileService } from "../service";

export const fetchProfile = createAsyncThunk(
  "profile/fetchProfile",
  async (uuid: string) => {
    const response = await GetProfileService(uuid);
    return response.data;
  }
);

interface ProfileState {
  loading: boolean;
  data: any;
  error: string | null;
}

const initialState: ProfileState = {
  loading: false,
  data: null,
  error: null,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder

      .addCase(fetchProfile.pending, (state) => {
        state.loading = true;
      })

      .addCase(fetchProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })

      .addCase(fetchProfile.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to fetch profile";
      });
  },
});

export default profileSlice.reducer;