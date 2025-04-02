import { useEffect, useState } from "react"
import { VscAdd } from "react-icons/vsc"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { getAllJobs, getAllJobsByCompanyId } from "../../../../services/operations/jobPostAPI"
import IconBtn from "../../../common/IconBtn"

import JobsTable from "./JobsTable"

export default function AddJobs() {
  const { token } = useSelector((state) => state.auth)
  const navigate = useNavigate()
  const [jobs, setJobs] = useState([])
  const { user } = useSelector((state) => state.profile)

  useEffect(() => {
    if (user?.companyDetails?.paymentStatus === "Approved") {
    const fetchJobs = async () => {
      const result = await getAllJobsByCompanyId(user._id)
      console.log("result My Jobs : ",result);

      if (result) {
        setJobs(result)
      }
    }
    fetchJobs()
  }
    // eslint-disable-next-line react-hooks/exhaustive-deps
}, [user])

  return (
    <>
    {user?.companyDetails?.paymentStatus === "Requested" ? (
      <div className="mt-10 flex justify-center">
  <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-6 py-4 rounded-lg shadow-md max-w-lg w-full relative">
    <div className="flex items-center space-x-4">
      <svg
        className="w-8 h-8 text-yellow-500 animate-spin"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 8v4l3 3m9 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <div className="text-left">
        <h3 className="text-lg font-bold text-yellow-700">Payment Approval Pending!</h3>
        <p className="text-sm text-yellow-600 mt-1">
          Your payment is awaiting admin approval. You cannot create and check your advertisement list until the payment is approved. Please
          check back later or{" "}
          <a href="/contact" className="text-yellow-800 font-semibold hover:underline">
            contact support
          </a>{" "}
          for assistance.
        </p>
      </div>
    </div>

    {/* Optional Progress Indicator */}
    <div className="mt-4 bg-yellow-200 rounded-full h-2">
      <div className="bg-yellow-500 h-2 rounded-full animate-pulse w-3/4"></div>
    </div>
  </div>
</div>
    ) : (
    <div>
      <div className="mb-14 flex items-center lg:mt-14 justify-between">
        <h1 className="text-3xl font-medium text-black">My Jobs</h1>
        <IconBtn
          text="Add Job Post"
          onclick={() => navigate("/dashboard/post-job")}
        >
          <VscAdd />
        </IconBtn>
      </div>

      {jobs && <JobsTable jobs={jobs} setJobs={setJobs} />}
    </div>
    )}
    </>
  )
}
