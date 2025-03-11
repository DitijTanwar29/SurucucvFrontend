import { createContext, useContext, useState, useMemo, useEffect } from "react";
import { MobileFilterPopup } from "./Filter";
import { getFilters, getFilteredJobs } from '../../services/operations/FiltersApi';
import { filterEndpoints } from "../../services/apis";

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
    const [selectedFilters, setSelectedFilters] = useState({});
    const [filterOptions, setFilterOptions] = useState([]);
    const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
    const [filters, setFilters] = useState({});
    const [jobs, setJobs] = useState([]);
    const [isjobsLoading, setIsjobsLoading] = useState(false);
    const [isFiltersLoading, setIsFiltersLoading] = useState(false);

    useEffect(() => {
        console.log('new filters', filters)
    }, [filters])

    useEffect(() => {

        const fetchFilters = async () => {
            const data = await getFilters('Candidate', setIsFiltersLoading);
            if (data?.filters) {
                setFilters(data.filters);
            }
        };
        fetchFilters();
    }, []);


    useEffect(() => {
        const fetchJobs = async () => {
            const data = await getFilteredJobs(selectedFilters, 'Candidate', setIsjobsLoading);
            if (data?.results) {
                setJobs(data.results);
            }
        }
        fetchJobs();
    }, [selectedFilters]);


    const handleCheckboxChange = (filterId, optionId, checked) => {

        setSelectedFilters(prev => {
            // Get the filter type from filterOptions
            const filterType = filterOptions.filter?.type;

            // For radio buttons, replace the entire selection for that filter
            if (filterType === 'radio') {
                if (checked) {
                    return {
                        ...prev,
                        [filterId]: [optionId] // Only keep the newly selected option
                    };
                } else {
                    // If unchecking, remove the filter entirely
                    const { [filterId]: _, ...rest } = prev;
                    return rest;
                }
            }

            // For checkboxes, keep existing behavior
            const currentFilterSelections = prev[filterId] || [];
            if (checked) {
                return {
                    ...prev,
                    [filterId]: [...currentFilterSelections, optionId]
                };
            }
            return {
                ...prev,
                [filterId]: currentFilterSelections.filter(id => id !== optionId)
            };
        });
    };


    const applyChanges = async () => {
        const { results } = await getFilteredJobs(selectedFilters, 'Candidate', setIsjobsLoading);
        setJobs(results);
    };


    const value = {
        isFiltersLoading,
        isjobsLoading,
        filterOptions,
        jobs,
        filters,
        selectedFilters,
        applyChanges,
        setFilterOptions,
        setIsMobileFilterOpen,
        handleCheckboxChange
    };

    return (
        <SearchContext.Provider value={value}>
            <div className="relative bg-white w-full h-screen">
                {isMobileFilterOpen &&
                    <MobileFilterPopup
                        filterOptions={filterOptions}
                        handleCheckboxChange={handleCheckboxChange}
                        selectedFilters={selectedFilters}
                        setIsMobileFilterOpen={setIsMobileFilterOpen}
                    />}
                {children}
            </div>
        </SearchContext.Provider>
    );
};

export const useSearch = () => {
    const context = useContext(SearchContext);
    if (context === undefined) {
        throw new Error('useSearch must be used within a SearchProvider');
    }
    return context;
};

