import { toast } from "react-hot-toast"

import { apiConnector } from "../apiConnector"
import { serviceEndpoints } from "../apis"
import {  setService } from "../../slices/serviceSlice"

const {
    SERVICE_DETAILS_API,
    CREATE_SERVICE_API,
    EDIT_SERVICE_API,
    GET_ALL_SERVICES_API,
    DELETE_SERVICE_API,
    UPDATE_SERVICE_STATUS_API,
    ACTIVE_SERVICES_API
} = serviceEndpoints


export const getAllServices = async () => {
    const toastId = toast.loading("Loading...")
    let result = []
    try {
      const response = await apiConnector("GET", GET_ALL_SERVICES_API)
      if (!response?.data?.success) {
        throw new Error("Could Not Fetch Services")
      }
      result = response?.data?.data
    } catch (error) {
      console.log("GET_ALL_SERVICES_API ERROR............", error)
      toast.error(error.message)
    }
    toast.dismiss(toastId)
    return result
}

export const fetchServiceDetails = async (serviceId) => {
    const toastId = toast.loading("Loading...")
    //   dispatch(setLoading(true));
    let result = null
    try {
      const response = await apiConnector("POST", SERVICE_DETAILS_API, {
        serviceId,
      })
      console.log("SERVICE_DETAILS_API API RESPONSE............", response)
  
      if (!response.data.success) {
        throw new Error(response.data.message)
      }
      result = response.data.data
      
    } catch (error) {
      console.log("SERVICE_DETAILS_API ERROR............", error)
      result = error.response.data
      // toast.error(error.response.data.message);
    }
    toast.dismiss(toastId)
    //   dispatch(setLoading(false));
    return result
}

// add the service details
export function addServiceDetails(data, token, navigate) {
  return async (dispatch) => {
    let result = null
    const toastId = toast.loading("Loading...")
    try {
      const response = await apiConnector("POST", CREATE_SERVICE_API, data, {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      })
      console.log("CREATE SERVICE API RESPONSE............", response)
      if (!response?.data?.success) {
        throw new Error("Could Not Add Service Details")
      }
      toast.success("Service Details Added Successfully")
      result = response?.data?.data
      console.log("new service detail from api result :", result)
      dispatch(setService(result))
      navigate("/dashboard/my-services")
    } catch (error) {
      console.log("CREATE SERVICE API ERROR............", error)
      toast.error(error.message)
    }
    toast.dismiss(toastId)
  }
}

//edit the service details
export function editServiceDetails(data, token, navigate) {
  return async (dispatch) => {
    let result = null
    const toastId = toast.loading("Loading...")
    try {
      const response = await apiConnector("POST", EDIT_SERVICE_API, data, {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      })
      console.log("EDIT SERVICE API RESPONSE............", response)
      if (!response?.data?.success) {
        throw new Error("Could Not Update Service Details")
      }
      toast.success("Service Details Updated Successfully")
      result = response?.data?.data
      dispatch(setService(result))
      navigate("/dashboard/my-services")
    } catch (error) {
      console.log("EDIT SERVICE API ERROR............", error)
      toast.error(error.message)
    }
    toast.dismiss(toastId)
  }
}

//delete service 
export const deleteService = async (data, token) => {
  const toastId = toast.loading("Loading...")
  try {
    const response = await apiConnector("DELETE", DELETE_SERVICE_API, data, {
      Authorization: `Bearer ${token}`,
    })
    console.log("DELETE SERVICE API RESPONSE............", response)
    if (!response?.data?.success) {
      throw new Error("Could Not Delete service")
    }
    toast.success("Service Deleted")
  } catch (error) {
    console.log("DELETE SERVICE API ERROR............", error)
    toast.error(error.message)
  }
  toast.dismiss(toastId)
}

export const updateServiceStatus = async (data, token) => {
  let result = null
  const toastId = toast.loading("Loading...")
  try {
    const response = await apiConnector("POST", UPDATE_SERVICE_STATUS_API, data, {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    })
    console.log("UPDATE SERVICE STATUS API RESPONSE............", response)
    if (!response?.data?.success) {
      throw new Error("Could Not Update Service Status")
    }
    toast.success("Service Status Updated Successfully")
    result = response?.data?.data
    
  } catch (error) {
    console.log("UPDATE SERVICE STATUS API ERROR............", error)
    toast.error(error.message)
  }
  toast.dismiss(toastId)
  return result
}

export const getActiveServices = async () => {
  const toastId = toast.loading("Loading...")
  let result = []
  try {
    const response = await apiConnector("GET", ACTIVE_SERVICES_API )
    if (!response?.data?.success) {
      throw new Error("Could Not Fetch Active Services")
    }
    result = response?.data?.data
  } catch (error) {
    console.log("GET_ACTIVE_SERVICES_API ERROR............", error)
    toast.error(error.message)
  }
  toast.dismiss(toastId)
  return result
}
