import { toast } from "react-hot-toast"

import { setLoading, setUser } from "../../slices/profileSlice"
import { apiConnector } from "../apiConnector"
import { profileEndpoints, manageUsersEndpoints } from "../apis"
import { logout } from "./authAPI"

const {
    GET_ADMIN_DETAILS_API,
    GET_COMPANY_DETAILS_API,
    GET_COMPANY_BY_ID,
    GET_COMPANY_PACKAGES_API,
    UNENROLL_COMPANY_FROM_PACKAGE_API,
    UPDATE_HERO_SECTION_IMAGE_API,
    GET_HERO_SECTION_IMAGE_API,
} = profileEndpoints

const {
  GET_ALL_CANDIDATE_USERS_API,
  GET_ALL_COMPANY_USERS_API,
  TOGGLE_CANDIDATE_PROFILE_STATUS,
  TOGGLE_COMPANY_PROFILE_STATUS
} = manageUsersEndpoints



export function getAdminDetails(token, navigate) {
    return async (dispatch) => {
      const toastId = toast.loading("Loading...")
      dispatch(setLoading(true))
      try {
        const response = await apiConnector("GET", GET_ADMIN_DETAILS_API, null, {
          Authorization: `Bearer ${token}`,
        })
        console.log("GET_ADMIN_DETAILS API RESPONSE............", response)
  
        if (!response.data.success) {
          throw new Error(response.data.message)
        }
        const userImage = response.data.data.image
          ? response.data.data.image
          : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.data.firstName} ${response.data.data.lastName}`
        dispatch(setUser({ ...response.data.data, image: userImage }))
      } catch (error) {
        dispatch(logout(navigate))
        console.log("GET_ADMIN_DETAILS API ERROR............", error)
        toast.error("Could Not Get Admin Details")
      }
      toast.dismiss(toastId)
      dispatch(setLoading(false))
    }
}

export function getCompanyDetails(token, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...")
    dispatch(setLoading(true))
    try {
      const response = await apiConnector("GET", GET_COMPANY_DETAILS_API, null, {
        Authorization: `Bearer ${token}`,
      })
      console.log("GET_COMPANY_DETAILS API RESPONSE............", response)

      if (!response.data.success) {
        throw new Error(response.data.message)
      }
      const userImage = response.data.data.image
        ? response.data.data.image
        : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.data.Name}`
      dispatch(setUser({ ...response.data.data, image: userImage }))
    } catch (error) {
      dispatch(logout(navigate))
      console.log("GET_COMPANY_DETAILS API ERROR............", error)
      toast.error("Could Not Get Company Details")
    }
    toast.dismiss(toastId)
    dispatch(setLoading(false))
  }
}

export const fetchCompanyById = async (companyId) => {
  const toastId = toast.loading("Loading...")
  //   dispatch(setLoading(true));
  let result = null
  try {
    const response = await apiConnector("POST", GET_COMPANY_BY_ID, {
      companyId,
    })
    console.log("GET_COMPANY_BY_ID_API API RESPONSE............", response)

    if (!response.data.success) {
      throw new Error(response.data.message)
    }
    result = response.data.data
    
  } catch (error) {
    // console.log("GET_COMPANY_BY_ID_API ERROR............", error)
    result = error.response.data
    // toast.error(error.response.data.message);
  }
  toast.dismiss(toastId)
  //   dispatch(setLoading(false));
  return result
}

export const fetchCompanyPackages = async (companyId) => {
  console.log("companyId inside endpoint",companyId)
  const toastId = toast.loading("Loading...")
  //   dispatch(setLoading(true));
  let result = null
  try {
    const response = await apiConnector("POST", GET_COMPANY_PACKAGES_API, {
      companyId,
    })
    console.log("GET_COMPANY_PACKAGES_API RESPONSE............", response)

    if (!response.data.success) {
      throw new Error(response.data.message)
    }
    result = response.data
    
  } catch (error) {
    console.log("GET_COMPANY_PACKAGES_API ERROR............", error)
    result = error.response.data
    // toast.error(error.response.data.message);
  }
  toast.dismiss(toastId)
  //   dispatch(setLoading(false));
  return result
}

export const unenrollCompanyFromPackage = async ({companyId, packageId}) => {
  console.log("companyId inside endpoint",companyId)
  console.log("package Id inside endpoint : ", packageId)
  const toastId = toast.loading("Loading...")
  //   dispatch(setLoading(true));
  let result = null
  try {
    const response = await apiConnector("POST", UNENROLL_COMPANY_FROM_PACKAGE_API, {
      companyId,packageId
    })
    console.log("UNENROLL_COMPANY_FROM_PACKAGE_API RESPONSE............", response)

    if (!response.data.success) {
      throw new Error(response.data.message)
    }
    result = response.data.data
    toast.success("Company Unenrolled From Package Successfully")
  } catch (error) {
    console.log("UNENROLL_COMPANY_FROM_PACKAGE_API............", error)
    result = error.response.data
    toast.error(error.response.data.message);
  }
  toast.dismiss(toastId)
  //   dispatch(setLoading(false));
  return result
}

export const getHeroImage = async () => {
  try {
    const response = await apiConnector("GET", GET_HERO_SECTION_IMAGE_API);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch hero image:", error.message);
    return { success: false, imageUrl: null };
  }
};

// Upload Hero Image to Backend
export const uploadHeroImage = async (formData, token) => {
  try {
    const response = await apiConnector("POST", UPDATE_HERO_SECTION_IMAGE_API, formData,{
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    });
    // console.log("response : ",response)
    // console.log("response.data : ",response.data)
    // console.log("response.data.imageUrl : ",response.data.imageUrl)
    return response;
  } catch (error) {
    console.error("Failed to upload hero image:", error.message);
    return { success: false };
  }
};

export const getAllCandidates = async () => {
  try{
    const result = await apiConnector("GET", GET_ALL_CANDIDATE_USERS_API)
    return result.data
  }catch(error){
    console.error("Failed to get all users")
    return error.message   
  }
}

export const getAllCompanies = async () => {
  try{
    const result = await apiConnector("GET", GET_ALL_COMPANY_USERS_API)
    return result.data
  }catch(error){
    console.error("Failed to get all companies")
    return error.message   
  }
}

export const toggleCandidateStatus = async (data, token) => {
  let result = null
  const toastId = toast.loading("Loading...")
  try {
    const response = await apiConnector("PATCH", TOGGLE_CANDIDATE_PROFILE_STATUS, data, {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    })
    console.log("TOGGLE_CANDIDATE_PROFILE_STATUS RESPONSE............", response)
    if (!response?.data?.success) {
      throw new Error("Could Not Update Candidate Profile Status")
    }
    toast.success("Candidate Profile Status Updated Successfully")
    result = response?.data?.data
    
  } catch (error) {
    console.log("TOGGLE_CANDIDATE_PROFILE_STATUS ERROR............", error)
    toast.error(error.message)
  }
  toast.dismiss(toastId)
  return result
}

export const toggleCompanyStatus = async (data, token) => {
  let result = null
  const toastId = toast.loading("Loading...")
  try {
    const response = await apiConnector("PATCH", TOGGLE_COMPANY_PROFILE_STATUS, data)
    console.log("TOGGLE_COMPANY_PROFILE_STATUS RESPONSE............", response)
    if (!response?.data?.success) {
      throw new Error("Could Not Update Company Profile Status")
    }
    toast.success("Company Profile Status Updated Successfully")
    result = response?.data?.data
    
  } catch (error) {
    console.log("TOGGLE_COMPANY_PROFILE_STATUS ERROR............", error)
    toast.error(error.message)
  }
  toast.dismiss(toastId)
  return result
}