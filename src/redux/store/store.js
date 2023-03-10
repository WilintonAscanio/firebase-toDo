import { configureStore  } from "@reduxjs/toolkit";
import { loadingReducer } from "../reducers/loadingReducer";
import { modalReducer } from "../reducers/modalReducer";
import { taskReducers } from "../reducers/taskReducer";
import { userReducers } from "../reducers/userReducers";

const reducer = {
    user : userReducers,
    loading : loadingReducer,
    modal : modalReducer,
    tasks : taskReducers
}

const store = configureStore({
    reducer,
    devTools: process.env.NODE_ENV !== "production"
})

export default store