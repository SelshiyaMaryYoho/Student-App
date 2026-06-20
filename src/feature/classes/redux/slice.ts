import { createSlice } from "@reduxjs/toolkit";
import { getTodayclassThunks } from "./thunks";

const initialState= {
    data:[],
    loading: false,
    error: null,
}

const classslice = createSlice({
    name:"classes",
    initialState,
    reducers:{},
    extraReducers(builder) {
        builder
        .addCase(getTodayclassThunks.pending,(state)=>{
            state.loading = true;
        })
        .addCase(getTodayclassThunks.fulfilled,(state,action)=>{
            state.loading = false;
            state.data = action.payload;
        })
        .addCase(getTodayclassThunks.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.payload as any
        })  
    },
})

export default classslice.reducer