import { configureStore } from "@reduxjs/toolkit"
import classes from '../feature/classes/redux/slice'
import dashboard from '../feature/dashboard/redux/slice'

const store = configureStore({
    reducer:{
        dashboard,
        classes,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware(),
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch