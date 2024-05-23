import React, { useEffect, useState } from 'react';
import { getRecentlyPublishedJobs } from '../../../services/operations/jobPostAPI';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import "swiper/css/free-mode";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import { Link } from 'react-router-dom';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const RecentlyPublishedSlider = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    // Fetch recently published jobs from the backend
    const fetchJobs = async () => {
      try {
        const response = await getRecentlyPublishedJobs();
        console.log("RECENTLY PUBLISHED JOBS SLIDER :",response);
        setJobs(response);
      } catch (error) {
        console.error('Error fetching recently published jobs in slider:', error.message);
      }
    };
    fetchJobs();
  }, []);
  const TRUNCATE_LENGTH = 8


  return (
<div className='mt-40 flex flex-col gap-3 w-full justify-center items-center'>
            <h1>Recently Published Jobs</h1>
    {
        jobs?.length !== 0 ? (
            <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            freeMode={true}
            autoplay={{
            delay: 2200,
            disableOnInteraction: false,
            }}
            pagination={{
            clickable: true,
            }}
            // navigation={true}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
            
            // modules={[FreeMode, Pagination, Autoplay]}
            >

            {jobs?.map((job) => (
                <SwiperSlide key={job._id}>
            <div className=' w-[100%] h-[11rem] '>
                <Link to={`/job/${job._id}`} key={job._id} 
                className="w-[100%] mx-20 p-3 flex bg-richblack-100 gap-8 justify-between items-center ">
                
              <img
                alt={job.companyName}
                className="h-[125px] w-[100px] ml-20 rounded-lg object-cover"
                src={job.company.image}
              />

              <div className=' w-full flex flex-col gap-[1px] mr-8 '>
                <h3>{job.jobTitle}</h3>
                <p>{
                job.jobDescription.split(" ").length >
                          TRUNCATE_LENGTH
                            ? job.jobDescription
                                .split(" ")
                                .slice(0, TRUNCATE_LENGTH)
                                .join(" ") + "..."
                            : job.jobDescription}</p>
                <p>Number Of Vacancies :{job.numberOfVacancy}</p>
                <p> Job Location : {job.jobLocation}</p>
              </div>
          </Link>
            </div>
              {/* Render other job details here */}
                </SwiperSlide>
            ))}



            </Swiper>
        ) : (
            <p>No Services Found</p>
        )
    }
</div>
    );
};

export default RecentlyPublishedSlider;