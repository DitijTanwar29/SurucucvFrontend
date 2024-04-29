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
import {
  deleteSector,
  getAllSectors,
} from "../../../../services/operations/sectorAPI"
import { SERVICE_STATUS } from "../../../../utils/constants"
import  SectorStatusToggle  from "../Sectors/SectorStatusToggle"



export default function SectorsTable({ sectors, setSectors }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { token } = useSelector((state) => state.auth)
  const [loading, setLoading] = useState(false)
  const [confirmationModal, setConfirmationModal] = useState(null)
  const TRUNCATE_LENGTH = 30
// console.log("sectors : ",sectors)

  const handleSectorDelete = async (sectorId) => {
    setLoading(true)
    await deleteSector({ sectorId: sectorId }, token)
    const result = await getAllSectors(token)
    if (result) {
      setSectors(result)
    }
    setConfirmationModal(null)
    setLoading(false)
  }


  return (
    <>
      <Table className="rounded-xl border border-richblack-800 ">
        <Thead>
          <Tr className="flex gap-x-24 rounded-t-md border-b bg-orange-400 border-b-richblack-800 px-6 py-2">
            
            <Th className=" text-left text-sm font-medium text-black bg-orange-400 uppercasebg-transparent">
              Service Name
            </Th>
            
            <Th className="text-left text-sm font-medium uppercase bg-orange-400 text-black bg-transparent">
              Status
            </Th>

            <Th className="text-left text-sm font-medium uppercase text-black bg-transparent">
              Action
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {sectors?.length === 0 ? (
            <Tr>
              <Td className="py-10 text-center text-2xl bg-orange-300 font-medium text-black">
                No sectors found
                {/* TODO: Need to change this state */}
              </Td>
            </Tr>
          ) : (
            sectors?.map((sector) => (
              <Tr
                key={sector._id}
                className="flex gap-x-10 border-b bg-yellow-300 border-richblack-800 px-6 py-8"
              >
                
                  <Td>
                    <p className=" text-lg font-semibold text-black">
                      {sector.sectorName}
                    </p>
                  </Td>                  
                
                <Td>
                  <SectorStatusToggle sector={sector}/>
                </Td>
                <Td className="text-sm font-medium text-richblack-100">
                  {sector.action}
                </Td>
                <Td className="text-sm font-medium text-richblack-100 ">
                  <button
                    disabled={loading}
                    onClick={() => {
                      navigate(`/dashboard/edit-sector/${sector._id}`)
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
                        text1: "Do you want to delete this sector?",
                        text2:
                          "All the data related to this sector will be deleted",
                        btn1Text: !loading ? "Delete" : "Loading...  ",
                        btn2Text: "Cancel",
                        btn1Handler: !loading
                          ? () => handleSectorDelete(sector._id)
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
