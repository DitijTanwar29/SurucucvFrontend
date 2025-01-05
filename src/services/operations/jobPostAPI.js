import { toast } from "react-hot-toast"
import { apiConnector } from "../apiConnector"
import { jobEndpoints } from "../apis"
import { BASE_URL} from '../apis'
import { setEditJob, setJob } from "../../slices/jobPostSlice"


const {
    CREATE_JOB_API,
    GET_ALL_JOBS,
    JOB_DETAILS_API,
    UPDATE_JOB_POST_API,
    DELETE_JOB_POST_API,
    APPLY_FOR_JOB_API,
    GET_APPLIED_JOBS,
    GET_ALL_APPROVED_JOBS,
    UPDATE_JOB_STATUS_API,
    GET_APPLIED_CANDIDATES_API,
    GET_TOP_JOB_POSTINGS_API, 
    GET_SEARCHED_JOBS_API,
    GET_RECENTLY_PUBLISHED_JOBS_API,
    GET_FULL_TIME_JOBS_API,
    GET_PART_TIME_JOBS_API,
    GET_TOP_JOB_LOCATIONS_API,
    FILTER_JOBS_API,
    GET_INTERNATIONAL_JOBS_API,
    GET_JOBS_BY_PROVINCE,
    GET_JOBS_BY_JOB_TITLE,
    GET_JOBS_BY_SECTOR,
    JOBS_BY_COMPANY_API
} = jobEndpoints






export function addJobPost (data, token,navigate) {
  return async (dispatch) => {  
  let result = null
    const toastId = toast.loading("Loading...")
    try {
      const response = await apiConnector("POST", CREATE_JOB_API, data, {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      })
      console.log("CREATE JOB POST API RESPONSE............", response)
      
      
      if (!response?.data?.success) {
        throw new Error("Could Not Add Job Post Details")
      }
      toast.success("Job Publish Request sent successfully")
      result = response?.data?.data
      dispatch(setJob(result))
      navigate("/dashboard/my-jobs")
    } catch (error) {
      if (error?.response?.status === 429) {
        toast.error("Job Creation Limit Reached, Please Upgrade Your Package!")
      }else{
        console.log("CREATE JOB POST API ERROR............", error)
        toast.error(error.message)
      }
    }
    toast.dismiss(toastId)
  }
}

export const getAllJobs = async () => {
  const toastId = toast.loading("Loading...")
  let result = []
  try {
    const response = await apiConnector("GET", GET_ALL_JOBS)
    if (!response?.data?.success) {
      throw new Error("Could Not Fetch Jobs")
    }
    result = response?.data?.data
  } catch (error) {
    console.log("GET_ALL_JOBS_API ERROR............", error)
    toast.error(error.message)
  }
  toast.dismiss(toastId)
  return result
}

export const getAllJobsByCompanyId = async (userId) => {
  const toastId = toast.loading("Loading...")
  //   dispatch(setLoading(true));
  let result = null
  try {
    const response = await apiConnector("POST", JOBS_BY_COMPANY_API, {
      userId,
    })
    console.log("JOBS_BY_COMPANY_API API RESPONSE............", response)

    if (!response.data.success) {
      throw new Error(response.data.message)
    }
    result = response.data.data
    
  } catch (error) {
    console.log("JOBS_BY_COMPANY_API ERROR............", error)
    result = error.response.data
    // toast.error(error.response.data.message);
  }
  toast.dismiss(toastId)
  //   dispatch(setLoading(false));
  return result
}

export const getAllApprovedJobs = async () => {
  const toastId = toast.loading("Loading...")
  let result = []
  try {
    const response = await apiConnector("GET", GET_ALL_APPROVED_JOBS)
    if (!response?.data?.success) {
      throw new Error("Could Not Fetch Approved Jobs")
    }
    result = response?.data?.data
  } catch (error) {
    console.log("GET_ALL_APPROVED_JOBS_API ERROR............", error)
    toast.error(error.message)
  }
  toast.dismiss(toastId)
  return result
}

export const fetchJobDetails = async (jobId) => {
  const toastId = toast.loading("Loading...")
  //   dispatch(setLoading(true));
  let result = null
  try {
    const response = await apiConnector("POST", JOB_DETAILS_API, {
      jobId,
    })
    console.log("JOB_DETAILS_API API RESPONSE............", response)

    if (!response.data.success) {
      throw new Error(response.data.message)
    }
    result = response.data.data
    
  } catch (error) {
    console.log("JOB_DETAILS_API ERROR............", error)
    result = error.response.data
    // toast.error(error.response.data.message);
  }
  toast.dismiss(toastId)
  //   dispatch(setLoading(false));
  return result
}

export const editJobPostDetails = async (data, token) => {
  let result = null
  const toastId = toast.loading("Loading...")
  try {
    const response = await apiConnector("POST", UPDATE_JOB_POST_API, data, {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    })
    console.log("EDIT JOB API RESPONSE............", response)
    if (!response?.data?.success) {
      throw new Error("Could Not Update Job Details")
    }
    toast.success("Job Details Updated Successfully")
    result = response?.data?.data
    
  } catch (error) {
    console.log("EDIT JOB API ERROR............", error)
    toast.error(error.message)
  }
  toast.dismiss(toastId)
  return result
}

export const deleteJob = async (data, token) => {
  const toastId = toast.loading("Loading...")
  try {
    const response = await apiConnector("DELETE", DELETE_JOB_POST_API, data, {
      Authorization: `Bearer ${token}`,
    })
    console.log("DELETE JOB API RESPONSE............", response)
    if (!response?.data?.success) {
      throw new Error("Could Not Delete Job")
    }
    toast.success("Job Deleted")
  } catch (error) {
    console.log("DELETE JOB API ERROR............", error)
    toast.error(error.message)
  }
  toast.dismiss(toastId)
}

export function applyForJob(token, jobId) {
  return async (dispatch) => {
    console.log("jobId inside applyAPI :",jobId)
    const toastId = toast.loading("Loading...")
    try {
      const response = await apiConnector("POST",APPLY_FOR_JOB_API,
        jobId,
        {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        }
      )
      console.log(
        "APPLY_FOR_JOB_API API RESPONSE............",
        response
      )

      if (!response.data.success) {
        throw new Error(response.data.message)
      }
      toast.success("Applied Successfully")
    } catch (error) {
      console.log("APPLY_FOR_JOB_API API ERROR............", error)
      toast.error("Please Login First To Apply")
    }
    toast.dismiss(toastId)
  }
}

export const updateJobStatus = async (data, token) => {
  let result = null
  const toastId = toast.loading("Loading...")
  try {
    const response = await apiConnector("POST", UPDATE_JOB_STATUS_API, data, {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    })
    console.log("UPDATE JOB STATUS API RESPONSE............", response)
    if (!response?.data?.success) {
      throw new Error("Could Not Update Job Status")
    }
    toast.success("Job Status Updated Successfully")
    result = response?.data?.data
    
  } catch (error) {
    console.log("UPDATE JOB STATUS API ERROR............", error)
    toast.error(error.message)
  }
  toast.dismiss(toastId)
  return result
}

// export function getAppliedJobs(token){
//   return async (dispatch) => {

//     const toastId = toast.loading("Loading...")
//     let result = []
//     try {
//       const response = await apiConnector("GET", GET_APPLIED_JOBS, {
//         Authorization: `Bearer ${token}`,
//       })
//       if (!response?.data?.success) {
//         throw new Error("Could Not Fetch Applied Jobs")
//       }
//       result = response?.data?.data
//     } catch (error) {
//       console.log("GET_APPLIED_JOBS_API ERROR............", error)
//       toast.error(error.message)
//     }
//     toast.dismiss(toastId)
//     return result
//   }
// }

export const getAppliedJobs = async (token) => {
  // console.log("token +++++++++++++++++++++",token)
  const toastId = toast.loading("Loading...")
  let result = []
  try {
    const response = await apiConnector("GET", GET_APPLIED_JOBS,{}, {
                Authorization: `Bearer ${token}`,
    })
    if (!response?.data?.success) {
      throw new Error("Could Not Fetch Jobs")
    }
    result = response?.data?.data
  } catch (error) {
    console.log("GET_ALL_JOBS_API ERROR............", error)
    toast.error(error.message)
  }
  toast.dismiss(toastId)
  return result
}

// export const getAppliedCandidates = async (jobId) => {
// console.log("job Id Inside API Endpoint of Applied Candidates :",jobId)

//   const toastId = toast.loading("Loading...")
//   //   dispatch(setLoading(true));
//   let result = null
//   try {
//     const response = await apiConnector("GET", GET_APPLIED_CANDIDATES_API?jobId=${jobId})
//     console.log("GET_APPLIED_CANDIDATES_API API RESPONSE............", response)

//     if (!response.data.success) {
//       throw new Error(response.data.message)
//     }
//     result = response.data.data
    
//   } catch (error) {
//     console.log("GET_APPLIED_CANDIDATES_API ERROR............", error)
//     result = error.response.data
//     // toast.error(error.response.data.message);
//   }
//   toast.dismiss(toastId)
//   //   dispatch(setLoading(false));
//   return result
// }

export const getAppliedCandidates = async (jobId) => {
  console.log("job Id Inside API Endpoint of Applied Candidates :", jobId)

  const toastId = toast.loading("Loading...");
  let result = null;
  try {
    const response = await apiConnector("GET", jobEndpoints.GET_APPLIED_CANDIDATES_API, null, null, { jobId });
    console.log("GET_APPLIED_CANDIDATES_API API RESPONSE............", response);

    if (!response.data.success) {
      throw new Error(response.data.message);
    }
    result = response.data.data;
  } catch (error) {
    console.log("GET_APPLIED_CANDIDATES_API ERROR............", error);
    result = error.response.data;
    // toast.error(error.response.data.message);
  }
  toast.dismiss(toastId);
  return result;
};

export const getTopJobPostings = async () => {
  const toastId = toast.loading("Loading...")
  let result = []
  try {
    const response = await apiConnector("GET", GET_TOP_JOB_POSTINGS_API)
    if (!response?.data?.success) {
      throw new Error("Could Not Fetch TOP Jobs")
    }
    result = response?.data?.data
  } catch (error) {
    console.log("GET_TOP_JOB_POSTINGS_API ERROR............", error)
    toast.error(error.message)
  }
  toast.dismiss(toastId)
  return result
}

export const getTopJobLocations = async () => {
  const toastId = toast.loading("Loading...")
  let result = []
  try {
    const response = await apiConnector("GET", GET_TOP_JOB_LOCATIONS_API)
    if (!response?.data?.success) {
      throw new Error("Could Not Fetch TOP Job Locations")
    }
    result = response?.data?.data
  } catch (error) {
    console.log("GET_TOP_JOB_LOCATIONSS_API ERROR............", error)
    toast.error(error.message)
  }
  toast.dismiss(toastId)
  return result
}

export const searchJobs = async (searchTerm) => {
  console.log("search term inside api endpoint of searchjobs :",searchTerm)
  let result = null
  const toastId = toast.loading("Loading...")
  try {
    const response = await apiConnector("GET", GET_SEARCHED_JOBS_API, null, null, {keyword:searchTerm})
    console.log("SEARCHED JOBS API RESPONSE............", response)
    if (!response?.data?.success) {
      toast.error("Could Not Get Searched Jobs")
    }

    if(response?.data?.data.length === 0){
      toast.error("Jobs not available for this search")
    }

    toast.success("Searched Jobs Are Here")
    result = response?.data?.data
  } catch (error) {
    console.log("SEARCHED JOBS API ERROR............", error)
    toast.error(error.message)
  }
  toast.dismiss(toastId)
  return result
}

export const getRecentlyPublishedJobs = async () => {
  const toastId = toast.loading("Loading...")
  let result = []
  try {
    const response = await apiConnector("GET", GET_RECENTLY_PUBLISHED_JOBS_API)
    if (!response?.data?.success) {
      throw new Error("Could Not Fetch Recently Published Jobs")
    }
    result = response?.data?.data
  } catch (error) {
    console.log("GET_RECENTLY_PUBLISHED_JOBS_API ERROR............", error)
    toast.error(error.message)
  }
  toast.dismiss(toastId)
  return result
}

export const getFullTimeJobs = async () => {
  const toastId = toast.loading("Loading...")
  let result = []
  try {
    const response = await apiConnector("GET", GET_FULL_TIME_JOBS_API)
    if (!response?.data?.success) {
      throw new Error("Could Not Fetch Full Time Jobs")
    }
    result = response?.data?.data
  } catch (error) {
    console.log("GET_FULL_TIME_JOBS_API ERROR............", error)
    toast.error(error.message)
  }
  toast.dismiss(toastId)
  return result
}

export const getPartTimeJobs = async () => {
  const toastId = toast.loading("Loading...")
  let result = []
  try {
    const response = await apiConnector("GET", GET_PART_TIME_JOBS_API)
    if (!response?.data?.success) {
      throw new Error("Could Not Fetch Part Time Jobs")
    }
    result = response?.data?.data
  } catch (error) {
    console.log("GET_PART_TIME_JOBS_API ERROR............", error)
    toast.error(error.message)
  }
  toast.dismiss(toastId)
  return result
}

export const getInternationalJobs = async () => {
  const toastId = toast.loading("Loading...")
  let result = []
  try {
    const response = await apiConnector("GET", GET_INTERNATIONAL_JOBS_API)
    if (!response?.data?.success) {
      throw new Error("Could Not Fetch PInternational Jobs")
    }
    result = response?.data?.data
  } catch (error) {
    console.log("GET_INTERNATIONSL_JOBS_API ERROR............", error)
    toast.error(error.message)
  }
  toast.dismiss(toastId)
  return result
}

// export const getFilteredJobs = async (filters = {}) => {
//   const toastId = toast.loading("Loading...");
//   let result = [];

//   console.log("filters inside api endpoint : ",filters)

//   try {
//     // Construct URLSearchParams from filters
//     const params = new URLSearchParams(filters).toString();
//     const url = `${FILTER_JOBS_API}?${params}`;
//     console.log('Request URL:', url);

//     const response = await apiConnector("GET", url);

//     if (!response?.data?.success) {
//       throw new Error("Could Not Fetch Filtered Jobs");
//     }

//     result = response?.data?.data;
//     toast.success("Jobs fetched Successfully")
//   } catch (error) {
//     console.log("FILTER_JOBS_API ERROR............", error);
//     toast.error(error.message);
//   }

//   toast.dismiss(toastId);
//   return result;
// };


export const getFilteredJobs = async (queryString) => {
  const toastId = toast.loading("Loading...")
  let result = []
  try {
    const response = await apiConnector("GET", `${FILTER_JOBS_API}?${queryString}`)
    if (!response?.data?.success) {
      throw new Error("Could Not Fetch Filtered Jobs")
    }
    result = response?.data?.data
  } catch (error) {
    console.log("GET_JOBS_API ERROR............", error)
    toast.error(error.message)
  }
  toast.dismiss(toastId)
  return result
}

export const getJobsByProvince = async () => {
  return apiConnector("GET", `${BASE_URL}/job/by-province`)
  .then(response => response)
  .catch(error => { throw new Error('Could Not Fetch Jobs By Province') });
}

export const getJobsByService = async () => {
  return apiConnector("GET", `${BASE_URL}/job/by-service`)
  .then(response => response)
  .catch(error => { throw new Error('Could Not Fetch Jobs By Service') }); 
}

export const getJobsBySector = async () => {
  return apiConnector("GET", `${BASE_URL}/job/by-sector`)
        .then(response => response)
        .catch(error => { throw new Error('Could Not Fetch Jobs By Sector') });
}