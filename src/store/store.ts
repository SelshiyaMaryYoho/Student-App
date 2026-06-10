import { configureStore } from "@reduxjs/toolkit"
import dashboard from '../feature/dashboard/redux/slice'

const store = configureStore({
    reducer:{
        dashboard,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware(),
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch