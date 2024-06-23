// const BASE_URL = "https://surucucvbackend.onrender.com/api/v1";
const BASE_URL = process.env.REACT_APP_BASE_URL

//AUTH ENDPOINTS
export const endpoints = {
    // SENDOTP_API: BASE_URL + "/auth/sendotp",
    SIGNUP_API: "http://localhost:1200/api/v1/auth/signup",
    LOGIN_API: "http://localhost:1200/api/v1/auth/login",
    // SIGNUP_API: "https://surucucvbackend.onrender.com/api/v1/auth/signup",
    // LOGIN_API: "https://surucucvbackend.onrender.com/api/v1/auth/login",
    // RESETPASSTOKEN_API: BASE_URL + "/auth/reset-password-token",
    // RESETPASSWORD_API: BASE_URL + "/auth/reset-password"
}

//PROFILE ENDPOINTS
export const profileEndpoints = {
    //admin
    GET_ADMIN_DETAILS_API: BASE_URL + "/adminProfile/getAdminDetails",
    
    
    
    
    //company
    GET_COMPANY_DETAILS_API: BASE_URL + "/companyProfile/getCompanyDetails",




    //candidate
    GET_CANDIDATE_DETAILS_API: BASE_URL + "/candidateProfile/getCandidateDetails",

}

// SETTINGS PAGE API
export const settingsEndpoints = {
    UPDATE_ADMIN_DISPLAY_PICTURE_API: BASE_URL + "/adminProfile/updateDisplayPicture",
    UPDATE_COMPANY_DISPLAY_PICTURE_API: BASE_URL + "/companyProfile/updateDisplayPicture",
    UPDATE_CANDIDATE_DISPLAY_PICTURE_API: BASE_URL + "/candidateProfile/updateDisplayPicture",

    UPDATE_ADMIN_PROFILE_API: BASE_URL + "/adminProfile/updateAdminProfile",
    UPDATE_COMPANY_PROFILE_API: BASE_URL + "/companyProfile/updateCompanyProfile",
    UPDATE_CANDIDATE_PROFILE_API: BASE_URL + "/candidateProfile/updateCandidateProfile",

    // CHANGE_PASSWORD_API: BASE_URL + "/auth/changepassword",
    // DELETE_PROFILE_API: BASE_URL + "/profile/deleteProfile",
}


// SERVICES ENDPOINTS
export const serviceEndpoints = {
    SERVICE_DETAILS_API : BASE_URL + "/service/getServiceDetails",
    CREATE_SERVICE_API : BASE_URL + "/service/createService",
    EDIT_SERVICE_API : BASE_URL + "/service/editService",
    GET_ALL_SERVICES_API : BASE_URL + "/service/showAllServices",
    DELETE_SERVICE_API : BASE_URL + "/service/deleteService",
    UPDATE_SERVICE_STATUS_API: BASE_URL + "/service/updateServiceStatus",
    ACTIVE_SERVICES_API: BASE_URL + "/service/getActiveServices",
}
//SECTOR ENDPOINTS
export const sectorEndpoints = {
    CREATE_SECTOR_API : BASE_URL + "/sector/createSector",
    GET_ALL_SECTORS_API : BASE_URL + "/sector/showAllSectors",
    UPDATE_SECTOR_STATUS_API : BASE_URL + "/sector/updateSectorStatus",
    EDIT_SECTOR_API : BASE_URL + "/sector/editSector",
    DELETE_SECTOR_API : BASE_URL + "/sector/deleteSector",
}

//JOBS ENDPOINTS
export const jobEndpoints = {
    CREATE_JOB_API : BASE_URL + "/job/createJob",
    GET_ALL_JOBS : BASE_URL + "/job/showAllJobs",
    JOB_DETAILS_API : BASE_URL + "/job/getJobDetails",
    UPDATE_JOB_POST_API : BASE_URL + "/job/editJob",
    DELETE_JOB_POST_API : BASE_URL + "/job/deleteJob",
    APPLY_FOR_JOB_API: BASE_URL + "/job/applyForJob",
    GET_APPLIED_JOBS : BASE_URL + "/job/showAppliedJobs",
    GET_ALL_APPROVED_JOBS : BASE_URL + "/job/getAllApprovedJobPosts",
    UPDATE_JOB_STATUS_API : BASE_URL + "/job/approveAJobPost",
    GET_APPLIED_CANDIDATES_API : BASE_URL + "/job/showAppliedCandidates",
    GET_TOP_JOB_POSTINGS_API : BASE_URL + "/job/getTopJobPostings", 
    GET_TOP_JOB_LOCATIONS_API : BASE_URL + "/job/topJobLocations",
    GET_SEARCHED_JOBS_API : BASE_URL + "/job/searchJobs",
    GET_RECENTLY_PUBLISHED_JOBS_API : BASE_URL + "/job/recentlyPublishedJobs",
    GET_FULL_TIME_JOBS_API : BASE_URL + "/job/fullTimeJobs",
    GET_PART_TIME_JOBS_API : BASE_URL + "/job/partTimeJobs",
    GET_INTERNATIONAL_JOBS_API : BASE_URL + "/job/internationalJobs",
    FILTER_JOBS_API : BASE_URL + "/job/filterJobs",
}

export const resumeEndpoints = {
    CREATE_RESUME_API : BASE_URL + "/resume/createResume",
    GET_RESUME_DETAILS_API : BASE_URL + "/resume/getResumeDetails",
    UPDATE_RESUME_API : BASE_URL + "/resume/editResume"
}