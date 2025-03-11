import { apiConnector } from "../apiConnector"
import {filterEndpoints} from '../apis';

const {GET_FILTERS_API,GET_FILTERS_JOB_API} = filterEndpoints;

export const getFilters = async (userType, setIsLoading) => {
    try {
        setIsLoading(true);
        const response = await apiConnector('GET', GET_FILTERS_API, null, null, { userType });

        return response.data ;
    } catch (error) {
        console.log(error)
    }finally{
      setIsLoading(false);
    }
};

export const getFilteredJobs = async (filters, userType ,setIsLoading) => {
   try {
    try {
        setIsLoading(true);
        const response = await apiConnector('POST', GET_FILTERS_JOB_API, { userType, filters });

        return response.data ;
    } catch (error) {
        console.log(error)
    }finally{
      setIsLoading(false);
    }
   } catch (error) {
    console.log(error);
   }
};