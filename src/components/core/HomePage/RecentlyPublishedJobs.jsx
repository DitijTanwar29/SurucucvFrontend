import React, { useEffect, useState } from 'react';
import { getRecentlyPublishedJobs } from '../../../services/operations/jobPostAPI';
import { Link } from 'react-router-dom';

const RecentlyPublishedJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    // Fetch recently published jobs from the backend
    const fetchJobs = async () => {
      try {
        const response = await getRecentlyPublishedJobs();
        console.log("RECENTLY PUBLISHED JOBS :",response);
        setJobs(response);
      } catch (error) {
        console.error('Error fetching recently published jobs:', error.message);
      }
    };
    fetchJobs();
  }, []);

  const TRUNCATE_LENGTH = 8

  return (
    <div className="lg:w-[90%] recently-published-jobs-container shadow-lg border-1 border-white p-3">
      <h2>Recently Published Jobs</h2>
      <div className="jobs-grid border-2 border-white shadow-lg rounded-lg p-1">
        {jobs.map((job) => (
          <Link to={`/job/${job._id}`} key={job._id} className="job-card">
            <div className='flex gap-2'>
                
              <img
                alt={job.companyName}
                className="h-[148px] w-[220px] rounded-lg object-cover"
                src={job.company.image}
              />

              <div className='flex flex-col gap-1'>
                <h3>{job.jobTitle}</h3>
                <p>{
                job.jobDescription.split(" ").length >
                          TRUNCATE_LENGTH
                            ? job.jobDescription
                                .split(" ")
                                .slice(0, TRUNCATE_LENGTH)
                                .join(" ") + "..."
                            : job.jobDescription}</p>
                <p>Number Of Vacancies :{job.numberOfVacancy}</p>
                <p> Job Location : {job.jobLocation}</p>
              </div>
            </div>
              {/* Render other job details here */}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RecentlyPublishedJobs;
