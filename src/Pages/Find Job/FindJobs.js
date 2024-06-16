import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllApprovedJobs } from '../../services/operations/jobPostAPI'; // Import the function to fetch all jobs
import JobFilters from './JobFilters';

const FindJobs = () => {
  const [jobs, setJobs] = useState([]);
  console.log("jobs: ", jobs)
  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllApprovedJobs(); // Fetch all jobs from the backend
      console.log("jobs data from backend api : ",data)
      setJobs(data);
    };
    fetchData();
  }, []);

  return (
    <div className="w-full mx-auto  p-5 lg:mt-10">

      <JobFilters/>
      <h1 className="text-3xl font-bold text-center mb-8">Find Jobs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
        {jobs.map(job => (
          <Link to={`/job/${job._id}`} key={job._id}>
            <div className="bg-gradient-to-br from-rose-100 via-purple-200 to-purple-200 m-2  text-pure-greys-900 mx-auto shadow-md rounded-lg overflow-hidden">
              <div className="p-4">
                <h2 className="text-lg font-bold mb-2">{job.jobTitle}</h2>
                <p className="text-sm text-gray-600 mb-2">{job.companyName}</p>
                <p className="text-sm text-gray-600 mb-2">Salary Range: {job.rangeOfSalary}</p>
                <p className="text-sm text-gray-600 mb-2">{job.jobLocation}</p>
                {/* Add other important fields here */}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FindJobs;