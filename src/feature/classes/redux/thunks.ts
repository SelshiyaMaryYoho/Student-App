import { createAsyncThunk } from "@reduxjs/toolkit";
import { getTodayClassService } from "../service";


export const getTodayclassThunks = createAsyncThunk(
    "classes/getTodayClassThunks",
    async (classtype:string, { rejectWithValue }) => {
        try {
            const response = await getTodayClassService(classtype)

            return response.data;
        } catch (error) {
            return rejectWithValue(
                error.response?.data || error.message
            );
        }
    }
)