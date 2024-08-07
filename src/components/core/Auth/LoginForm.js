import React from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'

import {login} from "../../../services/operations/authAPI"

const LoginForm = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    // const { user } = useSelector((state) => state.profile)
    const [formData, setFormData] = useState({
        email:"", password:""
    })

    // console.log("accountType in loginform : ",user?.accountType)
    const [showPassword, setShowPassword] = useState(false)
    
  const { email, password } = formData

    function changeHandler(event) {
        
        setFormData( (prevData) => (
            {
                ...prevData,
                [event.target.name]:event.target.value,
            }
            ) )
        }
        
        function submitHandler(event){
            event.preventDefault();
            dispatch(login(email, password, navigate))
        }
        return (
            <form onSubmit={submitHandler}
            className="sm:w-full lg:w-[50%] my-auto lg:mt-20 bg-pure-greys-25/80 sm:pt-10 flex w-[50%] mx-auto flex-col lg:justify-center lg:items-center gap-y-4"
            >
        
        <label>
            <p className='mb-1 text-[0.875rem] leading-[1.375rem] form-label'>
                Email Address<sup className='text-pink-200'>*</sup>
            </p>
            <input
                required
                type="email"
                value={email}
                onChange={changeHandler}
                placeholder='Enter email address'
                name="email"
                className=' sm:w-full placeholder-white bg-orange-300 rounded-md text-black text-sm font-inter h-12 w-full px-4 py-4 shadow-sm shadow-richblack-200'
                            style={{ boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)" }}
            />
        </label>

        <label className='relative'>
            <p className='mb-1 text-[0.875rem] leading-[1.375rem] form-label'>
                Password<sup className='text-pink-200'>*</sup>
            </p>
            <input
                required
                type={showPassword ?
                ("text"):
                ("password")}
                value={password}
                onChange={changeHandler}
                placeholder='Enter Password'
                name="password"
                className='sm:w-full placeholder-white bg-orange-300 rounded-md text-black text-sm font-inter h-12 w-full px-4 py-4 shadow-sm shadow-richblack-200'
                            style={{ boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)" }}
            />

            <span onClick={() => setShowPassword((prev) => !prev)} 
            className='absolute right-3 top-[38px] z-[10] cursor-pointer'>
                 {showPassword? (<AiOutlineEyeInvisible fontSize={24} fill="#fafafa"/>
                 ) : (
                 <AiOutlineEye fontSize={24} fill='#fafafa'/>
                 )}
            </span>

            <Link to="/forgot-password">
                <p className="mt-1 ml-auto max-w-max text-xs text-blue-100">
                    Forgot Password
                </p>
            </Link>

        </label>
                    
        <button type='submit'
            className='mt-6 rounded-[8px] bg-orange-500 py-[8px] px-[12px] font-medium text-black'>
          <p>Sign In</p>
        </button>

    </form>
  )
}
 
export default LoginForm