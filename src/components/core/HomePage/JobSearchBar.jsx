import React, { useState, useRef } from 'react';
import { searchJobs } from "../../../services/operations/jobPostAPI";
import { useNavigate, Link } from 'react-router-dom';
import useOnClickOutside from "../../../hook/useOnClickOutside"
import toast from 'react-hot-toast';
const JobSearchBar = () => {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('');
  const [jobs, setJobs] = useState([]);
  const [showServices, setShowServices] = useState(false);
  const ref = useRef(null)
  const searchBarRef = useRef(null)
  const [open, setOpen] = useState(false);

  useOnClickOutside(ref, () => setOpen(false))
  useOnClickOutside(ref, () => setJobs([]))
  const handleSearch = async () => {
    try {
      console.log("searched term is : ", searchTerm)
      const response = await searchJobs(searchTerm); // Pass searchTerm to the function
      console.log("search bar response :", response)
      if (response.length === 0) {
        setJobs([])
        toast.error("Jobs not available for this search")
        setShowServices(false);
      }
      setJobs(response);
      setShowServices(true);
    } catch (error) {
      // toast.error("Jobs not available for this search")
      console.error('Error searching for jobs:', error.message);
    }
  };

  return (
    <div className='flex flex-col h-auto min-h-[5rem]  w-full '>
      <div className='flex flex-col md:flex-row lg:flex-row gap-4 sm:gap-x-12 w-full'>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => setShowServices(true)}
          onBlur={() => setShowServices(false)}
          placeholder="Search for job titles..."
          onClick={() => navigate('/search')}
          className="w-full sm:max-w-[500px] h-14 bg-white-100 rounded-full p-3 outline-none border-none focus-visible:ring-1 ring-[#000]"
        />
        <button 
          onClick={handleSearch}
          className='w-full sm:max-w-[500px] px-10 py-3 text-md rounded-md bg-purple-800 text-white font-rubik-semibold'
        >
          Search
        </button>
      </div>

      {showServices && (
        <ul className='w-full m-0 p-0 bg-white rounded-md z-10 mt-2' ref={ref}>
          {jobs.map((job, index) => (
            <li 
              className='w-full p-3 mx-auto rounded-md hover:cursor-pointer bg-richblack-100 text-black hover:bg-black hover:text-white transition-colors'
              key={index}
            >
              <Link
                key={job._id}
                onClick={() => setOpen(false)}
                to={`/job/${job._id}`}
                className='block w-full'
              >
                <div className='text-orange-500'>
                  {job.jobTitle}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default JobSearchBar;
