import React, { useEffect, useState } from 'react'
import { getTopJobLocations } from "../../../services/operations/jobPostAPI"
import { Link , useLocation, useNavigate} from "react-router-dom"
export const TopLocations = () => {
    const [topJobLocations , setTopJobLocations] = useState([]);
    const location = useLocation();
    const navigate = useNavigate();
    const filterKey = "jobLocation"
    useEffect(() => {
        const fetchServices = async () => {
          const result = await getTopJobLocations()
          console.log("result of job location result : ",result);
          if (result) {
            setTopJobLocations(result)
          }
        }
        fetchServices()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleChange = (option) => {
      const queryParams = new URLSearchParams(location.search);
      queryParams.set(filterKey, option);
      navigate(`/find-job?${queryParams.toString()}`);
  };

    
  return (
    <div  className='w-full flex-col lg:justify-center items-center  gap-32 sm:flex-wrap  sm:space-x-6 sm:space-y-6'>
        {
            topJobLocations?.length === 0 ? (
                <p>No Job Post Available yet</p>
            ) : (
                topJobLocations?.map((topJobLocation, index) => (
                  

                            <button key={index} className='lg:w-28 sm:text-xs lg:h-10 rounded-full lg:px-3 lg:py-2 sm:p-3 font-bold 
                             border-1 border-richblack-50 hover:border-orange-400 text-orange-400 text-center'
                             
                             onClick={() => handleChange(topJobLocation?._id)}>
                                {topJobLocation?._id}
                            </button>
                            
                        
                    

                ))
            )
        }
    </div>
  )
}
