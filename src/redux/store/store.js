import { configureStore } from "@reduxjs/toolkit";
import post from "../slices/posts/postSlices";
import usersReducer from "../slices/users/usersSlice";


const store = configureStore({
  reducer: {
    users: usersReducer,
    post,
  },
});

export default store;
