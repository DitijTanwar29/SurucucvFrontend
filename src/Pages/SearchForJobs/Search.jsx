import React, { useState } from 'react';
import { getFilterOptions, USER_TYPES } from '../../constant';
import { useSearch, SearchProvider } from './SearchContext';
import { useSelector } from 'react-redux';
    import { MobileFilter, DesktopFilter } from './Filter';
import { SearchResult } from './SearchResult';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';


const SearchLayout = () => {
  const { user } = useSelector((state) => state.profile)
    console.log(user)
    console.log(user.accountType)
    // Get user type from auth context or props
    const userType = USER_TYPES.CANDIDATE || user.accountType;
    const navigate = useNavigate();

    return (
        <div className="w-full h-screen mx-auto  lg:px-8 bg-[#f5f5f5]  ">
            <div className="flex flex-col gap-4 mt-20 lg:mt-28 w-full mx-auto  lg:px-8 py-2 relative  ">
                <SearchTop userType={userType} />
                <MobileFilter userType={userType} />
                <div className='flex lg:flex-row flex-col lg:gap-4 gap-2  w-full'>
                    <button onClick={() => navigate(-1)} className='bg-white rounded-full max-w-max lg:hidden flex  p-1.5 ml-2 text-purple-700'>
                        <FaArrowLeft />
                    </button>
                    <DesktopFilter userType={userType} />
                    <div className='w-full max-h-max'>
                        <SearchResult userType={userType} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export const Search = () => {
    return (
        <SearchProvider>
            <SearchLayout />
        </SearchProvider>
    );
};

const SearchTop = ({ userType }) => {
    const { selectedFilters, handleCheckboxChange, jobs } = useSearch();
    const [sortOption, setSortOption] = useState('recommended');

    const filterOptions = getFilterOptions(userType);

    return (
        <div className="hidden lg:flex flex-col gap-4  w-full mx-auto px-4 lg:px-8 overflow-y-auto">
            <div className="flex-1">
                <div className="flex justify-between items-center ">
                    <div className='flex gap-4'>

                        <h4 className='text-[18px] font-rubik-light'>{jobs.length} Job Posts</h4>
                        <div className="flex flex-wrap gap-2 ">
                            {Object.entries(selectedFilters).map(([filterId, selectedOptions]) => (
                                selectedOptions.map(optionId => {
                                    const filter = filterOptions[filterId];
                                    const option = filter?.defaultOptions[optionId];
                                    return option && (
                                        <div key={`${filterId}-${optionId}`}
                                            className="bg-purple-700 text-white px-3 py-1 rounded-full text-sm flex items-center gap-2">
                                            {option.label}
                                            <button
                                                onClick={() => handleCheckboxChange(filterId, optionId, false)}
                                            >
                                                ×
                                            </button>
                                        </div>
                                    );
                                })
                            ))}

                        </div>
                    </div>
                    <select
                        value={sortOption}
                        onChange={(e) => setSortOption(e.target.value)}
                        className="px-4 py-2 rounded-lg bg-white text-sm outline-none focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                        <option value="recommended">Recommended</option>
                        <option value="newest">From New to Old</option>
                        <option value="oldest">From Old to New</option>
                        <option value="featured">Featured</option>
                    </select>
                </div>
            </div>
        </div>
    )
}
