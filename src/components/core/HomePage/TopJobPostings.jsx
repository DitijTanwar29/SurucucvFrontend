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
console.log(topJobPostings)
    //Todo: how can we implement this here to redirect user coz we are not getting job._id in apii response
    {/* <Link to={`/job/${job._id}`} key={job._id} >
    </Link> */}
  return (
    <div  className=' w-full flex-col justify-center items-center sm:space-x-6 sm:space-y-6 '>
        
        {
            topJobPostings?.length === 0 ? (
                <p>No Top Job Post Available yet</p>
            ) : (
                topJobPostings?.map((topJobPosting, index) => (
                  

                            <button key={index} className='lg:w-28 sm:text-xs lg:h-10 rounded-full lg:px-3 lg:py-2 sm:p-3  font-bold
                            text-orange-400 border-1 border-richblack-50 hover:border-orange-400 text-center'>
                          
                                {topJobPosting?.jobTitle}

                            
                            </button>
                            
                        
                    

                ))
            )
        }
    </div>
  )
}
