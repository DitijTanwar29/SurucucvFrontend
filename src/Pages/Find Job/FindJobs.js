// import { getAllApprovedJobs } from '../../services/operations/jobPostAPI'; // Import the function to fetch all jobs
// import React, { useState, useRef, useEffect } from 'react';
// import { useForm, useWatch } from 'react-hook-form';
// import { getFilteredJobs } from '../../services/operations/jobPostAPI';  // Adjust the import path as necessary
// import { Link } from 'react-router-dom';
// import { Country, State, City }  from 'country-state-city';



// const licenseCategories = [
//   { id: 'M', value: 'M', label: 'M' },
//   { id: 'A1', value: 'A1', label: 'A1' },
//   { id: 'A2', value: 'A2', label: 'A2' },
//   { id: 'A', value: 'A', label: 'A' },
//   { id: 'B1', value: 'B1', label: 'B1' },
//   { id: 'B', value: 'B', label: 'B' },
//   { id: 'C1', value: 'C1', label: 'C1' },
//   { id: 'C', value: 'C', label: 'C' },
//   { id: 'D1', value: 'D1', label: 'D1' },
//   { id: 'D', value: 'D', label: 'D' },
//   { id: 'BE', value: 'BE', label: 'BE' },
//   { id: 'C1E', value: 'C1E', label: 'C1E' },
//   { id: 'CE', value: 'CE', label: 'CE' },
//   { id: 'D1E', value: 'D1E', label: 'D1E' },
//   { id: 'DE', value: 'DE', label: 'DE' },
//   { id: 'F', value: 'F', label: 'F' },
//   { id: 'G', value: 'G', label: 'G' },
// ];

// // import JobFilters from './JobFilters';

// const FindJobs = () => {
//   const [jobs, setJobs] = useState([]);
//   console.log("jobs: ", jobs)
//   useEffect(() => {
//     const fetchData = async () => {
//       const data = await getAllApprovedJobs(); // Fetch all jobs from the backend
//       console.log("jobs data from backend api : ",data)
//       setJobs(data);
//     };
//     fetchData();
//   }, []);

    

//   console.log("jobs: ", jobs)
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     setValue, 
//     watch, 
//     control
//   } = useForm();
  
//   const [loading, setLoading] = useState(false)

//   const watchedValues = watch();
// const selectedLicenses = useWatch({control, name:'selectedLicenses', defaultValue:[]});

//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const dropdownRef = useRef(null);

//   const handleLicenseCheckboxChange = (e) => {  
//     const { id, checked } = e.target;

//     let newSelectedLicenses = [...selectedLicenses];

//     const updateSelection = (add, remove = []) => {
//       add.forEach((item) => {
//         if (!newSelectedLicenses.includes(item)) newSelectedLicenses.push(item);
//       });
//       remove.forEach((item) => {
//         newSelectedLicenses = newSelectedLicenses.filter((license) => license !== item);
//       });
//     };

//     switch (id) {
//       // case 'DE':
//       //   updateSelection(
//       //     checked ? licenseCategories.filter((category) => category.id !== 'A').map((category) => category.id) : [],
//       //     checked ? [] : ['M', 'B1', 'B', 'C1', 'D', 'D1', 'D1E', 'C1E', 'CE', 'DE', 'F', 'G']
//       //   );
//       //   break;
//       case 'A':
//         updateSelection(
//           checked ? ['A', 'A1','A2'] : [],
//           checked ? [] : ['A','A1','A2']
//         );
//         break;
//       case 'C':
//         updateSelection(
//           checked ? ['M', 'B', 'B1', 'C1', 'F','C','A1'] : [],
//           checked ? [] : ['M', 'B', 'B1', 'C1', 'F','C','A1']
//         );
//         break;
//       case 'B':
//         updateSelection(
//           checked ? ['M', 'B1', 'F','B','A1'] : [],
//           checked ? [] : ['M', 'B1', 'F','B','A1']
//         );
//         break;
//       case 'D1':
//         updateSelection(
//           checked ? ['M', 'B', 'B1', 'F','D1','A1'] : [],
//           checked ? [] : ['M', 'B', 'B1', 'F','D1','A1']
//         );
//         break;
//       case 'D':
//         updateSelection(
//           checked ? ['M', 'B', 'B1', 'D1', 'F','D','A1'] : [],
//           checked ? [] : ['M', 'B', 'B1', 'D1', 'F','D','A1']
//         );
//         break;
//       case 'D1E':
//         updateSelection(
//           checked ? ['M', 'B', 'B1', 'D1', 'F','D1E','A1'] : [],
//           checked ? [] : ['M', 'B', 'B1', 'D1', 'F','D1E','A1']
//         );
//         break;
//       case 'CE':
//         updateSelection(
//           checked ? ['M', 'B', 'B1', 'C', 'C1', 'F','CE','A1'] : [],
//           checked ? [] : ['M', 'B', 'B1', 'C', 'C1', 'F','CE','A1']
//         );
//         break;
//       default:
//         if (checked) {
//           newSelectedLicenses.push(id);
//         } else {
//           newSelectedLicenses = newSelectedLicenses.filter((license) => license !== id);
//         }
//         break;
//     }

//     // setSelectedLicenses(newSelectedLicenses);
//     setValue('selectedLicenses', newSelectedLicenses);
//   };

//   const toggleDropdown = () => {
//     setDropdownOpen(!dropdownOpen);
//   };

//   const handleClickOutside = (event) => {
//     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//       setDropdownOpen(false);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

 



//   const buildQueryString = (filters) => {
//     const queryParams = [];
//     for (const key in filters) {
//       if (filters[key]) {
//         if (Array.isArray(filters[key])) {
//           filters[key].forEach(value => queryParams.push(`${key}=${encodeURIComponent(value)}`));
//         } else {
//           queryParams.push(`${key}=${encodeURIComponent(filters[key])}`);
//         }
//       }
//     }
//     return queryParams.join('&');
//   };

//   const handleSubmitForm = async (data) => {
//     console.log("Form Data - ", data);
//     const filteredLicenses = selectedLicenses.filter(license => license !== "");
//     const filters = {
//       jobTitle: data.jobTitle,
//       companyName: data.companyName,
//       jobType: data.jobType,
//       salaryType: data.salaryType,
//       requiredSkills: data.requiredSkills,
//       jobLocation: data.jobLocation,
//       publishedDate: data.publishedDate,
//       passport: data.passport,
//       visa: data.visa,
//       abroadExperience: data.abroadExperience,
//       isBlindSpotTraining: data.isBlindSpotTraining,
//       isSafeDrivingTraining: data.isSafeDrivingTraining,
//       isFuelEconomyTraining: data.isFuelEconomyTraining,
//       licenseType: filteredLicenses
//     };

//     const queryString = buildQueryString(filters);
//     console.log("Constructed Query String - ", queryString);

//     try {
//       const response = await getFilteredJobs(queryString);
//       console.log("Filtered Jobs: ", response);
//       setJobs(response);
//     } catch (error) {
//       console.log("ERROR MESSAGE - ", error.message);
//     }
//   };

//   return (
//     <div className="bg-pure-greys-25/80 w-full mx-auto  p-5 lg:mt-10">
//       <h1 className="text-3xl font-bold text-center mb-8">Find Jobs</h1>

      
//       <form onSubmit={handleSubmit(handleSubmitForm)} className='flex flex-col gap-1 '>

//       <div className='flex gap-1'>

//         <div className='w-[33%]'>
//           <div className="flex flex-col gap-1 lg:w-[50%]">
//               <label htmlFor="jobTitle">
//                 Job Title
//               </label>
//               <div className='InputContainer'>
//                 <input
//                   type="text"
//                   name="jobTitle"
//                   placeholder="Enter job title"
//                   className="input"
//                   {...register("jobTitle")}
                
//                 />
//               </div>
//           </div>

//           <div className="flex flex-col gap-1 lg:w-[50%]">
//             <label>Company Name: </label>
//             <div className=' InputContainer'>
//               <input type="text" name="companyName" className='input' 
//               placeholder='Enter Company Name'
//               {...register('companyName')} />
//             </div>
//           </div>


//           <div className='flex flex-col gap-1'>
//             <label>Job Type: </label>
//             <div className='InputContainer'>

//               <select name="jobType" {...register('jobType')} 
//               className='input'>
//                 <option value="">Select</option>
//                 <option value="Full Time">Full Time</option>
//                 <option value="Part Time">Part Time</option>
//                 <option value="Internship">Internship</option>
//               </select>
//             </div>
//           </div>

//           <div className='flex flex-col gap-1'>
//             <label>Salary Type: </label>
//             <div className='InputContainer'>
//               <select name="salaryType" className='input' {...register('salaryType')}>
//                 <option value="">Select</option>
//                 <option value="Hourly">Hourly</option>
//                 <option value="Weekly">Weekly</option>
//                 <option value="Monthly">Monthly</option>
//                 <option value="Yearly">Yearly</option>
//               </select>
//             </div>
//           </div>

//           <div className='flex flex-col gap-1'>
//             <label>Required Skills (comma separated): </label>
//             <div className='InputContainer'>
//               <input type="text" name="requiredSkills" className='input' placeholder='Enter skills' {...register('requiredSkills')} />
//             </div>
//           </div>
//         </div>
        
//         <div className='w-[33%]'>

//           <div className="flex flex-col gap-2">
//               <label htmlFor="jobLocation" >
//               Job Location
//               </label>
//               <div className='InputContainer'>

//                 <select
//                   type="text"
//                   name="jobLocation"
//                   id="jobLocation"
//                   placeholder="Choose location "
//                   className="input"
//                   {...register("jobLocation")}

//                 >
//                   <option value="" disabled>
//                 Choose a location
//               </option>
//               {!loading &&
//                 State.getStatesOfCountry("TR")?.map((state, indx) => (
//                   <option key={indx} value={state?.name}>
//                     {state?.name}
//                   </option>
//                 ))}
//                 </select>
//               </div>
              
//           </div>
//           <div className='flex flex-col gap-1'>
//             <label>License Type: </label>
          
//               <div className="relative   " ref={dropdownRef}>
//                 <button type="button" className='InputContainer' onClick={toggleDropdown}>
//                   Choose License Type
//                 </button>
//                 {dropdownOpen && (
//                   <div className="absolute  mt-1  backdrop:before:lg:w-[50%]  bg-white border border-gray-300 rounded-md shadow-lg z-10">
//                     <div className="flex flex-col p-2  max-h-60 w-full overflow-auto">
//                       {licenseCategories.map((category) => (
//                         <div key={category.id} className="flex items-center justify-center gap-8 border-b border-b-orange-600 ">
//                           <input
//                             type="checkbox"
//                             id={category.id}
//                             value={category.value}
//                             checked={selectedLicenses.includes(category.id)}
//                             onChange={handleLicenseCheckboxChange}
//                             className=""
//                           />
//                           <label htmlFor={category.id} className="w-full input ">
//                             {category.label}
//                           </label>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 )}
//               </div>
            
//           </div>

//           <div className="flex flex-col gap-1 ">
//                 <label htmlFor="passport" >
//                   Passport
//                 </label>
//                 <div className='InputContainer'>

//                   <select
//                     type="text"
//                     name="passport"
//                     id="passport"
//                     placeholder="Choose passport type "
//                     className="input"
//                     {...register("passport", { required: true })}
//                     // defaultValue={user?.adminDetails?.post}

//                   >
//                     <option value="" disabled >Choose Passport Type</option>
//                     <option value="Type 1" >Type 1</option>
//                     <option value="Type 2" >Type 2</option>
//                     <option value="Type 3" >Type 3</option>

//                   </select>
//                 </div>
                
//           </div>
          
//           <div className="flex flex-col gap-1">
//                 <label htmlFor="visa" >
//                   Visa
//                 </label>
//                 <div className="InputContainer">

//                   <select
//                     type="text"
//                     name="visa"
//                     id="visa"
//                     placeholder="Choose visa type "
//                     className="input"
//                     {...register("visa", { required: true })}
//                     // defaultValue={user?.adminDetails?.post}

//                   >
//                     <option value="" disabled >Choose Visa Type</option>
//                     <option value="Type 1" >Type 1</option>
//                     <option value="Type 2" >Type 2</option>
//                     <option value="Type 3" >Type 3</option>

//                   </select>
//                 </div>
                
//           </div>

//           <div className='flex flex-col gap-1'>
//             <label>Abroad Experience: </label>
//             <div className='InputContainer'>

//               <input type="number" name="abroadExperience" className='input' placeholder='Enter Abraod Experience' {...register('abroadExperience')} />
//             </div>
//           </div>
//         </div>

//         <div className='w-[33%]'>

//           <div className='flex flex-col gap-1'>
//             <label>Blind Spot Training: </label>
//             <div className='InputContainer'>
//               <input type="checkbox" name="isBlindSpotTraining"  {...register('isBlindSpotTraining')} />
//             </div>
//           </div>
//           <div className='flex flex-col gap-1'>
//             <label>Safe Driving Training: </label>
//             <div className='InputContainer'>
//               <input type="checkbox" name="isSafeDrivingTraining" {...register('isSafeDrivingTraining')} />
//             </div>

//           </div>
//           <div className="flex flex-col gap-1">
//             <label>Fuel Economy Training: </label>
//             <div className='InputContainer'>
//               <input type="checkbox" name="isFuelEconomyTraining" {...register('isFuelEconomyTraining')} />

//             </div>

//           </div>

//         </div>

//       </div>
//         <button type="submit">Filter Jobs</button>
//       </form>

    


//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
//         {jobs.map(job => (
//           <Link to={`/job/${job._id}`} key={job._id}>
//             <div className="bg-gradient-to-br from-rose-100 via-purple-200 to-purple-200 m-2  text-pure-greys-900 mx-auto shadow-md rounded-lg overflow-hidden">
//               <div className="p-4">
//                 <h2 className="text-lg font-bold mb-2">{job.jobTitle}</h2>
//                 <p className="text-sm text-gray-600 mb-2">{job.companyName}</p>
//                 <p className="text-sm text-gray-600 mb-2">Salary Range: {job.rangeOfSalary}</p>
//                 <p className="text-sm text-gray-600 mb-2">{job.jobLocation}</p>
//                 {/* Add other important fields here */}
//               </div>
//             </div>
//           </Link>
//         ))}
//       </div>
    
      
//     </div>
//   );
// };

// export default FindJobs;

//currently in working stagee **************************************************8
// import { getRecentlyPublishedJobs, getFilteredJobs } from '../../services/operations/jobPostAPI'; // Adjust the import path as necessary
// import React, { useState, useRef, useEffect } from 'react';
// import { useForm, useWatch } from 'react-hook-form';
// import { Link } from 'react-router-dom';
// import { Country, State, City }  from 'country-state-city';
// const licenseCategories = [
//   { id: 'M', value: 'M', label: 'M' },
//   { id: 'A1', value: 'A1', label: 'A1' },
//   { id: 'A2', value: 'A2', label: 'A2' },
//   { id: 'A', value: 'A', label: 'A' },
//   { id: 'B1', value: 'B1', label: 'B1' },
//   { id: 'B', value: 'B', label: 'B' },
//   { id: 'C1', value: 'C1', label: 'C1' },
//   { id: 'C', value: 'C', label: 'C' },
//   { id: 'D1', value: 'D1', label: 'D1' },
//   { id: 'D', value: 'D', label: 'D' },
//   { id: 'BE', value: 'BE', label: 'BE' },
//   { id: 'C1E', value: 'C1E', label: 'C1E' },
//   { id: 'CE', value: 'CE', label: 'CE' },
//   { id: 'D1E', value: 'D1E', label: 'D1E' },
//   { id: 'DE', value: 'DE', label: 'DE' },
//   { id: 'F', value: 'F', label: 'F' },
//   { id: 'G', value: 'G', label: 'G' },
// ];

// const FindJobs = () => {
//   const [jobs, setJobs] = useState([]);
//   const [fetchingJobs, setFetchingJobs] = useState(false);
// const [loading, setLoading] = useState(false)
//   useEffect(() => {
//     fetchAllJobs();
//   }, []);

//   const fetchAllJobs = async () => {
//     setFetchingJobs(true);
//     try {
//       const data = await getRecentlyPublishedJobs();
//       setJobs(data);
//     } catch (error) {
//       console.error("Error fetching all jobs:", error);
//     }
//     setFetchingJobs(false);
//   };

//   const fetchFilteredJobs = async (queryString) => {
//     setFetchingJobs(true);
//     try {
//       const response = await getFilteredJobs(queryString);
//       setJobs(response);
//     } catch (error) {
//       console.error("Error fetching filtered jobs:", error);
//     }
//     setFetchingJobs(false);
//   };

//   const {
//     register,
//     handleSubmit,
//     setValue, 
//     watch, 
//     control
//   } = useForm();
  
//   const watchedValues = watch();
//   const selectedLicenses = useWatch({ control, name: 'selectedLicenses', defaultValue: [] });

//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const dropdownRef = useRef(null);

//   const handleLicenseCheckboxChange = (e) => {  
//     const { id, checked } = e.target;
//     let newSelectedLicenses = [...selectedLicenses];

//     const updateSelection = (add, remove = []) => {
//       add.forEach((item) => {
//         if (!newSelectedLicenses.includes(item)) newSelectedLicenses.push(item);
//       });
//       remove.forEach((item) => {
//         newSelectedLicenses = newSelectedLicenses.filter((license) => license !== item);
//       });
//     };

//     switch (id) {
//       case 'A':
//         updateSelection(
//           checked ? ['A', 'A1', 'A2'] : [],
//           checked ? [] : ['A', 'A1', 'A2']
//         );
//         break;
//       case 'C':
//         updateSelection(
//           checked ? ['M', 'B', 'B1', 'C1', 'F', 'C', 'A1'] : [],
//           checked ? [] : ['M', 'B', 'B1', 'C1', 'F', 'C', 'A1']
//         );
//         break;
//       case 'B':
//         updateSelection(
//           checked ? ['M', 'B1', 'F', 'B', 'A1'] : [],
//           checked ? [] : ['M', 'B1', 'F', 'B', 'A1']
//         );
//         break;
//       case 'D1':
//         updateSelection(
//           checked ? ['M', 'B', 'B1', 'F', 'D1', 'A1'] : [],
//           checked ? [] : ['M', 'B', 'B1', 'F', 'D1', 'A1']
//         );
//         break;
//       case 'D':
//         updateSelection(
//           checked ? ['M', 'B', 'B1', 'D1', 'F', 'D', 'A1'] : [],
//           checked ? [] : ['M', 'B', 'B1', 'D1', 'F', 'D', 'A1']
//         );
//         break;
//       case 'D1E':
//         updateSelection(
//           checked ? ['M', 'B', 'B1', 'D1', 'F', 'D1E', 'A1'] : [],
//           checked ? [] : ['M', 'B', 'B1', 'D1', 'F', 'D1E', 'A1']
//         );
//         break;
//       case 'CE':
//         updateSelection(
//           checked ? ['M', 'B', 'B1', 'C', 'C1', 'F', 'CE', 'A1'] : [],
//           checked ? [] : ['M', 'B', 'B1', 'C', 'C1', 'F', 'CE', 'A1']
//         );
//         break;
//       default:
//         if (checked) {
//           newSelectedLicenses.push(id);
//         } else {
//           newSelectedLicenses = newSelectedLicenses.filter((license) => license !== id);
//         }
//         break;
//     }

//     setValue('selectedLicenses', newSelectedLicenses);
//     console.log(newSelectedLicenses)
//   };

//   const toggleDropdown = () => {
//     setDropdownOpen(!dropdownOpen);
//   };

//   const handleClickOutside = (event) => {
//     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//       setDropdownOpen(false);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   const buildQueryString = (filters) => {
//     const queryParams = [];
//     for (const key in filters) {
//       if (filters[key]) {
//         if (Array.isArray(filters[key])) {
//           filters[key].forEach(value => queryParams.push(`${key}=${encodeURIComponent(value)}`));
//         } else {
//           queryParams.push(`${key}=${encodeURIComponent(filters[key])}`);
//         }
//       }
//     }
//     return queryParams.join('&');
//   };

//   const handleSubmitForm = async (data) => {
//     const filteredLicenses = selectedLicenses.filter(license => license !== "");
//     const filters = {
//       jobTitle: data.jobTitle,
//       companyName: data.companyName,
//       jobType: data.jobType,
//       salaryType: data.salaryType,
//       requiredSkills: data.requiredSkills,
//       jobLocation: data.jobLocation,
//       publishedDate: data.publishedDate,
//       passport: data.passport,
//       visa: data.visa,
//       abroadExperience: data.abroadExperience,
//       isBlindSpotTraining: data.isBlindSpotTraining,
//       isSafeDrivingTraining: data.isSafeDrivingTraining,
//       isFuelEconomyTraining: data.isFuelEconomyTraining,
//       licenseType: filteredLicenses
//     };

//     const queryString = buildQueryString(filters);

//     if (Object.values(filters).some(value => value && (Array.isArray(value) ? value.length > 0 : true))) {
//       console.log("QUERY STRING : ",queryString)
//       await fetchFilteredJobs(queryString);
//     } else {
//       await fetchAllJobs();
//     }
//   };

//   return (
//     <div className="bg-pure-greys-25/80 w-full mx-auto p-5 lg:mt-10">
//       <h1 className="text-3xl font-bold text-center mb-8">Find Jobs</h1>

//       <form onSubmit={handleSubmit(handleSubmitForm)} className='flex flex-col gap-1 '>

//        <div className='flex gap-1'>

//          <div className='w-[33%]'>
//            <div className="flex flex-col gap-1 lg:w-[50%]">
//                <label htmlFor="jobTitle">
//                  Job Title
//                </label>
//                <div className='InputContainer'>
//                  <input
//                    type="text"
//                    name="jobTitle"
//                    placeholder="Enter job title"
//                    className="input"
//                    {...register("jobTitle")}
                
//                  />
//                </div>
//            </div>

//            <div className="flex flex-col gap-1 lg:w-[50%]">
//              <label>Company Name: </label>
//              <div className=' InputContainer'>
//                <input type="text" name="companyName" className='input' 
//                placeholder='Enter Company Name'
//                {...register('companyName')} />
//              </div>
//            </div>


//           <div className='flex flex-col gap-1'>
//             <label>Job Type: </label>
//             <div className='InputContainer'>

//               <select name="jobType" {...register('jobType')} 
//               className='input'>
//                 <option value="">Select</option>
//                 <option value="Full Time">Full Time</option>
//                 <option value="Part Time">Part Time</option>
//                 <option value="Internship">Internship</option>
//               </select>
//             </div>
//           </div>

//           <div className='flex flex-col gap-1'>
//             <label>Salary Type: </label>
//             <div className='InputContainer'>
//               <select name="salaryType" className='input' {...register('salaryType')}>
//                 <option value="">Select</option>
//                 <option value="Hourly">Hourly</option>
//                 <option value="Weekly">Weekly</option>
//                 <option value="Monthly">Monthly</option>
//                 <option value="Yearly">Yearly</option>
//               </select>
//             </div>
//           </div>

//           <div className='flex flex-col gap-1'>
//             <label>Required Skills (comma separated): </label>
//             <div className='InputContainer'>
//               <input type="text" name="requiredSkills" className='input' placeholder='Enter skills' {...register('requiredSkills')} />
//             </div>
//           </div>
//         </div>
        
//         <div className='w-[33%]'>

//           <div className="flex flex-col gap-2">
//               <label htmlFor="jobLocation" >
//               Job Location
//               </label>
//               <div className='InputContainer'>

//                 <select
//                   type="text"
//                   name="jobLocation"
//                   id="jobLocation"
//                   placeholder="Choose location "
//                   className="input"
//                   {...register("jobLocation")}

//                 >
//                   <option value="">
//                 Choose a location
//               </option>
//               {!loading &&
//                 State.getStatesOfCountry("TR")?.map((state, indx) => (
//                   <option key={indx} value={state?.name}>
//                     {state?.name}
//                   </option>
//                 ))}
//                 </select>
//               </div>
              
//           </div>
//           <div className='flex flex-col gap-1'>
//             <label>License Type: </label>
          
//               <div className="relative   " ref={dropdownRef}>
//                 <button type="button" className='InputContainer' onClick={toggleDropdown}>
//                   Choose License Type
//                 </button>
//                 {dropdownOpen && (
//                   <div className="absolute  mt-1  backdrop:before:lg:w-[50%]  bg-white border border-gray-300 rounded-md shadow-lg z-10">
//                     <div className="flex flex-col p-2  max-h-60 w-full overflow-auto">
//                       {licenseCategories.map((category) => (
//                         <div key={category.id} className="flex items-center justify-center gap-8 border-b border-b-orange-600 ">
//                           <input
//                             type="checkbox"
//                             id={category.id}
//                             value={category.value}
//                             checked={selectedLicenses.includes(category.id)}
//                             onChange={handleLicenseCheckboxChange}
//                             className=""
//                           />
//                           <label htmlFor={category.id} className="w-full input ">
//                             {category.label}
//                           </label>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 )}
//               </div>
            
//           </div>

//           <div className="flex flex-col gap-1 ">
//                 <label htmlFor="passport" >
//                   Passport
//                 </label>
//                 <div className='InputContainer'>

//                   <select
//                     type="text"
//                     name="passport"
//                     id="passport"
//                     placeholder="Choose passport type "
//                     className="input"
//                     {...register("passport", { required: true })}
//                     // defaultValue={user?.adminDetails?.post}

//                   >
//                     <option value="" >Choose Passport Type</option>
//                     <option value="Type 1" >Type 1</option>
//                     <option value="Type 2" >Type 2</option>
//                     <option value="Type 3" >Type 3</option>

//                   </select>
//                 </div>
                
//           </div>
          
//           <div className="flex flex-col gap-1">
//                 <label htmlFor="visa" >
//                   Visa
//                 </label>
//                 <div className="InputContainer">

//                   <select
//                     type="text"
//                     name="visa"
//                     id="visa"
//                     placeholder="Choose visa type "
//                     className="input"
//                     {...register("visa", { required: true })}
//                     // defaultValue={user?.adminDetails?.post}

//                   >
//                     <option value="" >Choose Visa Type</option>
//                     <option value="Type 1" >Type 1</option>
//                     <option value="Type 2" >Type 2</option>
//                     <option value="Type 3" >Type 3</option>

//                   </select>
//                 </div>
                
//           </div>

//           <div className='flex flex-col gap-1'>
//             <label>Abroad Experience: </label>
//             <div className='InputContainer'>

//               <input type="number" name="abroadExperience" className='input' placeholder='Enter Abraod Experience' {...register('abroadExperience')} />
//             </div>
//           </div>
//         </div>

//         <div className='w-[33%]'>

//           <div className='flex flex-col gap-1'>
//             <label>Blind Spot Training: </label>
//             <div className='InputContainer'>
//               <input type="checkbox" name="isBlindSpotTraining"  {...register('isBlindSpotTraining')} />
//             </div>
//           </div>
//           <div className='flex flex-col gap-1'>
//             <label>Safe Driving Training: </label>
//             <div className='InputContainer'>
//               <input type="checkbox" name="isSafeDrivingTraining" {...register('isSafeDrivingTraining')} />
//             </div>

//           </div>
//           <div className="flex flex-col gap-1">
//             <label>Fuel Economy Training: </label>
//             <div className='InputContainer'>
//               <input type="checkbox" name="isFuelEconomyTraining" {...register('isFuelEconomyTraining')} />

//             </div>

//           </div>

// </div>
//         </div>

      
//         <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4">Search</button>
//       </form>

//       {fetchingJobs ? (
//         <p>Loading...</p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
//           {jobs.length > 0 ? (
//             jobs.map(job => (
//               <Link to={`/job/${job._id}`} key={job._id}>
//             <div className="bg-gradient-to-br from-rose-100 via-purple-200 to-purple-200 m-2  text-pure-greys-900 mx-auto shadow-md rounded-lg overflow-hidden">
//                <div className="p-4">
//                  <h2 className="text-lg font-bold mb-2">{job.jobTitle}</h2>
//                  <p className="text-sm text-gray-600 mb-2">{job.companyName}</p>
//                  <p className="text-sm text-gray-600 mb-2">Salary Range: {job.rangeOfSalary}</p>
//                  <p className="text-sm text-gray-600 mb-2">{job.jobLocation}</p>
//                  {/* Add other important fields here */}
//                </div>
//              </div>
//            </Link>
//             ))
//           ) : (
//             <p>No jobs found.</p>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default FindJobs;



import { getRecentlyPublishedJobs, getFilteredJobs } from '../../services/operations/jobPostAPI'; // Adjust the import path as necessary
import React, { useState, useRef, useEffect } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Country, State, City }  from 'country-state-city';

const licenseCategories = [
  { id: 'M', value: 'M', label: 'M' },
  { id: 'A1', value: 'A1', label: 'A1' },
  { id: 'A2', value: 'A2', label: 'A2' },
  { id: 'A', value: 'A', label: 'A' },
  { id: 'B1', value: 'B1', label: 'B1' },
  { id: 'B', value: 'B', label: 'B' },
  { id: 'C1', value: 'C1', label: 'C1' },
  { id: 'C', value: 'C', label: 'C' },
  { id: 'D1', value: 'D1', label: 'D1' },
  { id: 'D', value: 'D', label: 'D' },
  { id: 'BE', value: 'BE', label: 'BE' },
  { id: 'C1E', value: 'C1E', label: 'C1E' },
  { id: 'CE', value: 'CE', label: 'CE' },
  { id: 'D1E', value: 'D1E', label: 'D1E' },
  { id: 'DE', value: 'DE', label: 'DE' },
  { id: 'F', value: 'F', label: 'F' },
  { id: 'G', value: 'G', label: 'G' },
];

const FindJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [fetchingJobs, setFetchingJobs] = useState(false);
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, setValue, watch, control, reset } = useForm();
  const watchedValues = watch();
  const selectedLicenses = useWatch({ control, name: 'selectedLicenses', defaultValue: [] });

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    fetchAllJobs();
  }, []);

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

  const fetchFilteredJobs = async (queryString) => {
    setFetchingJobs(true);
    try {
      const response = await getFilteredJobs(queryString);
      setJobs(response);
    } catch (error) {
      console.error("Error fetching filtered jobs:", error);
    }
    setFetchingJobs(false);
  };

  const handleLicenseCheckboxChange = (e) => {
    const { id, checked } = e.target;
    let newSelectedLicenses = [...selectedLicenses];

    const updateSelection = (add, remove = []) => {
      add.forEach((item) => {
        if (!newSelectedLicenses.includes(item)) newSelectedLicenses.push(item);
      });
      remove.forEach((item) => {
        newSelectedLicenses = newSelectedLicenses.filter((license) => license !== item);
      });
    };

    switch (id) {
      case 'A':
        updateSelection(checked ? ['A', 'A1', 'A2'] : [], checked ? [] : ['A', 'A1', 'A2']);
        break;
      case 'C':
        updateSelection(checked ? ['M', 'B', 'B1', 'C1', 'F', 'C', 'A1'] : [], checked ? [] : ['M', 'B', 'B1', 'C1', 'F', 'C', 'A1']);
        break;
      case 'B':
        updateSelection(checked ? ['M', 'B1', 'F', 'B', 'A1'] : [], checked ? [] : ['M', 'B1', 'F', 'B', 'A1']);
        break;
      case 'D1':
        updateSelection(checked ? ['M', 'B', 'B1', 'F', 'D1', 'A1'] : [], checked ? [] : ['M', 'B', 'B1', 'F', 'D1', 'A1']);
        break;
      case 'D':
        updateSelection(checked ? ['M', 'B', 'B1', 'D1', 'F', 'D', 'A1'] : [], checked ? [] : ['M', 'B', 'B1', 'D1', 'F', 'D', 'A1']);
        break;
      case 'D1E':
        updateSelection(checked ? ['M', 'B', 'B1', 'D1', 'F', 'D1E', 'A1'] : [], checked ? [] : ['M', 'B', 'B1', 'D1', 'F', 'D1E', 'A1']);
        break;
      case 'CE':
        updateSelection(checked ? ['M', 'B', 'B1', 'C', 'C1', 'F', 'CE', 'A1'] : [], checked ? [] : ['M', 'B', 'B1', 'C', 'C1', 'F', 'CE', 'A1']);
        break;
      default:
        if (checked) {
          newSelectedLicenses.push(id);
        } else {
          newSelectedLicenses = newSelectedLicenses.filter((license) => license !== id);
        }
        break;
    }

    setValue('selectedLicenses', newSelectedLicenses);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const buildQueryString = (filters) => {
    const queryParams = [];
    for (const key in filters) {
      if (filters[key]) {
        if (Array.isArray(filters[key])) {
          filters[key].forEach(value => queryParams.push(`${key}=${encodeURIComponent(value)}`));
        } else {
          queryParams.push(`${key}=${encodeURIComponent(filters[key])}`);
        }
      }
    }
    return queryParams.join('&');
  };

  const handleSubmitForm = async (data) => {
    const filteredLicenses = selectedLicenses.filter(license => license !== "");
    const filters = {
      jobTitle: data.jobTitle,
      companyName: data.companyName,
      jobType: data.jobType,
      salaryType: data.salaryType,
      requiredSkills: data.requiredSkills,
      jobLocation: data.jobLocation,
      publishedDate: data.publishedDate,
      passport: data.passport,
      visa: data.visa,
      abroadExperience: data.abroadExperience,
      isBlindSpotTraining: data.isBlindSpotTraining,
      isSafeDrivingTraining: data.isSafeDrivingTraining,
      isFuelEconomyTraining: data.isFuelEconomyTraining,
      licenseType: filteredLicenses
    };

    const queryString = buildQueryString(filters);

    if (Object.values(filters).some(value => value && (Array.isArray(value) ? value.length > 0 : true))) {
      await fetchFilteredJobs(queryString);
    } else {
      await fetchAllJobs();
    }
  };

  const handleResetFilters = () => {
    reset();
    fetchAllJobs();
  };

  return (
    <div className="bg-pure-greys-25/80 w-full mx-auto p-5 lg:mt-10 ">
      <h1 className="text-3xl font-bold text-center mb-8">Filter Jobs</h1>

      <form onSubmit={handleSubmit(handleSubmitForm)} className='flex sm:flex-col lg:flex-col gap-1 mb-2'>
          <div className='flex sm:flex-col lg:flex-row md:flex-row gap-1'>
            <div className='w-[33%] sm:w-full md:w-[30%]'>
              <div className="flex flex-col gap-1 lg:w-[50%]">
                <label htmlFor="jobTitle">Job Title</label>
                <div className='InputContainer'>
                  <input type="text" name="jobTitle" placeholder="Enter job title" className="input" {...register("jobTitle")} />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="jobLocation" >
                Job Location
                </label>
                <div className='InputContainer'>

                  <select
                    type="text"
                    name="jobLocation"
                    id="jobLocation"
                    placeholder="Choose location "
                    className="input"
                    {...register("jobLocation")}

                  >
                    <option value="">
                  Choose a location
                </option>
                {!loading &&
                  State.getStatesOfCountry("TR")?.map((state, indx) => (
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
                <label>Job Type: </label>
                <div className='InputContainer'>

                  <select name="jobType"  {...register('jobType')} 
                  className='input'>
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
                  {/* <input type="text" name="salaryType" placeholder="Enter salary type" className="input" {...register("salaryType")} /> */}
                  <select name="salaryType" className="input" {...register("salaryType")}>
                    <option value="">Select salary type</option>
                    <option value="">Select</option>
                    <option value="Daily">Daily</option>
                    <option value="Weekly">Weekly</option>
                    <option value="Monthly">Monthly</option>
                    <option value="Yearly">Yearly</option>

                  </select>
                
                </div>
              </div>
            </div>

            {/* <div className='w-[33%] sm:w-full md:w-[30%]'>
              <div className="flex flex-col gap-1 lg:w-[50%]">
                <label htmlFor="requiredSkills">Required Skills</label>
                <div className='InputContainer'>
                  <input type="text" name="requiredSkills" placeholder="Enter required skills" className="input" {...register("requiredSkills")} />
                </div>
              </div>

              <div className="flex flex-col gap-1 lg:w-[50%]">
                <label>Company Name: </label>
                <div className='InputContainer'>
                  <input type="text" placeholder="Enter Company name" name="companyName" className="input" {...register("companyName")} />
                </div>
              </div>
            </div> */}
          </div>

          {/* <div className='flex gap-1 lg:flex-row sm:flex-col md:flex-row '>
            <div className='w-[33%] sm:w-full md:w-[30%]'>
              <div className="flex flex-col gap-1 lg:w-[50%]">
                <label htmlFor="publishedDate">Published Date</label>
                <div className='InputContainer'>
                  <input type="date" name="publishedDate" className="input" {...register("publishedDate")} />
                </div>
              </div>

              <div className="flex flex-col gap-1 lg:w-[50%]">
                <label htmlFor="isFuelEconomyTraining">Fuel Economy Training</label>
                <div className='InputContainer'>
                  <select name="isFuelEconomyTraining" className="input" {...register("isFuelEconomyTraining")}>
                    <option value="">Select fuel economy training status</option>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-1 lg:w-[50%]">
                <label htmlFor="passport">Passport</label>
                <div className='InputContainer'>
                  <select name="passport" className="input" {...register("passport")}>
                    <option value="">Select passport status</option>
                    <option value="Type 1">Type 1</option>
                    <option value="Type 2">Type 2</option>
                    <option value="Type 3">Type 3</option>

                  </select>
                </div>
              </div>
            </div>

            <div className='w-[33%] sm:w-full md:w-[30%]'>
              <div className="flex flex-col gap-1 lg:w-[50%]">
                <label htmlFor="visa">Visa</label>
                <div className='InputContainer'>
                  <select name="visa" className="input" {...register("visa")}>
                    <option value="">Select visa status</option>
                    <option value="Type 1">Type 1</option>
                    <option value="Type 2">Type 2</option>
                    <option value="Type 3">Type 3</option>

                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-1 lg:w-[50%]">
                <label htmlFor="abroadExperience">Abroad Experience</label>
                <div className='InputContainer'>
                <input type="number" name="abroadExperience" className="input" placeholder='Enter abroad experience' {...register("abroadExperience")} />
                </div>
              </div>
            </div>

            <div className='w-[33%] sm:w-full md:w-[30%]'>
              <div className="flex flex-col gap-1 lg:w-[50%]">
                <label htmlFor="isBlindSpotTraining">Blind Spot Training</label>
                <div className='InputContainer'>
                  <select name="isBlindSpotTraining" className="input" {...register("isBlindSpotTraining")}>
                    <option value="">Select blind spot training status</option>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-1 lg:w-[50%]">
                <label htmlFor="isSafeDrivingTraining">Safe Driving Training</label>
                <div className='InputContainer'>
                  <select name="isSafeDrivingTraining" className="input" {...register("isSafeDrivingTraining")}>
                    <option value="">Select safe driving training status</option>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                  </select>
                </div>
              </div>
            </div>
          </div> */}

       

          {/* <div className='w-[67%] sm:w-full lg:w-[30%] lg:mt-4'>
            <div className=" inline-block text-left  w-full">
              <button type="button" className="inline-flex  justify-between w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={toggleDropdown}>
                Select License Type
                <svg
                  className={`-mr-1 ml-2 h-5 w-5 transform ${dropdownOpen ? "rotate-180" : "rotate-0"}`}
                 
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {dropdownOpen && (
                <div ref={dropdownRef} className=" mt-2 w-full rounded-md shadow-lg bg-white">
                  <div className="py-1">
                    {licenseCategories.map((license) => (
                      <label key={license.id} className="flex items-center hover:bg-orange-300 hover:cursor-pointer px-4 py-2 text-sm text-gray-700 ">
                        <input
                          type="checkbox"
                          id={license.id}
                          checked={selectedLicenses.includes(license.value)}
                          onChange={handleLicenseCheckboxChange}
                          className="mr-2 h-4 w-4 rounded hover:cursor-pointer "
                        />
                        {license.label}
                      </label>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div> */}
      

          <div className="flex justify-between mt-4">
            <button type="submit" className="bg-orange-400 text-white px-4 py-2 rounded-md">Apply Filters</button>
            <button type="button" onClick={handleResetFilters} className="bg-gray-300 text-black px-4 py-2 rounded-md">Reset Filters</button>
          </div>
      </form>

      {fetchingJobs ? (
        <p>Loading...</p>
      ) : (
        <div>
          {jobs.length === 0 ? (
            <p>No jobs found.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
              {jobs.map((job) => (
                <div key={job._id} className=" lg:w-[100%] bg-gradient-to-br from-rose-100 via-purple-200 to-purple-200 m-2 p-4 text-pure-greys-900 mx-auto shadow-md rounded-lg overflow-hidden">
                  <h2 className="text-xl font-bold">{job.jobTitle}</h2>
                  <p>Company: {job.companyName}</p>
                  <p>Location: {job.jobLocation}</p>
                  <p>Type: {job.jobType}</p>
                  <p>Salary: {job.salaryType}</p>
                  <p>Blind Spot Training : {job.isBlindSpotTraining}</p>
                  <Link to={`/job/${job._id}`} className="text-blue-500">View Details</Link>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default FindJobs;

















