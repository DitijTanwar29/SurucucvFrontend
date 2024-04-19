import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice";
import profileReducer from "../slices/profileSlice";
import serviceReducer from "../slices/serviceSlice";
import jobReducer from "../slices/jobPostSlice"
const rootReducer = combineReducers({
    auth: authReducer,
    profile: profileReducer,
    service: serviceReducer,
    job: jobReducer,
})

export default rootReducer;