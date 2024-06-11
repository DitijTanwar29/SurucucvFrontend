import React, { useState } from 'react';
import axios from 'axios';
import { getFilteredJobs } from '../../services/operations/jobPostAPI';  // Adjust the import path as necessary

const JobFilters = () => {
  const [filters, setFilters] = useState({
    jobTitle: '',
    companyName: '',
    jobType: '',
    salaryType: '',
    requiredSkills: '',
    jobLocation: '',
    publishedDate: '',
    licenseType: '',
    passport: '',
    visa: '',
    abroadExperience: '',
    isBlindSpotTraining: false,
    isSafeDrivingTraining: false,
    isFuelEconomyTraining: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFilters({
      ...filters,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Convert filters to the appropriate format
    const formattedFilters = {};
    Object.keys(filters).forEach((key) => {
      if (filters[key]) {
        formattedFilters[key] = filters[key];
      }
    });
console.log("formatted filters :", formattedFilters)
    try {
      const filteredJobs = await getFilteredJobs(formattedFilters);
      console.log('Filtered Jobs:', filteredJobs);
      // Handle the filtered job data (e.g., display it)
    } catch (error) {
      console.error('Error fetching filtered jobs:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Add form fields as shown in the previous example */}
      <div>
        <label>Job Title: </label>
        <input type="text" name="jobTitle" value={filters.jobTitle} onChange={handleChange} />
      </div>
      <div>
        <label>Company Name: </label>
        <input type="text" name="companyName" value={filters.companyName} onChange={handleChange} />
      </div>
      <div>
        <label>Job Type: </label>
        <select name="jobType" value={filters.jobType} onChange={handleChange}>
          <option value="">Select</option>
          <option value="Full Time">Full Time</option>
          <option value="Part Time">Part Time</option>
          <option value="Internship">Internship</option>
        </select>
      </div>
      <div>
        <label>Salary Type: </label>
        <select name="salaryType" value={filters.salaryType} onChange={handleChange}>
          <option value="">Select</option>
          <option value="Hourly">Hourly</option>
          <option value="Weekly">Weekly</option>
          <option value="Monthly">Monthly</option>
          <option value="Yearly">Yearly</option>
        </select>
      </div>
      <div>
        <label>Required Skills (comma separated): </label>
        <input type="text" name="requiredSkills" value={filters.requiredSkills} onChange={handleChange} />
      </div>
      <div>
        <label>Job Location: </label>
        <input type="text" name="jobLocation" value={filters.jobLocation} onChange={handleChange} />
      </div>
      <div>
        <label>Published Date (JSON format): </label>
        <input type="text" name="publishedDate" value={filters.publishedDate} onChange={handleChange} />
      </div>
      <div>
        <label>License Type: </label>
        <select name="licenseType" value={filters.licenseType} onChange={handleChange}>
          <option value="">Select</option>
          <option value="Type 1">Type 1</option>
          <option value="Type 2">Type 2</option>
          <option value="Type 3">Type 3</option>
        </select>
      </div>
      <div>
        <label>Passport: </label>
        <select name="passport" value={filters.passport} onChange={handleChange}>
          <option value="">Select</option>
          <option value="Type 1">Type 1</option>
          <option value="Type 2">Type 2</option>
          <option value="Type 3">Type 3</option>
        </select>
      </div>
      <div>
        <label>Visa: </label>
        <select name="visa" value={filters.visa} onChange={handleChange}>
          <option value="">Select</option>
          <option value="Type 1">Type 1</option>
          <option value="Type 2">Type 2</option>
          <option value="Type 3">Type 3</option>
        </select>
      </div>
      <div>
        <label>Abroad Experience: </label>
        <input type="number" name="abroadExperience" value={filters.abroadExperience} onChange={handleChange} />
      </div>
      <div>
        <label>Blind Spot Training: </label>
        <input type="checkbox" name="isBlindSpotTraining" checked={filters.isBlindSpotTraining} onChange={handleChange} />
      </div>
      <div>
        <label>Safe Driving Training: </label>
        <input type="checkbox" name="isSafeDrivingTraining" checked={filters.isSafeDrivingTraining} onChange={handleChange} />
      </div>
      <div>
        <label>Fuel Economy Training: </label>
        <input type="checkbox" name="isFuelEconomyTraining" checked={filters.isFuelEconomyTraining} onChange={handleChange} />
      </div>
      <button type="submit">Filter Jobs</button>
    </form>
  );
};

export default JobFilters;
