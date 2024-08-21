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
      console.log("searched term is : ",searchTerm)
      const response = await searchJobs(searchTerm); // Pass searchTerm to the function
      console.log("search bar response :",response)
      if(response.length === 0){
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
    <div className='flex flex-col w-[90%] h-20 lg:-translate-y-8 ' >
      <div className='flex lg:gap-14 sm:gap-3 sm:mt-6'>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => setShowServices(true)}
          onBlur={() => setShowServices(false)}
          placeholder="Search for job titles..."
          onClick={() => setOpen(true)}
          className="w-[80%] h-14 bg-white rounded-full p-3"
        />
        <button onClick={handleSearch} className='lg:w-[20%] h-14 p-2 rounded-md bg-orange-200 font-bold'>Search</button>
      </div>
      
        {showServices && (
          <ul className='w-full m-0 p-0 bg-white rounded-md z-10 '
          ref={ref}>
            {jobs.map((job, index) => (
              <li className='w-full p-2 mx-auto rounded-md hover:cursor-pointer bg-richblack-100 text-black hover:bg-black'
              key={index}>
              <Link  
                key={job._id}
                onClick={() => setOpen(false)}
                to={`/job/${job._id}`}

              >
              <div className='text-orange-500 '>

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
