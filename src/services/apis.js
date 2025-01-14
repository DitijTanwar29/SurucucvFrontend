// export const BASE_URL = "https://surucucvbackend.onrender.com/api/v1";
export const BASE_URL = "https://surucucvbackend.onrender.com/api/v1"

//AUTH ENDPOINTS
export const endpoints = {
    SENDOTP_API: BASE_URL + "/auth/sendotp",
    SEND_SMS_OTP_API: BASE_URL + "/auth/send-sms-otp",
    SIGNUP_API: BASE_URL + "/auth/signup",
    LOGIN_API: BASE_URL + "/auth/login",
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
    GET_COMPANY_BY_ID: BASE_URL + "/companyProfile/getCompanyById",
    GET_COMPANY_PACKAGES_API: BASE_URL + "/companyProfile/getCompanyPackages",
    UNENROLL_COMPANY_FROM_PACKAGE_API: BASE_URL + "/companyProfile/unenrollCompanyFromPackage",

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
    DELETE_COMPANY_PROFILE_API: BASE_URL + "/companyProfile/deleteAccount",
}


// PACKAGES ENDPOINTS
export const packageEndpoints = {
    PACKAGE_DETAILS_API : BASE_URL + "/package/getPackageDetails",
    CREATE_PACKAGE_API : BASE_URL + "/package/createPackage",
    EDIT_PACKAGE_API : BASE_URL + "/package/updatePackage",
    GET_ALL_PACKAGES_API : BASE_URL + "/package/showAllPackages",
    DELETE_PACKAGE_API : BASE_URL + "/package/deletePackage",
    UPDATE_PACKAGE_STATUS_API: BASE_URL + "/package/updatePackageStatus",
    ACTIVE_PACKAGES_API: BASE_URL + "/package/getActiveSPackage",
    SEND_PAYMENT_APPROVAL_SMS: BASE_URL + "/package/payment-approval-sms",
    GET_COMPANIES_WITH_REQUESTED_STATUS: BASE_URL + "/package/getCompaniesWithRequestedStatus",
    APPROVE_PAYMENT_REQUEST: BASE_URL + "/package/approvePaymentRequest",
    REJECT_PAYMENT_REQUEST: BASE_URL + "/package/rejectPaymentApprovalRequest"

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
    SECTOR_DETAILS_API : BASE_URL + "/sector/getSectorDetails",
    UPDATE_SECTOR_STATUS_API : BASE_URL + "/sector/updateSectorStatus",
    EDIT_SECTOR_API : BASE_URL + "/sector/editSector",
    DELETE_SECTOR_API : BASE_URL + "/sector/deleteSector",
    ACTIVE_SECTORS_API: BASE_URL + "/sector/getActiveSectors",
}

//JOBS ENDPOINTS
export const jobEndpoints = {
    CREATE_JOB_API : BASE_URL + "/job/createJob",
    GET_ALL_JOBS : BASE_URL + "/job/showAllJobs",
    JOBS_BY_COMPANY_API : BASE_URL + "/job/showAllJobsByCompany",
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
    GET_JOBS_BY_PROVINCE : BASE_URL + "/job/by-province",
    GET_JOBS_BY_JOB_TITLE : BASE_URL + "/job/by-job-title",
    GET_JOBS_BY_SECTOR : BASE_URL + "/job/by-sector",
    
}
export const adsEndpoints = {
    CREATE_AD_API : BASE_URL + "/advertisement/createAdvertisement",
    GET_ALL_ADS : BASE_URL + "/advertisement/showAllAds",
    ADS_BY_COMPANY_API : BASE_URL + "/advertisement/getAdvertisementsByCompany",
    DELETE_AD_POST_API : BASE_URL + "/advertisement/deleteAdvertisement",
    AD_DETAILS_API : BASE_URL + "/advertisement/getAdDetails",
    UPDATE_AD_STATUS_API : BASE_URL + "/advertisement/approveAnAdPost",
    ACTIVE_ADS_API: BASE_URL + "/advertisement/getActiveAds",
    
}
export const resumeEndpoints = {
    CREATE_RESUME_API : BASE_URL + "/resume/createResume",
    GET_RESUME_DETAILS_API : BASE_URL + "/resume/getResumeDetails",
    UPDATE_RESUME_API : BASE_URL + "/resume/editResume"
}