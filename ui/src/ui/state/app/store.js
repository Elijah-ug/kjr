import { configureStore } from "@reduxjs/toolkit";
import { adminQueries } from "../features/admin";
import { newsQueries } from "../features/news";
import { eventQueries } from "../features/events";

export const store = configureStore({
    reducer:{
        [adminQueries.reducerPath]:adminQueries.reducer,
        [newsQueries.reducerPath]:newsQueries.reducer,
        [eventQueries.reducerPath]:eventQueries.reducer
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(adminQueries.middleware, newsQueries.middleware, eventQueries.middleware)
})