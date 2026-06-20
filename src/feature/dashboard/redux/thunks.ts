import { createAsyncThunk } from "@reduxjs/toolkit";
import { DashboardService } from "../service";


export const getDashboardThunks = createAsyncThunk(
    "dashboard/getDashboardThunk",
    async(_,{rejectWithValue})=>{
        try {
      const response = await DashboardService()

      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || error.message
      );
    }
    }
)