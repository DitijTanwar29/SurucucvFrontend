import React from 'react';
import { Card } from '../../components/core/HomePage/Card';
import { useSearch } from './SearchContext';
import { Loader } from './Loader';
import { USER_TYPES } from '../../constant';


export const SearchResult = ({ userType }) => {

    const { result, isResultLoading } = useSearch();

    if (isResultLoading) return <Loader />;

    return (
        <div className='w-full h-full bg-white rounded-lg'>
            <div className='w-full px-4 py-6 flex flex-col gap-6'>
                {result.length !== 0 ? (
                    result.map((job, index) => (
                        <div key={index} className='border-b-2 border-b-gray-300 '>
                            <Card
                                data={job}
                                isUserTypeCandidate={userType === USER_TYPES.CANDIDATE}
                            />
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-500">No result found</p>
                )}
            </div>
        </div>
    )
}
