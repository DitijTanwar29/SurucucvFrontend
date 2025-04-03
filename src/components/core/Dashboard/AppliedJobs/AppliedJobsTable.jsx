import { useDispatch, useSelector } from "react-redux"
import { Table, Tbody, Td, Th, Thead, Tr } from "react-super-responsive-table"

// import { setService, setEditService } from "../../../../slices/serviceSlice"
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css"
import { useState } from "react"
import { FaCheck } from "react-icons/fa"
import { HiClock } from "react-icons/hi"
import { RiDeleteBin6Line } from "react-icons/ri"
import { useNavigate } from "react-router-dom"
import  ConfirmationModal  from "../../../common/ConfirmationModal"
// import { formatDate } from "../../../../../services/formatDate"
import { FaSpinner } from "react-icons/fa";
import {
  withdrawJobApplication
} from "../../../../services/operations/jobPostAPI"
import { SERVICE_STATUS } from "../../../../utils/constants"


export default function AppliedJobsTable({ jobs, setJobs }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { token } = useSelector((state) => state.auth)
  const { user } = useSelector((state) => state.profile)
  const [loading, setLoading] = useState(false)
  const [confirmationModal, setConfirmationModal] = useState(null)
  const TRUNCATE_LENGTH = 10

  console.log(user)
  const userId = user._id
  console.log("userId : ",userId)

  // TODO :: testing needed for withdrawing , so first apply for job and then test it here

  const handleWithdrawApplication = async (jobId, userId) => {
    setLoading(true);
    try {
      const response = await withdrawJobApplication({ jobId , userId}, token);
      console.log("response inside handler : ",response)
      if (response.data.success) {
        const updatedJobs = jobs.filter(job => job._id !== jobId);
        setJobs(updatedJobs);
      }
      setConfirmationModal(null);
    } catch (error) {
      console.error("Error withdrawing application:", error);
    }
    setLoading(false);
  };

  // console.log("All Course ", courses)

  return (
    <>
      <Table className="rounded-xl border bg-purple-700 rounded-t-md border-purple-700 ">
        <Thead>
          <Tr className="flex gap-x-32 items-center text-center rounded-t-md border-b border-b-purple-700 px-6 py-2">
            <Th className=" text-left text-sm font-medium bg-transparent uppercase text-richblack-5">
              Status
            </Th>
            <Th className="text-left text-sm font-medium uppercase bg-transparent text-richblack-5">
              Job Title
            </Th>
            <Th className="text-left text-sm font-medium uppercase  bg-transparent text-richblack-5">
              Description
            </Th>
            {/* <Th className="text-left text-sm font-medium uppercase bg-transparent text-richblack-100">
              Passport type
            </Th> */}
            <Th className="text-left text-sm font-medium uppercase bg-transparent text-richblack-5">
              Job Location
            </Th>
            <Th className="text-left text-sm font-medium uppercase bg-transparent text-richblack-5">
              Action
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {jobs?.length === 0 ? (
            <Tr>
              <Td className="py-10 text-center text-3xl bg-richblack-25 font-medium text-richblack-900">
                No jobs found
                {/* TODO: Need to change this state */}
              </Td>
            </Tr>
          ) : (
            jobs?.map((job) => (
              <Tr
                key={job._id}
                className="flex justify-between gap-x-3 border-b border-purple-700 px-6 py-8 bg-richblack-25"
              >
                <Td className="flex flex-col gap-x-4">
                  {/* <img
                    src={service?.icon}
                    alt={service?.serviceName}
                    className="h-[148px] w-[220px] rounded-lg object-cover"
                  /> */}
                  {/* <div className="text-lg font-semibold text-richblack-900">{job.companyName}</div> */}
                  <div className="flex flex-col justify-between">
                    
                    {job.status === SERVICE_STATUS.INACTIVE ? (
                      <p className="flex w-fit flex-row items-center gap-2 rounded-full bg-richblack-700 px-2 py-[2px] text-[12px] font-medium text-pink-100">
                        <HiClock size={14} />
                        Inactive
                      </p>
                    ) : (
                      <p className="flex w-fit flex-row items-center gap-2 rounded-full bg-richblack-700 px-2 py-[2px] text-[12px] font-medium text-white">
                        <div className="flex h-3 w-3 items-center justify-center rounded-full bg-black/75 text-white">
                          <FaCheck size={8} />
                        </div>
                        Active
                      </p>
                    )}
                  </div>
                </Td>
                <Td>
                    <p className="text-lg font-semibold text-richblack-900">
                        {job.jobTitle}
                    </p>
                </Td>
                <Td>
                    {/* <p className="text-sm font-medium text-richblack-100">{job.passport}</p> */}
                    <p className="text-semibold text-richblack-900">
                      {job.jobDescription.split(" ").length >
                      TRUNCATE_LENGTH
                        ? job.jobDescription
                            .split(" ")
                            .slice(0, TRUNCATE_LENGTH)
                            .join(" ") + "..."
                        : job.jobDescription}
                    </p>
                </Td>
                <Td>
                    <p className="text-sm font-semibold text-richblack-900">
                        {job.jobLocation}
                    </p>
                </Td>
                <Td className="text-sm font-medium text-richblack-900 ">
                <button
                  disabled={loading}
                  onClick={() => {
                    setConfirmationModal({
                      text1: "Do you want to withdraw your application?",
                      text2: "This action cannot be undone.",
                      btn1Text: !loading ? "Withdraw" : "Processing...",
                      btn2Text: "Cancel",
                      btn1Handler: !loading ? () => handleWithdrawApplication(job._id, user._id)
                      : () => {},
                      btn2Handler: !loading ? () => setConfirmationModal(null) : () => {},
                      });
                    }}
                    title="Withdraw Application"
                    className={`flex items-center gap-2 px-3 py-1 transition-all duration-200 
                      ${loading ? "cursor-not-allowed text-gray-400" : "hover:scale-110 hover:text-[#ff0000]"}`}
                  >
                    {loading ? (
                      <FaSpinner className="animate-spin text-[#ff0000]" />
                    ) : (
                      <RiDeleteBin6Line className="text-lg text-[#ff0000]" />
                    )}
                    <span className="font-semibold">{loading ? "Processing..." : "Withdraw"}</span>
                  </button>
                </Td>
              </Tr>
            ))
          )}
        </Tbody>
      </Table>
      {confirmationModal && <ConfirmationModal modalData={confirmationModal} />}
    </>
  )
}
