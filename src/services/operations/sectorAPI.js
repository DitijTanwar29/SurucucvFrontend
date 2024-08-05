import { toast } from "react-hot-toast"
import { apiConnector } from "../apiConnector"
import { sectorEndpoints } from "../apis"
import { setEditSector, setSector } from "../../slices/sectorSlice"


const {
    CREATE_SECTOR_API,
    GET_ALL_SECTORS_API,
    UPDATE_SECTOR_STATUS_API,
    EDIT_SECTOR_API,
    DELETE_SECTOR_API,
    ACTIVE_SECTORS_API,
    SECTOR_DETAILS_API,
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

export const fetchSectorDetails = async (sectorId) => {
  const toastId = toast.loading("Loading...")
  //   dispatch(setLoading(true));
  let result = null
  try {
    const response = await apiConnector("POST", SECTOR_DETAILS_API, {
      sectorId,
    })
    console.log("SECTOR_DETAILS_API API RESPONSE............", response)

    if (!response.data.success) {
      throw new Error(response.data.message)
    }
    result = response.data.data
    
  } catch (error) {
    console.log("SECTOR_DETAILS_API ERROR............", error)
    result = error.response.data
    // toast.error(error.response.data.message);
  }
  toast.dismiss(toastId)
  //   dispatch(setLoading(false));
  return result
}

// add the service details
export function addSectorDetails (data, token, navigate) {
  return async (dispatch) => {  
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
      dispatch(setSector(result))
      navigate('/dashboard/my-sectors')
    } catch (error) {
      console.log("CREATE SECTOR API ERROR............", error)
      toast.error(error.message)
    }
    toast.dismiss(toastId)
    return result
  }
}

export function editSectorDetails (data, token, navigate) {
  return async (dispatch) => {
  let result = null
  const toastId = toast.loading("Loading...")
  setEditSector('true')
  try {
    const response = await apiConnector("POST", EDIT_SECTOR_API, data, {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    })
    console.log("EDIT SECTOR API RESPONSE............", response)
    if (!response?.data?.success) {
      throw new Error("Could Not Update Sector Details")
    }
    setEditSector('false')
    toast.success("Sector Details Updated Successfully")
    result = response?.data?.data
    setSector(result)
    navigate('/dashboard/my-sectors')
  } catch (error) {
    console.log("EDIT SECTOR API ERROR............", error)
    toast.error(error.message)
  }
  toast.dismiss(toastId)
  return result
}
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


  export const getActiveSectors = async () => {
    const toastId = toast.loading("Loading...")
    let result = []
    try {
      const response = await apiConnector("GET", ACTIVE_SECTORS_API )
      if (!response?.data?.success) {
        throw new Error("Could Not Fetch Active Sectors")
      }
      result = response?.data?.data
    } catch (error) {
      console.log("GET_ACTIVE_SECTORS_API ERROR............", error)
      toast.error(error.message)
    }
    toast.dismiss(toastId)
    return result
  }