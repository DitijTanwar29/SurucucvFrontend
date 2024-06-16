import React from 'react'
import RecentlyPublishedJobs from '../RecentlyPublishedJobs'
import FullTimeJobsJobs from '../FullTimeJobs'
import PartTimeJobsJobs from '../PartTimeJobs'
const JobGroups = () => {
  return (
    <div className='w-[100%] m-2 flex flex-col justify-center items-center gap-4 p-4 mx-auto '>
        <RecentlyPublishedJobs/>
        <FullTimeJobsJobs/>
        <PartTimeJobsJobs/>
    </div>
  )
}

export default JobGroups

