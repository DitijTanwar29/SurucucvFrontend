import React from 'react'
import RecentlyPublishedJobs from '../RecentlyPublishedJobs'
import FullTimeJobsJobs from '../FullTimeJobs'
import PartTimeJobsJobs from '../PartTimeJobs'
const JobGroups = () => {
  return (
    <div className='w-screen m-2 flex flex-col justify-center items-center gap-4'>
        <RecentlyPublishedJobs/>
        <FullTimeJobsJobs/>
        <PartTimeJobsJobs/>
    </div>
  )
}

export default JobGroups

