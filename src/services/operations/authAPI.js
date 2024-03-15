import { toast } from "react-hot-toast"
import { setLoading, setToken } from "../../slices/authSlice"
import { apiConnector } from "../apiConnector"
import { endpoints } from "../apis"
import { setUser } from "../../slices/profileSlice"
import {ACCOUNT_TYPE} from "../../utils/constants"

const { 
    SIGNUP_API,
    LOGIN_API,
    // SENDOTP_API,
    // RESETPASSTOKEN_API,
    // RESETPASSWORD_API,
} = endpoints

//rest apis are not mentioned here 
//add them acc to use

export function signup(

    email,
    navigate,
    accountType,
    name,
    password,
    confirmPassword,
    date,
    city,
    contactNumber,
    // otp,
) {
    return async (dispatch) => {
        console.log("email inside SIGNUP authAPI : ",email);
        const toastId = toast.loading("Loading...")
        dispatch(setLoading(true))
        try{
            const response = await apiConnector("POST", SIGNUP_API, {
                accountType,
                name,
                email,
                password,
                confirmPassword,
                date,
                city,
                contactNumber,
                // otp,
            })

            console.log("SIGNUP API RESPONSE.............", response)
            console.log("resopnse data",response.data);
            if (!response.data.success) {
                throw new Error(response.data.message)
            }
            toast.success("Signup Successful")
            navigate("/login")
        } catch (error) {
            console.log("error with message - ",error.message)
            console.log("SIGNUP API ERROR............",error)
            toast.error("Signup Failed")
            navigate("/signup")
        }
        dispatch(setLoading(false))
        toast.dismiss(toastId)
    }
}


export function login(email, password, navigate) {
    return async (dispatch) => {
        const toastId = toast.loading("Loading...")
        dispatch(setLoading(true))
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
        dispatch(setLoading(false))
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