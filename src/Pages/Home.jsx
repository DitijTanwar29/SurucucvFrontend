import React from 'react'
import truck from "../Assests/Images/truck.jpg"
import ServiceSlider from '../components/common/ServicesSlider'
import Banner from "../Assests/Images/Banner.mp4"
import { TopJobPostings } from '../components/core/HomePage/TopJobPostings'
import JobSearchBar from '../components/core/HomePage/JobSearchBar'
const Home = () => {
  return (
    <div>
    
			{/* Section 1 */}
			<div className='relative'>

				<div className="mx-3 my-7 shadow-[10px_-5px_50px_-5px] shadow-blue-200 w-[95%]">
					<video
						className="shadow-[20px_20px_rgba(255,255,255)] w-full"
						muted
						loop
						autoPlay
					>
						<source src={Banner} type="video/mp4" />
					</video>
				</div>

				{/* Job Search Bar */}
				<div className=" w-[90%] absolute top-10 left-11 " >
					<JobSearchBar/>
				</div>

				{/* Button Group */}
				<div className=" w-[65%] absolute top-0 left-[16%] " >
					<TopJobPostings/>	
				</div>


			{/* Section 2 */}
			<div className=" w-[80%] absolute bottom-0 left-32 translate-y-28 z-5">
				<ServiceSlider/>
			</div>

			
			</div>
			

			


			{/* Section 3 */}
			<div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col lg:flex-row items-center justify-around  mt-40 ">
      {/* <div className="relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white"> */}


				{/* Left for some text */}
				<div className="flex flex-col gap-2">
						<h1 className='text-black text-6xl -tracking-wider text-center'>Get Hired!</h1>
						<h2 className='text-orange-500 text-3xl leading-10 tracking-tighter text-center'>Register and let's get started.</h2>

				</div>

				{/* Right for image container */}
				<div className="flex flex-col lg:flex-row lg:w-[50%] items-center ">
				
            <img
              src={truck}
              alt=""
              className="shadow-orange-500 shadow-[20px_20px_0_0] rounded-2xl "
            />
				
				</div>
    	</div>


		</div>
  )
}

export default Home 