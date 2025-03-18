import React from 'react';
import { JobCard } from '../../components/core/HomePage/JobCard';
import { useSearch } from './SearchContext';
import { Loader } from './Loader';


export const SearchResult = () => {

    const { jobs,isjobsLoading } = useSearch();

    if (isjobsLoading) return <Loader />;

    return (
        <div className='w-full h-full bg-white rounded-lg'>
            <div className='w-full px-4 py-6 flex flex-col gap-6'>
                {jobs.length !== 0 ? (
                    jobs.map((job, index) => (
                        <div key={index} className='border-b-2 border-b-gray-300 '>
                            <JobCard
                                data={job}
                            />
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-500">No jobs found</p>
                )}
            </div>
        </div>
    )
}
