import { useDispatch, useSelector } from "react-redux"
import { Table, Tbody, Td, Th, Thead, Tr } from "react-super-responsive-table"
import { VscAdd } from "react-icons/vsc"
import html2canvas from "html2canvas"
import jsPDF from "jspdf"
// import { setService, setEditService } from "../../../../slices/serviceSlice"
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css"
import { useState, useEffect } from "react"
import { FaCheck } from "react-icons/fa"
import { FiEdit2 } from "react-icons/fi"
import { HiClock } from "react-icons/hi"
import { RiDeleteBin6Line } from "react-icons/ri"
import { useNavigate } from "react-router-dom"
import  ConfirmationModal  from "../../../../components/common/ConfirmationModal"
import IconBtn from "../../../common/IconBtn"

import {

  fetchResumeDetails,
} from "../../../../services/operations/resumeAPI"
import { SERVICE_STATUS } from "../../../../utils/constants"


export default function MyCv() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { token } = useSelector((state) => state.auth)
  
  const { user } = useSelector((state) => state.profile)
  console.log("user in cv : ",user)
  const resumeId = user.resume
  console.log("user?.resume : ",user?.resume)

  const [loading, setLoading] = useState(false)
  const [confirmationModal, setConfirmationModal] = useState(null)
  const TRUNCATE_LENGTH = 10
  const [resumeDetails, setResumeDetails] = useState(null);



 
//   const handleJobDelete = async (resumeId) => {
//     setLoading(true)
//     await deleteJob({ jobId: resumeId }, token)
//     const result = await getAllJobs(token)
//     if (result) {
//       setJobs(result)
//     }
//     setConfirmationModal(null)
//     setLoading(false)
//   }

 

const [resume, setResume] = useState([])

  useEffect(() => {
    const fetchResume = async () => {
      const result = await fetchResumeDetails()
      console.log("result : ",result);
      if (result) {
        console.log("result?.[0]:",result?.[0])
        // console.log("result?.[0]?.[0]",result?.[0]?.[0])
        setResume(result?.[0])
      }
    }
    fetchResume()
    // eslint-disable-next-line react-hooks/exhaustive-deps
}, [])

  const downloadCv = () => {
    const capture = document.querySelector(".resume")
    setLoading(true)
    html2canvas(capture).then((canvas)=>{
      const imgData = canvas.toDataURL("img/png")

      const doc = new jsPDF('p','mm','a4');
      const componentWidth = doc.internal.pageSize.getWidth()
      const componentHeight = doc.internal.pageSize.getHeight()
      doc.addImage(imgData,'PNG', 0, 0, componentWidth, componentHeight)
      setLoading(false)
      doc.save('candidate-cv.pdf');
    })


  }

  return (
    <>

<div className="mb-14 flex items-center justify-between ">
        <h1 className="text-3xl font-medium text-richblack-5">My Resume</h1>
        <IconBtn
          text="Add Resume"
          onclick={() => navigate("/dashboard/create-cv")}
        >
          <VscAdd />
        </IconBtn>
      </div>
      <Table className="rounded-xl border border-richblack-800 resume ">
        <Thead>
          <Tr className="flex gap-x-10 rounded-t-md border-b border-b-richblack-800 px-6 py-2">
            <Th className="flex-1 text-left text-sm font-medium bg-transparent uppercase text-richblack-100">
              
            </Th>
            
          </Tr>
        </Thead>
        <Tbody>
          {resume === null ? (
            <Tr>
              <Td className="py-10 text-center text-2xl font-medium text-richblack-100">
                Create Resume 
                {/* TODO: Need to change this state */}
              </Td>
            </Tr>
          ) : (
            <Tr>
                <Td>
                    <div className="flex flex-col gap-3 justify-start items-start p-3  bg-white text-black border-1 border-orange-600 rounded-md " >
                        <p>First Name: {resume.firstName}</p>
                        <p>Last Name: {resume.lastName}</p>
                        <p>Age: {resume.age}</p>
                        <p>isSrc1: {resume.isSrc1}</p>
                        <p>isSrc2: {resume.isSrc2}</p> 
                        <p>isSrc3: {resume.isSrc3}</p>
                        <p>isSrc4: {resume.isSrc4}</p>
                        <p>psikoteknik: {resume.psikoteknik} </p>     
                        <p>adrDrivingLicense: {resume.adrDrivingLicense} </p> 
                        <p>dateOfReceipt: {resume.dateOfReceipt} </p>    
                        <p>duration: {resume.duration}</p>
                        <p>isCode95Document: {resume.isCode95Document}</p>
                        <p>isBlindSpotTraining: {resume.isBlindSpotTraining}</p>
                        <p>isSafeDrivingTraining: {resume.isSafeDrivingTraining}</p>
                        <p>isFuelDrivingTrainiing: {resume.isFuelDrivingTrainiing}</p>
                        <p>email: {resume.email}</p>
                        <p>tcNumber: {resume.tcNumber}</p>
                        <p>age: {resume.age}</p>
                        <p>gsm: {resume.gsm}</p>
                        <p>city: {resume.city}</p>
                        <p>state: {resume.state}</p>
                        <p>licenseType: {resume.licenseType}</p>
                        <p>passport: {resume.passport}</p>
                        <p>visa: {resume.visa}</p>
                        <p>abroadExperience: {resume.abroadExperience}</p>
                        <p>europeanExperiencePeriod: {resume.europeanExperiencePeriod}</p>
                        <p>russiaExperiencePeriod: {resume.russiaExperiencePeriod}</p>
                        <p>turkicRepublicsExperiencePeriod: {resume.turkicRepublicsExperiencePeriod}</p>
                        <p>southExperienceTime: {resume.southExperienceTime}</p>
                    </div>
                </Td>
            </Tr>
          )}
        </Tbody>
      </Table>
      {/* <a href="MyCv" download 
        >
        </a> */}
            <button className="bg-orange-500 text-white text-bold p-2 w-26 h-20 rounded-sm mb-3"
              onClick={downloadCv}
              disabled={!(loading === false)}>
                {loading? (<span>Downloading</span>) : (<span>Download</span>)}
            </button>
      {confirmationModal && <ConfirmationModal modalData={confirmationModal} />}
    </>
  )
}
