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


  return (
    <div className="container sm:flex-col flex lg:flex  gap-3 mx-auto mt-16 py-8 bg-white rounded-sm">
    {/* <button className='w-24 h-14 p-2 text-white rounded-sm bg-blue-300 hover:bg-orange-600 '
    onClick={clickHandler}
    >
      
      {(loading === false ? ("Apply Now") : ("Loading"))}
    </button> */}

    <IconBtn
      text={loading ? "Applying..." : apply}
          onclick={clickHandler}
      >
      {!loading && (
        apply ?  
        <BsBoxArrowRight className="text-lg text-richblack-900" />
        : <PiSealCheckLight className='text-lg text-caribbeangreen-500' />
      )}
      </IconBtn>
      <div className='lg:w-[70%] sm:w-full bg-black rounded-lg shadow-md text-white p-4 '>
      <div className='w-full flex justify-center items-center'>
        <h1 className="text-3xl font-bold mb-4">{job.jobTitle}</h1>
        <img src={job.company.image} className='w-[4rem]' />
      </div>
      <p className="text-lg font-medium mb-2">Company: {job.companyName}</p>
      <p className="text-lg font-medium mb-2">Location: {job.jobLocation}</p>
      <p className="text-lg font-medium mb-2">Salary Range: {job.rangeOfSalary}</p>
      <div className="text-lg mb-6 flex flex-wrap ">
          Job Description: {job.jobDescription}
      </div>
      </div>

      <div className="lg:w-[70%] sm:w-full bg-orange-400 rounded-lg shadow-md p-4">
        <h2 className="text-xl font-semibold mb-4">Requirements</h2>
        <p className="text-lg mb-2">Required Skills: {job.requiredSkills}</p>
        <p className="text-lg mb-2">Required Experience: {job.requiredExperience} years</p>
        <p className="text-lg mb-2">Number of Vacancy: {job.numberOfVacancy}</p>
        <p className="text-lg mb-2">Job Type: {job.jobType}</p>
        <p className="text-lg mb-2">Status: {job.status}</p>
        <p className="text-lg mb-2">License Type: {job.licenseType}</p>
        <p className="text-lg mb-2">Job Start Date: {new Date(job.startDate).toLocaleDateString()}</p>
        <p className="text-lg mb-2">Job End Date: {new Date(job.endDate).toLocaleDateString()}</p>

        <p className="text-lg mb-2">Having a Psychotechnical Certificate for {job.psikoteknik} years</p>
        <p className='text-lg mb-2'>He has had a Basic ADR Driver License for {job.adrDriverLicence} years</p>
      </div>

    </div>
  );
};

export default JobDetailsPage;