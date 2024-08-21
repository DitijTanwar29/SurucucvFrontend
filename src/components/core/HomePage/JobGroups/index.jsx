import React from 'react'
import RecentlyPublishedJobs from '../RecentlyPublishedJobs'
import FullTimeJobsJobs from '../FullTimeJobs'
import PartTimeJobsJobs from '../PartTimeJobs'
import InternationalJobs from '../InternationalJobs'
const JobGroups = () => {
  return (
    <div className='w-[100%] hidden m-2 md:flex flex-col justify-center items-center gap-4 p-4 mx-auto '>
        <RecentlyPublishedJobs/>
        <FullTimeJobsJobs/>
        <PartTimeJobsJobs/>
        <InternationalJobs/>
    </div>
  )
}

export default JobGroups

