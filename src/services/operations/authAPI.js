import { toast } from "react-hot-toast"
import { setLoading, setToken } from "../../slices/authSlice"
import { apiConnector } from "../apiConnector"
import { endpoints } from "../apis"
import { setUser } from "../../slices/profileSlice"
import { setSignupData } from "../../slices/authSlice"

const { 
    SIGNUP_API,
    LOGIN_API,
    SENDOTP_API,
    SEND_SMS_OTP_API
    // RESETPASSTOKEN_API,
    // RESETPASSWORD_API,
} = endpoints

//rest apis are not mentioned here 
//add them acc to use

// export function signup(

//     email,
//     navigate,
//     accountType,
//     name,
//     password,
//     confirmPassword,
//     date,
//     city,
//     contactNumber,
//     otp,
// ) {
//     return async (dispatch) => {
//         console.log("email inside SIGNUP authAPI : ",email);
//         const toastId = toast.loading("Loading...")
//         dispatch(setLoading(true))
//         try{
//             const response = await apiConnector("POST", SIGNUP_API, {
//                 accountType,
//                 name,
//                 email,
//                 password,
//                 confirmPassword,
//                 date,
//                 city,
//                 contactNumber,
//                 otp,
//             })

//             console.log("SIGNUP API RESPONSE.............", response)
//             console.log("resopnse data",response.data);
//             if (!response.data.success) {
//                 throw new Error(response.data.message)
//             }
//             toast.success("Signup Successful")
//             navigate("/login")
//         } catch (error) {
//             console.log("error with message - ",error.message)
//             console.log("SIGNUP API ERROR............",error)
//             toast.error("Signup Failed")
//             navigate("/signup")
//         }
//         dispatch(setLoading(false))
//         toast.dismiss(toastId)
//     }
// }

export const sendSmsOtp = async (otpData,navigate) => {
    const toastId = toast.loading("Loading...")
    try {
      const response = await apiConnector("POST",SEND_SMS_OTP_API, otpData);
      console.log('OTP sent successfully:', response.data);
      navigate("/verify-Otp")
      toast.success("OTP Sent Successfully")
      return response.data;

    } catch (error) {
      console.error('Error sending OTP:', error.response ? error.response.data : error.message);
      toast.error("Could Not Send OTP")
      throw error;

    }
    toast.dismiss(toastId)

};

export function signup({name, email, password, confirmPassword, contactNumber, date, city, accountType, otp, navigate}) {
    return async (dispatch) => {
        const toastId = toast.loading("Loading...");
        console.log("signup endpoint req data: ",name,email,password,confirmPassword,contactNumber,date,city,accountType,otp)
        dispatch(setLoading(true));
        try {
            const response = await apiConnector("POST", SIGNUP_API, {name:name, email:email, password:password, confirmPassword:confirmPassword, contactNumber:contactNumber, date:date, city:city, accountType:accountType, otp:otp});

            if (!response.data.success) {
                throw new Error(response.data.message);
            }
            
            // dispatch(setSignupData(signupData));

            // if (accountType === ACCOUNT_TYPE.CANDIDATE) {
            //     toast.success("OTP Sent Successfully");
            //     navigate("/verify-otp");
            // } else if (accountType === ACCOUNT_TYPE.COMPANY) {
            //     toast.success("Email Verification Sent Successfully");
            //     navigate("/verify-email");
            // }

            if( !response.status.status === "401"){
                toast.error("User is already registered, please try to login now")
                navigate("/login")
            }
            toast.success("Signup Successful")
            navigate("/login")
        } catch (error) {
            toast.error("Signup Failed");
            navigate("/signup")

        }
        dispatch(setLoading(false));
        toast.dismiss(toastId);
    };
}



// export const verifyOtp = createAsyncThunk(
//     "auth/verifyOtp",
//     async ({ accountType, name, email, password, confirmPassword, otp, city, date, contactNumber, navigate }, { rejectWithValue }) => {
//       try {
//         const response = await apiConnector("POST", VERIFYOTP_API, {
//           accountType,
//           email,
//           contactNumber,
//           otp,
//         });
  
//         if (!response.data.success) {
//           throw new Error(response.data.message);
//         }
  
//         // Complete signup process here if needed
//         navigate("/some-next-page"); // Change this to the next page you want to navigate to
//         return response.data;
//       } catch (error) {
//         return rejectWithValue(error.response.data);
//       }
//     }
//   );
//currently working for company
// export function sendOtp(email, navigate) {
//     return async (dispatch) => {
//       const toastId = toast.loading("Loading...")
//       dispatch(setLoading(true))
//       try {
//         const response = await apiConnector("POST", SENDOTP_API, {
//           email,
//           checkUserPresent: true,
//         })
//         console.log("SENDOTP API RESPONSE............", response)
  
//         console.log(response.data.success)
  
//         if (!response.data.success) {
//           throw new Error(response.data.message)
//         }
  
//         toast.success("OTP Sent Successfully")
//         navigate("/verify-email")
//       } catch (error) {
//         console.log("SENDOTP API ERROR............", error)
//         toast.error("Could Not Send OTP")
//       }
//       dispatch(setLoading(false))
//       toast.dismiss(toastId)
//     }
//   }

// for both users
export function sendOtp(email, contactNumber, accountType, navigate) {
    return async (dispatch) => {
        console.log("inside sendOtp endpoint : ",email, accountType, contactNumber)
      const toastId = toast.loading("Loading...");
      dispatch(setLoading(true));
      try {
        const response = await apiConnector("POST", SENDOTP_API, {
          email,
          contactNumber,
          accountType,
          checkUserPresent: true,
        });
  
        console.log("SENDOTP API RESPONSE............", response);
  
        if (!response.data.success) {
          throw new Error(response.data.message);
        }
  
        toast.success("OTP Sent Successfully");
        navigate("/verify-otp");
      } catch (error) {
        console.log("SENDOTP API ERROR............", error);
        toast.error("Could Not Send OTP");
      }
      dispatch(setLoading(false));
      toast.dismiss(toastId);
    };
  }

  

export function login(email, password, navigate) {
    return async (dispatch) => {
        const toastId = toast.loading("Loading...")
        try{
            const response = await apiConnector("POST", LOGIN_API, {
                email,
                password,
            })

            console.log("LOGIN API RESPONSE........", response)

            if (!response.data.success) {
                throw new Error(response.data.message)
            }

            toast.success("Login Successful")
            dispatch(setToken(response.data.token))
            const userImage = response.data?.user?.image
                ? response.data.user.image
                : `http://api.dicebear.com/5.x/initials/svg?seed=${response.data.user.name}`
                dispatch(setUser({ ...response.data.user, image: userImage}))
                
                localStorage.setItem("token", JSON.stringify(response.
                    data.token))
                localStorage.setItem("user", JSON.stringify(response.data.user))
                navigate("/dashboard/my-profile")
                
                
        } catch (error) {
            console.log("LOGIN API ERROR................", error)
            toast.error("Login Failed")
        }
        toast.dismiss(toastId)
    }
}


export function logout(navigate) {
    return (dispatch) => {
        dispatch(setToken(null))
        dispatch(setUser(null))
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        toast.success("Logged Out")
        navigate("/")
    }
}