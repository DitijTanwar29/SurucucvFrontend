import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice";
import profileReducer from "../slices/profileSlice";
import serviceReducer from "../slices/serviceSlice";
import jobReducer from "../slices/jobPostSlice"
import sectorReducer from "../slices/sectorSlice"
import packageReducer from "../slices/packageSlice"
const rootReducer = combineReducers({
    auth: authReducer,
    profile: profileReducer,
    service: serviceReducer,
    job: jobReducer,
    sector: sectorReducer,
    package:packageReducer,
})

export default rootReducer;