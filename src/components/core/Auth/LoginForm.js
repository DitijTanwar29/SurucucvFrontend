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
            className="lg:mt-24 sm:mt-4 flex w-[50%] mx-auto flex-col gap-y-4"
            >
        
        <label className='w-full'>
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
                style={{
                    boxShadow: "inset 0px -1px 0px rgba(225, 225, 225, 0.18)",
                }}
                className='w-full rounded-[0.5rem] bg-orange-300 p-[12px] text-richblack-5 form-style'
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
                style={{
                    boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                }}
                className='w-full rounded-[0.5rem] bg-orange-300 p-[12px] text-richblack-5 form-style'
            />

            <span onClick={() => setShowPassword((prev) => !prev)} 
            className='absolute right-3 top-[38px] z-[10] cursor-pointer'>
                 {showPassword? (<AiOutlineEyeInvisible fontSize={24} fill="#0B0B0B"/>
                 ) : (
                 <AiOutlineEye fontSize={24} fill='#0B0B0B'/>
                 )}
            </span>

            <Link to="/forgot-password">
                <p className="mt-1 ml-auto max-w-max text-xs text-blue-100">
                    Forgot Password
                </p>
            </Link>

        </label>
                    
        <button type='submit'
            className='mt-6 rounded-[8px] bg-yellow-50 py-[8px] px-[12px] font-medium text-black'>
          <p>Sign In</p>
        </button>

    </form>
  )
}
 
export default LoginForm