import { toast } from "react-hot-toast"

import { apiConnector } from "../apiConnector"
import { packageEndpoints } from "../apis"
import {  setPackage } from "../../slices/packageSlice"

const {
    PACKAGE_DETAILS_API,
    CREATE_PACKAGE_API,
    EDIT_PACKAGE_API,
    GET_ALL_PACKAGES_API,
    DELETE_PACKAGE_API,
    UPDATE_PACKAGE_STATUS_API,
    ACTIVE_PACKAGES_API
} = packageEndpoints


export const getAllPackages = async () => {
    const toastId = toast.loading("Loading...")
    let result = []
    try {
      const response = await apiConnector("GET", GET_ALL_PACKAGES_API)
      if (!response?.data?.success) {
        throw new Error("Could Not Fetch Packages")
      }
      result = response?.data?.data
    } catch (error) {
      console.log("GET_ALL_PACKAGES_API ERROR............", error)
      toast.error(error.message)
    }
    toast.dismiss(toastId)
    return result
}

export const fetchPackageDetails = async (packageId) => {
    const toastId = toast.loading("Loading...")

    console.log("inside endpoint :",packageId)
    //   dispatch(setLoading(true));
    let result = null
    try {
      const response = await apiConnector("POST", PACKAGE_DETAILS_API, {
        packageId,
      })
      console.log("PACKAGE_DETAILS_API API RESPONSE............", response)
  
      if (!response.data.success) {
        throw new Error(response.data.message)
      }
      result = response.data.data
      
    } catch (error) {
      console.log("PACKAGE_DETAILS_API ERROR............", error)
      result = error.response.data
      // toast.error(error.response.data.message);
    }
    toast.dismiss(toastId)
    //   dispatch(setLoading(false));
    return result
}

// add the package details
export function addPackageDetails(data, token, navigate) {
  return async (dispatch) => {
    let result = null
    const toastId = toast.loading("Loading...")
    try {
      const response = await apiConnector("POST", CREATE_PACKAGE_API, data, {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      })
      console.log("CREATE PACKAGE API RESPONSE............", response)
      if (!response?.data?.success) {
        throw new Error("Could Not Add Package Details")
      }
      toast.success("Package Details Added Successfully")
      result = response?.data?.data
      console.log("new Package detail from api result :", result)
      dispatch(setPackage(result))
      navigate("/dashboard/my-Packages")
    } catch (error) {
      console.log("CREATE PACKAGE API ERROR............", error)
      toast.error(error.message)
    }
    toast.dismiss(toastId)
  }
}

//edit the package details
export function editPackageDetails(data, token, navigate) {
  return async (dispatch) => {
    let result = null
    const toastId = toast.loading("Loading...")
    try {
      const response = await apiConnector("POST", EDIT_PACKAGE_API, data, {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      })
      console.log("EDIT PACKAGE API RESPONSE............", response)
      if (!response?.data?.success) {
        throw new Error("Could Not Update Package Details")
      }
      toast.success("Package Details Updated Successfully")
      result = response?.data?.data
      dispatch(setPackage(result))
      navigate("/dashboard/my-packages")
    } catch (error) {
      console.log("EDIT PACKAGE API ERROR............", error)
      toast.error(error.message)
    }
    toast.dismiss(toastId)
  }
}

//delete package 
export const deletePackage = async (data, token) => {
  const toastId = toast.loading("Loading...")
  try {
    const response = await apiConnector("DELETE", DELETE_PACKAGE_API, data, {
      Authorization: `Bearer ${token}`,
    })
    console.log("DELETE PACKAGE API RESPONSE............", response)
    if (!response?.data?.success) {
      throw new Error("Could Not Delete Package")
    }
    toast.success("Package Deleted")
  } catch (error) {
    console.log("DELETE PACKAGE API ERROR............", error)
    toast.error(error.message)
  }
  toast.dismiss(toastId)
}

export const updatePackageStatus = async (data, token) => {
  let result = null
  const toastId = toast.loading("Loading...")
  try {
    const response = await apiConnector("POST", UPDATE_PACKAGE_STATUS_API, data, {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    })
    console.log("UPDATE PACKAGE STATUS API RESPONSE............", response)
    if (!response?.data?.success) {
      throw new Error("Could Not Update Package Status")
    }
    toast.success("Package Status Updated Successfully")
    result = response?.data?.data
    
  } catch (error) {
    console.log("UPDATE PACKAGE STATUS API ERROR............", error)
    toast.error(error.message)
  }
  toast.dismiss(toastId)
  return result
}

export const getActivePackages = async () => {
  const toastId = toast.loading("Loading...")
  let result = []
  try {
    const response = await apiConnector("GET", ACTIVE_PACKAGES_API )
    if (!response?.data?.success) {
      throw new Error("Could Not Fetch Active Packages")
    }
    result = response?.data?.data
  } catch (error) {
    console.log("GET_ACTIVE_PACKAGES_API ERROR............", error)
    toast.error(error.message)
  }
  toast.dismiss(toastId)
  return result
}
