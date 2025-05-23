import React, { useState, useEffect } from 'react'
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
import HeroImageComponent from '../components/core/Dashboard/UpdateHeroImage/HeroImageComponent'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {
	

	const [selectedSectorId, setSelectedSectorId] = useState(null);
	const [selectedServiceId, setSelectedServiceId] = useState(null);
	const navigate = useNavigate();

	const [rightImage, setRightImage] = useState(Vs);

	useEffect(() => {
		const handleRightImage = async () => {
			// TODO: Get the right image from the database
		}
		handleRightImage();
	}, []);




	return (
		<div>
			{/* Section 1 */}
			<div className='mt-32 w-full mx-auto px-4 lg:px-8'>
				{/* <div className="  flex justify-center items-center gap-2 " > */}

				<div className='w-full flex flex-col lg:flex-row gap-8'>
					{/* heading */}
					<div className="flex-1">
						<div className='flex flex-col gap-6 lg:px-4'>
							<div className='flex flex-col gap-2'>
								<h1 className='font-rubik-semibold text-3xl '>Discover Driving Opportunities</h1>
								<p className='text-xl'><span className='font-rubik-semibold'>643,89</span> job postings, from <span className='font-bold'>tons of companies</span></p>
							</div>

							<JobSearchBar />

							<div className='flex flex-col gap-8'>
								<div className='flex flex-col gap-3'>
									<p className='text-base capitalize font-rubik-normal text-[#878787]'>
										TOP JOB POSTINGS
									</p>
									<TopJobPostings />
								</div>

								<div className='flex flex-col gap-3'>
									<p className='text-base capitalize font-rubik-normal text-gray-500'>
										Top Job Locations
									</p>
									<TopLocations />
								</div>

								
							</div>
						</div>
					</div>

					{/* Right Image */}
					<div className='hidden lg:flex items-start'>
						{/* <img
							src={rightImage}
							alt='hero_Section_img'
							className="w-[375px] rounded-lg object-cover"
						/> */}
						<HeroImageComponent/>
					</div>
				</div>
			</div>


			{/* Section 2 */}
			<div className=" w-full py-8 ">
				<ServiceSlider />
			</div>


			<div className='w-full grid lg:grid-cols-4 lg:grid-rows-1 grid-rows-4 gap-3 py-4 px-2 lg:px-6 '>

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
			<div className="w-full ">
				<JobSidebar />
			</div>


			<div className="p-4">
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