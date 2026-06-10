import { createSlice } from "@reduxjs/toolkit"

const initialState= {
    data:[],
}

const dashboardslice = createSlice({
    name:"dashboard",
    initialState,
    reducers:{},
    extraReducers(builder) {
        
    },
})

export default dashboardslice.reducer