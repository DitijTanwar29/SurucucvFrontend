import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice";
import profileReducer from "../slices/profileSlice";
import serviceReducer from "../slices/serviceSlice";
import jobReducer from "../slices/jobPostSlice"
import sectorReducer from "../slices/sectorSlice"
import packageReducer from "../slices/packageSlice"
import adsReducer from "../slices/adsSlice";
import notificationReducer from "../slices/notificationSlice";
const rootReducer = combineReducers({
    auth: authReducer,
    profile: profileReducer,
    service: serviceReducer,
    job: jobReducer,
    sector: sectorReducer,
    package:packageReducer,
    ads:adsReducer,
    notifications: notificationReducer
})

export default rootReducer;