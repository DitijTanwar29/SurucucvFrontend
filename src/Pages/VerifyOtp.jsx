// // VerifyOtp.js
// import React from 'react';

// import { useNavigate } from 'react-router-dom';
// import { useState } from "react";
// import OtpInput from "react-otp-input";
// import { Link } from "react-router-dom";
// import { BiArrowBack } from "react-icons/bi";
// import { RxCountdownTimer } from "react-icons/rx";
// import { useDispatch, useSelector } from "react-redux";
// import { sendSmsOtp, signup } from "../services/operations/authAPI";

// const VerifyOtp = () => {
//     const [otp, setOtp] = useState('');
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const { signupData, loading } = useSelector((state) => state.auth);

//     const handleVerifyAndSignup = (e) => {
//         e.preventDefault();
//         const {
//           accountType,
//           name, email, password, confirmPassword, contactNumber, date, city
        
//         } = signupData;
    
//         dispatch(
//           signup(
//             accountType,
//             name, email, password, confirmPassword, contactNumber, date, city,
//             otp,
//             navigate
//           )
//         );
//       };

//     return (
//         // <div className="otp-verification">
//         //     <h2>Verify OTP</h2>
//         //     <form onSubmit={handleSubmit}>
//         //         <input
//         //             type="text"
//         //             placeholder="Enter OTP"
//         //             value={otp}
//         //             onChange={handleChange}
//         //             required
//         //         />
//         //         <button type="submit">Verify OTP</button>
//         //     </form>
//         // </div>



// <div className="min-h-[calc(100vh-3.5rem)] grid place-items-center">
//       {loading ? (
//         <div>
//           <div className="spinner"></div>
//         </div>
//       ) : (
//         <div className="max-w-[500px] p-4 lg:p-8">
//           <h1 className="text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]">
//             Verify SMS OTP
//           </h1>
//           <p className="text-[1.125rem] leading-[1.625rem] my-4 text-richblack-100">
//             A verification code has been sent to you. Enter the code below
//           </p>
//           <form onSubmit={handleVerifyAndSignup}>
//             <OtpInput
//               value={otp}
//               onChange={setOtp}
//               numInputs={6}
//               renderInput={(props) => (
//                 <input
//                   {...props}
//                   placeholder="-"
//                   style={{
//                     boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
//                   }}
//                   className="w-[48px] lg:w-[60px] border-0 bg-richblack-800 rounded-[0.5rem] text-richblack-5 aspect-square text-center focus:border-0 focus:outline-2 focus:outline-yellow-50"
//                 />
//               )}
//               containerStyle={{
//                 justifyContent: "space-between",
//                 gap: "0 6px",
//               }}
//             />
//             <button
//               type="submit"
//               className="w-full bg-yellow-50 py-[12px] px-[12px] rounded-[8px] mt-6 font-medium text-richblack-900"
//             >
//               Verify Sms Otp
//             </button>
//           </form>
//           <div className="mt-6 flex items-center justify-between">
//             <Link to="/signup">
//               <p className="text-richblack-5 flex items-center gap-x-2">
//                 <BiArrowBack /> Back To Signup
//               </p>
//             </Link>
//             <button
//               className="flex items-center text-blue-100 gap-x-2"
//               onClick={() => dispatch(sendSmsOtp(signupData.contactNumber))}
//             >
//               <RxCountdownTimer />
//               Resend it
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//     );
// };

// export default VerifyOtp;


// VerifyOtp.js
import { useEffect, useState } from "react";
import OtpInput from "react-otp-input";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { RxCountdownTimer } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { sendOtp, signup } from "../services/operations/authAPI";
import { useNavigate } from "react-router-dom";

function VerifyOtp() {
  const [otp, setOtp] = useState("");
  const { signupData, loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  
  const {
    accountType,
    name,
    email,
    password,
    confirmPassword,
    city,
    date,
    contactNumber,
  } = signupData;

  const handleVerifyAndSignup = (e) => {
    e.preventDefault();
    
    console.log("value of signupData in verify otp :", signupData);
    console.log("name:", name);
    console.log("email :", email);
    console.log("contactNumber : ", contactNumber);
    console.log("password:", password);
    console.log("confirmPass: ", confirmPassword);
    console.log("otp:", otp);

    dispatch(
      signup({
        accountType,
        name,
        email,
        password,
        confirmPassword,
        otp,
        city,
        date,
        contactNumber,
        navigate,
      })
    );
  };

  return (
    <div className="min-h-[calc(100vh-3.5rem)] grid place-items-center">
      {loading ? (
        <div>
          <div className="spinner"></div>
        </div>
      ) : (
        <div className="max-w-[500px] p-4 lg:p-8">
          <h1 className="text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]">
            Verify OTP
          </h1>
          <p className="text-[1.125rem] leading-[1.625rem] my-4 text-richblack-100">
            A verification code has been sent to you. Enter the code below
          </p>
          <form onSubmit={handleVerifyAndSignup}>
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              renderInput={(props) => (
                <input
                  {...props}
                  placeholder="-"
                  style={{
                    boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                  }}
                  className="w-[48px] lg:w-[60px] border-0 bg-richblack-800 rounded-[0.5rem] text-richblack-5 aspect-square text-center focus:border-0 focus:outline-2 focus:outline-yellow-50"
                />
              )}
              containerStyle={{
                justifyContent: "space-between",
                gap: "0 6px",
              }}
            />
            <button
              type="submit"
              className="w-full bg-yellow-50 py-[12px] px-[12px] rounded-[8px] mt-6 font-medium text-richblack-900"
            >
              Verify OTP
            </button>
          </form>
          <div className="mt-6 flex items-center justify-between">
            <Link to="/signup">
              <p className="text-richblack-5 flex items-center gap-x-2">
                <BiArrowBack /> Back To Signup
              </p>
            </Link>
            <button
              className="flex items-center text-blue-100 gap-x-2"
              onClick={() =>
                dispatch(
                  sendOtp(
                    email,
                    contactNumber,
                    accountType,
                    navigate,
                  )
                )
              }
            >
              <RxCountdownTimer />
              Resend it
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default VerifyOtp;
