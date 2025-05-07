import React, { useEffect, useState } from 'react';
import {
  getFullTimeJobs,
  getInternationalJobs,
  getPartTimeJobs,
  getRecentlyPublishedJobs
} from '../../../services/operations/jobPostAPI';

import { JobWrapper } from './Card';


const jobCategoryData = [
  { name: 'Full Time Jobs', slug: 'FullTimeJobs', active: true, fn: getFullTimeJobs, data: [] },
  { name: 'Part Time Jobs', slug: 'PartTimeJobs', active: false, fn: getPartTimeJobs, data: [] },
  { name: 'Recently Published Jobs', slug: 'RecentlyPublishedJobs', active: false, fn: getRecentlyPublishedJobs, data: [] },
  { name: 'International Jobs', slug: 'InternationalJobs', active: false, fn: getInternationalJobs, data: [] },
];


const JobSidebar = () => {


  const [jobCategory, setJobCategory] = useState(jobCategoryData);


  useEffect(() => {

    const fetchDataAndSetData = async () => {
      try {
        const updatedJobCategoryData = await Promise.all(
          jobCategoryData.map(async (category) => {
            const res = await category.fn(); // Call the function to fetch data
            return { ...category, data: res }; // Return updated category with data
          })
        );

        setJobCategory(updatedJobCategoryData);
      } catch (error) {
        console.error("Error fetching job category data:", error);
      }
    };

    fetchDataAndSetData();

  }, []);


  const updateActiveCategory = async (selectedSlug, fn) => {
    setJobCategory((prevCategories) =>
      prevCategories.map((category) => ({
        ...category,
        active: category.slug === selectedSlug,
      }))
    )
  }

  return (
    <div className='w-full flex flex-col py-8 '>

      {/* Desktop */}
      <div className="lg:flex flex-row w-full hidden gap-x-1 lg:gap-y-3 px-4">
        <div className='jobCategory gap-x-1 lg:gap-y-2.5 items-start'>
          {jobCategory.map((category) => (
            <button
              key={category.slug}
              onClick={() => {
                updateActiveCategory(category.slug);
                fetchSelectedCategoryData(category.fn);
              }}
              className={`flex jobCategoryButton  truncate text-ellipsis overflow-hidden font-rubik-semibold bg-white px-1 lg:px-3.5 py-2 hover:bg-purple-700 rounded-lg rounded-s-none  justify-start items-center 
                         border-purple-700 ${category.active ? 'border-l-4 ' : 'hover:border-l-2 hover:shadow-[0_0_5px_rgba(0,0,0,0.1)]'}
                        `}
            >
              {category.name}
            </button>
          ))}
        </div>
        <div className='lg:flex lg:justify-start lg:items-start hidden bg-white w-full overflow-hidden '>
          <div className='w-full flex flex-wrap border h-[450px]'>
            {jobCategory.map((category) => {
              if (category.active === false) return;
              return (
                <JobWrapper
                  key={category.slug}
                  data={category.data}
                  type='Desktop'
                />
              )
            })}
          </div>
        </div>
      </div>
      {/* Mobile, Tablet */}
      <div className='flex flex-col gap-y-4 w-full lg:hidden'>

        <JobWrapper
          data={jobCategory[0].data}
          name={jobCategory[0].name}
          type='Mobile'
        />
        <JobWrapper
          data={jobCategory[1].data}
          name={jobCategory[1].name}
          type='Mobile'
        />
        <JobWrapper
          data={jobCategory[2].data}
          name={jobCategory[2].name}
          type='Mobile'
        />
        <JobWrapper
          data={jobCategory[3].data}
          name={jobCategory[3].name}
          type='Mobile'
        />
      </div>
    </div>
  );
};

export default JobSidebar;
