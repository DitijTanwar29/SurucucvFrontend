import { useEffect } from 'react';

import { FILTER_CATEGORIES } from "../../constant";
import { useSearch } from "./SearchContext";
import { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaTimes } from 'react-icons/fa';
import { Loader } from './Loader';

export const DesktopFilter = ({ userType }) => {
    const { selectedFilters, filters, handleCheckboxChange, applyChanges,isFiltersLoading } = useSearch();
    const [expandedCategories, setExpandedCategories] = useState({
        // Show Location and Working Preference by default
        [FILTER_CATEGORIES.LOCATION]: true,
        [FILTER_CATEGORIES.HISTORY]: true,
    });

    const toggleCategory = (filterId) => {
        setExpandedCategories(prev => ({
            ...prev,
            [filterId]: !prev[filterId]
        }));
    };

    if (!filters || Object.keys(filters).length === 0) return;

    if (isFiltersLoading) return <Loader />;

    return (
        <div className=" gap-8 hidden lg:flex ">
            {/* Sidebar with filters */}
            <div className="flex-shrink-0 w-[300px] bg-gray-50 p-4 rounded-lg bg-white relative">
                {Object.entries(filters).map(([filterId, filter]) => (
                    <div key={filterId} className="mb-6">
                        <div
                            className="flex items-center justify-between cursor-pointer"
                            onClick={() => toggleCategory(filterId)}
                        >
                            {filter.category === FILTER_CATEGORIES.LOCATION ? (
                                <h4 className="text-[16px] font-rubik-medium mb-2">City/District/Country</h4>
                            ) : (
                                <h4 className="text-[16px] font-rubik-medium mb-2">{filter.label}</h4>
                            )}

                            {filter.category !== FILTER_CATEGORIES.LOCATION &&
                                filter.category !== FILTER_CATEGORIES.HISTORY && (
                                    expandedCategories[filterId] ?
                                        <FaChevronUp className="w-5 h-5" /> :
                                        <FaChevronDown className="w-5 h-5" />
                                )}
                        </div>

                        <div className={`space-y-2 transition-all duration-300 ${expandedCategories[filterId] ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                            {Object.entries(filter.defaultOptions).map(([optionId, option]) => (
                                <div
                                    key={optionId}
                                    className='flex w-full cursor-pointer items-center gap-2'
                                >
                                    <input
                                        type={filter.type}
                                        placeholder={filter.placeholder}
                                        id={`${filterId}-${optionId}`}
                                        checked={selectedFilters[filterId]?.includes(optionId) || false}
                                        className={`${filter.type === 'checkbox' || filter.type === 'radio'
                                            ? 'w-4 h-4 rounded border-purple-700 text-purple-700 focus:ring-purple-700 hover:bg-purple-50 checked:bg-purple-700 checked:hover:bg-purple-600'
                                            : 'w-full p-2 border rounded-md'}`}
                                        onChange={(e) => {
                                            if (filter.type === 'radio') {
                                                // For radio buttons, always pass the checked state directly
                                                handleCheckboxChange(filterId, optionId, e.target.checked);
                                            } else {
                                                // For checkboxes, keep existing behavior
                                                handleCheckboxChange(filterId, optionId, e.target.checked);
                                            }
                                        }}
                                    />
                                    {filter.type !== 'text' && (
                                        <label htmlFor={`${filterId}-${optionId}`} className="text-sm font-rubik-medium text-gray-700 cursor-pointer">
                                            {option.label}
                                        </label>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

                {/* Add floating button at the bottom */}
                <div className=" sticky bottom-3 left-0 right-0 mt-4  ">
                    <button
                        className="w-full bg-purple-700 text-white py-2 px-4 rounded-lg hover:bg-purple-600 transition-colors duration-200 "
                        onClick={applyChanges}
                    >
                        Apply Changes
                    </button>
                </div>
            </div>
        </div>
    )
};

export const MobileFilter = ({ userType }) => {
    const { setFilterOptions, setIsMobileFilterOpen, filters, selectedFilters, applyChanges, isFiltersLoading } = useSearch();

    useEffect(() => {
        applyChanges();
        setIsMobileFilterOpen(false);
    }, [selectedFilters])


    if (!filters || Object.keys(filters).length === 0) return;

    if (isFiltersLoading) return <Loader />

    return (
        <div className='sticky top-16 w-full h-[70px] z-10 lg:hidden flex px-1 justify-center items-center bg-[#af54ff7f]  '>
            <div className='w-full overflow-x-auto scrollbar-hide '>
                <div className='flex justify-start items-center gap-4 py-2 whitespace-nowrap'>
                    {Object.entries(filters).map(([filterId, filter]) => (
                        <button
                            key={filterId}
                            onClick={() => {
                                setFilterOptions({ filterId, filter });
                                setIsMobileFilterOpen(true);
                            }}
                            className="px-4 py-2 gap-2 flex justify-between items-center outline-none bg-white rounded-md"
                        >
                            <span className="text-sm font-rubik-medium text-gray-700 whitespace-nowrap">{filter.label}</span>
                            <FaChevronDown className="w-4 h-4 text-purple-700" />
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export const MobileFilterPopup = ({ filterOptions, handleCheckboxChange, selectedFilters, setIsMobileFilterOpen }) => {
    const { filterId, filter: { type, placeholder, defaultOptions, label } } = filterOptions;
    return (
        <div onClick={() => setIsMobileFilterOpen(false)} className="w-full h-screen lg:hidden bg-gray-300 z-20 bg-opacity-50 absolute top-0 left-0 flex justify-center items-end  ">

            <div onClick={(e) => e.stopPropagation()} className="w-full h-auto bg-white rounded-2xl p-4">
                <div className="flex justify-between items-center mb-4">
                    <h4 className="text-sm font-rubik-medium text-gray-700">{label}</h4>
                    <button onClick={() => setIsMobileFilterOpen(false)} className="text-sm font-rubik-medium text-gray-700 hover:bg-gray-100 rounded-full p-2 transition-colors duration-200">
                        <FaTimes className="w-4 h-4" />
                    </button>
                </div>
                {Object.entries(defaultOptions).map(([optionId, option]) => (
                    <div
                        key={optionId}
                        className='flex w-full cursor-pointer justify-between items-center  px-2 py-2'
                    >
                        <input
                            type={type}
                            placeholder={placeholder}
                            id={`${filterId}-${optionId}`}
                            checked={selectedFilters[filterId]?.includes(optionId) || false}
                            className={`${type === 'checkbox' || type === 'radio'
                                ? 'w-4 h-4 rounded border-purple-700 text-purple-700 focus:ring-purple-700 hover:bg-purple-50 checked:bg-purple-700 checked:hover:bg-purple-600'
                                : 'w-full p-2 border rounded-md'}`}
                            onChange={(e) => {
                                if (type === 'radio') {
                                    // For radio buttons, always pass the checked state directly
                                    handleCheckboxChange(filterId, optionId, e.target.checked);
                                } else {
                                    // For checkboxes, keep existing behavior
                                    handleCheckboxChange(filterId, optionId, e.target.checked);
                                }
                            }}
                        />
                        {type !== 'text' && (
                            <label htmlFor={`${filterId}-${optionId}`} className="text-sm font-rubik-medium text-purple-700 cursor-pointer">
                                {option.label}
                            </label>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}
