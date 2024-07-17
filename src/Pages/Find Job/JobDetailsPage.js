import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {useSelector, useDispatch} from "react-redux"
import { fetchJobDetails, applyForJob } from '../../services/operations/jobPostAPI'; // Implement getJobById function in your job service
import IconBtn from "../../components/common/IconBtn"
import { BsBoxArrowRight } from "react-icons/bs";
import { PiSealCheckLight } from "react-icons/pi";
const JobDetailsPage = ({user}) => {
  const dispatch = useDispatch()
  const { jobId } = useParams();
  console.log("jobId :", jobId);
  // const { user } = useSelector((state) => state.profile)
  const { token } = useSelector((state) => state.auth)
  // console.log("userId :", userId)
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(false);
  const [apply, setApply] = useState('Apply');
  console.log("job", job)
  useEffect(() => {
    const fetchJob = async () => {
      const fetchedJob = await fetchJobDetails(jobId); // Implement getJobById function in your job service
      setJob(fetchedJob?.[0]);
    };
    fetchJob();
  }, [jobId]);

  if (!job) {
    return <div className="text-center mt-8">Loading...</div>;
  }
  // isko resolve krvana hai kl
  const clickHandler = () => {
    try{
      console.log("jobId inside click handler: ",jobId )
      console.log("Applying...")
      setLoading(true)
      dispatch(applyForJob(token, {jobId:jobId})).then(() => {
        setLoading(false)
        setApply('Applied')
      })
    }catch(error){
      console.log("ERROR MESSAGE - ", error.message)

    }
  }

  console.log(job.licenseType.map(item => item.replace(/,/g, ', ')))



  return (
    <div className="container sm:flex-col relative flex lg:flex-col  gap-3 mx-auto mt-16 py-8 bg-white rounded-sm">

    
      <div className='lg:w-[full]  lg:h-[465px]  sm:w-full bg-slate-400 rounded-lg shadow-md text-white p-4 '>
      <div className='w-full flex justify-center items-center'>
        <h1 className="text-3xl font-bold mb-4">İş unvanı - {job.jobTitle}</h1>
        <img src={job.company.image} className='w-[4rem] ml-5 rounded-md' alt='company-logo' />
      </div>
      <p className="text-lg font-medium mb-2">Firma Adı : {job.companyName}</p>
      <p className="text-lg font-medium mb-2">iş konumu : {job.jobLocation}</p>
      <p className="text-lg font-medium mb-2">Maaş aralığı : {job.rangeOfSalary}</p>
      <div className="text-lg mb-6 flex flex-wrap ">
      İş tanımı : {job.jobDescription}
      </div>

      <IconBtn customClasses={" text-center absolute z-50"}
      text={loading ? "Applying..." : apply}
          onclick={clickHandler}
      >
      {!loading && (
        apply ?  
        <BsBoxArrowRight className="text-lg text-richblack-900" />
        : <PiSealCheckLight className='text-lg text-caribbeangreen-500' />
      )}
      </IconBtn>
      </div>

      <div className="lg:w-[full] sm:w-full  bg-gradient-to-tr  from-slate-50 via-slate-50 to-gray-300
       transition-all duration-300 ease-in-out
       rounded-lg shadow-md p-4">
        <h2 className="font-semibold mb-4 text-center bg-gradient-to-r from-purple-600 to-orange-600 bg-clip-text text-transparent ">Gereksinimler</h2>
        <p className="text-lg mb-2">Required Skills: {job.requiredSkills}</p>
        <p className="text-lg mb-2">Required Experience: {job.requiredExperience} years</p>
        <p className="text-lg mb-2">Number of Vacancy: {job.numberOfVacancy}</p>
        <p className="text-lg mb-2">Job Type: {job.jobType}</p>
        <p className="text-lg mb-2">Status: {job.status}</p>
        <p className="text-lg mb-2">License Type: {job.licenseType.map(item => item.replace(/,/g, ', '))}</p>
        <p className="text-lg mb-2">Job Start Date: {new Date(job.startDate).toLocaleDateString()}</p>
        <p className="text-lg mb-2">Job End Date: {new Date(job.endDate).toLocaleDateString()}</p>

        <p className="text-lg mb-2">Having a Psychotechnical Certificate valid for {job.psikoteknik} years</p>
        <p className='text-lg mb-2'>Having an ADR Driver License valid for {job.adrDrivingLicence} years</p>
      </div>

      

    </div>
  );
};

export default JobDetailsPage;