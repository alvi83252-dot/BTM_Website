import { configureStore } from "@reduxjs/toolkit"; // import redux store creator    
import { contentApi } from "../services/contentApi"; // import RTK Query API slice

// create and configure the Redux store
export const store = configureStore({
  reducer: { // register reducers 
    [contentApi.reducerPath]: contentApi.reducer, // add RTK Query reducer 
    },
    middleware: (getDefaultMiddleware) => // add RTK query middleware
        getDefaultMiddleware().concat(contentApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>; // type for global state 
export type AppDispatch = typeof store.dispatch; // type for dispatch function