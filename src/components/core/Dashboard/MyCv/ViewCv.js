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
import IconBtn from "../../../common/IconBtn"
import { addDays, addYears, format, parseISO, isAfter } from "date-fns";
import {

  fetchResumeDetails,
} from "../../../../services/operations/resumeAPI"
import { SERVICE_STATUS } from "../../../../utils/constants"


export default function ViewCv() {
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



//   addDays(
//     parseISO(resume?.isCode),
//     -1
//   )
//    format(
// addYears(
// addDays(parseISO(res?.data?.createdAt), -1),
// res?.data.productkey?.tenure
// // -1
// ),
// "dd-MM-yyyy"
// )
 
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
        <h1 className="text-3xl font-medium text-black">Candidate Resume</h1>
        <button className="bg-orange-500 text-white text-bold p-2 w-40 h-20 rounded-sm mb-3"
              onClick={downloadCv}
              disabled={!(loading === false)}>
                {loading? (<span>Downloading</span>) : (<span>Download</span>)}
            </button>
      </div>
      <Table className="rounded-xl border border-richblack-800 resume ">
        
        <Tbody>
          {resume === null ? (
            <Tr>
              <Td className="py-10 text-center text-2xl font-medium text-richblack-100">
                Candidate Do Not Have Resume 
                {/* TODO: Need to change this state */}
              </Td>
            </Tr>
          ) : (
            <Tr>
                <Td>
                    <div className="sm:w-[full] lg:flex flex-col gap-3 justify-start items-start p-3 bg-white text-black border-1 border-orange-600 rounded-md " >
                       {/* 
                       tcNumber, firstName="",lastName="", age,gsm,city,state,
            licenseType="",isSrc1,isSrc2,isSrc3,isSrc4,psikoteknik,adrDriverLicense,
            passport,dateOfReceipt,duration,visa,abroadExperience,
            isBlindSpotTraining,isSafeDrivingTraining,isFuelEconomyTraining,isCode95Document,
            europeanExperiencePeriod,
            russiaExperiencePeriod,
            turkicRepublicsExperiencePeriod,
            southExperienceTime
             */}
                        <div>

                        <h3>Personal Information</h3> 
                        
                        <div className="flex gap-60">

                          <div className="flex flex-col ">
                            <p>Name: {resume.firstName} {resume.lastName}</p>
                            <p>TC Number: {resume.tcNumber}</p>
                            <p>Date Of Birth: {resume.age}</p>
                            <p>Passport: {resume.passport}</p>
                            <p>Visa: {resume.visa}</p>
                          </div>

                          <div className="flex flex-col">
                            <p>GSM: {resume.gsm}</p>
                            <p>City: {resume.city}</p>
                            <p>State: {resume.state}</p>
                            <p>email: {resume.email}</p>
                            <p>licenseType: {resume.licenseType}</p>
                          </div>

                        </div>



                        </div>

                          <h3>Main Certifications</h3>
                          

                        <div className="flex gap-20">

                          <div className="flex gap-16">
                            <p>Src1: {resume.isSrc1}</p>
                            <p>Src2: {resume.isSrc2}</p> 
                            <p>Src3: {resume.isSrc3}</p>
                            <p>Src4: {resume.isSrc4}</p>

                          </div>

                          <div className="flex flex-col ">
                            <p>Code 95 Document: {resume.isCode95Document}</p>
                            <p>ADR Driving License: {resume.adrDrivingLicense} </p> 
                            <p>Psychotechnical: {resume.psikoteknik} </p>    
                          </div>
                        </div>

                        <h3>Experience Period</h3>
                        
                        <div className="flex gap-48">


                          <div className="flex flex-col ">
                            <p>Abroad Experience: {resume.abroadExperience}</p>
                            <p>European Experience Period: {resume.europeanExperiencePeriod}</p>
                            <p>Russia Experience Period: {resume.russiaExperiencePeriod}</p>
                          </div>

                          <div className="flex flex-col ml-1">
                            <p>Turkic Republics Experience Period: {resume.turkicRepublicsExperiencePeriod}</p>
                            <p>South Experience Time: {resume.southExperienceTime}</p>
                          </div>

                        </div>

                        <h3>Advance Training And Certificates</h3>
                        

                        <div className="flex gap-60 ">



                          <div className="flex flex-col ">

                            <p>Blind Spot Training: {resume.isBlindSpotTraining}</p>
                            <p>Safe Driving Training: {resume.isSafeDrivingTraining}</p>
                          </div>

                          <div className="flex flex-col ">
                            <p>Fuel Driving Trainiing: {resume.isFuelDrivingTrainiing}</p>

                          </div>
                        </div>
                           
                           {/* TODO: adr and phychotechnical ki valididty show krni h 5 years  */}
                        {/* <p>Duration: {resume.duration}</p> */}
                        
                        
                    </div>
                </Td>
            </Tr>
          )}
        </Tbody>
      </Table>
      
            
      
    </>
  )
}
