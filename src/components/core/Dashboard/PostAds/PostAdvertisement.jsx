import { useForm } from "react-hook-form"; 
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createAdvertisementPost } from "../../../../services/operations/adsAPI";
import IconBtn from "../../../common/IconBtn";

export default function PostAdvertisement() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.profile);

  const token = user.token;
  const onSubmit = (data) => {

    console.log(data)
    // Ensure that `adIcon` is being accessed properly and is treated as a file
  const formData = new FormData();
  formData.append("title", data.title);
  formData.append("description", data.description);
  formData.append("startDate", data.startDate);
  formData.append("publicationPeriod", data.publicationPeriod);
  formData.append("homePageDuration", data.homePageDuration);
  formData.append("canViewCandidateContacts", data.canViewCandidateContacts);
  formData.append("cvOpeningLimit", data.cvOpeningLimit);
  formData.append("candidateMatchFee", data.candidateMatchFee);

  // Append file
  if (data.adIcon && data.adIcon[0]) {
    formData.append("adIcon", data.adIcon[0]);  // Append file
  }

    dispatch(createAdvertisementPost({...data, adIcon:data.adIcon[0]}, token, navigate));
  };

  return (
    <>
    {user?.companyDetails?.paymentStatus === "Requested" ? (
      <div className="mt-10 flex justify-center">
  <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-6 py-4 rounded-lg shadow-md max-w-lg w-full relative">
    <div className="flex items-center space-x-4">
      <svg
        className="w-8 h-8 text-yellow-500 animate-spin"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 8v4l3 3m9 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <div className="text-left">
        <h3 className="text-lg font-bold text-yellow-700">Payment Approval Pending!</h3>
        <p className="text-sm text-yellow-600 mt-1">
          Your payment is awaiting admin approval. You cannot create an advertisement until the payment is approved. Please
          check back later or{" "}
          <a href="/contact" className="text-yellow-800 font-semibold hover:underline">
            contact support
          </a>{" "}
          for assistance.
        </p>
      </div>
    </div>

    {/* Optional Progress Indicator */}
    <div className="mt-4 bg-yellow-200 rounded-full h-2">
      <div className="bg-yellow-500 h-2 rounded-full animate-pulse w-3/4"></div>
    </div>
  </div>
</div>) : (
    <form onSubmit={handleSubmit(onSubmit)} className="lg:mt-20">
      <h1 className="mb-7 mt-14 text-3xl text-center font-medium text-black">
        Create Advertisement Post
      </h1>
      
      <div className="my-10 flex flex-col gap-y-6 rounded-md border-[1px] border-purple-700 bg-richblack-25 p-8 px-12">
        {/* Ad Title and Description */}
        <div className="flex flex-col gap-5 lg:flex-row">
          <div className="flex flex-col gap-2 lg:w-[50%]">

            <label htmlFor="title" className="lable-style">
              Ad Title
            </label>
            <input type="text" className="form-style"  {...register("title", { required: true })} placeholder="Ad Title" />
            {errors.title && <span>This field is required</span>}
          </div>
          
          <div className="flex flex-col gap-2 lg:w-[50%]">

            <label htmlFor="description" className="lable-style">
              Ad Description <sup className="text-pink-200">*</sup>
            </label>
            <textarea className="form-style" {...register("description", { required: true })} placeholder="Ad Description" />
            {errors.description && <span>This field is required</span>}
          </div>
        </div>

        {/* Start Date and Publication Period */}
        <div className="flex flex-col gap-5 lg:flex-row">
          <div className="flex flex-col gap-2 lg:w-[50%]">

            <label htmlFor="startDate" className="lable-style">
              Start Date
            </label>
            <input type="date" className="form-style" {...register("startDate", { required: true })} />
            {errors.startDate && <span>This field is required</span>}
          </div>
          <div className="flex flex-col gap-2 lg:w-[50%]">

            <label htmlFor="publicationPeriod" className="lable-style">
              Publication Period
            </label>
            <input type="number" className="form-style " {...register("publicationPeriod", { required: true })} placeholder="Publication Period (Days)" />
            {errors.publicationPeriod && <span>This field is required</span>}
          </div>
        </div>

        <div className="flex flex-col gap-2 lg:w-[50%]">

        <div className="flex flex-col gap-2 lg:w-[50%]">
              <label htmlFor="adIcon" className="lable-style">
                Advertisement Icon
              </label>
              <input
                type="file"
                name="adIcon"
                accept=".jpg, .jpeg, .png"
                id="adIcon"
                placeholder="Choose service Icon "
                className="form-style"
                {...register("adIcon", { required: true })}
                // defaultValue={user?.adminDetails?.post}
              />
              {errors.adIcon && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                  Please select your Advertisement icon.
                </span>
              )}
            </div>

        </div>

        {/* Home Page Duration and Can View Candidate Contacts */}
        <div className="flex flex-col gap-5 lg:flex-row">
          <div className="flex flex-col gap-2 lg:w-[50%]">

            <label htmlFor="homePageDuration" className="lable-style">
              Home Page Duration (Days)
            </label>
            <input type="number" className="form-style " {...register("homePageDuration", { required: true })} placeholder="Home Page Duration" />
            {errors.homePageDuration && <span>This field is required</span>}
          </div>

          <div className="flex flex-col gap-2 lg:w-[50%]">

            <label htmlFor="canViewCandidateContacts" className="lable-style">
              Can View Candidate Contacts
            </label>
            <select className="form-style" {...register("canViewCandidateContacts", { required: true })}>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
            {errors.canViewCandidateContacts && <span>This field is required</span>}
          </div>
        </div>

        {/* CV Opening Limit and Candidate Match Fee */}
        <div className="flex flex-col gap-5 lg:flex-row">
          <div className="flex flex-col gap-2 lg:w-[50%]">

            <label htmlFor="cvOpeningLimit" className="lable-style">
              CV Opening Limit
            </label>
            <input type="number" className="form-style " {...register("cvOpeningLimit", { required: true })} placeholder="CV Opening Limit" />
          {errors.cvOpeningLimit && <span>This field is required</span>}
            </div>

          <div className="flex flex-col gap-2 lg:w-[50%]">

            <label htmlFor="candidateMatchFee" className="lable-style">
              Candidate Match Fee
            </label>
            <input type="number" className="form-style" {...register("candidateMatchFee", { required: true })} placeholder="Candidate Match Fee" />
          {errors.candidateMatchFee && <span>This field is required</span>}
          </div>
        </div>

      </div>
        <IconBtn type="submit" text="Post Advertisement" />
    </form>
    )}
    </>
  );
}
