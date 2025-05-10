import { Link } from "react-router-dom";
import { useSearch } from "../../../Pages/SearchForJobs/SearchContext";
import { USER_TYPES } from "../../../constant";
import { useSelector } from "react-redux";

export const JobWrapper = ({ data, name, type = 'Desktop' }) => {

  
const { user } = useSelector(state => state.profile);

console.log("account type : ",user?.accountType)
console.log("user in job wrapper ",user)
const userType = (user && user?.accountType) ?? USER_TYPES.CANDIDATE;

  
  return (
    <div className="flex flex-col w-full">
      {/* Mobile title */}
      <h1 className="text-2xl text-center font-semibold mt-2 lg:hidden">{name}</h1>

      {/* Card content */}
      <div className="flex flex-col w-full  bg-white">
        {/* Header with "All jobs" button */}
        <div className="flex justify-end items-center px-4 py-2 border-b border-gray-100">
          <button className="text-lg text-purple-700 font-rubik-semibold">
            All jobs
          </button>
        </div>

        {/* Scrollable job cards container */}
        <div className={`w-full ${type === 'Mobile' ? 'overflow-y-auto' : 'overflow-y-auto'} scrollbar-hide`}>
          <div className={`w-full gap-4 p-2.5 min-w-min ${type === 'Mobile' ? 'flex ' : 'grid xl:grid-cols-3  lg:grid-cols-2'}`}>
            {data.length !== 0 ? (
              data.map((data, index) => {
                return (
                  <div className='flex-shrink-0 w-max-full w-[300px] px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-sm cursor-pointer hover:border-purple-700'>
                    <Card
                      key={index}
                      data={data}
                      isUserTypeCandidate={userType === USER_TYPES.CANDIDATE}
                    />
                  </div>
                );
              })
            ) : (
              <p className="text-center text-gray-500">No jobs found</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
};

export const Card = ({ data, isUserTypeCandidate = true }) => {

  if (isUserTypeCandidate) {
    return <CandidateJobCard data={data} />
  } else {
    return <ResumeCard data={data} />
  }

}

export const CandidateJobCard = ({ data, isDetails = false }) => {
console.log("data",data)
  return (
    <div className='max-w-full flex flex-col justify-start items-start py-1'>
      <div className='w-full flex justify-between items-start gap-2'>
        <div className='flex flex-col justify-start items-start flex-1 min-w-0'>
          <Link to={`/search/${data._id}`} className='text-lg no-underline text-black font-rubik-semibold truncate w-full'>
            {data.jobTitle}
          </Link>
          <span className='text-sm mt-1 font-rubik-semibold truncate w-full'>
            {data.companyName}
          </span>
          <span className='text-[12px] mt-2 font-rubik-light text-[#808080] truncate w-full'>
            {data?.jobDescription}
          </span>
        </div>
        <div className='w-[60px] h-[60px] flex-shrink-0 shadow-[0_0_10px_rgba(0,0,0,0.1)] rounded-lg overflow-hidden'>
          <img
            src={data?.companyImage}
            className='w-full h-full rounded-lg object-cover'
            alt={`${data.companyName} logo`}
          />
        </div>
      </div>

      <div className='w-full flex flex-col gap-2 mt-4'>
        {isDetails && (
          <>
            <span className="text-black font-rubik-semibold">
              Required Experience: <span className='md-sm text-purple-700'>{data.requiredExperience} years</span>
            </span>
            <span className="text-black font-rubik-semibold">
              Salary: <span className='md-sm text-purple-700'>{data.rangeOfSalary}</span>
            </span>
            <span className=" font-rubik-semibold text-purple-700">
              {data.jobType}
            </span>
          </>
        )}
        <div className='flex gap-x-1.5 flex-wrap gap-y-2'>
          <span className='bg-[#f5f5f5] px-2 py-1 rounded-lg text-[12px] font-normal'>
            Vacancies: {data?.numberOfVacancy}
          </span>
          <span className='bg-[#f5f5f5] px-2 py-1 rounded-lg text-[12px] font-normal'>
            Location: {data?.jobLocation}
          </span>
          <div className='bg-[#f5f5f5] px-2 py-1 rounded-lg text-[12px] font-normal'>
            license: {data?.licenseType.map((license) => (
              <span className='text-sm font-rubik-semibold text-purple-700 rounded-lg'>
                {license}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
};

export const ResumeCard = ({ data, isDetails = false }) => {

  return (
    <div className='max-w-full flex flex-col justify-start items-start py-1'>
      <div className='w-full flex justify-between items-start gap-2'>
        <div className='flex flex-col justify-start items-start flex-1 min-w-0'>
          <Link to={`/search/${data._id}`} className='text-lg text-black no-underline font-rubik-semibold truncate w-full gap-2'>
            {data.firstName}&nbsp;{data.lastName}
          </Link>
          <span className='text-md mt-1 font-rubik-semibold '>
            Email: {data.email}
          </span>
        </div>
      </div>
      {isDetails && (
        <div className="flex flex-col gap-y-2 mt-4 border-t-2 border-t-purple-200 w-full">
          <h2 className="font-rubik-semibold mt-2 text-black">Year Experience</h2>
          <div className='flex flex-col'>
            <span className="text-md font-rubik-semibold text-black">
              European Experience: <span className='md-sm text-purple-700'>{data.europeanExperiencePeriod}</span>
            </span>
            <span className="text-md font-rubik-semibold text-black">
              Russia Experience: <span className='md-sm text-purple-700'> {data.russiaExperiencePeriod}</span>
            </span>
            <span className="text-md font-rubik-semibold text-black">
              Turkic Republics Experience: <span className='md-sm text-purple-700'> {data.turkicRepublicsExperiencePeriod}</span>
            </span>
            <span className="text-md font-rubik-semibold text-black">
              South Experience: <span className='md-sm text-purple-700'>{data.southExperienceTime} </span>
            </span>

          </div>
        </div>
      )}
      <div className='w-full flex flex-col gap-2 mt-4'>
        <div className='flex gap-x-1.5 flex-wrap gap-y-2'>
          <span className='bg-[#f5f5f5] px-2 py-1 rounded-lg text-[12px] font-normal'>
            State: {data?.state}
          </span>
          <span className='bg-[#f5f5f5] px-2 py-1 rounded-lg text-[12px] font-normal'>
            City: {data?.city}
          </span>
          <div className='bg-[#f5f5f5] px-2 py-1 rounded-lg text-[12px] font-normal'>
            license: {data?.licenseType.map((license) => (
              <span className='text-sm font-rubik-semibold text-purple-700 rounded-lg'>
                {license}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}