import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { addServiceDetails } from '../../../../../services/operations/serviceDetailsAPI';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import IconBtn from '../../../../common/IconBtn';
import { useForm } from "react-hook-form"


const AddService = () => {
  // const navigate = useNavigate();
  // const dispatch = useDispatch();
  // const [serviceName, setServiceName] = useState('');
  // const [serviceIcon, setServiceIcon] = useState(null);
  // const [description, setDescription] = useState('');
  // const [status, setStatus] = useState('');
  
  // const [formData, setFormData] = useState({
  //   serviceName:"", serviceIcon:"",serviceDescription:description,status:""
  // })

  // const { serviceName, serviceDescription, serviceIcon, status } = formData

  // const handleServiceIconChange = (e) => {
  //   // Handle file upload logic here
  //   const file = e.target.files[0];
  //   if (file && /\.(jpg|jpeg|gif|png)$/.test(file.name.toLowerCase())) {
  //     setServiceIcon(file);
  //   } else {
  //     alert('Invalid file format. Only jpg, jpeg, gif, and png are allowed.');
  //   }
  // };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Handle form submission logic here
  //   const formData = {serviceName,serviceIcon,description,status}
  //   dispatch(addServiceDetails(formData));
  //   console.log({
  //     serviceName,
  //     serviceIcon,
  //     description,
  //     status,

  //   });

  // };

  // return (
    // <div className="container mt-4">
    //   <form onSubmit={handleSubmit}>
    //     <div className="mb-3">
        
    //       <label className="form-label">Service Name</label>
    //       <input
    //         type="text"
    //         className="form-control"
    //         value={serviceName}
    //         onChange={(e) => setServiceName(e.target.value)}
    //         placeholder="Enter Service Name"
    //       />
    //     </div>

    //     <div className="mb-3">
    //       <label className="form-label">Service Icon</label>
    //       <input
    //         type="file"
    //         className="form-control"
    //         accept=".jpg, .jpeg, .gif, .png"
    //         onChange={handleServiceIconChange}
    //       />
    //       {serviceIcon && <p className="mt-2">File selected: {serviceIcon.name}</p>}
    //       <p className="text-muted">(Only jpg, jpeg, gif, and png are allowed)</p>
    //     </div>

    //     <div className="mb-3">
    //       <label className="form-label">Description</label>
    //       <textarea
    //         className="form-control"
    //         value={description}
    //         onChange={(e) => setDescription(e.target.value)}
    //         placeholder="Enter Description"
    //       />
    //     </div>

    //     <div className="mb-3">
    //       <label className="form-label">Status</label>
    //       <select
    //         className="form-select"
    //         value={status}
    //         onChange={(e) => setStatus(e.target.value)}
    //       >
    //         <option value="">----Status----</option>
    //         <option value="active">Active</option>
    //         <option value="inactive">Inactive</option>
    //       </select>
    //     </div>

    //     <button type="submit" className="btn btn-primary">Submit</button>
    //   </form>
    // </div>

  const { user } = useSelector((state) => state.profile)
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
  
  const submitServiceForm = async (data) => {
    console.log("Form Data - ", data)
    // console.log("token - ", token)

    try {
      dispatch(addServiceDetails({...data, serviceIcon:data.serviceIcon[0]},token))
    } catch (error) {
      console.log("ERROR MESSAGE - ", error.message)
    }
  }
  return (
    
      <form onSubmit={handleSubmit(submitServiceForm)}>
        {/* Service Information */}
        <div className="my-10 flex flex-col gap-y-6 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-8 px-12">
          <h2 className="text-lg font-semibold text-richblack-5">
            Create Service
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
                // defaultValue={user?.adminProfileDetails?.firstName}
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
                // defaultValue={user?.adminDetails?.middleName}
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

          


          

          

          


        </div>


            <div className="flex justify-end gap-2">
                <button
                    onClick={() => {
                    navigate("/dashboard/my-services")
                    }}
                    className="cursor-pointer rounded-md bg-richblack-700 py-2 px-5 font-semibold text-richblack-50"
                >
                    Cancel
                </button>
                <IconBtn type="submit" text="Save" />
            </div>
      </form>
  );
}

export default AddService;