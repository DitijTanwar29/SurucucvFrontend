import React from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
// import {MdKeyboardArrowDown} from "react-icons/md"
// import countryCode from "../../../data/countrycode.json"
import { useDispatch } from 'react-redux'

import { signup } from '../../../services/operations/authAPI'
import { setSignupData } from '../../../slices/authSlice'
import  {ACCOUNT_TYPE}  from "../../../utils/constants"
import Tab from "../../common/Tab"

const SignupForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch(); 

    // student or instructor
    const [accountType, setAccountType] = useState(ACCOUNT_TYPE.CANDIDATE)
    console.log("account type : ",accountType)
    const [formData, setFormData] = useState({
        name:"",
        email:"",
        contactNumber:"",
        password:"",
        confirmPassword:"",
        date:"",
        city:"",

    })

    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    const { name, email, password, confirmPassword, contactNumber, date, city } = formData

    // console.log(email);
    
    //Handling input fields, when some value changes
    function changeHandler(event) {
        
        setFormData( (prevData) => (
            {
                ...prevData,
                [event.target.name]:event.target.value
            }
        ) )
    }

    function submitHandler(event){
        event.preventDefault();
        console.log("Form Data", formData);
        if(password !== confirmPassword){
            toast.error("Passwords do not match!")
            return;
        }

        const signupData = {
            ...formData,
            accountType,
        }
        console.log("signupData : ",signupData);
        //setting signup datat to state
        // To be used after otp verification
        // dispatch(setSignupData(signupData))
        // Send OTP to the user for verification
        dispatch(signup(signupData, navigate))
    }

    //data to pass to Tab component
    const tabData = [
        {
            id: 1,
            tabName: "Candidate",
            type: ACCOUNT_TYPE.CANDIDATE,
        },
        {
            id: 2,
            tabName: "Company",
            type: ACCOUNT_TYPE.COMPANY,
        },
    ]

  return (
    <div className="lg:mt-24 sm:mt-4 flex justify-center items-center w-[50%] mx-auto flex-col gap-y-2">
    {/* candidate-company tab */}
    <Tab tabData={tabData} field={accountType} setField={setAccountType} />
    {/* form */}
    <form onSubmit={submitHandler}  className="flex w-full flex-col justify-center items-center gap-y-2">
    {/*  name  */}
            <label>
                <p className='text-black font-inter mb-1 text-[0.875rem] leading-[1.375rem]'>Name<sup className='text-pink-200'>*</sup></p>
                <input
                    required
                    type="text"
                    name="name"
                    onChange={changeHandler}
                    placeholder='Enter Name'
                    value={name}
                    className='placeholder-white bg-orange-300 rounded-[0.5rem]
                     text-black text-sm font-inter h-12 w-[full] px-4 py-4 shadow-sm shadow-richblack-200'
                    style={{
                        boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                      }}
                    
                />
            </label>
    {/* <div className='flex flex-row  gap-5'>

            <label>
                <p className='text-black font-inter mb-1 text-[0.875rem] leading-[1.375rem]'>Last Name<sup className='text-pink-200'>*</sup></p>
                <input
                    required
                    type="text"
                    name="lastName"
                    onChange={changeHandler}
                    placeholder='Enter Last Name'
                    value={lastName}
                    className='bg-orange-300 placeholder-black rounded-md text-richblack-200 text-sm font-inter h-12 w-30 px-4 py-4 shadow-sm shadow-richblack-200'
                    style={{
                        boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                      }}
                />
            </label>
    </div> */}
 

    

    <div className=' w-full sm:flex sm:flex-wrap lg:flex-row  gap-5'>

        {/* Email Address */}
        <label>
            <p className='mb-1 text-[0.875rem] leading-[1.375rem] text-black font-inter'>Email Address<sup className='text-pink-200'>*</sup></p>
            <input
                required
                type="email"
                name="email"
                onChange={changeHandler}
                placeholder='Enter Email Address'
                value={email}
                className=' placeholder-white bg-orange-300 rounded-md text-black text-sm font-inter
                 h-12 w-54 px-4 py-4 shadow-sm shadow-richblack-200'
                style={{
                    boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                }}
            />
        </label>

        
        {/* Contact Number */}

                <label >
                    <p className='mb-1 text-[0.875rem] leading-[1.375rem] text-black font-inter'>Contact Number<sup className='text-pink-200'>*</sup></p>

                            <input
                                required 
                                name="contactNumber"
                                placeholder='Enter Contact Number'
                                value={contactNumber}
                                className=' placeholder-white bg-orange-300 rounded-md text-black text-sm font-inter
                                 h-12 w-54 px-4 py-4 shadow-sm shadow-richblack-200'
                                type='number'
                                onChange={changeHandler}
                            />
                        {/* <div className='flex flex-row w-full gap-5'> */}
                            {/* <div className='relative flex flex-row '>
                                
                                <input
                                    required
                                    
                                    name="contactNumber"
                                    placeholder='+91 '
                                    // value={countryCode.code}
                                    className='placeholder-black bg-orange-300 rounded-md text-richblack-200 text-sm font-inter h-12 w-[30%] px-4 py-4 shadow-sm shadow-richblack-200'

                                />
                                <MdKeyboardArrowDown className='text-richblack-200 cursor-pointer' />
                            </div> */}

                        {/* </div>                     */}
            
                </label>
    </div>

    {/* Date and city */}
    <div className=' w-full sm:flex sm:flex-wrap lg:flex-row  gap-5'>
            <label>
                <p className='text-black font-inter mb-1 text-[0.875rem] leading-[1.375rem]'>City<sup className='text-pink-200'>*</sup></p>
                <input
                    required
                    type="text"
                    name="city"
                    onChange={changeHandler}
                    placeholder='Enter City'
                    value={city}
                    className='placeholder-white bg-orange-300 rounded-[0.5rem]
                     text-black text-sm font-inter h-12 w-54 px-4 py-4 shadow-sm shadow-richblack-200'
                    style={{
                        boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                      }}
                    
                />
            </label>

            <label>
                <p className='text-black font-inter mb-1 text-[0.875rem] leading-[1.375rem]'>Date<sup className='text-pink-200'>*</sup></p>
                <input
                    required
                    type="date"
                    name="date"
                    onChange={changeHandler}
                    placeholder='Enter Date'
                    value={date}
                    className='bg-orange-300 text-black placeholder-white rounded-md  text-sm font-inter 
                    h-12 w-54 px-4 py-4 shadow-sm shadow-richblack-200'
                    style={{
                        boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                      }}
                />
            </label>
    </div>
        
         {/* create password and confirm password */}
         <div className='w-full sm:flex lg:flex-row sm:flex-wrap lg:gap-5 sm:gap-y-14 mb-5'>
            <label >
                <p className='text-black font-inter mb-1 text-[0.875rem] leading-[1.375rem]'>Create Password<sup className='text-pink-200'>*</sup></p>
                <div className=' flex flex-row justify-between relative'>

                    <input
                        required
                        type={showPassword ? ("text") : ("password")}
                        name="password"
                        onChange={changeHandler}
                        placeholder='Enter Password'
                        value={password}
                        className='placeholder-white absolute bg-orange-300 rounded-md text-black text-sm font-inter
                         h-12 w-52  px-4 py-4 shadow-sm shadow-richblack-200'
                        style={{
                            boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                          }}
                    />

                    <span onClick={() => setShowPassword((prev) => !prev)}>
                        {showPassword? (<AiOutlineEyeInvisible  className=' absolute translate-x-44 translate-y-4 my-auto' fontSize={24} fill="white"/>) : (<AiOutlineEye className='translate-x-44 translate-y-4  absolute my-auto' fontSize={24} fill="white"/>)}
                    </span>
                </div>
            </label>

            <label className='sm:-translate-x-20'>
                <p className='text-black font-inter translate-x-20 mb-1 text-[0.875rem] leading-[1.375rem]'>Confirm Password<sup className='text-pink-200'>*</sup></p>
                
                <div className='flex flex-row
                justify-between items-center relative'>

                    <input
                        required
                        type={showConfirmPassword ? ("text") : ("password")}
                        name="confirmPassword"
                        onChange={changeHandler}
                        placeholder='Confirm Password'
                        value={confirmPassword}
                        className=' placeholder-white bg-orange-300 rounded-md text-black text-sm font-inter h-12 w-52 px-4 py-4 shadow-sm ml-20 mt-12 shadow-richblack-200 absolute'
                        style={{
                            boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                          }}
                    />
                    <span onClick={() => setShowConfirmPassword((prev) => !prev)}>
                        {showConfirmPassword? (<AiOutlineEyeInvisible className=' absolute translate-x-64 translate-y-4' fontSize={24} fill="white"/>) : (<AiOutlineEye className='translate-x-64 translate-y-4 absolute' fontSize={24} fill="white"/>)}
                    </span>
                </div>

            </label>
        </div>

        <button 
        type="submit"
        className="mt-6 rounded-[8px] bg-orange-500 py-[8px]
         px-[12px] font-medium text-black w-[50%] mx-auto "
         >
            <p>Create Account</p>
        </button>
    </form>

    </div>
  )
}

export default SignupForm