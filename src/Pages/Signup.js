import React from 'react'
import { useState } from 'react'
import { ACCOUNT_TYPE } from '../utils/constants'
import SignupForm from '../components/core/Auth/SignupForm';
 
const Signup = () => {
   const [accountType, setAccountType] = useState(ACCOUNT_TYPE.CANDIDATE);

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
    <>
    <div>
        <SignupForm/>
    </div>

    </>
  )
}

export default Signup