// import React from 'react'
// import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
// import { useState } from 'react'
// import toast from 'react-hot-toast'
// import { useNavigate } from 'react-router-dom'
// // import {MdKeyboardArrowDown} from "react-icons/md"
// // import countryCode from "../../../data/countrycode.json"
// import { useDispatch } from 'react-redux'

// import { signup } from '../../../services/operations/authAPI'
// import { setSignupData } from '../../../slices/authSlice'
// import  {ACCOUNT_TYPE}  from "../../../utils/constants"
// import Tab from "../../common/Tab"

// const SignupForm = () => {
//     const navigate = useNavigate();
//     const dispatch = useDispatch(); 

//     // student or instructor
//     const [accountType, setAccountType] = useState(ACCOUNT_TYPE.CANDIDATE)
//     console.log("account type : ",accountType)
//     const [formData, setFormData] = useState({
//         name:"",
//         email:"",
//         contactNumber:"",
//         password:"",
//         confirmPassword:"",
//         date:"",
//         city:"",

//     })

//     const [showPassword, setShowPassword] = useState(false)
//     const [showConfirmPassword, setShowConfirmPassword] = useState(false)

//     const { name, email, password, confirmPassword, contactNumber, date, city } = formData

//     // console.log(email);
    
//     //Handling input fields, when some value changes
//     function changeHandler(event) {
        
//         setFormData( (prevData) => (
//             {
//                 ...prevData,
//                 [event.target.name]:event.target.value
//             }
//         ) )
//     }

//     function submitHandler(event){
//         event.preventDefault();
//         console.log("Form Data", formData);
//         if(password !== confirmPassword){
//             toast.error("Passwords do not match!")
//             return;
//         }

//         const signupData = {
//             ...formData,
//             accountType,
//         }
//         console.log("signupData : ",signupData);
//         //setting signup datat to state
//         // To be used after otp verification
//         // dispatch(setSignupData(signupData))
//         // Send OTP to the user for verification
//         dispatch(signup(signupData, navigate))
//     }

//     //data to pass to Tab component
//     const tabData = [
//         {
//             id: 1,
//             tabName: "Candidate",
//             type: ACCOUNT_TYPE.CANDIDATE,
//         },
//         {
//             id: 2,
//             tabName: "Company",
//             type: ACCOUNT_TYPE.COMPANY,
//         },
//     ]

//   return (
//     <div className="lg:mt-24 sm:mt-4 flex justify-center items-center mx-auto flex-col gap-y-2">
//     {/* candidate-company tab */}
//     <Tab tabData={tabData} field={accountType} setField={setAccountType} />
//     {/* form */}
//     <form onSubmit={submitHandler}  className="flex w-[50%] bg-richblack-200 pb-4 flex-col justify-center items-center mx-auto gap-y-2">
//     {/*  name  */}
//     <div className=' w-full sm:flex sm:flex-wrap lg:flex-row  gap-5'>
//             <label className="w-[50%] flex flex-col mx-auto">
//                 <p className='text-black font-inter mb-1 text-[0.875rem] leading-[1.375rem]'>Name<sup className='text-pink-200'>*</sup></p>
//                 <input
//                     required
//                     type="text"
//                     name="name"
//                     onChange={changeHandler}
//                     placeholder='Enter Name'
//                     value={name}
//                     className='w-full placeholder-white bg-orange-300 rounded-[0.5rem]
//                      text-black text-sm font-inter h-12 px-4 py-4 shadow-sm shadow-richblack-200'
//                     style={{
//                         boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
//                       }}
                    
//                 />
//             </label>

//     </div>
//     {/* <div className='flex flex-row  gap-5'>

//             <label>
//                 <p className='text-black font-inter mb-1 text-[0.875rem] leading-[1.375rem]'>Last Name<sup className='text-pink-200'>*</sup></p>
//                 <input
//                     required
//                     type="text"
//                     name="lastName"
//                     onChange={changeHandler}
//                     placeholder='Enter Last Name'
//                     value={lastName}
//                     className='bg-orange-300 placeholder-black rounded-md text-richblack-200 text-sm font-inter h-12 w-30 px-4 py-4 shadow-sm shadow-richblack-200'
//                     style={{
//                         boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
//                       }}
//                 />
//             </label>
//     </div> */}
 

    

//     <div className=' w-full flex sm:flex sm:flex-wrap lg:flex-row gap-5 mx-auto justify-evenly'>

//         {/* Email Address */}
//         <label className='w-[40%]'>
//             <p className='mb-1 text-[0.875rem] leading-[1.375rem] text-black font-inter'>Email Address<sup className='text-pink-200'>*</sup></p>
//             <input
//                 required
//                 type="email"
//                 name="email"
//                 onChange={changeHandler}
//                 placeholder='Enter Email Address'
//                 value={email}
//                 className=' placeholder-white bg-orange-300 rounded-md text-black text-sm font-inter
//                  h-12 w-full px-4 py-4 shadow-sm shadow-richblack-200'
//                 style={{
//                     boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
//                 }}
//             />
//         </label>

        
//         {/* Contact Number */}

//                 <label className='w-[40%]'>
//                     <p className='mb-1 text-[0.875rem] leading-[1.375rem] text-black font-inter'>Contact Number<sup className='text-pink-200'>*</sup></p>

//                             <input
//                                 required 
//                                 name="contactNumber"
//                                 placeholder='Enter Contact Number'
//                                 value={contactNumber}
//                                 className=' placeholder-white bg-orange-300 rounded-md text-black text-sm font-inter
//                                  h-12 w-full px-4 py-4 shadow-sm shadow-richblack-200'
//                                 type='number'
//                                 onChange={changeHandler}
//                             />
//                         {/* <div className='flex flex-row w-full gap-5'> */}
//                             {/* <div className='relative flex flex-row '>
                                
//                                 <input
//                                     required
                                    
//                                     name="contactNumber"
//                                     placeholder='+91 '
//                                     // value={countryCode.code}
//                                     className='placeholder-black bg-orange-300 rounded-md text-richblack-200 text-sm font-inter h-12 w-[30%] px-4 py-4 shadow-sm shadow-richblack-200'

//                                 />
//                                 <MdKeyboardArrowDown className='text-richblack-200 cursor-pointer' />
//                             </div> */}

//                         {/* </div>                     */}
            
//                 </label>
//     </div>

//     {/* Date and city */}
//     <div className=' w-full flex sm:flex sm:flex-wrap lg:flex-row  gap-5 mx-auto justify-evenly'>
//             <label className='w-[40%]'>
//                 <p className='text-black font-inter mb-1 text-[0.875rem] leading-[1.375rem]'>City<sup className='text-pink-200'>*</sup></p>
//                 <input
//                     required
//                     type="text"
//                     name="city"
//                     onChange={changeHandler}
//                     placeholder='Enter City'
//                     value={city}
//                     className='placeholder-white bg-orange-300 rounded-[0.5rem]
//                      text-black text-sm font-inter h-12 w-full px-4 py-4 shadow-sm shadow-richblack-200'
//                     style={{
//                         boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
//                       }}
                    
//                 />
//             </label>

//             <label className='w-[40%]'>
//                 <p className='text-black font-inter mb-1 text-[0.875rem] leading-[1.375rem]'>Date<sup className='text-pink-200'>*</sup></p>
//                 <input
//                     required
//                     type="date"
//                     name="date"
//                     onChange={changeHandler}
//                     placeholder='Enter Date'
//                     value={date}
//                     className='bg-orange-300 text-black placeholder-white rounded-md  text-sm font-inter 
//                     h-12 w-full px-4 py-4 shadow-sm shadow-richblack-200'
//                     style={{
//                         boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
//                       }}
//                 />
//             </label>
//     </div>
        
//          {/* create password and confirm password */}
//          <div className='w-full flex sm:flex lg:flex-row sm:flex-wrap lg:gap-5 sm:gap-y-14 mb-5 justify-evenly mx-auto'>
//             <label className='w-[40%]' >
//                 <p className='text-black font-inter mb-1 text-[0.875rem] leading-[1.375rem]'>Create Password<sup className='text-pink-200'>*</sup></p>
//                 <div className=' flex flex-row justify-between relative'>

//                     <input
//                         required
//                         type={showPassword ? ("text") : ("password")}
//                         name="password"
//                         onChange={changeHandler}
//                         placeholder='Enter Password'
//                         value={password}
//                         className='placeholder-white absolute bg-orange-300 rounded-md text-black text-sm font-inter
//                          h-12 w-full  px-4 py-4 shadow-sm shadow-richblack-200'
//                         style={{
//                             boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
//                           }}
//                     />

//                     <span onClick={() => setShowPassword((prev) => !prev)}>
//                         {showPassword? (<AiOutlineEyeInvisible  className=' absolute translate-x-56 translate-y-4 my-auto' fontSize={24} fill="white"/>) : (<AiOutlineEye className='translate-x-56 translate-y-4  absolute my-auto' fontSize={24} fill="white"/>)}
//                     </span>
//                 </div>
//             </label>

//             <label className='w-[40%]'>
//                 <p className='text-black font-inter  mb-1 text-[0.875rem] leading-[1.375rem]'>Confirm Password<sup className='text-pink-200'>*</sup></p>
                
//                 <div className='flex flex-row
//                 justify-between items-center relative'>

//                     <input
//                         required
//                         type={showConfirmPassword ? ("text") : ("password")}
//                         name="confirmPassword"
//                         onChange={changeHandler}
//                         placeholder='Confirm Password'
//                         value={confirmPassword}
//                         className=' placeholder-white bg-orange-300 rounded-md text-black text-sm font-inter h-12 w-full px-4 py-4 shadow-sm mt-12 shadow-richblack-200 absolute'
//                         style={{
//                             boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
//                           }}
//                     />
//                     <span onClick={() => setShowConfirmPassword((prev) => !prev)}>
//                         {showConfirmPassword? (<AiOutlineEyeInvisible className=' absolute translate-x-56 translate-y-4' fontSize={24} fill="white"/>) : (<AiOutlineEye className='translate-x-56 translate-y-4 absolute' fontSize={24} fill="white"/>)}
//                     </span>
//                 </div>

//             </label>
//         </div>

//         <button 
//         type="submit"
//         className="mt-6 h-12 rounded-[8px] bg-orange-500 py-[8px]
//          px-[12px] text-white w-56 mx-auto font-semibold "
//          >
//             Create Account
//         </button>
//     </form>

//     </div>
//   )
// }

// export default SignupForm



// SignupForm.js currently working for companies 
// import React, { useState } from 'react';
// import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
// import toast from 'react-hot-toast';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import {  sendOtp, sendSmsOtp } from '../../../services/operations/authAPI';
// import { setSignupData } from '../../../slices/authSlice';
// import { ACCOUNT_TYPE } from "../../../utils/constants";
// import Tab from "../../common/Tab";

// const SignupForm = () => {
//     const navigate = useNavigate();
//     const dispatch = useDispatch(); 
//     const [accountType, setAccountType] = useState(ACCOUNT_TYPE.CANDIDATE);
//     const [formData, setFormData] = useState({
//         name: "",
//         email: "",
//         contactNumber: "",
//         password: "",
//         confirmPassword: "",
//         date: "",
//         city: "",
//     });
//     const [showPassword, setShowPassword] = useState(false);
//     const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//     const { name, email, password, confirmPassword, contactNumber, date, city } = formData;

//     const changeHandler = (event) => {
//         setFormData(prevData => ({ ...prevData, [event.target.name]: event.target.value }));
//     };

//     const submitHandler = (event) => {
//         event.preventDefault();
//         if (password !== confirmPassword) {
//             toast.error("Passwords do not match!");
//             return;
//         }
//         const signupData = { ...formData, accountType };
//         console.log('Signup data inside signup submit handler ', signupData)
//         dispatch(setSignupData(signupData));
//         if (accountType === ACCOUNT_TYPE.CANDIDATE) {
//             dispatch(sendSmsOtp(contactNumber));
//             navigate("/verify-otp");
//         } else if (accountType === ACCOUNT_TYPE.COMPANY) {
//             // dispatch(signup(signupData, navigate));
//             dispatch(sendOtp(formData.email, navigate))
//         }
//     };

//     const tabData = [
//         { id: 1, tabName: "Candidate", type: ACCOUNT_TYPE.CANDIDATE },
//         { id: 2, tabName: "Company", type: ACCOUNT_TYPE.COMPANY },
//     ];
//     console.log(accountType)
//     return (
//         <div className="lg:mt-24 sm:mt-12 flex justify-center items-center mx-auto flex-col gap-y-2">
//             <Tab tabData={tabData} field={accountType} setField={setAccountType} />
//             <form onSubmit={submitHandler} className="flex w-[50%] bg-richblack-200 pb-4 flex-col justify-center items-center mx-auto gap-y-2">
//                 <div className=' w-full sm:flex sm:flex-wrap lg:flex-row gap-5'>
//                     <label className="w-[50%] flex flex-col mx-auto">
//                         <p className='text-black font-inter mb-1 text-[0.875rem] leading-[1.375rem]'>Name<sup className='text-pink-200'>*</sup></p>
//                         <input
//                             required
//                             type="text"
//                             name="name"
//                             onChange={changeHandler}
//                             placeholder='Enter Name'
//                             value={name}
//                             className='w-full placeholder-white bg-orange-300 rounded-[0.5rem] text-black text-sm font-inter h-12 px-4 py-4 shadow-sm shadow-richblack-200'
//                             style={{ boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)" }}
//                         />
//                     </label>
//                 </div>
//                 <div className=' w-full flex sm:flex sm:flex-wrap lg:flex-row gap-5 mx-auto justify-evenly'>
//                     <label className='w-[40%]'>
//                         <p className='mb-1 text-[0.875rem] leading-[1.375rem] text-black font-inter'>Email Address<sup className='text-pink-200'>*</sup></p>
//                         <input
//                             required
//                             type="email"
//                             name="email"
//                             onChange={changeHandler}
//                             placeholder='Enter Email Address'
//                             value={email}
//                             className=' placeholder-white bg-orange-300 rounded-md text-black text-sm font-inter h-12 w-full px-4 py-4 shadow-sm shadow-richblack-200'
//                             style={{ boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)" }}
//                         />
//                     </label>
//                     <label className='w-[40%]'>
//                         <p className='mb-1 text-[0.875rem] leading-[1.375rem] text-black font-inter'>Contact Number<sup className='text-pink-200'>*</sup></p>
//                         <input
//                             required
//                             name="contactNumber"
//                             onChange={changeHandler}
//                             placeholder='Contact Number'
//                             value={contactNumber}
//                             className='placeholder-white bg-orange-300 rounded-md text-black text-sm font-inter h-12 w-full px-4 py-4 shadow-sm shadow-richblack-200'
//                             style={{ boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)" }}
//                         />
//                     </label>
//                 </div>
//                 <div className=' w-full flex sm:flex sm:flex-wrap lg:flex-row gap-5 mx-auto justify-evenly'>
//                     <label className='w-[40%]'>
//                         <p className='mb-1 text-[0.875rem] leading-[1.375rem] text-black font-inter'>Date<sup className='text-pink-200'>*</sup></p>
//                         <input
//                             required
//                             type="date"
//                             name="date"
//                             onChange={changeHandler}
//                             value={date}
//                             className=' placeholder-white bg-orange-300 rounded-md text-black text-sm font-inter h-12 w-full px-4 py-4 shadow-sm shadow-richblack-200'
//                             style={{ boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)" }}
//                         />
//                     </label>
//                     <label className='w-[40%]'>
//                         <p className='mb-1 text-[0.875rem] leading-[1.375rem] text-black font-inter'>City<sup className='text-pink-200'>*</sup></p>
//                         <input
//                             required
//                             name="city"
//                             onChange={changeHandler}
//                             placeholder='City'
//                             value={city}
//                             className='placeholder-white bg-orange-300 rounded-md text-black text-sm font-inter h-12 w-full px-4 py-4 shadow-sm shadow-richblack-200'
//                             style={{ boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)" }}
//                         />
//                     </label>
//                 </div>
//                 <div className=' w-full flex sm:flex sm:flex-wrap lg:flex-row gap-5 mx-auto justify-evenly'>
//                     <label className="relative w-[40%]">
//                         <p className='mb-1 text-[0.875rem] leading-[1.375rem] text-black font-inter'>Password<sup className='text-pink-200'>*</sup></p>
//                         <input
//                             required
//                             type={showPassword ? "text" : "password"}
//                             name="password"
//                             onChange={changeHandler}
//                             placeholder='Enter Password'
//                             value={password}
//                             className=' placeholder-white bg-orange-300 rounded-md text-black text-sm font-inter h-12 w-full px-4 py-4 shadow-sm shadow-richblack-200'
//                             style={{ boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)" }}
//                         />
//                         <span onClick={() => setShowPassword(prev => !prev)} className="absolute right-3 top-[38px] z-10 cursor-pointer">
//                             {showPassword ? <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" /> : <AiOutlineEye fontSize={24} fill="#AFB2BF" />}
//                         </span>
//                     </label>
//                     <label className="relative w-[40%]">
//                         <p className='mb-1 text-[0.875rem] leading-[1.375rem] text-black font-inter'>Confirm Password<sup className='text-pink-200'>*</sup></p>
//                         <input
//                             required
//                             type={showConfirmPassword ? "text" : "password"}
//                             name="confirmPassword"
//                             onChange={changeHandler}
//                             placeholder='Confirm Password'
//                             value={confirmPassword}
//                             className=' placeholder-white bg-orange-300 rounded-md text-black text-sm font-inter h-12 w-full px-4 py-4 shadow-sm shadow-richblack-200'
//                             style={{ boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)" }}
//                         />
//                         <span onClick={() => setShowConfirmPassword(prev => !prev)} className="absolute right-3 top-[38px] z-10 cursor-pointer">
//                             {showConfirmPassword ? <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" /> : <AiOutlineEye fontSize={24} fill="#AFB2BF" />}
//                         </span>
//                     </label>
//                 </div>
//                 <div className=" flex items-center gap-x-4">
//                     <button type="submit" className='bg-yellow-100 text-white font-medium rounded-md py-2 px-3'>
//                         Create Account
//                     </button>
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default SignupForm;



//testing wala code for both 
// import React, { useState } from 'react';
// import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
// import toast from 'react-hot-toast';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { sendOtp, sendSmsOtp } from '../../../services/operations/authAPI';
// import { setSignupData } from '../../../slices/authSlice';
// import { ACCOUNT_TYPE } from "../../../utils/constants";
// import Tab from "../../common/Tab";

// const SignupForm = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch(); 
//   const [accountType, setAccountType] = useState(ACCOUNT_TYPE.CANDIDATE);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     contactNumber: "",
//     password: "",
//     confirmPassword: "",
//     date: "",
//     city: "",
//   });
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const { name, email, password, confirmPassword, contactNumber, date, city } = formData;

//   const changeHandler = (event) => {
//     setFormData(prevData => ({ ...prevData, [event.target.name]: event.target.value }));
//   };

//   const submitHandler = (event) => {
//     event.preventDefault();
//     if (password !== confirmPassword) {
//       toast.error("Passwords do not match!");
//       return;
//     }
//     const signupData = { ...formData, accountType };
//     console.log('Signup data inside signup submit handler ', signupData)
//     dispatch(setSignupData(signupData));
//     if (accountType === ACCOUNT_TYPE.CANDIDATE) {
//       dispatch(sendSmsOtp(contactNumber, navigate));
      
//     } else if (accountType === ACCOUNT_TYPE.COMPANY) {
//       dispatch(sendOtp(email, navigate));
//     }
//   };

//   const tabData = [
//     { id: 1, tabName: "Candidate", type: ACCOUNT_TYPE.CANDIDATE },
//     { id: 2, tabName: "Company", type: ACCOUNT_TYPE.COMPANY },
//   ];
  
//   return (
//     <div className="lg:mt-24 sm:mt-12 flex justify-center items-center mx-auto flex-col gap-y-2">
//       <Tab tabData={tabData} field={accountType} setField={setAccountType} />
//       <form onSubmit={submitHandler} className="flex w-[50%] bg-richblack-200 pb-4 flex-col justify-center items-center mx-auto gap-y-2">
//         <div className=' w-full flex sm:flex sm:flex-wrap lg:flex-row gap-5 mx-auto justify-evenly'>
//           <label className="w-[40%] flex flex-col ">
//             <p className='text-black font-inter mb-1 text-[0.875rem] leading-[1.375rem]'>Name<sup className='text-pink-200'>*</sup></p>
//             <input
//               required
//               type="text"
//               name="name"
//               onChange={changeHandler}
//               placeholder='Enter Name'
//               value={name}
//               className='w-full placeholder-white bg-orange-300 rounded-[0.5rem] text-black text-sm font-inter h-12 px-4 py-4 shadow-sm shadow-richblack-200'
//               style={{ boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)" }}
//             />
//           </label>
        
//         {accountType === ACCOUNT_TYPE.COMPANY && (
            
//           <label className='w-[40%]'>
//             <p className='mb-1 text-[0.875rem] leading-[1.375rem] text-black font-inter'>Email Address<sup className='text-pink-200'>*</sup></p>
//             <input
//               required
//               type="email"
//               name="email"
//               onChange={changeHandler}
//               placeholder='Enter Email Address'
//               value={email}
//               className=' placeholder-white bg-orange-300 rounded-md text-black text-sm font-inter h-12 w-full px-4 py-4 shadow-sm shadow-richblack-200'
//               style={{ boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)" }}
//             />
//           </label>
          
        
//         )}
//         {accountType === ACCOUNT_TYPE.CANDIDATE && (
//           <label className='w-[40%]'>
//             <p className='mb-1 text-[0.875rem] leading-[1.375rem] text-black font-inter'>Contact Number<sup className='text-pink-200'>*</sup></p>
//             <input
//               required
//               name="contactNumber"
//               onChange={changeHandler}
//               placeholder='Contact Number'
//               value={contactNumber}
//               className='placeholder-white bg-orange-300 rounded-md text-black text-sm font-inter h-12 w-full px-4 py-4 shadow-sm shadow-richblack-200'
//               style={{ boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)" }}
//             />
//           </label>

//         )}

//         </div>
//         <div className=' w-full flex sm:flex sm:flex-wrap lg:flex-row gap-5 mx-auto justify-evenly'>
//           <label className="relative w-[40%]">
//             <p className='mb-1 text-[0.875rem] leading-[1.375rem] text-black font-inter'>Password<sup className='text-pink-200'>*</sup></p>
//             <input
//               required
//               type={showPassword ? "text" : "password"}
//               name="password"
//               onChange={changeHandler}
//               placeholder='Enter Password'
//               value={password}
//               className=' placeholder-white bg-orange-300 rounded-md text-black text-sm font-inter h-12 w-full px-4 py-4 shadow-sm shadow-richblack-200'
//               style={{ boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)" }}
//             />
//             <span onClick={() => setShowPassword(prev => !prev)} className="absolute right-3 top-[38px] z-10 cursor-pointer">
//               {showPassword ? <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" /> : <AiOutlineEye fontSize={24} fill="#AFB2BF" />}
//             </span>
//           </label>
//           <label className="relative w-[40%]">
//             <p className='mb-1 text-[0.875rem] leading-[1.375rem] text-black font-inter'>Confirm Password<sup className='text-pink-200'>*</sup></p>
//             <input
//               required
//               type={showConfirmPassword ? "text" : "password"}
//               name="confirmPassword"
//               onChange={changeHandler}
//               placeholder='Confirm Password'
//               value={confirmPassword}
//               className=' placeholder-white bg-orange-300 rounded-md text-black text-sm font-inter h-12 w-full px-4 py-4 shadow-sm shadow-richblack-200'
//               style={{ boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)" }}
//             />
//             <span onClick={() => setShowConfirmPassword(prev => !prev)} className="absolute right-3 top-[38px] z-10 cursor-pointer">
//               {showConfirmPassword ? <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" /> : <AiOutlineEye fontSize={24} fill="#AFB2BF" />}
//             </span>
//           </label>
//         </div>
//         <button type="submit" className='mx-auto text-center rounded-md bg-orange-300 px-[12px] py-[8px] mt-6 text-black w-[30%]'>
//           Create Account
//         </button>
//       </form>
//     </div>
//   );
// };

// export default SignupForm;


//testing 2 
import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { sendOtp } from '../../../services/operations/authAPI';
import { setSignupData } from '../../../slices/authSlice';
import { ACCOUNT_TYPE } from "../../../utils/constants";
import Tab from "../../common/Tab";
import { Country, State, City }  from 'country-state-city';
import { useForm } from "react-hook-form";

const SignupForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch(); 
    const [accountType, setAccountType] = useState(ACCOUNT_TYPE.CANDIDATE);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        contactNumber: "",
        password: "",
        confirmPassword: "",
        date: "",
        city: "",
    });
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const { name, email, password, confirmPassword, contactNumber, date, city } = formData;
    const [loading, setLoading] = useState(false)
    const [countryCode, setCountryCode] = useState("+90"); // Default country code for Turkey
    const changeHandler = (event) => {
        setFormData(prevData => ({ ...prevData, [event.target.name]: event.target.value }));
    };
    const {
        register,
        formState: { errors },
        
    
      } = useForm();
    const submitHandler = async (event) => {
      event.preventDefault();
      if (password !== confirmPassword) {
        toast.error("Passwords do not match!");
        return;
      }
      const signupData = { ...formData, accountType };
        dispatch(setSignupData(signupData));
        try {
          console.log("formData : ",formData)
          console.log("1 ",formData.email)
          console.log("2 ",formData?.email)
          console.log("inside submitHandler try block .. ","email: ",email, "accountType : ", accountType, "contactNumber : ", contactNumber)
            dispatch(sendOtp(formData.email, formData.contactNumber, accountType, navigate));
            
        } catch (error) {
            toast.error("Failed to send OTP");
        }
    };

    // Format phone number with "05" prefix
    const handlePhoneNumberChange = (event) => {
    let value = event.target.value.replace(/\D/g, ''); // Remove non-digit characters

    // If the field is empty, add "5" as the initial digit
    if (value === "") {
        value = "5";
    }

    // Format the value as "5XX XXX XX XX"
    const formattedValue = value.replace(/(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/, '$1$2 $3 $4 $5');

    setFormData((prevData) => ({
        ...prevData,
        contactNumber: formattedValue,
    }));
};

    const tabData = [
        { id: 1, tabName: "Candidate", type: ACCOUNT_TYPE.CANDIDATE },
        { id: 2, tabName: "Company", type: ACCOUNT_TYPE.COMPANY },
    ];

    return (
        <div className="lg:mt-20 sm:pt-12 bg-pure-greys-25/80 lg:w-[50%] sm:w-full flex justify-center items-center mx-auto flex-col gap-y-2">
            
            <form onSubmit={submitHandler} className="flex   pb-4 flex-col justify-center items-center mx-auto gap-y-2">
                

                <div className=' w-full sm:flex sm:flex-wrap lg:flex-row gap-5'>
                    <label className="lg:w-full sm:w-[80%] flex flex-col mx-auto">
                        <p className='text-black font-inter mb-1 text-[0.875rem] leading-[1.375rem]'>Name<sup className='text-pink-200'>*</sup></p>
                        <input
                            required
                            type="text"
                            name="name"
                            onChange={changeHandler}
                            placeholder='Enter Name'
                            value={name}
                            className='w-full px-3 py-2.5 border border-purple-700 outline-none focus-visible:ring focus-visible:ring-purple-700  text-lg font-rubik-light  focus:ring-2 focus:ring-purple-700  rounded-lg'
                            style={{ boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)" }}
                        />
                    </label>
                </div>
                <div className=' w-full flex sm:flex sm:flex-wrap sm:flex-col sm:items-center lg:flex-row gap-5 mx-auto justify-evenly'>
                    <label className='lg:w-[40%] sm:w-[80%]'>
                        <p className='mb-1 text-[0.875rem] leading-[1.375rem] text-black font-inter'>Email Address<sup className='text-pink-200'>*</sup></p>
                        <input
                            required
                            type="email"
                            name="email"
                            onChange={changeHandler}
                            placeholder='Enter Email Address'
                            value={email}
                            className='w-full px-3 py-2.5 border border-purple-700 outline-none focus-visible:ring focus-visible:ring-purple-700  text-lg font-rubik-light  focus:ring-2 focus:ring-purple-700  rounded-lg'
                            style={{ boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)" }}
                        />
                    </label>
                    {/* <label className='lg:w-[40%] sm:w-[80%]'>
                        <p className='mb-1 text-[0.875rem] leading-[1.375rem] text-black font-inter'>Contact Number<sup className='text-pink-200'>*</sup></p>
                        <input
                            required
                            name="contactNumber"
                            onChange={changeHandler}
                            placeholder='Contact Number'
                            value={contactNumber}
                            className='placeholder-white bg-orange-300 rounded-md text-black text-sm font-inter h-12 w-full px-4 py-4 shadow-sm shadow-richblack-200'
                            style={{ boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)" }}
                        />
                    </label> */}

                    <label className='lg:w-[44%] sm:w-[80%] flex flex-col'>
  <p className='mb-1 text-[0.875rem] leading-[1.375rem] text-black font-inter'>
    Contact Number<sup className='text-pink-200'>*</sup>
  </p>
  <div className='flex items-center'>
  <label className='lg:w-full sm:w-[80%] flex flex-col'>
    
    <div className='flex items-center'>
        {/* Country Code Dropdown */}
        <select
            value={countryCode}
            onChange={(e) => setCountryCode(e.target.value)}
            className='w-full px-3 py-2.5 border border-purple-700 outline-none focus-visible:ring focus-visible:ring-purple-700  text-lg font-rubik-light  focus:ring-2 focus:ring-purple-700  rounded-lg'
        >
            <option value="+90">🇹🇷 +90 (Turkey)</option>
            <option value="+1">🇺🇸 +1 (USA)</option>
            <option value="+44">🇬🇧 +44 (UK)</option>
            <option value="+91">🇮🇳 +91 (India)</option>
        </select>

        {/* Contact Number Input */}
        <input
            required
            type="text"
            name="contactNumber"
            maxLength={13}
            onChange={handlePhoneNumberChange}
            placeholder="Enter Contact Number"
            value={contactNumber}
            className='w-full px-3 py-2.5 border border-purple-700 outline-none focus-visible:ring focus-visible:ring-purple-700  text-lg font-rubik-light  focus:ring-2 focus:ring-purple-700  rounded-lg'
        />
    </div>
</label>

  </div>
</label>

                </div>

                <div className=' w-full  flex sm:flex sm:flex-wrap sm:flex-col sm:items-center lg:flex-row gap-5 mx-auto justify-evenly'>
                    <label className="relative lg:w-[40%] sm:w-[80%]">
                        <p className='mb-1 text-[0.875rem] leading-[1.375rem] text-black font-inter'>Password<sup className='text-pink-200'>*</sup></p>
                        <input
                            required
                            type={showPassword ? "text" : "password"}
                            name="password"
                            onChange={changeHandler}
                            placeholder='Enter Password'
                            value={password}
                            className='w-full px-3 py-2.5 border border-purple-700 focus-visible:ring focus-visible:ring-purple-700 outline-none  text-lg font-rubik-light  rounded-lg'

                            style={{ boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)" }}
                        />
                        <span onClick={() => setShowPassword(prev => !prev)} className="absolute right-3 top-[38px] z-10 cursor-pointer">
                            {showPassword ? <AiOutlineEyeInvisible fontSize={24} fill="#fafafa" /> : <AiOutlineEye fontSize={24} fill="#fafafa" />}
                        </span>
                    </label>
                    <label className="relative lg:w-[40%] sm:w-[80%]">
                        <p className='mb-1 text-[0.875rem] leading-[1.375rem] text-black font-inter'>Confirm Password<sup className='text-pink-200'>*</sup></p>
                        <input
                            required
                            type={showConfirmPassword ? "text" : "password"}
                            name="confirmPassword"
                            onChange={changeHandler}
                            placeholder='Confirm Password'
                            value={confirmPassword}
                            className='w-full px-3 py-2.5 border border-purple-700 focus-visible:ring focus-visible:ring-purple-700 outline-none  text-lg font-rubik-light  rounded-lg'

                            style={{ boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)" }}
                        />
                        <span onClick={() => setShowConfirmPassword(prev => !prev)} className="absolute right-3 top-[38px] z-10 cursor-pointer">
                            {showConfirmPassword ? <AiOutlineEyeInvisible fontSize={24} fill="#fafafa" /> : <AiOutlineEye fontSize={24} fill="#fafafa" />}
                        </span>
                    </label>
                </div>
                
                <div className='flex flex-col gap-2 lg:w-[50%] w-full sm:flex-wrap sm:flex-col sm:items-center lg:flex-row mx-auto justify-evenly'>
                    
                    {/* <label className='lg:w-[40%] sm:w-[80%]'>
                        <p className='mb-1 text-[0.875rem] leading-[1.375rem] text-black font-inter'>City<sup className='text-pink-200'>*</sup></p>
                        <input
                            required
                            name="city"
                            onChange={changeHandler}
                            placeholder='City'
                            value={city}
                            className='placeholder-white bg-orange-300 rounded-md text-black text-sm font-inter h-12 w-full px-4 py-4 shadow-sm shadow-richblack-200'
                            style={{ boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)" }}
                        />
                    </label> */}

                    <label htmlFor="city" className="mb-1 text-[0.875rem] leading-[1.375rem] text-black font-inter lg:w-[40%] sm:w-[80%]">
            Choose City<sup className='text-pink-200'>*</sup>
            </label>
            <select
              placeholder="Choose city"
            className=' w-full px-3 py-2.5 border border-purple-700 focus-visible:ring focus-visible:ring-purple-700 outline-none  text-lg font-rubik-light  rounded-lg'

                            style={{ boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)" }}
              type="text"
              name="city"
              id="city"
              {...register("city", { required: true })}
              // defaultValue={user?.adminDetails?.post}

            >
              <option value="" disabled>
            Choose a city
          </option>
          {!loading &&
            State.getStatesOfCountry("TR")?.map((state, indx) => (
              <option key={indx} value={state?.name}>
                {state?.name}
              </option>
            ))}
            </select>
            
            {errors.city && (
              <span className="-mt-1 text-[12px] text-pink-200">
                Please select your city.
              </span>
            )}
            
                </div>
                
                <Tab tabData={tabData} field={accountType} setField={setAccountType} />
                

                <button type="submit" className='mx-auto  text-center rounded-md bg-purple-700 px-[12px] py-[8px] mt-6 text-black w-[30%]'>
                    Create Account
                </button>
      </form>
    </div>
  );
};

export default SignupForm;

