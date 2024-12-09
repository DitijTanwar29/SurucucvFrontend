
import { toast } from "react-hot-toast"
import { apiConnector } from "../apiConnector"
import { adsEndpoints } from "../apis"
import { BASE_URL} from '../apis'
import { setEditAds, setAds } from "../../slices/adsSlice"

const { 

    CREATE_AD_API,
    GET_ALL_ADS,
    DELETE_AD_POST_API,
    AD_DETAILS_API,
    UPDATE_AD_STATUS_API,
    ACTIVE_ADS_API,
    ADS_BY_COMPANY_API
} = adsEndpoints


export function createAdvertisementPost (data, token,navigate) {
    return async (dispatch) => {  
    let result = null
      const toastId = toast.loading("Loading...")
      try {
        const response = await apiConnector("POST", CREATE_AD_API, data, {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        })
        console.log("CREATE ADVERTISEMENT POST API RESPONSE............", response)
        if (!response?.data?.success) {
          throw new Error("Could Not Add Ad Post Details")
        }
        toast.success("Advertisement Publish Request sent successfully")
        result = response?.data?.data
        dispatch(setAds(result))
        navigate("/dashboard/my-ads")
  
      } catch (error) {
        console.log("CREATE AD POST API ERROR............", error)
        toast.error(error.message)
      }
      toast.dismiss(toastId)
    }
  }

  export const fetchAllAds = async () => {
    const toastId = toast.loading("Loading...")
    let result = []
    try {
      const response = await apiConnector("GET", GET_ALL_ADS)
      if (!response?.data?.success) {
        throw new Error("Could Not Fetch Ads")
      }
      result = response?.data?.data
    } catch (error) {
      console.log("GET_ALL_ADS_API ERROR............", error)
      toast.error(error.message)
    }
    toast.dismiss(toastId)
    return result
  }

  export const getAllAdsByCompanyId = async (companyId) => {
    const toastId = toast.loading("Loading...")
    //   dispatch(setLoading(true));
    let result = null
    try {
      const response = await apiConnector("POST", ADS_BY_COMPANY_API, {
        companyId,
      })
      console.log("ADS_BY_COMPANY_API API RESPONSE............", response)
  
      if (!response.data.success) {
        throw new Error(response.data.message)
      }
      result = response.data.data
      
    } catch (error) {
      console.log("ADS_BY_COMPANY_API ERROR............", error)
      result = error.response.data
      // toast.error(error.response.data.message);
    }
    toast.dismiss(toastId)
    //   dispatch(setLoading(false));
    return result
  }

  export const deleteAd = async (data, token) => {
    const toastId = toast.loading("Loading...")
    try {
      const response = await apiConnector("DELETE", DELETE_AD_POST_API, data, {
        Authorization: `Bearer ${token}`,
      })
      console.log("DELETE ADVERTISEMENT API RESPONSE............", response)
      if (!response?.data?.success) {
        throw new Error("Could Not Delete Advertisement")
      }
      toast.success("Advertisement Deleted")
    } catch (error) {
      console.log("DELETE ADVERTISEMENT API ERROR............", error)
      toast.error(error.message)
    }
    toast.dismiss(toastId)
  }

  export const fetchAdvertisementDetails = async (adId) => {
    const toastId = toast.loading("Loading...")
    //   dispatch(setLoading(true));
    let result = null
    try {
      const response = await apiConnector("POST", AD_DETAILS_API, {
        adId,
      })
      console.log("ADVERTISEMENT_DETAILS_API API RESPONSE............", response)
  
      if (!response.data.success) {
        throw new Error(response.data.message)
      }
      result = response.data.data
      
    } catch (error) {
      console.log("ADVERTISEMENT_DETAILS_API ERROR............", error)
      result = error.response.data
      // toast.error(error.response.data.message);
    }
    toast.dismiss(toastId)
    //   dispatch(setLoading(false));
    return result
  }

  export const updateAdStatus = async (data, token) => {
    let result = null
    const toastId = toast.loading("Loading...")
    try {
      const response = await apiConnector("POST", UPDATE_AD_STATUS_API, data, {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      })
      console.log("UPDATE ADVERTISEMENT STATUS API RESPONSE............", response)
      if (!response?.data?.success) {
        throw new Error("Could Not Update Advertisement Status")
      }
      toast.success("Advertisement Status Updated Successfully")
      result = response?.data?.data
      
    } catch (error) {
      console.log("UPDATE ADVERTISEMENT STATUS API ERROR............", error)
      toast.error(error.message)
    }
    toast.dismiss(toastId)
    return result
  }


  export const getActiveAds = async () => {
    const toastId = toast.loading("Loading...")
    let result = []
    try {
      const response = await apiConnector("GET", ACTIVE_ADS_API )
      if (!response?.data?.success) {
        throw new Error("Could Not Fetch Active Advertisements")
      }
      result = response?.data?.data
    } catch (error) {
      console.log("GET_ACTIVE_ADS_API ERROR............", error)
      toast.error(error.message)
    }
    toast.dismiss(toastId)
    return result
  }