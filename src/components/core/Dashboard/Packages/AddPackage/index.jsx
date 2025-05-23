
import { addPackageDetails } from '../../../../../services/operations/packageAPI';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import IconBtn from '../../../../common/IconBtn';
import { useForm } from "react-hook-form"
import { useState, useEffect } from "react";


const AddPackage = () => {
  const { user } = useSelector((state) => state.profile)
  const [loading, setLoading] = useState(false)

  // const { token } = useSelector((state) => state.auth)
  const token = user.token;
  console.log("token : ",token)
  //token ki dikkat h kl check krungaa
  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const submitPackageForm = async (data) => {
    console.log("Form Data - ", data)
    // console.log("token - ", token)

    try {
      dispatch(addPackageDetails(data, token, navigate, dispatch))
    } catch (error) {
      console.log("ERROR MESSAGE - ", error.message)
    }
  }
  return (
      <form onSubmit={handleSubmit(submitPackageForm)}>
        {/* Package Information */}
        <div className="my-10 lg:mt-14 flex flex-col gap-y-6 rounded-md border-[1px] border-purple-700 bg-richblack-25 p-8 px-12">
          <h2 className="text-lg font-semibold text-black">
            Create Package
          </h2>
          <div className="flex flex-col gap-5 lg:flex-row">

            <div className="flex flex-col gap-2 lg:w-[48%]">
              <label htmlFor="packageName" className="lable-style">
                Package Name
              </label>
              <input
                type="text"
                name="packageName"
                id="packageName"
                placeholder="Enter package name"
                className="form-style"
                {...register("packageName", { required: true })}
                // defaultValue={user?.adminProfileDetails?.firstName}
              />
              {errors.packageName && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                  Please enter your package name.
                </span>
              )}
            </div>

            <div className="flex flex-col gap-2 lg:w-[48%]">
              <label htmlFor="packagePrice" className="lable-style">
              Package Price
              </label>
              <input
                type="number"
                name="packagePrice"
                id="packagePrice"
                placeholder="Enter package price"
                className="form-style"
                {...register("packagePrice", { required: true })}
                // defaultValue={user?.adminDetails?.middleName}
              />
              {errors.packagePrice && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                  Please enter your package price.
                </span>
              )}
            </div>
            
          </div>

          <div className="flex flex-col gap-5 lg:flex-row">
            <div className="flex flex-col gap-2 lg:w-[48%]">
              <label htmlFor="discountedPrice" className="lable-style">
              Discounted Price
              </label>
              <input
                type="number"
                name="discountedPrice"
                id="discountedPrice"
                placeholder="Enter discounted price"
                className="form-style"
                {...register("discountedPrice", { required: true })}
                // defaultValue={user?.adminDetails?.middleName}
              />
              {errors.discountedPrice && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                  Please enter your discounted price.
                </span>
              )}
            </div>

            <div className="flex flex-col gap-2 lg:w-[48%]">
              <label htmlFor="status" className="lable-style">
                Status
              </label>
              <select
                
                name="status"
                id="status"
                placeholder="Enter status Details"
                className="form-style"
                {...register("status", { required: true })}
                // defaultValue={user?.adminDetails?.bio}
                
              >
                <option value="" disabled>Choose status</option>
                <option value="Active" >Active</option>
                <option value="Inactive" >Inactive</option>
              </select>
              {errors.status && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                  Please choose status.
                </span>
              )}
            </div> 
          </div>

          <div className="flex flex-col gap-5 lg:flex-row">
            <div className="flex flex-col gap-2 lg:w-[48%]">
                    <label htmlFor="features" className='lable-style'>Features of the package</label><sup className="text-pink-200">*</sup>
                    <textarea
                    id="features"
                    placeholder="Enter features of the course"
                    {...register("features", {required:true})}
                    className="min-h-[130px] w-full form-style"
                    
                    />
                    {errors.features && (
                        <span className="-mt-1 text-[12px] text-yellow-100">
                        Features of the package are required</span>
                    )}
            </div>

            <div className="flex flex-col gap-2 lg:w-[48%]">
                <label htmlFor="jobPostLimit" className="lable-style">
                Job Post Limit
                </label>
                <input
                type="number"
                name="jobPostLimit"
                id="jobPostLimit"
                min="0" max="20"
                placeholder="Enter job post limit "
                className="form-style"
                {...register("jobPostLimit", { required: true })}
                // defaultValue={user?.adminDetails?.post}
                />
                {errors.jobPostLimit && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                    Please select your job post limit.
                </span>
                )}
            </div>
          </div>

          <div className="flex flex-col gap-5 lg:flex-row">
            <div className="flex flex-col gap-2 lg:w-[48%]">
                <label htmlFor="advertisingLimit" className="lable-style">
                Advertising Limit
                </label>
                <input
                type="number"
                name="advertisingLimit"
                id="advertisingLimit"
                min="0" max="20"
                placeholder="Enter job post limit "
                className="form-style"
                {...register("advertisingLimit", { required: true })}
                // defaultValue={user?.adminDetails?.post}
                />
                {errors.advertisingLimit && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                    Please select your advertising limit.
                </span>
                )}
            </div>
          
            <div className="flex flex-col gap-2 lg:w-[48%]">
                <label htmlFor="resumeViews" className="lable-style">
                Resume Views
                </label>
                <input
                type="number"
                name="resumeViews"
                id="resumeViews"
                min="0" max="1000"
                placeholder="Enter resume views limit "
                className="form-style"
                {...register("resumeViews", { required: true })}
                // defaultValue={user?.adminDetails?.post}
                />
                {errors.resumeViews && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                    Please select your resume views limit.
                </span>
                )}
            </div>
          </div>

          <div className="flex flex-col gap-5 lg:flex-row">
            <div className="flex flex-col gap-2 lg:w-[48%]">
                <label htmlFor="packageDuration" className="lable-style">
                Package Duration In Months
                </label>
                <input
                type="number"
                name="packageDuration"
                id="packageDuration"
                min="1" max="12"
                placeholder="Enter package duration limit "
                className="form-style"
                {...register("packageDuration", { required: true })}
                // defaultValue={user?.adminDetails?.post}
                />
                {errors.packageDuration && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                    Please select your package duration limit.
                </span>
                )}
            </div>
          
          </div>
          

          {/* ➕ NEW FIELDS ADDED HERE */}
          {/* Homepage Visibility Time */}
<div className="flex flex-col gap-2 lg:w-[48%]">
  <label htmlFor="homepageVisibilityTime" className="lable-style">Homepage Visibility Time (in days)</label>
  <input
    type="number"
    name="homepageVisibilityTime"
    id="homepageVisibilityTime"
    className="form-style"
    {...register("homepageVisibilityTime", { required: true })}
  />
  {errors.homepageVisibilityTime && <span className="text-yellow-100 text-sm">Required</span>}
</div>

{/* Advertisement Publication Time */}
<div className="flex flex-col gap-2 lg:w-[48%]">
  <label htmlFor="totalAdPublicationTime" className="lable-style">Ad Publication Time (in days)</label>
  <input
    type="number"
    name="totalAdPublicationTime"
    id="totalAdPublicationTime"
    className="form-style"
    {...register("totalAdPublicationTime", { required: true })}
  />
  {errors.totalAdPublicationTime && <span className="text-yellow-100 text-sm">Required</span>}
</div>

{/* Candidate Pool Access Time */}
<div className="flex flex-col gap-2 lg:w-[48%]">
  <label htmlFor="candidatePoolAccessDuration" className="lable-style">Candidate Pool Access Time (in days)</label>
  <input
    type="number"
    name="candidatePoolAccessDuration"
    id="candidatePoolAccessDuration"
    className="form-style"
    {...register("candidatePoolAccessDuration", { required: true })}
  />
  {errors.candidatePoolAccessDuration && <span className="text-yellow-100 text-sm">Required</span>}
</div>

{/* Candidate Pool View Limit */}
<div className="flex flex-col gap-2 lg:w-[48%]">
  <label htmlFor="candidatePoolViewLimit" className="lable-style">Candidate Pool View Limit</label>
  <input
    type="number"
    name="candidatePoolViewLimit"
    id="candidatePoolViewLimit"
    className="form-style"
    {...register("candidatePoolViewLimit", { required: true })}
  />
  {errors.candidatePoolViewLimit && <span className="text-yellow-100 text-sm">Required</span>}
</div>

        

          

          


        </div>


            <div className="flex justify-end gap-2">
                <button
                    onClick={() => {
                    navigate("/dashboard/my-packages")
                    }}
                    className="cursor-pointer rounded-md bg-richblack-200 py-2 px-5 font-semibold text-richblack-50"
                >
                    Cancel
                </button>
                <IconBtn type="submit" text="Save" />
            </div>
      </form>
  );
}

export default AddPackage;