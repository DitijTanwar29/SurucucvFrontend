import React, { useState } from 'react'
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
import JobGroups from '../components/core/HomePage/JobGroups'
import Vs from '../Assests/Images/Driver pro logo.jfif'
import { useMediaQuery } from 'react-responsive'
import { TopLocations } from '../components/core/HomePage/TopLocations'
import CountUp from 'react-countup';
import JobSidebar from '../components/core/HomePage/JobSidebar'
import Footer from './Footer/Footer'
import { getJobsByProvince, getJobsBySector, getJobsByService } from '../services/operations/jobPostAPI';
import JobDropdown from '../components/core/HomePage/JobDropdown/JobDrpodown'
const Home = () => {

	const [selectedSectorId, setSelectedSectorId] = useState(null);
    const [selectedServiceId, setSelectedServiceId] = useState(null);

	const countUpRef = React.useRef(null);
	const isDesktopOrLaptop = useMediaQuery({
		query: '(min-width: 1024px)'
	  })
	const isTablet = useMediaQuery({
		query: '(max-width: 768px)'
	})
	const isMobile = useMediaQuery({
		query: '(max-width: 425px)'
	})

	
	console.log("jobs by sector : ", getJobsBySector)
	  
  return (
    <div className='  bg-pure-greys-25/80 '>
    
			{/* Section 1 */}
			<div className='lg:mt-24 bg-whit  w-11/12 max-w-maxContent mx-auto flex lg:flex-row sm:flex-col justify-center items-center gap-2 '>

				{/* <div className="  flex justify-center items-center gap-2 " > */}

					<div className='w-full flex flex-col sm:gap-7 -space-y-16 lg:items-start   p-2 '>
						{/* heading */}
						<div className="w-[80%] h-36 flex flex-col items-left gap-1 sm:mb-20 m-0 ">
							<h2 className='font-edu-sa font-bold text-left'>Discover Driving Opportunities</h2>
							<p><span className='font-bold'>643,89</span> job postings, from <span className='font-bold'>tons of companies</span></p>
						</div>
						
						{/* Job Search Bar */}
						<JobSearchBar/>

						{/* Button Group */}
						<div className=" w-full h-[300px] flex flex-col justify-center  items-left gap-6
						 p-2 " >
						 <div>
							<h4 className='text-left font-edu-sa sm:mt-60 lg:mt-10 '>Top Job Postings</h4>
							<TopJobPostings/> 
						 </div>

							{/* <div className='w-[50%] border-[1px] border-black absolute'></div> */}
							<div>
								<h4 className='text-left font-edu-sa'>Top Job Locations</h4>
								<TopLocations/>	
							</div>

						</div>
					</div>

			
					<img  
					src={Vs}
					className="lg:w-[500px] sm:hidden md:hidden lg:h-[400px] lg:flex rounded-lg object-contain"></img>
				{/* </div> */}
			</div>
				

				
					
					
			{/* Section 2 */}
			<div className=" w-11/12  mx-auto sm:mt-32 lg:mt-10">
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

		<div className='w-[full] sm:hidden lg:h-36 lg:flex justify-center items-center lg:gap-3  bg-richblue-50 p-3 mt-28 mx-auto '>
				
		<CountUp start={0} end={4500000} delay={0} duration={2.75}
 				>
			{({ countUpRef }) => (
				<div className='w-full lg:w-[25%] sm:hidden lg:flex justify-center items-center '>
				<div className='flex flex-col  gap-y-1'>
					<span ref={countUpRef} className='font-bold font-edu-sa text-2xl  ' />
					<h6 className='font-bold font-edu-sa text-2xl '>Türkiye'deki sürücü sayısı</h6>
				</div>
				</div>
			)}
		</CountUp>

		<CountUp start={0} end={3000000} delay={0} duration={2.75}
 				>
			{({ countUpRef }) => (
				<div className='w-full lg:w-[25%] sm:hidden lg:flex justify-center items-center'>
				<div className='flex flex-col gap-y-1 '>
					<span ref={countUpRef} className='font-bold font-edu-sa text-2xl  '/>
					<h6 className='font-bold font-edu-sa text-2xl'>drivers in the freight transport sector</h6>
				</div>
				</div>
			)}
		</CountUp>

		<CountUp start={0} end={1500000} delay={0} duration={2.75}
 				>
			{({ countUpRef }) => (
				<div className='w-full sm:hidden lg:flex lg:w-[25%] justify-center items-center '>
				<div className='flex flex-col gap-y-1'>
					<span ref={countUpRef} className='font-bold font-edu-sa text-2xl ' />
					<h6 className='font-bold font-edu-sa text-2xl  '>drivers in the passenger transport sector</h6>
				</div>
				</div>
			)}
		</CountUp>

		<CountUp start={0} end={1000000} delay={0} duration={2.75}
 				>
			{({ countUpRef }) => (
				<div className='w-full sm:hidden lg:w-[25%] lg:flex justify-center items-center '>
				<div className='flex flex-col gap-y-1'>
					<span ref={countUpRef} className='font-bold font-edu-sa text-2xl ' />
					<h6 className='font-bold font-edu-sa text-2xl '>drivers in the moto-couriers sector</h6>
				</div>
				</div>
			)}
		</CountUp>

		</div>

		{/* Section 4 */}
				{
					isTablet && <JobGroups/>
				}
		{
			isMobile && <JobSliders/>
		}
		<div className="relative mx-auto flex w-screen bg- max-w-maxContent flex-col lg:flex items-center justify-center ">

				{/* {
					isMobile && 
				} */}
				{
					isDesktopOrLaptop && <JobSidebar/>
				}

				{/* <RecentlyPublishedJobs/>			
				<FullTimeJobs/>
				<PartTimeJobs/> */}
		</div>


		<div className=" p-4">
            <JobDropdown 
                fetchData={getJobsByProvince}  
                title="Job Postings by Province" 
				filterKey="jobLocation"
            />
            <JobDropdown 
                fetchData={getJobsBySector} 
                title="Job Postings by Sector"
				filterKey="sectorId" 
				setSelectedSectorId={setSelectedSectorId} 
            />
            <JobDropdown 
                fetchData={getJobsByService} 
                title="Job Postings by Service" 
				filterKey="service"
				setSelectedServiceId={setSelectedServiceId}
            />
            {/* <JobDropdown 
                apiEndpoint="/api/job/sectors-with-job-count" 
                title="Sectors with Job Count" 
            /> */}
        </div>

		<Footer/>

		</div>
  )
}

export default Home 