
export const JobWrapper = ({ data, name, type = 'Desktop' }) => {

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
                    <JobCard
                      key={index}
                      data={data}
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

export const JobCard = ({ data }) => {
  return (

    <div className='max-w-full flex flex-col justify-start items-start py-1'>
      <div className='w-full flex justify-between items-start gap-2'>
        <div className='flex flex-col justify-start items-start flex-1'>
          <span className='text-lg font-rubik-semibold truncate'>{data.jobTitle}</span>
          <span className='text-sm mt-1 font-rubik-semibold truncate'>{data.companyName}</span>
          <span className='text-[12px] mt-2 font-rubik-light text-[#808080] truncate'>{data?.jobDescription}</span>
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
        <div className='flex gap-x-1.5 flex-wrap gap-y-2'>
          <span className='bg-[#f5f5f5] px-2 py-1 rounded-lg text-[12px] font-normal'>
            Vacancies: {data?.numberOfVacancy}
          </span>
          <span className='bg-[#f5f5f5] px-2 py-1 rounded-lg text-[12px] font-normal'>
            Location: {data?.jobLocation}
          </span>
        </div>
        <span className='text-sm font-rubik-semibold text-purple-700 rounded-lg'>
          {data?.jobType}
        </span>
      </div>
    </div>
  )
}