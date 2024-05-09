import React, { useEffect, useState } from 'react';
import { getPartTimeJobs  } from '../../../services/operations/jobPostAPI';
import { Link } from 'react-router-dom';

const PartTimeJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    // Fetch recently published jobs from the backend
    const fetchJobs = async () => {
      try {
        const response = await getPartTimeJobs();
        console.log("FULL TIME JOBS :",response);
        setJobs(response);
      } catch (error) {
        console.error('Error fetching full time jobs:', error.message);
      }
    };
    fetchJobs();
  }, []);

  const TRUNCATE_LENGTH = 8

  return (
    <div className="recently-published-jobs-container">
      <h2>Part Time Jobs</h2>
      <div className="jobs-grid">
        {jobs.map((job) => (
          <Link to={`/job/${job._id}`} key={job._id} className="job-card">
            <div className='flex gap-2'>
                
              <img
                alt={job.companyName}
                className="h-[148px] w-[220px] rounded-lg object-cover"
                src={job?.company?.image}
              />

              <div className='flex flex-col gap-1'>
                <h3>{job.jobTitle}</h3>
                <p>{
                job?.jobDescription.split(" ").length >
                          TRUNCATE_LENGTH
                            ? job?.jobDescription
                                .split(" ")
                                .slice(0, TRUNCATE_LENGTH)
                                .join(" ") + "..."
                            : job?.jobDescription}</p>
                <p>Number Of Vacancies :{job.numberOfVacancy}</p>
                <div className='flex gap-10 justify-center items-center'>
                <p> Job Location : {job.jobLocation}</p>
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

export default PartTimeJobs;
