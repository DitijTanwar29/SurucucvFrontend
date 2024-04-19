import { apiConnector } from "../apiConnector"
import { resumeEndpoints } from "../apis"
import { toast } from "react-hot-toast"

const {
    CREATE_RESUME_API,
    GET_RESUME_DETAILS_API,
} = resumeEndpoints

export const createResume = async (data, token) => {
    let result = null
    const toastId = toast.loading("Loading...")
    try {
      const response = await apiConnector("POST", CREATE_RESUME_API, data, {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      })
      console.log("CREATE RESUME API RESPONSE............", response)
      if (!response?.data?.success) {
        throw new Error("Could Not Create Resume")
      }
      toast.success("Resume Created Successfully")
      result = response?.data?.data
    } catch (error) {
      console.log("CREATE RESUME API ERROR............", error)
      toast.error(error.message)
    }
    toast.dismiss(toastId)
    return result
}

export const fetchResumeDetails = async () => {
  const toastId = toast.loading("Loading...")
  //   dispatch(setLoading(true));
  let result = null
  try {
    const response = await apiConnector("GET", GET_RESUME_DETAILS_API)
    console.log("GET_RESUME_DETAILS_API API RESPONSE............", response)

    if (!response.data.success) {
      throw new Error(response.data.message)
    }
    result = response.data.data
    
  } catch (error) {
    console.log("GET_RESUME_DETAILS_API ERROR............", error)
    result = error.response.data
    // toast.error(error.response.data.message);
  }
  toast.dismiss(toastId)
  //   dispatch(setLoading(false));
  return result
}