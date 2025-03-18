import { Country, State, City }  from 'country-state-city';
console.log("state data in filter constant file : ",State.getStatesOfCountry("TR"))
console.log("city in filter of constant file ",City.getCitiesOfCountry("TR"))
export const USER_TYPES = {
    CANDIDATE: 'Candidate',
    COMPANY: 'Company'
};

export const FILTER_CATEGORIES = {
    WORKING: 'workingPreference',
    COMPANY: 'company',
    POSITION: 'position',
    EDUCATION: 'education',
    LOCATION: 'location',
    DEPARTMENT: 'department',
    METHOD: 'workingMethod',
    HISTORY: 'history',
    CANDIDATE: 'candidate',
    CERTIFICATES: 'certificates',
    EXPERIENCE: 'experience',
    TRAINING: 'training',
};



// Base filter options that are common for both user types
const baseFilterOptions = {
    // location: {
    //     category: FILTER_CATEGORIES.LOCATION,
    //     label: 'Location',
    //     type: 'text',
    //     placeholder: 'Enter location',
    //     defaultOptions: {
    //         // Using Turkish states as options
    //         ...State.getStatesOfCountry("TR").reduce((acc, state) => ({
    //             ...acc,
    //             [state.name.toLowerCase().replace(/\s+/g, '-')]: { label: state.name }
    //         }), {})
    //     }
    // },
    history: {
        category: FILTER_CATEGORIES.HISTORY,
        label: 'Time Period',
        placeholder: 'Select time period',
        type: 'radio',
        defaultOptions: {
            'last-hour': { label: 'Last Hour' },
            today: { label: 'Today' },
            'last-24': { label: 'Last 24 Hours' },
            'last-3-days': { label: 'Last 3 Days' },
            'last-week': { label: 'Last Week' },
            'last-month': { label: 'Last Month' }
        }
    }
};

// Filter options for candidates searching for jobs
const candidateFilterOptions = {
    ...baseFilterOptions,
    jobType: {
        category: FILTER_CATEGORIES.WORKING,
        label: 'Job Type',
        type: 'checkbox',
        placeholder: 'Select job type',
        defaultOptions: {
            'full-time': { label: 'Full Time' },
            'part-time': { label: 'Part Time' },
            'internship': { label: 'Internship' },
            'temporary': { label: 'Temporary Job' }
        }
    },
    licenseType: {
        category: FILTER_CATEGORIES.POSITION,
        label: 'License Type',
        type: 'checkbox',
        placeholder: 'Select license type',
        defaultOptions: {
            'M': { label: 'M' },
            'A1': { label: 'A1' },
            'A2': { label: 'A2' },
            'A': { label: 'A' },
            'B1': { label: 'B1' },
            'B': { label: 'B' },
            'C1': { label: 'C1' },
            'C': { label: 'C' },
            'D1': { label: 'D1' },
            'D': { label: 'D' },
            'BE': { label: 'BE' },
            'C1E': { label: 'C1E' },
            'CE': { label: 'CE' },
            'D1E': { label: 'D1E' },
            'DE': { label: 'DE' },
            'F': { label: 'F' },
            'G': { label: 'G' }
        }
    },
    srcType: {
        category: FILTER_CATEGORIES.CERTIFICATES,
        label: 'SRC Requirements',
        type: 'checkbox',
        placeholder: 'Select SRC type',
        defaultOptions: {
            'src1': { label: 'SRC 1' },
            'src2': { label: 'SRC 2' },
            'src3': { label: 'SRC 3' },
            'src4': { label: 'SRC 4' }
        }
    },
    certificates: {
        category: FILTER_CATEGORIES.CERTIFICATES,
        label: 'Additional Certificates',
        type: 'checkbox',
        placeholder: 'Select certificates',
        defaultOptions: {
            'code95': { label: 'Code 95 Document' },
            'adr': { label: 'ADR License' },
            'psikoteknik': { label: 'Psychotechnical' },
            'myk': { label: 'MYK Certificate' }
        }
    },
    internationalJob: {
        category: FILTER_CATEGORIES.WORKING,
        label: 'International Job',
        type: 'checkbox',
        placeholder: 'Select job scope',
        defaultOptions: {
            'international': { label: 'International Jobs' },
            'domestic': { label: 'Domestic Jobs' }
        }
    }

};

// Filter options for companies searching for candidates
const companyFilterOptions = {
    ...baseFilterOptions,
    experience: {
        category: FILTER_CATEGORIES.EXPERIENCE,
        label: 'Experience',
        type: 'radio',
        placeholder: 'Select experience level',
        defaultOptions: {
            '0-1': { label: '0-1 Year' },
            '1-3': { label: '1-3 Years' },
            '3-5': { label: '3-5 Years' },
            '5-10': { label: '5-10 Years' },
            '10+': { label: '10+ Years' }
        }
    },
    licenseType: {
        category: FILTER_CATEGORIES.POSITION,
        label: 'License Type',
        type: 'checkbox',
        placeholder: 'Select license type',
        defaultOptions: {
            'M': { label: 'M' },
            'A1': { label: 'A1' },
            'A2': { label: 'A2' },
            'A': { label: 'A' },
            'B1': { label: 'B1' },
            'B': { label: 'B' },
            'C1': { label: 'C1' },
            'C': { label: 'C' },
            'D1': { label: 'D1' },
            'D': { label: 'D' },
            'BE': { label: 'BE' },
            'C1E': { label: 'C1E' },
            'CE': { label: 'CE' },
            'D1E': { label: 'D1E' },
            'DE': { label: 'DE' },
            'F': { label: 'F' },
            'G': { label: 'G' }
        }
    },
    srcType: {
        category: FILTER_CATEGORIES.CERTIFICATES,
        label: 'SRC Certificates',
        type: 'checkbox',
        placeholder: 'Select SRC certificates',
        defaultOptions: {
            'src1': { label: 'SRC 1' },
            'src2': { label: 'SRC 2' },
            'src3': { label: 'SRC 3' },
            'src4': { label: 'SRC 4' }
        }
    },
    certificates: {
        category: FILTER_CATEGORIES.CERTIFICATES,
        label: 'Required Certificates',
        type: 'checkbox',
        placeholder: 'Select required certificates',
        defaultOptions: {
            'code95': { label: 'Code 95 Document' },
            'adr': { label: 'ADR License' },
            'psikoteknik': { label: 'Psychotechnical' },
            'myk': { label: 'MYK Certificate' }
        }
    },
    abroadExperience: {
        category: FILTER_CATEGORIES.EXPERIENCE,
        label: 'Abroad Experience',
        type: 'radio',
        placeholder: 'Select abroad experience',
        defaultOptions: {
            '0': { label: 'No Experience' },
            '1-2': { label: '1-2 Years' },
            '3-5': { label: '3-5 Years' },
            '5+': { label: '5+ Years' }
        }
    },
    additionalTraining: {
        category: FILTER_CATEGORIES.TRAINING,
        label: 'Additional Training',
        type: 'checkbox',
        placeholder: 'Select additional training',
        defaultOptions: {
            'blindSpot': { label: 'Blind Spot Training' },
            'safeDriving': { label: 'Safe Driving Training' },
            'fuelEconomy': { label: 'Fuel Economy Training' }
        }
    }
};

// Function to get filter options based on user type
export const getFilterOptions = (userType) => {
    switch (userType) {
        case USER_TYPES.CANDIDATE:
            return candidateFilterOptions;
        case USER_TYPES.COMPANY:
            return companyFilterOptions;
        default:
            return baseFilterOptions;
    }
};

// Helper function to convert to array format if needed
export const getFilterOptionsArray = (userType) => {
    const options = getFilterOptions(userType);
    return Object.entries(options).map(([id, options]) => ({
        id,
        ...options,
        defaultOptions: Object.entries(options.defaultOptions).map(([id, option]) => ({
            id,
            ...option
        }))
    }));
};