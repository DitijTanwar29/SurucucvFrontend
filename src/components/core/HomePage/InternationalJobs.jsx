import React, { useEffect, useState } from 'react';
import { getInternationalJobs  } from '../../../services/operations/jobPostAPI';
import { Link } from 'react-router-dom';

const InternationalJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    // Fetch recently published jobs from the backend
    const fetchJobs = async () => {
      try {
        const response = await getInternationalJobs();
        console.log("INTERNATIONAL JOBS :",response);
        setJobs(response);
      } catch (error) {
        console.error('Error fetching international jobs:', error.message);
      }
    };
    fetchJobs();
  }, []);

  const TRUNCATE_LENGTH = 8

  return (
    <div className="lg:w-full  shadow-lg  p-3 bg-white rounded-lg" >
    <div className='flex justify-between p-2'>
      <h4 className='leading-4'>INTERNATIONAL JOBS</h4>
      <Link to="/find-job" className='text-orange-400 font-semibold hover:text-orange-400'>All Jobs</Link>
    </div>
      <div className="jobs-grid  rounded-lg p-1 ">
        {jobs.map((job) => (
          <Link to={`/job/${job._id}`} key={job._id} className="job-card">
            <div className='flex gap-2 shadow-sm p-1 shadow-pure-greys-500 h-[200px]'>
                
              <img
                alt={job.companyName}
                className="h-[78px] w-[78px] rounded-lg object-cover"
                src={job?.company?.image}
              />

              <div className='flex flex-col space-y-1 p-1'>
                <div className='space-y-1'>

                  <h5 className='text-black'>{job.jobTitle}</h5>
                  <p className='text-[16px]'>{
                  job?.jobDescription.split(" ").length >
                            TRUNCATE_LENGTH
                              ? job?.jobDescription
                                  .split(" ")
                                  .slice(0, TRUNCATE_LENGTH)
                                  .join(" ") + "..."
                              : job?.jobDescription}</p>
                  <p>Vacancies : {job.numberOfVacancy}</p>
                </div>
                <div className='flex justify-evenly gap-8 '>
                
                <p className='font-mono font-light text-sm'> Job Location : {job.jobLocation}</p>
                <p className='font-mono font-light text-sm'>{job.jobType}</p>

                
              </div>
            </div>
            </div>
              {/* Render other job details here */}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default InternationalJobs;