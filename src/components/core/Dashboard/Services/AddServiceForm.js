// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
// import { addServiceDetails } from '../../../../services/operations/serviceDetailsAPI';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';

// const ServicesForm = () => {

//   const { user } = useSelector((state) => state.profile)
//   const { token } = useSelector((state) => state.auth)
//   const navigate = useNavigate()
//   const dispatch = useDispatch()

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm()

//   const createServiceForm = async (data) => {
//     // console.log("Form Data - ", data)
//     try {
//       dispatch(addServiceDetails(token, data))
//     } catch (error) {
//       console.log("ERROR MESSAGE - ", error.message)
//     }
//   }
//   return(

//       <form onSubmit={handleSubmit(createServiceForm)}>
        
//         <div className="my-10 flex flex-col gap-y-6 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-8 px-12">
//           <h2 className="text-lg font-semibold text-richblack-5">
//             Create Service 
//           </h2>
//           <div className="flex flex-col gap-5 lg:flex-row">

//             <div className="flex flex-col gap-2 lg:w-[33%]">
//               <label htmlFor="serviceName" className="lable-style">
//                 Service Name
//               </label>
//               <input
//                 type="text"
//                 name="serviceName"
//                 id="serviceName"
//                 placeholder="Enter first name"
//                 className="form-style"
//                 {...register("serviceName", { required: true })}
//                 // defaultValue={user?.adminProfileDetails?.firstName}
//               />
//               {errors.serviceName && (
//                 <span className="-mt-1 text-[12px] text-yellow-100">
//                   Please enter your service name.
//                 </span>
//               )}
//             </div>

            
//             <div className="flex flex-col gap-2 lg:w-[33%]">
//               <label htmlFor="serviceDescription" className="lable-style">
//                 Service Description
//               </label>
//               <input
//                 type="text"
//                 name="serviceDescription"
//                 id="serviceDescription"
//                 placeholder="Enter service description"
//                 className="form-style"
//                 {...register("serviceDescription", { required: true })}
//                 // defaultValue={user?.adminDetails?.lastName}
//               />
//               {errors.serviceDescription && (
//                 <span className="-mt-1 text-[12px] text-yellow-100">
//                   Please enter your service description.
//                 </span>
//               )}
//             </div>
//           </div>

//           <div className="flex flex-col gap-5 lg:flex-row">
            

//             <div className="flex flex-col gap-2 lg:w-[48%]">
//               <label htmlFor="bio" className="lable-style">
//                 Bio
//               </label>
//               <input
//                 type="text"
//                 name="bio"
//                 id="bio"
//                 placeholder="Enter Bio Details"
//                 className="form-style"
//                 {...register("bio", { required: true })}
//                 defaultValue={user?.adminDetails?.bio}
//               />
//               {errors.bio && (
//                 <span className="-mt-1 text-[12px] text-yellow-100">
//                   Please enter your Bio.
//                 </span>
//               )}
//             </div> 
            
//             <div className="flex flex-col space-y-2">
//               <label className="lable-style" htmlFor="status">
//                 Status <sup className="text-pink-200">*</sup>
//               </label>
//               <select
//                 {...register("status", { required: true })}
//                 defaultValue=""
//                 id="status"
//                 className="form-style"
//               >
//                 <option value="" disabled>
//                   Choose a Status
//                 </option>
//                 <option>Active</option>
//                 <option>Inctive</option>

//               </select>
//               {errors.status && (
//                 <span className="ml-2 text-xs tracking-wide text-pink-200">
//                   Course Status is required
//                 </span>
//               )}
//             </div>
//           </div>

          


          

          

          


//         </div>


//             <div className="flex justify-end gap-2">
//                 <button
//                     onClick={() => {
//                     navigate("/dashboard/my-profile")
//                     }}
//                     className="cursor-pointer rounded-md bg-richblack-700 py-2 px-5 font-semibold text-richblack-50"
//                 >
//                     Cancel
//                 </button>
//                 <IconBtn type="submit" text="Save" />
//             </div>
//       </form>
//   )

// };

// export default ServicesForm