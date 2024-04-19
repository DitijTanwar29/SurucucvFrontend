import { useState, useEffect } from "react";
import React from "react";

import IconBtn from "../../../../common/IconBtn";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobDetails, editJobPostDetails } from "../../../../../services/operations/jobPostAPI";
import { useForm } from "react-hook-form";
import { getActiveServices } from "../../../../../services/operations/serviceDetailsAPI";
import { Country, State, City }  from 'country-state-city';
import { useParams } from "react-router-dom"
import { setJob, setEditJob } from "../../../../../slices/jobPostSlice"
const EditPostJob = () => {
    const { jobId } = useParams()
    console.log("job id: ",jobId)
  // console.log(Country.getAllCountries())
//   console.log("state: ",JSON.stringify(State.getAllStates()))
//   console.log("city: ", City.getCitiesOfCountry("TR"))

  const { user } = useSelector((state) => state.profile);
  // const { token } = useSelector((state) => state.auth)
  const { job, editJob } = useSelector((state) => state.job)

  const token = user.token;
  console.log("token : ", token);
  //token ki dikkat h kl check krungaa
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false)
  const [services, setServices] = useState([]);

  const [src1Checked, setSrc1Checked] = useState(false);
  const [src2Checked, setSrc2Checked] = useState(false);
  const [src3Checked, setSrc3Checked] = useState(false);
  const [src4Checked, setSrc4Checked] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue, 
    watch,
  } = useForm();

  const watchedValues = watch();

  const handleSrc1Change = () => {
    setSrc1Checked(!src1Checked);
    if (!src1Checked) {
        setSrc2Checked(true);
    } else {
        setSrc2Checked(false);
    }
};

const handleSrc2Change = () => {
    setSrc2Checked(!src2Checked);
};

const handleSrc3Change = () => {
    setSrc3Checked(!src3Checked);
    if (!src3Checked) {
        setSrc4Checked(true);
    } else {
        setSrc4Checked(false);
    }
};

const handleSrc4Change = () => {
    setSrc4Checked(!src4Checked);
};

// useEffect( () => {
//     ;(async () => {
//         setLoading(true)
//         console.log("job id inside useEffect() :", jobId)
//         const result = await fetchJobDetails(jobId, token)
//         // console.log("result : ",result)
//         console.log("result.[0] : ",result?.[0])
//         console.log("result of fetchJoDetails api: ",result)
//         // console.log("result.[0].serviceName : ",result?.[0].serviceName)
//           console.log("result of result?.[0]?.companyName : ",result?.[0]?.companyName)

  
//         if(result?.jobDetails){
          
//           dispatch(setEditJob(true))
//           dispatch(setJob(result?.[0]))
//         }
//         setLoading(false)
// })()

// // if form is in edit mode
// if (editJob) {
//     // console.log("data populated", editJob)
//     setValue("jobId", job._id)
//     setValue("title", job.title)
//     setValue("description", job.description)
//     setValue("service", job.service)
//     setValue("skills", job.skills)
//     setValue("requiredExperience", job.requiredExperience)
//     setValue("location", job.location)
//     setValue("companyName", job.companyName)
//     setValue("salaryRange", job.salaryRange)
//     setValue("salaryType", job.salaryType)
//     setValue("vacancy", job.vacancy)
//     setValue("startDate", job.startDate)
//     setValue("endDate", job.endDate)
//     setValue("jobType", job.jobType)
//     setValue("status", job.status)
//     setValue("isSrc1", job.isSrc1)
//     setValue("isSrc2", job.isSrc2)
//     setValue("isSrc3", job.isSrc3)
//     setValue("isSrc4", job.isSrc4)
//     setValue("psikoteknik", job.psikoteknik)
//     setValue("adrDriverLicence", job.adrDriverLicence)
//     setValue("passport", job.passport)
//     setValue("visa", job.visa)
//     setValue("abroadExperience", job.abroadExperience)
//     setValue("isBlindSpotTraining", job.isBlindSpotTraining)
//     setValue("isSafeDrivingTraining", job.isSafeDrivingTraining)
//     setValue("isFuelEconomyTraining", job.isFuelEconomyTraining)
//   }
//   // title, description, service, skills, requiredExperience, 
//   //           location,companyName, salaryRange, salaryType, 
//   //           vacancy, startDate, endDate, jobType, status,
//   //           licenseType,srcBox,isSrc1,isSrc2,isSrc3,isSrc4,psikoteknik,adrDriverLicence,
//   //           passport,visa,abroadExperience,
//   //           isBlindSpotTraining,isSafeDrivingTraining,isFuelEconomyTraining


// },[])


  useEffect(() => {
    const getServices = async () => {
      setLoading(true);
      const services = await getActiveServices();
      if (services.length > 0) {
        // console.log("categories", categories)
        setServices(services);
      }
      setLoading(false);
    };
    // if form is in edit mode
    // if (editCourse) {
    //   // console.log("data populated", editCourse)
    //   setValue("courseTitle", course.courseName)
    //   setValue("courseShortDesc", course.courseDescription)
    //   setValue("coursePrice", course.price)
    //   setValue("courseTags", course.tag)
    //   setValue("courseBenefits", course.whatYouWillLearn)
    //   setValue("courseCategory", course.category)
    //   setValue("courseRequirements", course.instructions)
    //   setValue("courseImage", course.thumbnail)
    // }
    getServices();

      

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

const onSubmit = async (data) => {
    console.log("Form Data - ", data);
    // console.log("token - ", token)

    try {
        dispatch(editJobPostDetails({...data, jobId:jobId}, token));
        // SERVICE SELECT KRKNA IMPORTANT H YAHA TAB HI JOB POST UPDATE HOGII
    } catch (error) {
    console.log("ERROR MESSAGE - ", error.message);
    }
};  
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* jJob Information */}
      <h1 className="mb-14 text-3xl font-medium text-richblack-5">
        Edit Job Post
      </h1>
      <div className="my-10 flex flex-col gap-y-6 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-8 px-12">
        <h2 className="text-lg font-semibold text-richblack-5">
          Basic Details
        </h2>

        {/* ROW 1 */}
        <div className="flex flex-col gap-5 lg:flex-row">
        {/* JOb Title   */}
          <div className="flex flex-col gap-2 lg:w-[25%]">
            <label htmlFor="jobTitle" className="lable-style">
              Job Title <sup className="text-pink-200">*</sup>
            </label>
            <input
              type="text"
              name="title"
              id="jobTitle"
              placeholder="Enter job title"
              className="form-style"
              {...register("jobTitle", { required:true})}
              defaultValue={job?.jobTitle}
            />
            {errors.title && (
              <span className="-mt-1 text-[12px] text-yellow-100">
                Please enter your job title .
              </span>
            )}
          </div>

          <div className="flex flex-col space-y-2 lg:w-[25%] ">
            <label
              className="lable-style"
              htmlFor="service"
            >
              Service <sup className="text-pink-200">*</sup>
            </label>
            <select
              {...register("service",{required:true})}
              id="service"
              className="form-style w-full"
              defaultValue={job?.service}
            >
              <option value="" disabled>
                Choose a Service
              </option>
              {!loading &&
                services?.map((service, indx) => (
                  <option key={indx} value={service?._id}>
                    {service?.serviceName}
                  </option>
                ))}
            </select>
            {errors.service && (
              <span className="ml-2 text-xs tracking-wide text-pink-200">
                Service is required
              </span>
            )}
          </div>

          <div className="flex flex-col gap-2 lg:w-[25%]">
            <label htmlFor="companyName" className="lable-style">
              Company Name <sup className="text-pink-200">*</sup>
            </label>
            <input
              type="text"
              name="companyName"
              id="companyName"
              placeholder="Enter company name"
              className="form-style"
              {...register("companyName",{required:true})}
              defaultValue={job?.companyName}

            />
            {errors.companyName && (
              <span className="-mt-1 text-[12px] text-yellow-100">
                Please enter your company name.
              </span>
            )}
          </div>

          <div className="flex flex-col gap-2 lg:w-[25%]">
            <label htmlFor="skills" className="lable-style">
              Required Skills
            </label>
            <input
              type=""
              name="skills"
              id="skills"
              placeholder="Enter required skills"
              className="form-style"
              {...register("skills")}
              defaultValue={job?.skills}
            />
            {errors.skills && (
              <span className="-mt-1 text-[12px] text-yellow-100">
                Please enter required skills.
              </span>
            )}
          </div>
        </div>

        {/* ROW 2 */}
        <div className="flex flex-col gap-5 lg:flex-row">

          <div className="flex flex-col gap-2 lg:w-[25%]">
            <label htmlFor="requiredExperience" className="lable-style">
            Required Experience
            </label>
            <input
              type="number"
              name="requiredExperience"
              id="requiredExperience"
              placeholder="Enter required experience "
              className="form-style"
              {...register("requiredExperience")}
              defaultValue={job?.requiredExperience}
            />
            {errors.requiredExperience && (
              <span className="-mt-1 text-[12px] text-yellow-100">
                Please select your required experience.
              </span>
            )}
          </div>

          <div className="flex flex-col gap-2 lg:w-[25%]">
            <label htmlFor="salaryRange" className="lable-style">
            Salary Range
            </label>
            <div className="flex gap-3 relative">

            <input
              type="text"
              name="salaryRange"
              id="salaryRange"
              placeholder="Enter salary range "
              className="form-style ml-1"
              {...register("salaryRange")}
              defaultValue={job?.salaryRange}

            />
            <span className="flex flex-start absolute lable-style my-auto ml-2 mt-3 ">$</span>
            </div>
            {errors.salaryRange && (
              <span className="-mt-1 text-[12px] text-yellow-100">
                Please select your salary range.
              </span>
            )}
          </div>

          <div className="flex flex-col gap-2 lg:w-[25%]">
            <label htmlFor="jobType" className="lable-style">
            Job Type
            </label>
            <select
              type="text"
              name="jobType"
              id="jobType"
              placeholder="Choose job type "
              className="form-style"
              {...register("jobType")}
              defaultValue={job?.jobType}

            >
              <option value="" disabled >Choose Job Type</option>
              <option value="Full Time" >Full Time</option>
              <option value="Part Time" >Part Time</option>
              <option value="Internship" >Internship</option>

            </select>
            {errors.jobType && (
              <span className="-mt-1 text-[12px] text-yellow-100">
                Please select your job type.
              </span>
            )}
          </div>

          <div className="flex flex-col gap-2 lg:w-[25%]">
            <label htmlFor="salaryType" className="lable-style">
            Salary Type
            </label>
            <select
              type="text"
              name="salaryType"
              id="salaryType"
              placeholder="Choose salary type "
              className="form-style"
              {...register("salaryType")}
              defaultValue={job?.salaryType}

            >
              <option value="" disabled >Choose Salary Type</option>
              <option value="Hourly" >Hourly</option>
              <option value="Weekly" >Weekly</option>
              <option value="Monthly" >Monthly</option>
              <option value="Yearly" >Yearly</option>

            </select>
            {errors.salaryType && (
              <span className="-mt-1 text-[12px] text-yellow-100">
                Please select your salary type.
              </span>
            )}
          </div>


        </div>

        {/* ROW 3 */}
        <div className="flex flex-col gap-5 lg:flex-row">

            {/* need to edit location using a package */}
          <div className="flex flex-col gap-2 lg:w-[25%]">
            <label htmlFor="location" className="lable-style">
            Choose Location
            </label>
            <select
              type="text"
              name="location"
              id="location"
              placeholder="Choose location "
              className="form-style"
              {...register("location")}
              defaultValue={job?.location}

            >
              <option value="" disabled>
            Choose a Location
          </option>
          {!loading &&
            State.getStatesOfCountry("TR")?.map((state, indx) => (
              <option key={indx} value={state?.name}>
                {state?.name}
              </option>
            ))}
            </select>
            {errors.location && (
              <span className="-mt-1 text-[12px] text-yellow-100">
                Please select your required location.
              </span>
            )}
          </div>


          <div className="flex flex-col gap-2 lg:w-[25%]">
            <label htmlFor="startDate" className="lable-style">
              Select Start Date
            </label>
            <input
              type="date"
              name="startDate"
              id="startDate"
              placeholder="Select start date"
              className="form-style"
              {...register("startDate")}
              defaultValue={job?.startDate}

            />            
            {errors.startDate && (
              <span className="-mt-1 text-[12px] text-yellow-100">
                Please select your start date.
              </span>
            )}
          </div>

          <div className="flex flex-col gap-2 lg:w-[25%]">
            <label htmlFor="endDate" className="lable-style">
              Select End Date
            </label>
            <input
              type="date"
              name="endDate"
              id="endDate"
              placeholder="Select end date"
              className="form-style"
              {...register("endDate")}
              defaultValue={job?.endDate}
              

            />            
            {errors.endDate && (
              <span className="-mt-1 text-[12px] text-yellow-100">
                Please select your end date.
              </span>
            )}
          </div>
          

          <div className="flex flex-col gap-2 lg:w-[25%]">
            <label htmlFor="vacancy" className="lable-style">
              No. Of Vacancies
            </label>
            <input
              type="number"
              name="vacancy"
              id="vacancy"
              placeholder="Choose vacancy"
              className="form-style"
              {...register("vacancy")}
              defaultValue={job?.vacancy}

            />
            {errors.vacancy && (
              <span className="-mt-1 text-[12px] text-yellow-100">
                Please select your no. of vacancy.
              </span>
            )}
          </div>
        </div>

        {/* ROW 4 */}
        <div className="flex flex-col gap-5 lg:flex-row">

        <div className="flex flex-col space-y-2 w-full">
        <label className="text-sm text-richblack-5" htmlFor="description">
          Job Short Description <sup className="text-pink-200">*</sup>
        </label>
        <textarea
          id="description"
          placeholder="Enter Description"
          {...register("description")}
          className="form-style resize-x-none min-h-[130px] w-full"
              defaultValue={job?.description}
        />
        {errors.description && (
          <span className="ml-2 text-xs tracking-wide text-pink-200">
            Job Description is required
          </span>
        )}
      </div>


        </div>

      </div>

      <div className="my-10 flex flex-col gap-y-6 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-8 px-12">
        <h2 className="text-lg font-semibold text-richblack-5">
            Main Certificates
        </h2>

        {/* ROW 1 */}
        <div className="flex flex-col gap-5 lg:flex-row">
        
            <div className="flex flex-col gap-2 lg:w-[25%]">
                <label htmlFor="licenseType" className="lable-style">
                  License Type
                </label>
                <select
                  type="text"
                  name="licenseType"
                  id="licenseType"
                  placeholder="Choose license type "
                  className="form-style"
                  {...register("licenseType")}
                  defaultValue={job?.licenseType}
                  

                >
                  <option value="" disabled >Choose License Type</option>
                  <option value="Type 1" >Type 1</option>
                  <option value="Type 2" >Type 2</option>
                  <option value="Type 3" >Type 3</option>

                </select>
                {errors.licenseType && (
                  <span className="-mt-1 text-[12px] text-yellow-100">
                    Please select your license type.
                  </span>
                )}
            </div>

            <div className="flex flex-col space-y-2 lg:w-[33%] text-white">
              <label
                className="lable-style"
              >
                SRCBox <sup className="text-pink-200">*</sup>
              </label>

              
              <div className="flex-col gap-4">
                <label htmlFor="isSrc1">
                    SRC 1
                    <input
                        type="checkbox"
                        name="isSrc1"
                        value="SRC 1"
                        onChange={handleSrc1Change}
                        checked={src1Checked}
                        defaultValue={job?.isSrc1}
                        
                    />
                </label>

                <label htmlFor="isSrc2">
                    SRC 2
                    <input
                        type="checkbox"
                        name="isSrc2"
                        value="SRC 2"
                        onChange={handleSrc2Change}
                        checked={src2Checked}
                        defaultValue={job?.isSrc2}

                    />
                </label>
              </div>

              <div className="flex-col gap-4">
                  <label htmlFor="isSrc3">
                      SRC 3
                      <input
                          type="checkbox"
                          name="isSrc3"
                          value="SRC 3"
                          onChange={handleSrc3Change}
                          checked={src3Checked}
                        defaultValue={job?.isSrc3}

                      />
                  </label>
              
              
                  <label htmlFor="isSrc4">
                      SRC 4
                      <input
                          type="checkbox"
                          name="isSrc4"
                          value="SRC 4"
                          onChange={handleSrc4Change}
                          checked={src4Checked}
                        defaultValue={job?.isSrc4}

                      />
                  </label>
              </div>

            </div>     


            {/* Psikoteknik No Of Validity Years*/}
            <div className="flex flex-col gap-2 lg:w-[33%]">
              <label htmlFor="psikoteknik" className="lable-style">
              Psychotecnical
              </label>
              <input
                type="number"
                name="psikoteknik"
                id="psikoteknik"
                className="form-style"
              placeholder="Required Validity of Psychotecnical "
                {...register("psikoteknik", { required: true })}
                defaultValue={job?.psikoteknik}
              />
              {errors.psikoteknik && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                  Please select driver's psychotecnical certificate validity years .
                </span>
              )}
            </div>
            {/* ADR Driver Licence validity years */}
            <div className="flex flex-col gap-2 lg:w-[33%]">
              <label htmlFor="adrDriverLicence" className="lable-style">
                ADR Driver Licence
              </label>
              <input
                type="number"
                name="adrDriverLicence"
                id="adrDriverLicence"
                className="form-style"
              placeholder="Required Validity of ADR Licence "
                {...register("adrDriverLicence", { required: true })}
                defaultValue={job?.adrDriverLicence}
              />
              {errors.adrDriverLicence && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                Please select driver's adr licence validity years .
                </span>
              )}
            </div>
        </div>

      </div>

      <div className="my-10 flex flex-col gap-y-6 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-8 px-12">
        <h2 className="text-lg font-semibold text-richblack-5">
          Required Abilities
        </h2>
        
        {/* Row 1 */}
        <div className="flex flex-col gap-5 lg:flex-row">
        {/* passport,visa,abroadExperience, */}
            <div className="flex flex-col gap-2 lg:w-[25%]">
                <label htmlFor="passport" className="lable-style">
                  Passport
                </label>
                <select
                  type="text"
                  name="passport"
                  id="passport"
                  placeholder="Choose passport type "
                  className="form-style"
                  {...register("passport")}
                  defaultValue={job?.passport}
                  

                >
                  <option value="" disabled >Choose Passport Type</option>
                  <option value="Type 1" >Type 1</option>
                  <option value="Type 2" >Type 2</option>
                  <option value="Type 3" >Type 3</option>

                </select>
                {errors.passport && (
                  <span className="-mt-1 text-[12px] text-yellow-100">
                    Please select your passport type.
                  </span>
                )}
            </div>

            <div className="flex flex-col gap-2 lg:w-[25%]">
                <label htmlFor="visa" className="lable-style">
                  Visa
                </label>
                <select
                  type="text"
                  name="visa"
                  id="visa"
                  placeholder="Choose visa type "
                  className="form-style"
                  {...register("visa")}
                  defaultValue={job?.visa}
                  

                >
                  <option value="" disabled >Choose Visa Type</option>
                  <option value="Type 1" >Type 1</option>
                  <option value="Type 2" >Type 2</option>
                  <option value="Type 3" >Type 3</option>

                </select>
                {errors.visa && (
                  <span className="-mt-1 text-[12px] text-yellow-100">
                    Please select your visa type.
                  </span>
                )}
            </div>

            <div className="flex flex-col gap-2 lg:w-[25%]">
                <label htmlFor="abroadExperience" className="lable-style">
                  Abroad Experience
                </label>
                <input
                  type="number"
                  name="abroadExperience"
                  id="abroadExperience"
                  placeholder="Select Abroad Experience "
                  className="form-style"
                  {...register("abroadExperience")}
                  defaultValue={job?.abroadExperience}
                >
                </input>
                {errors.abroadExperience && (
                  <span className="-mt-1 text-[12px] text-yellow-100">
                    Please select your Abroad Experience.
                  </span>
                )}
            </div>


        </div>

        {/* isBlindSpotTraining,isSafeDrivingTraining,isFuelEconomyTraining */}
        {/* ROW 2 */}
        <div className="flex flex-col gap-5 lg:flex-row text-white">
            <div className="flex flex-col gap-2 lg:w-[25%]  items-center">
                <label>
                    Is Blind Spot Training
                </label>
                    <input
                        type="checkbox"
                        name="isBlindSpotTraining"
                        onChange={(e) => setValue('isBlindSpotTraining', e.target.checked)}
                        checked={watchedValues.isBlindSpotTraining}
                        defaultValue={job?.isBlindSpotTraining}

                    />
            </div>

            <div className="flex flex-col gap-2 lg:w-[25%] items-center">
                <label>
                    Is Safe Driving Training
                </label>
                    <input
                        type="checkbox"
                        name="isSafeDrivingTraining"
                        onChange={(e) => setValue('isSafeDrivingTraining', e.target.checked)}
                        checked={watchedValues.isSafeDrivingTraining}
                        defaultValue={job?.isSafeDrivingTraining}

                    />
            </div>

            <div className="flex flex-col gap-2 lg:w-[25%] items-center">
                <label>
                    Is Fuel Economy Training
                </label>
                    <input
                        type="checkbox"
                        name="isFuelEconomyTraining"
                        onChange={(e) => setValue('isFuelEconomyTraining', e.target.checked)}
                        checked={watchedValues.isFuelEconomyTraining}
                        defaultValue={job?.isFuelEconomyTraining}

                    />
            </div>
        </div>
      </div>

      <div className="flex justify-end gap-2">
                <button
                    onClick={() => {
                    navigate("/dashboard/my-jobs")
                    }}
                    disabled={loading}
                    className="cursor-pointer rounded-md bg-richblack-700 py-2 px-5 font-semibold text-richblack-50"
                >
                    Cancel
                </button>
                <IconBtn
                  disabled={loading}
                  type="submit" text="Save Changes" />
            </div>
    </form>
  );
};

export default EditPostJob;
