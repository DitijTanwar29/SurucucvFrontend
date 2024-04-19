import { toast } from "react-hot-toast"
import { apiConnector } from "../apiConnector"
import { jobEndpoints } from "../apis"


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
} = jobEndpoints








export const addJobPost = async (data, token) => {
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
      toast.success("Job Post Details Added Successfully")
      result = response?.data?.data
    } catch (error) {
      console.log("CREATE JOB POST API ERROR............", error)
      toast.error(error.message)
    }
    toast.dismiss(toastId)
    return result
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