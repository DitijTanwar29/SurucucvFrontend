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
  return (
    <div  className='w-full flex justify-center  gap-32 flex-wrap mt-44 '>
        {
            topJobPostings?.length === 0 ? (
                <p>No Job Post Available yet</p>
            ) : (
                topJobPostings?.map((topJobPosting) => (
                    
                        
                            <button className='w-32 h-16 rounded-lg p-2  font-mono bg-orange-400 text-black hover:bg-orange-700'>
                                {topJobPosting?.jobTitle}
                            </button>

                ))
            )
        }
    </div>
  )
}
