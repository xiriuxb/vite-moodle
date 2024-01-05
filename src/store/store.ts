import { configureStore } from "@reduxjs/toolkit";
import { navSlice } from "./nav/nav.slice";

export const store = configureStore({
    reducer:{
        nav:navSlice.reducer,
    },
    middleware: (curryGetDefaultMiddleware) => curryGetDefaultMiddleware({serializableCheck:false}),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;