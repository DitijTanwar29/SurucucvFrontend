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

// const JobFilter = () => {
  
//   const [jobs, setJobs] = useState([]);
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

//     <div className='bg-pure-greys-25/80 w-full'>
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

// export default JobFilter;
