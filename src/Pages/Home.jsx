import React, { useState } from 'react'
import ServiceSlider from '../components/common/ServicesSlider'
import { TopJobPostings } from '../components/core/HomePage/TopJobPostings'
import JobSearchBar from '../components/core/HomePage/JobSearchBar'
import JobSliders from '../components/core/HomePage/JobSliders'
import JobGroups from '../components/core/HomePage/JobGroups'
import Vs from '../Assests/Images/Driver-pro-logo.jfif'
import { useMediaQuery } from 'react-responsive'
import { TopLocations } from '../components/core/HomePage/TopLocations'
import CountUp from 'react-countup';
import JobSidebar from '../components/core/HomePage/JobSidebar'
import Footer from './Footer/Footer'
import { getJobsByProvince, getJobsBySector, getJobsByService } from '../services/operations/jobPostAPI';
import JobDropdown from '../components/core/HomePage/JobDropdown/JobDrpodown'
import { MdGroups } from "react-icons/md";
import { BsTrainFreightFront } from "react-icons/bs";
import { BsBusFront } from "react-icons/bs";
import { FaMotorcycle } from "react-icons/fa6";
import AdsSlider from "../components/core/HomePage/AdsSlider"


const Home = () => {

	const [selectedSectorId, setSelectedSectorId] = useState(null);
	const [selectedServiceId, setSelectedServiceId] = useState(null);
	const countUpRef = React.useRef(null);

	const [jobData, setJobData] = useState([]);


	const isDesktopOrLaptop = useMediaQuery({
		query: '(min-width: 1024px)'
	})
	const isTablet = useMediaQuery({
		query: '(max-width: 768px)'
	})
	const isMobile = useMediaQuery({
		query: '(max-width: 425px)'
	})


	return (
		<div className='bg-[#f5f5f5] w-full '>

			{/* Section 1 */}
			<div className='mt-24 w-full mx-auto flex lg:flex-row sm:flex-col px-8'>
				{/* <div className="  flex justify-center items-center gap-2 " > */}

				<div className='w-full flex  flex-col py-2 px-2'>
					{/* heading */}
					<div className="flex gap-y-0.5 mb-4 justify-between items-center">
						<div className='flex-1 flex flex-col gap-x-1 px-4'>
							<div className='flex flex-col mt-8'>
								<h1 className='font-rubik-semibold text-3xl '>Discover  Driving Opportunities</h1>
								<p className='text-xl'><span className='font-rubik-semibold'>643,89</span> job postings, from <span className='font-bold'>tons of companies</span></p>
							</div>
							<JobSearchBar />
							<div className='flex flex-col mt-8 gap-y-8'>
								<div className='flex flex-col  '>
									<p className='text-base capitalize font-rubik-normal text-[#878787]'>
										TOP JOB POSTINGS
									</p>
									<TopJobPostings />
								</div>

								{/* <div className='w-[50%] border-[1px] border-black absolute'></div> */}
								<div className='flex flex-col  '>
									<p className='text-md capitalize font-rubik-normal text-gray-500'>
										Top Job Locations
									</p>
									<TopLocations />
								</div>
							</div>
						</div>
						<div className='lg:flex hidden h-full justify-center items-start  '>
							<img
								src={Vs}
								alt='hero_Section_img'
								className="w-[375px] h-full  rounded-lg object-cover "
							/>
						</div>
					</div>
				</div>
				{/* </div> */}
			</div>


			{/* Section 2 */}
			<div className=" w-full   py-8">
				<ServiceSlider />
			</div>


			<div className='w-full grid lg:grid-cols-4 lg:grid-rows-1 grid-rows-4 gap-3 py-4 px-6 '>

				<div className='flex flex-col border border-purple-700 justify-center items-center bg-white gap-2.5 p-6'>
					<MdGroups className='size-20 text-purple-700' />
					<CountUp
						start={0}
						end={4500000}
						delay={0}
						duration={2.75}
					>
						{({ countUpRef }) => (
							<div className='flex flex-col justify-center items-center'>
								<span ref={countUpRef} className='font-rubik-semibold text-3xl text-black' />
								<p className='font-rubik-semibold text-md text-black text-center'>Türkiye'deki Mevcut Sürücü Sayısı</p>
							</div>
						)}
					</CountUp>
				</div>
				<div className='flex flex-col border border-purple-700 justify-center items-center bg-white gap-2.5 p-6'>
					<BsTrainFreightFront className='size-20  text-purple-700' />
					<CountUp
						start={0}
						end={3000000}
						delay={0}
						duration={3.75}
					>
						{({ countUpRef }) => (
							<div className='flex flex-col justify-center items-center'>
								<span ref={countUpRef} className='font-rubik-semibold text-3xl text-black' />
								<p className='font-rubik-semibold text-md text-black text-center'>Yük taşımacılığı sektöründeki sürücüler</p>
							</div>
						)}
					</CountUp>
				</div>
				<div className='flex flex-col border border-purple-700 justify-center items-center bg-white gap-2.5 p-6'>
					<BsBusFront className='size-20  text-purple-700' />
					<CountUp
						start={0}
						end={1500000}
						delay={0}
						duration={4.75}
					>
						{({ countUpRef }) => (
							<div className='flex flex-col justify-center items-center'>
								<span ref={countUpRef} className='font-rubik-semibold text-3xl text-black' />
								<p className='font-rubik-semibold text-md text-black text-center'>Yolcu taşımacılığı sektöründeki sürücüler</p>
							</div>
						)}
					</CountUp>
				</div>
				<div className='flex flex-col border border-purple-700 justify-center items-center bg-white gap-2.5 p-6'>
					<FaMotorcycle className='size-20 text-purple-700' />
					<CountUp
						start={0}
						end={1000000}
						delay={0}
						duration={5.75}
					>
						{({ countUpRef }) => (
							<div className='flex flex-col justify-center items-center'>
								<span ref={countUpRef} className='font-rubik-semibold text-3xl text-black' />
								<p className='font-rubik-semibold text-md text-black text-center'>Moto kurye sektöründeki sürücüler</p>
							</div>
						)}
					</CountUp>
				</div>

			</div>

			{/* ADS SLIDER */}
			<div className=" w-full mx-auto  ">
				<AdsSlider />
			</div>
			<div className="w-full px-6">
				<JobSidebar />
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

			<Footer />

		</div>
	)
}

export default Home 