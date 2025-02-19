import { useDispatch, useSelector } from "react-redux"
import { Table, Tbody, Td, Th, Thead, Tr } from "react-super-responsive-table"

// import { setService, setEditService } from "../../../../slices/serviceSlice"
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css"
import { useState } from "react"
import { FaCheck } from "react-icons/fa"
import { FiEdit2 } from "react-icons/fi"
import { HiClock } from "react-icons/hi"
import { RiDeleteBin6Line } from "react-icons/ri"
import { useNavigate } from "react-router-dom"
import  ConfirmationModal  from "../../../common/ConfirmationModal"
// import { formatDate } from "../../../../../services/formatDate"
import {
  deleteJob,
  getAllJobs,
} from "../../../../services/operations/jobPostAPI"
import { SERVICE_STATUS } from "../../../../utils/constants"
import MyCv from "../MyCv/MyCv"
import { Link } from 'react-router-dom';
import IconBtn from "../../../common/IconBtn"

export default function AppliedCandidatesTable({ appliedCandidates, setAppliedCandidates }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { token } = useSelector((state) => state.auth)
  const [loading, setLoading] = useState(false)
  const [confirmationModal, setConfirmationModal] = useState(null)
  
  return (
    <>
      <Table className="rounded-xl border border-purple-700 bg-purple-700">
        <Thead>
          <Tr className="flex gap-x-10 rounded-t-md border-b border-b-purple-700 px-6 py-2">
            <Th className=" text-left text-sm font-semibold bg-transparent uppercase text-richblack-5">
              Candidate Name
            </Th>
            <Th className="text-left text-sm font-semibold uppercase bg-transparent text-richblack-5">
              Email
            </Th>
            <Th className="text-left text-sm font-semibold uppercase  bg-transparent text-richblack-5">
              Contact Number
            </Th>
            <Th className="text-left text-sm font-semibold uppercase bg-transparent text-richblack-5">
              Resume
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {appliedCandidates?.length === 0 ? (
            <Tr className=" bg-richblack-25">
              <Td className="py-10 text-center text-2xl font-semibold text-richblack-900">
                No Candidates found
                {/* TODO: Need to change this state */}
              </Td>
            </Tr>
          ) : (
            appliedCandidates?.map((appliedCandidate) => (
              <Tr
                key={appliedCandidate._id}
                className="flex gap-x-6 border-b border-purple-700 px-3 py-8 bg-richblack-25"
              >
                     
                <Td>
                    <p className="text-lg font-semibold text-richblack-900">
                        {appliedCandidate.name}
                    </p>
                </Td>
                <Td>
                    <p className="text-md font-medium text-richblack-900">{appliedCandidate.email}</p>
                </Td>
                <Td>
                  <p className="text-md font-medium text-richblack-900">
                    {appliedCandidate.contactNumber}
                  </p>
                </Td>
                <Td>

                    <IconBtn className="bg-purple-700 text-white text-bold p-2 w-26 h-20 rounded-sm mb-3"
                    text="View Candidate CV"
                    onclick={() => { navigate("/dashboard/view-cv") }}
                    >
                    
                    {/* <Link to={`/view-cv`} /> */}
                    
                    </IconBtn>
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
