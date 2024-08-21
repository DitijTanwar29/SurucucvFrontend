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
import  ConfirmationModal  from "../../../../components/common/ConfirmationModal"
// import { formatDate } from "../../../../../services/formatDate"

import  PackageStatusToggle  from "../Packages/PackageStatusToggle"
import { deletePackage, getAllPackages } from "../../../../services/operations/packageAPI"

export default function PackagesTable({ packages, setPackages }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { token } = useSelector((state) => state.auth)
  const [loading, setLoading] = useState(false)
  const [confirmationModal, setConfirmationModal] = useState(null)
//   const TRUNCATE_LENGTH = 15
// console.log("services : ",services)

  const handlePackageDelete = async (packageId) => {
    setLoading(true)
    await deletePackage({ packageId: packageId }, token)
    const result = await getAllPackages(token)
    if (result) {
      setPackages(result)
    }
    setConfirmationModal(null)
    setLoading(false)
  }


  return (
    <>
      <Table className="rounded-xl border bg-black/55 rounded-t-md border-richblack-800 ">
        <Thead>
          <Tr className="flex gap-x-28 items-center rounded-t-md border-b border-b-richblack-800 px-6 py-2">
            <Th className="text-center text-sm font-semibold  uppercase text-richblack-5 bg-transparent">
                Package Name
            </Th>
            <Th className="text-center text-sm font-semibold  uppercase text-richblack-5 bg-transparent">
                Package Price
            </Th>
            <Th className="text-center text-sm font-semibold uppercase text-richblack-5 bg-transparent">
              Discounted Price
            </Th>
            <Th className="text-center text-sm font-semibold uppercase text-richblack-5 bg-transparent">
              Status
            </Th>
            <Th className="text-center text-sm font-semibold uppercase text-richblack-5 bg-transparent">
              Action
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {packages?.length === 0 ? (
            <Tr className="bg-richblack-200">
              <Td className="py-10 text-center text-2xl font-semibold text-richblack-5">
                No packages found
                {/* TODO: Need to change this state */}
              </Td>
            </Tr>
          ) : (
            packages?.map((pack) => (
              <Tr
                key={pack._id}
                className="flex gap-x-1 border-b border-richblack-800 px-6 py-8 bg-richblack-200 justify-between"
              >
                {/* <Td className="flex gap-x-4">
                  <img
                    src={package?.icon}
                    alt={package?.packageName}
                    className="h-[148px] w-[220px] rounded-lg object-cover"
                  />
                  </Td> */}
                  <Td>
                    <p className="text-lg font-semibold text-richblack-5 text-center">
                      {pack.packageName}
                    </p>
                  </Td>
                  <Td>
                    <p className="text-lg font-semibold text-richblack-5 text-center">
                    {pack.packagePrice}
                    </p>
                  </Td>
                  <Td>
                    <p className="text-lg font-semibold text-richblack-5  text-center">
                      {pack.discountedPrice}
                    </p>
                  </Td>
                  {/* <div className="flex flex-col justify-between">
                       {service.status = setStatus}
                    <p className="text-[12px] text-white">
                        {status}
                    </p>
                    {service.status === SERVICE_STATUS.INACTIVE ? (
                      <p className="flex w-fit flex-row items-center gap-2 rounded-full bg-richblack-700 px-2 py-[2px] text-[12px] font-medium text-pink-100">
                        <HiClock size={14} />
                        Inactive
                      </p>
                    ) : (
                      <p className="flex w-fit flex-row items-center gap-2 rounded-full bg-richblack-700 px-2 py-[2px] text-[12px] font-medium text-yellow-100">
                        <div className="flex h-3 w-3 items-center justify-center rounded-full bg-yellow-100 text-richblack-700">
                          <FaCheck size={8} />
                        </div>
                        Active
                      </p>
                    )}
                  </div> */}
                
                <Td>
                  <PackageStatusToggle pack={pack}/>
                </Td>
                
                <Td className="text-xs text-richblack-5 ">
                  <button
                    disabled={loading}
                    onClick={() => {
                      navigate(`/dashboard/edit-package/${pack._id}`)
                    }}
                    title="Edit"
                    className="px-2 transition-all duration-200 hover:scale-110 hover:text-caribbeangreen-300"
                  >
                    <FiEdit2 size={20} />
                  </button>
                  <button
                    disabled={loading}
                    onClick={() => {
                      setConfirmationModal({
                        text1: "Do you want to delete this package?",
                        text2:
                          "All the data related to this package will be deleted",
                        btn1Text: !loading ? "Delete" : "Loading...  ",
                        btn2Text: "Cancel",
                        btn1Handler: !loading
                          ? () => handlePackageDelete(pack._id)
                          : () => {},
                        btn2Handler: !loading
                          ? () => setConfirmationModal(null)
                          : () => {},
                      })
                    }}
                    title="Delete"
                    className="px-1 transition-all duration-200 hover:scale-110 hover:text-[#ff0000]"
                  >
                    <RiDeleteBin6Line size={20} />
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
