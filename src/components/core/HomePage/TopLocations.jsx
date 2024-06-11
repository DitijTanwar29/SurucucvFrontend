import React, { useEffect, useState } from 'react'
import { getTopJobLocations } from "../../../services/operations/jobPostAPI"
import { Link } from "react-router-dom"
export const TopLocations = () => {
    const [topJobLocations , setTopJobLocations] = useState([]);

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

    //Todo: how can we implement this here to redirect user coz we are not getting job._id in apii response
    {/* <Link to={`/job/${job._id}`} key={job._id} >
    </Link> */}
  return (
    <div  className='w-full flex-col lg:justify-center items-center  gap-32 sm:flex-wrap lg:mt-44 sm:space-x-6 sm:space-y-6'>
        {
            topJobLocations?.length === 0 ? (
                <p>No Job Post Available yet</p>
            ) : (
                topJobLocations?.map((topJobLocation, index) => (
                  

                            <button key={index} className='lg:w-28 lg:h-16  rounded-full p-2  font-mono text-black 
                             border-1 border-richblue-100 hover-b-orange-600 shadow-lg'>
                                {topJobLocation?._id}
                            </button>
                            
                        
                    

                ))
            )
        }
    </div>
  )
}
