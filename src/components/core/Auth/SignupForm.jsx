
import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { sendOtp } from "../../../services/operations/authAPI";
import { setSignupData } from "../../../slices/authSlice";
import { ACCOUNT_TYPE } from "../../../utils/constants";
import Tab from "../../common/Tab";
import { Country, State, City } from "country-state-city";
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
  const { name, email, password, confirmPassword, contactNumber, date, city } =
    formData;
  const [loading, setLoading] = useState(false);
  const [countryCode, setCountryCode] = useState("+90"); // Default country code for Turkey
  const changeHandler = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
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
      console.log("formData : ", formData);
      console.log("1 ", formData.email);
      console.log("2 ", formData?.email);
      console.log(
        "inside submitHandler try block .. ",
        "email: ",
        email,
        "accountType : ",
        accountType,
        "contactNumber : ",
        contactNumber
      );
      dispatch(
        sendOtp(formData.email, formData.contactNumber, accountType, navigate)
      );
    } catch (error) {
      toast.error("Failed to send OTP");
    }
  };

  // Format phone number with "05" prefix
  const handlePhoneNumberChange = (event) => {
    let value = event.target.value.replace(/\D/g, ""); // Remove non-digit characters

    // If the field is empty, add "5" as the initial digit
    if (value === "") {
      value = "5";
    }

    // Format the value as "5XX XXX XX XX"
    const formattedValue = value.replace(
      /(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/,
      "$1$2 $3 $4 $5"
    );

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
    <div className="w-full lg:mt-8 h-full border flex bg-[#f5f5f5] justify-center items-center lg:px-0 px-4">
      <div className=" lg:w-[550px] w-full  flex bg-white py-4 px-4 rounded-xl shadow-[0_0_5px_rgba(0,0,0,0.1)]">
        <form
          onSubmit={submitHandler}
          className="flex pb-4 flex-col justify-center items-center mx-auto gap-y-2"
        >
          <div className="w-full flex sm:flex sm:flex-wrap sm:flex-col sm:items-center lg:flex-row  mx-auto justify-evenly">
            <label className=" sm:w-[80%] flex flex-col mx-auto lg:w-[40%]">
              <p className="text-lg font-rubik-medium">
                Name<sup className="text-pink-200">*</sup>
              </p>
              <input
                required
                type="text"
                name="name"
                onChange={changeHandler}
                placeholder="Enter Name"
                value={name}
                className="w-full px-3 py-2.5 border border-purple-700 outline-none focus-visible:ring focus-visible:ring-purple-700  text-lg font-rubik-light  focus:ring-2 focus:ring-purple-700  rounded-lg"
                
              />
            </label>

            <div className="flex flex-col gap-2 lg:w-[50%] w-full sm:flex-wrap sm:flex-col sm:items-center lg:flex-row mx-auto justify-evenly">
            <label
              htmlFor="city"
              className="mb-1 text-lg font-rubik-medium text-black sm:w-[80%]"
            >
              Choose City<sup className="text-pink-200">*</sup>
            </label>
            <select
              placeholder="Choose city"
              className=" w-full px-3 py-2.5 border border-purple-700 focus-visible:ring focus-visible:ring-purple-700 outline-none  text-lg font-rubik-light  rounded-lg"
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

          </div>
          <div className=" w-full flex sm:flex sm:flex-wrap sm:flex-col sm:items-center lg:flex-row gap-5 mx-auto justify-evenly">
            <label className="lg:w-[40%] sm:w-[80%]">
              <p className="mb-1 text-lg font-rubik-medium text-black">
                Email Address<sup className="text-pink-200">*</sup>
              </p>
              <input
                required
                type="email"
                name="email"
                onChange={changeHandler}
                placeholder="Enter Email Address"
                value={email}
                className="w-full px-3 py-2.5 border border-purple-700 outline-none focus-visible:ring focus-visible:ring-purple-700  text-lg font-rubik-light  focus:ring-2 focus:ring-purple-700  rounded-lg"
                
              />
            </label>

            <label className="lg:w-[40%] sm:w-[80%] flex flex-col">
              <p className="mb-1 text-lg font-rubik-medium text-black">
                Contact Number<sup className="text-pink-200">*</sup>
              </p>
              <div className="flex items-evenly">
                <label className="lg:w-full sm:w-[80%] flex flex-col">
                  <div className="flex items-center">
                    {/* Country Code Dropdown */}
                    <select
                      value={countryCode}
                      onChange={(e) => setCountryCode(e.target.value)}
                      className=" w-full lg:w-[50%] mr-2 px-3 py-2.5 border border-purple-700 outline-none focus-visible:ring focus-visible:ring-purple-700  text-lg font-rubik-light  focus:ring-2 focus:ring-purple-700  rounded-lg"
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
                      className="w-full px-3 py-2.5 border border-purple-700 outline-none focus-visible:ring focus-visible:ring-purple-700  text-lg font-rubik-light  focus:ring-2 focus:ring-purple-700  rounded-lg"
                    />
                  </div>
                </label>
              </div>
            </label>
          </div>

          <div className=" w-full  flex sm:flex sm:flex-wrap sm:flex-col sm:items-center lg:flex-row gap-5 mx-auto justify-evenly">
            <label className="relative lg:w-[40%] sm:w-[80%]">
              <p className="mb-1 text-lg font-rubik-medium text-black">
                Password<sup className="text-pink-200">*</sup>
              </p>
              <input
                required
                type={showPassword ? "text" : "password"}
                name="password"
                onChange={changeHandler}
                placeholder="Enter Password"
                value={password}
                className="w-full px-3 py-2.5 border border-purple-700 focus-visible:ring focus-visible:ring-purple-700 outline-none  text-lg font-rubik-light  rounded-lg"
                
              />
              <span
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-[38px] z-10 cursor-pointer"
              >
                {showPassword ? (
                  <AiOutlineEyeInvisible fontSize={24} fill="#fafafa" />
                ) : (
                  <AiOutlineEye fontSize={24} fill="#fafafa" />
                )}
              </span>
            </label>
            <label className="relative lg:w-[40%] sm:w-[80%]">
              <p className="mb-1 text-lg font-rubik-medium text-black">
                Confirm Password<sup className="text-pink-200">*</sup>
              </p>
              <input
                required
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                onChange={changeHandler}
                placeholder="Confirm Password"
                value={confirmPassword}
                className="w-full px-3 py-2.5 border border-purple-700 focus-visible:ring focus-visible:ring-purple-700 outline-none  text-lg font-rubik-light  rounded-lg"
                
              />
              <span
                onClick={() => setShowConfirmPassword((prev) => !prev)}
                className="absolute right-3 top-[38px] z-10 cursor-pointer"
              >
                {showConfirmPassword ? (
                  <AiOutlineEyeInvisible fontSize={24} fill="#fafafa" />
                ) : (
                  <AiOutlineEye fontSize={24} fill="#fafafa" />
                )}
              </span>
            </label>
          </div>

          
          <Tab
            tabData={tabData}
            field={accountType}
            setField={setAccountType}
          />

          <button
            type="submit"
            className="mx-auto  text-center rounded-md bg-purple-700 px-[12px] py-[8px] mt-2 text-white w-[40%]"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
