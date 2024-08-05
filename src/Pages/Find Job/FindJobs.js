import { getFilteredJobs, getRecentlyPublishedJobs } from '../../services/operations/jobPostAPI';
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { getJobsByService } from "../../services/operations/jobPostAPI";
import { State } from 'country-state-city';
import { useForm } from 'react-hook-form';

const FindJobs = () => {
  const { register, handleSubmit, setValue, watch, reset } = useForm();
  const [jobs, setJobs] = useState([]);
  const [fetchingJobs, setFetchingJobs] = useState(false);
  const [loading, setLoading] = useState(false);
  const [services, setServices] = useState([]);
  const [selectedServiceId, setSelectedServiceId] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchServices = async () => {
      setLoading(true);
      const services = await getJobsByService();
      const serviceData = services?.data;
      console.log(serviceData);
      setServices(serviceData);
      setLoading(false);
    };

    fetchServices();
    fetchJobsFromQuery();
  }, []);

  console.log("Service data is here:", services);

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const serviceIdFromQuery = query.get('service') || '';
    setSelectedServiceId(serviceIdFromQuery);
    const selectedService = services.find(service => service._id === serviceIdFromQuery);
    setValue('service', selectedService ? `${selectedService.serviceName}` : '');
    setValue('jobLocation', query.get('jobLocation') || '');
    setValue('salaryType', query.get('salaryType') || '');
    setValue('jobType', query.get('jobType') || '');
    fetchJobsFromQuery();
  }, [location.search, services]);

  const fetchJobsFromQuery = async () => {
    const query = new URLSearchParams(location.search);
    const filters = {};
    query.forEach((value, key) => {
      filters[key] = value;
    });

    if (Object.keys(filters).length > 0) {
      await fetchFilteredJobs(filters);
    } else {
      await fetchAllJobs();
    }
  };

  const fetchAllJobs = async () => {
    setFetchingJobs(true);
    try {
      const data = await getRecentlyPublishedJobs();
      setJobs(data);
    } catch (error) {
      console.error("Error fetching all jobs:", error);
    }
    setFetchingJobs(false);
  };

  const fetchFilteredJobs = async (filters) => {
    setFetchingJobs(true);
    try {
      const queryString = buildQueryString(filters);
      const response = await getFilteredJobs(queryString);
      setJobs(response);
    } catch (error) {
      console.error("Error fetching filtered jobs:", error);
    }
    setFetchingJobs(false);
  };

  const buildQueryString = (filters) => {
    const queryParams = [];
    for (const key in filters) {
      if (filters[key]) {
        if (typeof filters[key] === 'object') {
          for (const subKey in filters[key]) {
            queryParams.push(`${key}[${subKey}]=${encodeURIComponent(filters[key][subKey])}`);
          }
        } else {
          queryParams.push(`${key}=${encodeURIComponent(filters[key])}`);
        }
      }
    }
    return queryParams.join('&');
  };

  const handleSubmitForm = async (data) => {
    const selectedService = services.find(service => service.serviceId === selectedServiceId);
    console.log("selected service : ",selectedService)
    console.log("selected service id : ",selectedServiceId)
    const filters = {
      service:  selectedServiceId,
        // serviceName: selectedService ? selectedService.serviceName : ''
      jobLocation: data.jobLocation,
      salaryType: data.salaryType,
      jobType: data.jobType
    };

    const queryString = buildQueryString(filters);

    if (Object.values(filters).some(value => value)) {
      await fetchFilteredJobs(filters);
      navigate(`?${queryString}`);
    } else {
      await fetchAllJobs();
    }
  };

  const handleResetFilters = () => {
    reset();
    fetchAllJobs();
    navigate('');
  };

  return (
    <div className="bg-pure-greys-25/80 w-full h-screen mx-auto p-5 lg:mt-10">
      <h1 className="text-3xl font-bold text-center mb-8">Filter Jobs</h1>
      <form onSubmit={handleSubmit(handleSubmitForm)} className='flex sm:flex-col lg:flex-col gap-1 mb-2'>
        <div className='flex sm:flex-col lg:flex-row md:flex-row gap-1'>
          <div className='w-[33%] sm:w-full md:w-[30%]'>
            <div className="flex flex-col gap-1 lg:w-[50%]">
              <label htmlFor="service">Service</label>
              <div className='InputContainer'>
                <select
                  {...register("service")}
                  name="service"
                  value={services.find(service => service.serviceId === selectedServiceId)?.serviceId || ""}
                  onChange={(e) => {
                    const selectedService = services.find(service => service.serviceId === e.target.value.split(' (')[0]);
                    console.log("selectedService in service filter : ",selectedService)
                    setSelectedServiceId(selectedService ? selectedService.serviceId : '');
                    console.log("value of service selected :",e.target.value)
                    setValue('service', e.target.value);
                  }}
                  className="input"
                >
                  <option value="">Choose a service</option>
                  {!loading && services?.map((service, indx) => (
                    <option key={indx} value={`${service.serviceId}`}>
                      {service.serviceName} ({service.count})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="jobLocation">Job Location</label>
              <div className='InputContainer'>
                <select name="jobLocation" id="jobLocation" className="input" {...register("jobLocation")}>
                  <option value="">Choose a location</option>
                  {!loading && State.getStatesOfCountry("TR")?.map((state, indx) => (
                    <option key={indx} value={state?.name}>
                      {state?.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className='w-[33%] sm:w-full md:w-[30%]'>
            <div className='flex flex-col gap-1'>
              <label>Job Type</label>
              <div className='InputContainer'>
                <select name="jobType" {...register('jobType')} className='input'>
                  <option value="">Select</option>
                  <option value="Full Time">Full Time</option>
                  <option value="Part Time">Part Time</option>
                  <option value="Internship">Internship</option>
                  <option value="Temporary Job">Temporary Job</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-1 lg:w-[50%]">
              <label htmlFor="salaryType">Salary Type</label>
              <div className='InputContainer'>
                <select {...register("salaryType")} className="input">
                  <option value="">Choose a salary type</option>
                  <option value="Hourly">Hourly</option>
                  <option value="Daily">Daily</option>
                  <option value="Weekly">Weekly</option>
                  <option value="Monthly">Monthly</option>
                  <option value="Yearly">Yearly</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className='flex lg:flex-row sm:w-full md:w-[30%] sm:justify-between lg:justify-center lg:gap-3 lg:mt-7'>
          <button type="submit" className="lg:px-4 lg:py-2 sm:py-2 sm:px-2 bg-orange-400 text-white rounded-lg hover:bg-orange-500 lg:w-1/3 sm:w-[33%]">Apply Filters</button>
          <button type="button" onClick={handleResetFilters} className="lg:px-4 lg:py-2 sm:py-2 sm:px-2  text-richblack-100 bg-richblack-25 rounded-lg hover:text-orange-500 hover:bg-white lg:w-1/3 sm:w-[33%]">Reset Filters</button>
          <button
                    onClick={() => {
                    navigate("/")
                    }}
                    className="lg:w-1/3 sm:w-[33%] cursor-pointer lg:px-4 lg:py-2 sm:py-2 sm:px-2 rounded-md bg-richblack-700  font-semibold text-richblack-50 text-center"
                >Back
                </button>
        </div>
      </form>
      
      {fetchingJobs ? (
        <p>Loading...</p>
      ) : (
        <div>
          {jobs.length === 0 ? (
            <p>No jobs found.</p>
          ) : (
            <div>
            
              {jobs.map((job) => (
                <Link to={`/job/${job._id}`}
                className='text-black '
                >
                <p
                className='hover:text-orange-400'
                 key={job._id}>{job.jobTitle}</p>
                </Link>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default FindJobs;
