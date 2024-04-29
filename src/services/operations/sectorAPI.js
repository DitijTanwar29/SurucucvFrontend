import { toast } from "react-hot-toast"
import { apiConnector } from "../apiConnector"
import { sectorEndpoints } from "../apis"


const {
    CREATE_SECTOR_API,
    GET_ALL_SECTORS_API,
    UPDATE_SECTOR_STATUS_API,
    EDIT_SECTOR_API,
    DELETE_SECTOR_API,
} = sectorEndpoints


export const getAllSectors = async () => {
    const toastId = toast.loading("Loading...")
    let result = []
    try {
      const response = await apiConnector("GET", GET_ALL_SECTORS_API)
      if (!response?.data?.success) {
        throw new Error("Could Not Fetch Sectors")
      }
      result = response?.data?.data
    } catch (error) {
      console.log("GET_ALL_SECTORS_API ERROR............", error)
      toast.error(error.message)
    }
    toast.dismiss(toastId)
    return result
}

// add the service details
export const addSectorDetails = async (data, token) => {
    let result = null
    const toastId = toast.loading("Loading...")
    try {
      const response = await apiConnector("POST", CREATE_SECTOR_API, data, {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      })
      console.log("CREATE SECTOR API RESPONSE............", response)
      if (!response?.data?.success) {
        throw new Error("Could Not Add Sector Details")
      }
      toast.success("Sector Details Added Successfully")
      result = response?.data?.data
    } catch (error) {
      console.log("CREATE SECTOR API ERROR............", error)
      toast.error(error.message)
    }
    toast.dismiss(toastId)
    return result
}

export const editSectorDetails = async (data, token) => {
  let result = null
  const toastId = toast.loading("Loading...")
  try {
    const response = await apiConnector("POST", EDIT_SECTOR_API, data, {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    })
    console.log("EDIT SECTOR API RESPONSE............", response)
    if (!response?.data?.success) {
      throw new Error("Could Not Update Sector Details")
    }
    toast.success("Sector Details Updated Successfully")
    result = response?.data?.data
    
  } catch (error) {
    console.log("EDIT SECTOR API ERROR............", error)
    toast.error(error.message)
  }
  toast.dismiss(toastId)
  return result
}

//delete sector 
export const deleteSector = async (data, token) => {
  const toastId = toast.loading("Loading...")
  try {
    const response = await apiConnector("DELETE", DELETE_SECTOR_API, data, {
      Authorization: `Bearer ${token}`,
    })
    console.log("DELETE SECTOR API RESPONSE............", response)
    if (!response?.data?.success) {
      throw new Error("Could Not Delete Sector")
    }
    toast.success("Sector Deleted")
  } catch (error) {
    console.log("DELETE SECTOR API ERROR............", error)
    toast.error(error.message)
  }
  toast.dismiss(toastId)
}

export const updateSectorStatus = async (data, token) => {
    let result = null
    const toastId = toast.loading("Loading...")
    try {
      const response = await apiConnector("POST", UPDATE_SECTOR_STATUS_API, data, {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      })
      console.log("UPDATE SECTOR STATUS API RESPONSE............", response)
      if (!response?.data?.success) {
        throw new Error("Could Not Update Sector Status")
      }
      toast.success("Sector Status Updated Successfully")
      result = response?.data?.data
      
    } catch (error) {
      console.log("UPDATE SECTOR STATUS API ERROR............", error)
      toast.error(error.message)
    }
    toast.dismiss(toastId)
    return result
  }