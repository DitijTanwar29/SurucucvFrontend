import { useEffect, useState } from 'react';
import { editServiceDetails, fetchServiceDetails } from '../../../../../services/operations/serviceDetailsAPI';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import IconBtn from '../../../../common/IconBtn';
import { useForm } from "react-hook-form"
import { setEditService, setService } from '../../../../../slices/serviceSlice';
import { toast } from "react-hot-toast"
import { useParams } from "react-router-dom"



const EditService = () => {
  const { serviceId } = useParams()
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm()
  
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.profile)
  const { service, editService } = useSelector((state) => state.service)
  
  const [loading, setLoading] = useState(false)
  // const { token } = useSelector((state) => state.auth)
  const token = user.token;
  // console.log("token : ",token)

//   useEffect(() => {
//     ;(async () => {
//       setLoading(true)
//       const result = await fetchServiceDetails(serviceId, token)
//       // console.log("result : ",result)
//       console.log("result.[0] : ",result?.[0])
//       // console.log("result.[0].serviceName : ",result?.[0].serviceName)


//       if(result?.serviceDetails){
//         dispatch(setEditService(true))
//         dispatch(setService(result?.[0]))
//       }
//       setLoading(false)
//     })()


//   //if form is in edit mode
//   if (editService) {
//     // console.log("data populated", editCourse)
//     setValue("serviceName", service.serviceName)
//     setValue("serviceDescrservice", service.serviceDescrservice)
//     setValue("status", service.status)
//     setValue("serviceIcon", service.serviceIcon)
//   }

// },[])

  // const isFormUpdated = () => {
  //   const currentValues = getValues()
  //   // console.log("changes after editing form values:", currentValues)
  //   if (
  //     currentValues.serviceName !== service.serviceName ||
  //     currentValues.serviceDescrservice !== service.serviceDescrservice ||
  //     currentValues.status !== service.status ||
  //     currentValues.serviceIcon !== service.serviceIcon
  //   ) {
  //     return true
  //   }
  //   return false
  // }
  
  const onSubmit = async (data) => {
    console.log("Form Data after form submission - ", data)
    // navigate("/dashboard/my-services")
    // if (editService) {
    //   // const currentValues = getValues()
    //   // console.log("changes after editing form values:", currentValues)
    //   // console.log("now course:", course)
    //   // console.log("Has Form Changed:", isFormUpdated())
    //   if (isFormUpdated()) {
    //     const currentValues = getValues()
    //     const formData = new FormData()
    //     console.log("updated value :",data)
    //     formData.append("serviceId", service._id)
    //     if (currentValues.serviceName !== service.serviceName) {
    //       formData.append("serviceName", data.serviceName)
    //     }
    //     if (currentValues.serviceDescription !== service.serviceDescription) {
    //       formData.append("serviceDescription", data.serviceDescription)
    //     }
    //     if (currentValues.status !== service.status) {
    //       formData.append("status", data.status)
    //     }
    //     if (currentValues.serviceIcon !== service.serviceIcon) {
    //       formData.append("serviceIcon", data.serviceIcon[0])
    //     }
    //     console.log("Edit Form data: ", formData)
    //     setLoading(true)
    //     const result = await editServiceDetails(formData, token)
    //     console.log("form data after editing : ",result)
    //     setLoading(false)
    //     if (result) {
    //       dispatch(setService(result))
          
    //     }
    //   } else {
    //     toast.error("No changes made to the form")
    //   }
    //   return
    // }




    try {
      dispatch(editServiceDetails({...data, serviceIcon:data.serviceIcon[0], serviceId:serviceId},token))
    } catch (error) {
      console.log("ERROR MESSAGE - ", error.message)
    }
  }
  return (
    
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Service Information */}
        <div className="my-10 flex flex-col gap-y-6 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-8 px-12">
          <h2 className="text-lg font-semibold text-richblack-5">
            Edit Service
          </h2>
          <div className="flex flex-col gap-5 lg:flex-row">

            <div className="flex flex-col gap-2 lg:w-[33%]">
              <label htmlFor="serviceName" className="lable-style">
                Service Name
              </label>
              <input
                type="text"
                name="serviceName"
                id="serviceName"
                placeholder="Enter service name"
                className="form-style"
                {...register("serviceName", { required: true })}
                defaultValue={service?.serviceName}
              />
              {errors.serviceName && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                  Please enter your service name.
                </span>
              )}
            </div>

            <div className="flex flex-col gap-2 lg:w-[33%]">
              <label htmlFor="serviceDescription" className="lable-style">
                Service Description
              </label>
              <input
                type="text"
                name="serviceDescription"
                id="serviceDescription"
                placeholder="Enter service description"
                className="form-style"
                {...register("serviceDescription", { required: true })}
                defaultValue={service?.serviceDescription}
              />
              {errors.serviceDescription && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                  Please enter your service description.
                </span>
              )}
            </div>
            
            {/* <div className="flex flex-col gap-2 lg:w-[33%]">
              <label htmlFor="lastName" className="lable-style">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Enter first name"
                className="form-style"
                {...register("lastName", { required: true })}
                defaultValue={user?.adminDetails?.lastName}
              />
              {errors.lastName && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                  Please enter your last name.
                </span>
              )}
            </div> */}
          </div>

          <div className="flex flex-col gap-5 lg:flex-row">
            <div className="flex flex-col gap-2 lg:w-[48%]">
              <label htmlFor="serviceIcon" className="lable-style">
                Service Icon
              </label>
              <input
                type="file"
                name="serviceIcon"
                accept=".jpg, .jpeg, .png"
                id="serviceIcon"
                placeholder="Choose service Icon "
                className="form-style"
                {...register("serviceIcon", { required: true })}
                // defaultValue={user?.adminDetails?.post}
              />
              {errors.serviceIcon && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                  Please select your service icon.
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
                placeholder="Enter Bio Details"
                className="form-style"
                {...register("status", { required: true })}
                defaultValue={service?.status}
                
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

          


          

          

          


        </div>


            <div className="flex justify-end gap-2">
                <button
                    onClick={() => {
                    navigate("/dashboard/my-services")
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
}

export default EditService;


// currently on edit service form 