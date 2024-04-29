import React, { useState } from 'react';
import { searchJobs } from "../../../services/operations/jobPostAPI";

const JobSearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [services, setServices] = useState([]);
  const [showServices, setShowServices] = useState(false);

  const handleSearch = async () => {
    try {
      const response = await searchJobs(searchTerm); // Pass searchTerm to the function
      setServices(response.data.data);
      setShowServices(true);
    } catch (error) {
      console.error('Error searching for jobs:', error.message);
    }
  };

  return (
    <div className='flex gap-2'>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onFocus={() => setShowServices(true)}
        onBlur={() => setShowServices(false)}
        placeholder="Search for job titles..."
      />
      <button onClick={handleSearch}>Search</button>
      {showServices && (
        <ul>
          {services.map((service, index) => (
            <li key={index}>{service.jobTitle}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default JobSearchBar;
