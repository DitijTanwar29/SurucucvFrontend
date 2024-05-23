import React from 'react'
import truck from "../Assests/Images/truck.jpg"
import bustext from "../Assests/Images/bustext.Com.png"
import ServiceSlider from '../components/common/ServicesSlider'
import Banner from "../Assests/Images/Banner.mp4"
import { TopJobPostings } from '../components/core/HomePage/TopJobPostings'
import JobSearchBar from '../components/core/HomePage/JobSearchBar'
import RecentlyPublishedJobs from "../components/core/HomePage/RecentlyPublishedJobs"
import FullTimeJobs from "../components/core/HomePage/FullTimeJobs"
import PartTimeJobs from '../components/core/HomePage/PartTimeJobs'
import JobSliders from '../components/core/HomePage/JobSliders'
import Vs from '../Assests/Images/Vs.jpg'
import { useMediaQuery } from 'react-responsive'
import { TopLocations } from '../components/core/HomePage/TopLocations'
import CountUp from 'react-countup';
const Home = () => {

	const countUpRef = React.useRef(null);
	const isDesktopOrLaptop = useMediaQuery({
		query: '(min-width: 1024px)'
	  })
	const isTablet = useMediaQuery({
		query: '(min-width: 768px)'
	})
	const isMobile = useMediaQuery({
		query: '(max-width: 425px)'
	})
	
	  
  return (
    <div>
    
			{/* Section 1 */}
			<div className='w-11/12 max-w-maxContent mx-auto flex justify-center items-center gap-2 '>

				{/* <div className="mx-3 my-7 shadow-[10px_-5px_50px_-5px] shadow-blue-200 w-[95%]">
					<video
						className="shadow-[20px_20px_rgba(255,255,255)] w-full"
						muted
						loop
						autoPlay
					>
						<source src={Banner} type="video/mp4" />
					</video>
				</div> */}

				{/* <div className="  flex justify-center items-center gap-2 " > */}

					<div className='w-full flex flex-col gap-3 justify-between items-start mx-auto  p-2 '>
						{/* heading */}
						<div className="w-[80%] flex flex-col justify-center items-center gap-2 m-6 ">
							<h1>Discover Driving Opportunities</h1>
							<p><span className='font-bold'>643,89</span> job postings, from <span className='font-bold'>tons of companies</span></p>
						</div>
						
						{/* Job Search Bar */}
						<JobSearchBar/>

						{/* Button Group */}
						<div className=" w-full h-[500px] flex flex-col justify-between items-start mx-auto space-y-4 p-2 " >
							<h2>Top Job Postings</h2>
							<TopJobPostings/>

							{/* <div className='w-[50%] border-[1px] border-black absolute'></div> */}
							<h2>Top Job Locations</h2>
							<TopLocations/>	
						</div>


					</div>

			
					<img  
					src={Vs}
					className="w-[500px] h-[500px] -mt-36 rounded-lg object-fit"></img>
				{/* </div> */}
			</div>
				

				
					
					
			{/* Section 2 */}
			<div className=" w-11/12  mx-auto mt-10 ">
				<ServiceSlider/>
			</div>
			

			

			


			{/* Section 3 */}
			{/* <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col lg:flex-row items-center justify-around  mt-40 "> */}



				{/* Left for some text */}
				{/* <div className="flex flex-col gap-2">
						<h1 className='text-black text-6xl -tracking-wider text-center'>Get Hired!</h1>
						<h2 className='text-orange-500 text-3xl leading-10 tracking-tighter text-center'>Register and let's get started.</h2>

				</div> */}

				{/* Right for image container */}
				{/* <div className="flex flex-col lg:flex-row lg:w-[50%] items-center "> */}
				
            {/* <img
              src={truck}
              alt=""
              className="shadow-orange-500 shadow-[20px_20px_0_0] rounded-2xl "
            /> */}
				
				{/* </div> */}
    		{/* </div> */}

		<div className='w-screen h-36 flex gap-4 bg-richblue-50 p-2 m-3 mt-5 mx-auto'>
				
		<CountUp start={0} end={4500000} delay={0} duration={2.75}
 				>
			{({ countUpRef }) => (
				<div className='w-full flex justify-center items-center '>
				<div className='flex flex-col gap-y-1'>
					<span ref={countUpRef} />
					<h6>Türkiye'deki sürücü sayısı</h6>
				</div>
				</div>
			)}
		</CountUp>

		<CountUp start={0} end={3000000} delay={0} duration={2.75}
 				>
			{({ countUpRef }) => (
				<div className='w-full flex justify-center items-center'>
				<div className='flex flex-col gap-y-1'>
					<span ref={countUpRef} />
					<h6>drivers in the freight transport sector</h6>
				</div>
				</div>
			)}
		</CountUp>

		<CountUp start={0} end={1500000} delay={0} duration={2.75}
 				>
			{({ countUpRef }) => (
				<div className='w-full flex justify-center items-center '>
				<div className='flex flex-col gap-y-1'>
					<span ref={countUpRef} />
					<h6>drivers in the passenger transport sector</h6>
				</div>
				</div>
			)}
		</CountUp>

		<CountUp start={0} end={1000000} delay={0} duration={2.75}
 				>
			{({ countUpRef }) => (
				<div className='w-full flex justify-center items-center '>
				<div className='flex flex-col gap-y-1'>
					<span ref={countUpRef} />
					<h6>drivers in the moto-couriers sector</h6>
				</div>
				</div>
			)}
		</CountUp>

		</div>

		{/* Section 4 */}
		{
			isMobile && <JobSliders/>
		}
		<div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col lg:flex items-center justify-center ">

				{/* {
					isMobile && 
				} */}
				{/* {
					isTablet && 
				} */}
				{/* {
					isDesktopOrLaptop && 
				} */}

				<RecentlyPublishedJobs/>			
				<FullTimeJobs/>
				<PartTimeJobs/>
		</div>

		</div>
  )
}

export default Home 