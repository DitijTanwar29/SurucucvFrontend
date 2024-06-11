import { toast } from "react-hot-toast"

import { setUser } from "../../slices/profileSlice"
import { apiConnector } from "../apiConnector"
import { settingsEndpoints } from "../apis"




const {
    UPDATE_ADMIN_DISPLAY_PICTURE_API,
    UPDATE_ADMIN_PROFILE_API,
    UPDATE_CANDIDATE_PROFILE_API,
    UPDATE_COMPANY_PROFILE_API,
    DELETE_PROFILE_API
} = settingsEndpoints

export function updateAdminDisplayPicture(token, formData) {
    return async (dispatch) => {
      const toastId = toast.loading("Loading...")
      try {
        const response = await apiConnector(
          "PUT",
          UPDATE_ADMIN_DISPLAY_PICTURE_API,
          formData,
          {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          }
        )
        console.log(
          "UPDATE_ADMIN_DISPLAY_PICTURE_API API RESPONSE............",
          response
        )
  
        if (!response.data.success) {
          throw new Error(response.data.message)
        }
        toast.success("Display Picture Updated Successfully")
        dispatch(setUser(response.data.data))
      } catch (error) {
        console.log("UPDATE_DISPLAY_PICTURE_API API ERROR............", error)
        toast.error("Could Not Update Display Picture")
      }
      toast.dismiss(toastId)
    }
}


export function updateAdminProfile(token, formData, navigate) {
    return async (dispatch) => {
      const toastId = toast.loading("Loading...")
      try {
        const response = await apiConnector("PUT", UPDATE_ADMIN_PROFILE_API, formData, {
          Authorization: `Bearer ${token}`,
        })
        console.log("UPDATE_ADMIN_PROFILE_API API RESPONSE............", response)
  
        if (!response.data.success) {
          throw new Error(response.data.message)
        }
        const userImage = response.data.updatedUserDetails.image
          ? response.data.updatedUserDetails.image
          : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.updatedUserDetails.firstName} ${response.data.updatedUserDetails.lastName}`
        dispatch(
          setUser({ ...response.data.updatedUserDetails, image: userImage })
        )
        toast.success("Admin Profile Updated Successfully")
      navigate("/dashboard/my-profile")

      } catch (error) {
        console.log("UPDATE_ADMIN_PROFILE_API API ERROR............", error)
        toast.error("Could Not Update Admin Profile")
      }
      toast.dismiss(toastId)
    }
  }

//Update company profile
export function updateCompanyProfile(token, formData,navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...")
    try {
      const response = await apiConnector("PUT", UPDATE_COMPANY_PROFILE_API, formData, {
        Authorization: `Bearer ${token}`,
      })
      console.log("UPDATE_COMPANY_PROFILE_API API RESPONSE............", response)

      if (!response.data.success) {
        throw new Error(response.data.message)
      }
      const userImage = response.data.updatedUserDetails.image
          ? response.data.updatedUserDetails.image
          : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.updatedUserDetails.firstName} ${response.data.updatedUserDetails.lastName}`
        dispatch(
          setUser({ ...response.data.updatedUserDetails, image: userImage })
        )
      toast.success("Company Profile Updated Successfully")
      navigate("/dashboard/my-profile")

    } catch (error) {
      console.log("UPDATE_COMPANY_PROFILE_API API ERROR............", error)
      toast.error("Could Not Update Company Profile")
    }
    toast.dismiss(toastId)
  }
}

export function updateCandidateProfile(token, formData,navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...")
    try {
      const response = await apiConnector("PUT", UPDATE_CANDIDATE_PROFILE_API, formData, {
        Authorization: `Bearer ${token}`,
      })
      console.log("UPDATE_CANDIDATE_PROFILE_API API RESPONSE............", response)

      if (!response.data.success) {
        throw new Error(response.data.message)
      }
      const userImage = response.data.updatedUserDetails.image
          ? response.data.updatedUserDetails.image
          : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.updatedUserDetails.firstName} ${response.data.updatedUserDetails.lastName}`
        dispatch(
          setUser({ ...response.data.updatedUserDetails, image: userImage })
        )
        toast.success("Candidate Profile Updated Successfully")
        
      navigate("/dashboard/my-profile")
    } catch (error) {
      console.log("UPDATE_CANDIDATE_PROFILE_API API ERROR............", error)
      toast.error("Could Not Update Candidate Profile")
    }
    toast.dismiss(toastId)
  }
}
