import { configureStore } from "@reduxjs/toolkit";
import { adminQueries } from "../features/admin";
import { newsQueries } from "../features/news";
import { eventQueries } from "../features/events";
import { messageQueries } from "../features/messages";

export const store = configureStore({
    reducer:{
        [adminQueries.reducerPath]:adminQueries.reducer,
        [newsQueries.reducerPath]:newsQueries.reducer,
        [eventQueries.reducerPath]:eventQueries.reducer,
        [messageQueries.reducerPath]:messageQueries.reducer
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(adminQueries.middleware, newsQueries.middleware, eventQueries.middleware, messageQueries.middleware)
})