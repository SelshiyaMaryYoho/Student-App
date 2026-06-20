import { configureStore } from "@reduxjs/toolkit"
import dashboard from '../feature/dashboard/redux/slice'
import profile from '../feature/profile/reducer/slice'
const store = configureStore({
    reducer:{
        dashboard,
         profile,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware(),
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch