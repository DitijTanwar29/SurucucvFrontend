import React, { useState } from 'react';
import SidebarForJobs from './SidebarForJobs';
import FullTimeJobs from './FullTimeJobs';
import PartTimeJobs from './PartTimeJobs';
import RecentlyPublishedJobs from './RecentlyPublishedJobs';
import InternationalJobs from './InternationalJobs';
const JobSidebar = () => {
  const [selectedJobType, setSelectedJobType] = useState('full-time-jobs');
  
  const renderJobComponent = () => {
    switch (selectedJobType) {
      case 'full-time-jobs':
        return <FullTimeJobs />;
      case 'part-time-jobs':
        return <PartTimeJobs />;
      case 'recently-published-jobs':
        return <RecentlyPublishedJobs />;
      case 'international-jobs':
        return <InternationalJobs />;
      default:
        return <FullTimeJobs />;
    }
  };

  return (
    <div className=" flex w-full items-start mt-[50px] mb-[50px] bg-white/35 p-2">
      <SidebarForJobs setSelectedJobType={setSelectedJobType} selectedJobType={selectedJobType} />
      <div className="content ml-[10px] p-2 ">
        {renderJobComponent()}
      </div>
    </div>
  );
};

export default JobSidebar;
