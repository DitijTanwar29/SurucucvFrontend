import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Footer from '../../Pages/Footer/Footer';
import { getFilteredJobs, getRecentlyPublishedJobs, getJobsByService } from '../../services/operations/jobPostAPI';
import { State } from 'country-state-city';

const FindJobs = () => {
  const { register, handleSubmit, setValue, watch, reset } = useForm();
  const [jobs, setJobs] = useState([]);
  const [fetchingJobs, setFetchingJobs] = useState(false);
  const [loading, setLoading] = useState(false);
  const [services, setServices] = useState([]);
  const [selectedServiceId, setSelectedServiceId] = useState('');
  const [showSpinner, setShowSpinner] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();


  
    useEffect(() => {
      setTimeout(() => {
        setIsLoading(false); 
      }, 1000); 
    }, []);

  useEffect(() => {
    const fetchServices = async () => {
      setLoading(true);
      const services = await getJobsByService();
      setServices(services?.data || []);
      setLoading(false);
    };

    fetchServices();
    fetchJobsFromQuery();
  }, []);

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
      console.error('Error fetching all jobs:', error);
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
      console.error('Error fetching filtered jobs:', error);
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

  const handleAction = (action) => {
    setShowSpinner(true);
    setTimeout(async () => {
      setShowSpinner(false);
      action();
    }, 2000);
  };

  const handleSubmitForm = (data) => {
    handleAction(async () => {
      const filters = {
        service: selectedServiceId,
        jobLocation: data.jobLocation,
        salaryType: data.salaryType,
        jobType: data.jobType,
      };

      const queryString = buildQueryString(filters);
      if (Object.values(filters).some(value => value)) {
        await fetchFilteredJobs(filters);
        navigate(`?${queryString}`);
      } else {
        await fetchAllJobs();
      }
    });
  };

  const handleResetFilters = () => {
    handleAction(async () => {
      reset();
      await fetchAllJobs();
      navigate('');
    });
  };

  const handleBack = () => {
    handleAction(() => navigate('/'));
  };

  return (
    <>
      {showSpinner && (
        <div className="loading-screen">
          <div className="loader"></div>
        </div>
      )}

      <section className="mt-20 lg:mt-28">
        <div className="bg-gray-50 w-full min-h-screen flex flex-col items-center py-10 px-4">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Find Your Dream Job</h1>

          <form
            onSubmit={handleSubmit(handleSubmitForm)}
            className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6 space-y-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <label htmlFor="service" className="block text-gray-700 font-medium mb-2">Service</label>
                <select
                  {...register("service")}
                  name="service"
                  value={services.find(service => service.serviceId === selectedServiceId)?.serviceId || ""}
                  onChange={(e) => {
                    const selectedService = services.find(service => service.serviceId === e.target.value);
                    setSelectedServiceId(selectedService ? selectedService.serviceId : '');
                    setValue('service', e.target.value);
                  }}
                  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-orange-300"
                >
                  <option value="">Choose a service</option>
                  {!loading && services?.map((service, indx) => (
                    <option key={indx} value={`${service.serviceId}`}>
                      {service.serviceName} ({service.count})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="jobLocation" className="block text-gray-700 font-medium mb-2">Job Location</label>
                <select
                  name="jobLocation"
                  id="jobLocation"
                  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-orange-300"
                  {...register("jobLocation")}
                >
                  <option value="">Choose a location</option>
                  {!loading && State.getStatesOfCountry("TR")?.map((state, indx) => (
                    <option key={indx} value={state?.name}>{state?.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="jobType" className="block text-gray-700 font-medium mb-2">Job Type</label>
                <select
                  name="jobType"
                  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-orange-300"
                  {...register('jobType')}
                >
                  <option value="">Select</option>
                  <option value="Full Time">Full Time</option>
                  <option value="Part Time">Part Time</option>
                  <option value="Internship">Internship</option>
                  <option value="Temporary Job">Temporary Job</option>
                </select>
              </div>

              <div>
                <label htmlFor="salaryType" className="block text-gray-700 font-medium mb-2">Salary Type</label>
                <select
                  {...register("salaryType")}
                  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-orange-300"
                >
                  <option value="">Choose a salary type</option>
                  <option value="Hourly">Hourly</option>
                  <option value="Daily">Daily</option>
                  <option value="Weekly">Weekly</option>
                  <option value="Monthly">Monthly</option>
                  <option value="Yearly">Yearly</option>
                </select>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <button type="submit" className="px-6 py-2 bg-orange-400 text-white rounded-lg hover:bg-orange-500">
                Apply Filters
              </button>
              <button
                type="button"
                onClick={handleResetFilters}
                className="px-6 py-2 bg-blue-200 text-white rounded-lg hover:bg-blue-100"
              >
                Reset Filters
              </button>
              <button
                onClick={handleBack}
                className="px-6 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800"
              >
                Home
              </button>
            </div>
          </form>

          <div className="w-full max-w-4xl mt-10">
            {fetchingJobs ? (
              <p className="text-center text-gray-500">Loading...</p>
            ) : (
              <div className="space-y-4">
                {jobs.length === 0 ? (
                  <p className="text-center text-gray-600">No jobs found.</p>
                ) : (
                  jobs.map((job) => (
                    <Link
                      to={`/job/${job._id}`}
                      key={job._id}
                      className="block bg-white p-4 rounded-lg shadow hover:shadow-md hover:border-orange-400 border border-gray-200"
                    >
                      <p className="text-lg font-medium text-gray-800 hover:text-orange-400">{job.jobTitle}</p>
                    </Link>
                  ))
                )}
              </div>
            )}
          </div>
        </div>
      </section>


    <section className="mt-8 lg:mt-14">
    <Footer />
  </section>
  </>
  );
};

export default FindJobs;
