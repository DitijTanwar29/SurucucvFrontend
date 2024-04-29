import React, { useEffect, useState } from 'react'
import { getTopJobPostings } from '../../../services/operations/jobPostAPI'
import { Link } from "react-router-dom"
export const TopJobPostings = () => {
    const [topJobPostings , setTopJobPostings] = useState([]);

    useEffect(() => {
        ( async () => {
            const response = await getTopJobPostings();
            console.log(" response of top jobPostings : ", response);
            if(response != null){
                setTopJobPostings(response);
            }
            console.log("topJobPostings useState :",topJobPostings);
        })();
    }, []);
  return (
    <div  className='w-full flex justify-center  gap-32 flex-wrap mt-44 '>
        {
            topJobPostings?.length === 0 ? (
                <p>No Job Post Available yet</p>
            ) : (
                topJobPostings?.map((topJobPosting) => (
                    <Link to={`/job/${topJobPosting._id}`} key={topJobPosting._id}>
                        
                            <button className='w-32 h-16 rounded-lg p-2  font-mono bg-orange-400 text-black hover:bg-orange-700'>
                                {topJobPosting?.jobTitle}
                            </button>

                        


                    </Link>
                ))
            )
        }
    </div>
  )
}
