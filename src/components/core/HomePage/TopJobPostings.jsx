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
    <div  className=' w-full flex-col lg:justify-center items-center gap-32 sm:flex-wrap  sm:space-x-6 sm:space-y-6'>
        
        {
            topJobPostings?.length === 0 ? (
                <p>No Top Job Post Available yet</p>
            ) : (
                topJobPostings?.map((topJobPosting, index) => (
                  

                            <button key={index} className='lg:w-32 lg:h-16  rounded-full p-2  font-mono 
                            text-black border-1 border-richblue-100 hover-b-orange-600 shadow-lg'>
                                {topJobPosting?.jobTitle}
                            </button>
                            
                        
                    

                ))
            )
        }
    </div>
  )
}
