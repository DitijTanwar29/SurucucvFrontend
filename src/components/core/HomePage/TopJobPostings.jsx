import React, { useEffect, useState } from 'react'
import { getTopJobPostings } from "../../../services/operations/jobPostAPI"
import { Link } from "react-router-dom"
export const TopJobPostings = () => {
    const [topJobPostings , setTopJobPostings] = useState([]);
    // const navigate = useNavigate()
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
   //TODO: IS DONE

    const TRUNCATE_LENGTH = 1

   {/* <p className='text-[16px] '>{
                  job?.jobDescription.split(" ").length >
                            TRUNCATE_LENGTH
                              ? job?.jobDescription
                                  .split(" ")
                                  .slice(0, TRUNCATE_LENGTH)
                                  .join(" ") + "..."
                              : job?.jobDescription}</p> */}
  return (
    <div  className=' w-full flex-col lg:justify-center items-center sm:flex-wrap  sm:space-x-2  '>
        
        {
            topJobPostings?.length === 0 ? (
                <p>No Top Job Post Available yet</p>
            ) : (
                topJobPostings?.map((job, index) => (
                  
                            <Link to={`/job/${job?.id}`}>

                              <button key={job._id} className='lg:w-28 sm:w-18 sm:text-xs lg:h-10   rounded-full
                               lg:px-3 lg:py-2 sm:p-3 font-bold sm:m-1 sm:my-3
                              text-purple-700 border-1 border-richblack-50 hover:border-orange-400 text-center'
                              
                              // onClick={clickHandler()}
                              >

                                  {job?.jobTitle.split(" ").length >
                            TRUNCATE_LENGTH
                              ? job?.jobTitle
                                  .split(" ")
                                  .slice(0, TRUNCATE_LENGTH)
                                  .join(" ") + "..."
                              : job?.jobTitle}

                              
                              </button>
                            </Link>
                            
                        
                    

                ))
            )
        }
    </div>
  )
}
