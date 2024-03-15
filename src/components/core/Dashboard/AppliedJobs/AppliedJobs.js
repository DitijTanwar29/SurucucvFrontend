import React from 'react'
import { useEffect, useState } from "react"
import { VscAdd } from "react-icons/vsc"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { getAppliedJobs } from "../../../../services/operations/jobPostAPI"
import IconBtn from "../../../common/IconBtn"

import AppliedJobsTable from "./AppliedJobsTable"
const AppliedJobs = () => {
// yaha api change krni h getAllJobs ki jagah new api bnao which will show jobs presend in candidate jobs path
  const { token } = useSelector((state) => state.auth)
  const navigate = useNavigate()
  const [jobs, setJobs] = useState([])

  useEffect(() => {
    const fetchJobs = async () => {
      const result = await getAppliedJobs(token)
      console.log("result : ",result);
      if (result) {
        setJobs(result)
      }
    }
    fetchJobs()
    // eslint-disable-next-line react-hooks/exhaustive-deps
}, [])

  return (
    // <div>AppliedJobs</div>
    <div>
      {/* <div className="mb-14 flex items-center justify-between">
        <h1 className="text-3xl font-medium text-richblack-5">My Jobs</h1>
        <IconBtn
          text="Add Job Post"
          onclick={() => navigate("/dashboard/post-job")}
        >
          <VscAdd />
        </IconBtn>
      </div> */}

      {jobs && <AppliedJobsTable jobs={jobs} setJobs={setJobs}/>}
      {/* {jobs && <JobsTable jobs={jobs} setJobs={setJobs} />} */}
    </div>
  )
}

export default AppliedJobs

