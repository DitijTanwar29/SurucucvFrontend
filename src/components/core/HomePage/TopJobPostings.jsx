import React, { useEffect, useState } from 'react'
import { getTopJobPostings } from "../../../services/operations/jobPostAPI"
import { Link } from "react-router-dom"
export const TopJobPostings = () => {
    const [topJobPostings , setTopJobPostings] = useState([]);

    useEffect(() => {
        const fetchServices = async () => {
          const result = await getTopJobPostings()
          console.log("result : ",result);
          if (result) {
            setTopJobPostings(result)
          }
        }
        fetchServices()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    //Todo: how can we implement this here to redirect user coz we are not getting job._id in apii response
    {/* <Link to={`/job/${job._id}`} key={job._id} >
    </Link> */}
  return (
    <div  className=' w-full flex-col justify-center items-center lg:gap-32 sm:space-x-2 sm:space-y-2'>
        
        {
            topJobPostings?.length === 0 ? (
                <p>No Top Job Post Available yet</p>
            ) : (
                topJobPostings?.map((topJobPosting, index) => (
                  

                            <button key={index} className='lg:w-28 sm:text-xs lg:h-16 rounded-full lg:p-2 sm:p-3  font-mono 
                            text-black border-1 border-richblue-100 hover-b-orange-600 shadow-lg text-center'>
                                {topJobPosting?.jobTitle}
                            </button>
                            
                        
                    

                ))
            )
        }
    </div>
  )
}
