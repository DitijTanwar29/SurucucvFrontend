import React from "react";
import { MultiSelect } from "react-multi-select-component";
import { useState, useEffect } from "react";
import IconBtn from "../../components/common/IconBtn";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createResume } from "../../services/operations/resumeAPI";
import { useForm } from "react-hook-form";
import { getAllServices } from "../../services/operations/serviceDetailsAPI";
import { Country, State, City }  from 'country-state-city';
import _ from 'lodash';

import Footer from "../Footer/Footer";
const options = [
  { label: "A", value: "A" },
  { label: "B", value: "B" },
  { label: "C", value: "C" },
  { label: "D", value: "D" },
  { label: "E", value: "E" },

];
const CreateCv = () => {
    const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedStateIsoCode , setSelectedStateIsoCode] = useState('');
  useEffect(() => {
    // const turkey = Country.getCountryByShortName('TR');
    const turkeyStates = State.getStatesOfCountry('TR');
    setStates(turkeyStates);
  }, []);

  console.log("selectedCity :",selectedCity)

  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
    setSelectedCity('');
    const selectedStateObject = states.find((state) => state.name === e.target.value);
    console.log("selectedStateObject :",selectedStateObject)
    const isoCode = selectedStateObject?.isoCode
    console.log("IsoCode :", selectedStateObject?.isoCode)
    setSelectedStateIsoCode(isoCode)
    console.log(" selectedStateIsoCode :",selectedStateIsoCode)

    if (selectedStateObject) {
      const stateCities = City.getCitiesOfState('TR',isoCode);
      setCities(stateCities);
    } else {
      setCities([]);
    }
  };

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };
  
  const [selected, setSelected] = useState([]);
  
  const [isChecked, setChecked] = useState(false);

  // Handle checkbox change
  const handleCheckboxChange = () => {
    setChecked(!isChecked); // Toggle the state
  };

// console.log("isCode95Document", isCode95Document)
  const { user } = useSelector((state) => state.profile)
  const { token } = useSelector((state) => state.auth)
  // console.log("city: ", City.getCitiesOfCountry("TR"))
  // console.log("state: ", JSON.stringify(State.getStatesOfCountry("TR")))
  let stateCode="";
  console.log("stateCode here: ",stateCode)
  let specificCity = City.getCitiesOfState("TR", "05")
  console.log("specific City : ",specificCity)
  // console.log("state: ",JSON.stringify(State.getAllStates()))
  // console.log(Country.getAllCountries())

    

  

  // const token = user.token;
  console.log("token : ", token);
  //token ki dikkat h kl check krungaa
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false)
  const [services, setServices] = useState([]);

  const [src1Checked, setSrc1Checked] = useState(false);
  const [src2Checked, setSrc2Checked] = useState(false);
  const [src3Checked, setSrc3Checked] = useState(false);
  const [src4Checked, setSrc4Checked] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue, 
    watch,
  } = useForm();

  const watchedValues = watch();

  const handleSrc1Change = () => {
    setSrc1Checked(!src1Checked);
    if (!src1Checked) {
        setSrc2Checked(true);
    } else {
        setSrc2Checked(false);
    }
};

const handleSrc2Change = () => {
    setSrc2Checked(!src2Checked);
};

const handleSrc3Change = () => {
    setSrc3Checked(!src3Checked);
    if (!src3Checked) {
        setSrc4Checked(true);
    } else {
        setSrc4Checked(false);
    }
};

const handleSrc4Change = () => {
    setSrc4Checked(!src4Checked);
};



  const submitResumeForm = async (data) => {
    console.log("Form Data - ", data);
    // console.log("token - ", token)

    try {
      dispatch(
        createResume(data, token)
      );
    } catch (error) {
      console.log("ERROR MESSAGE - ", error.message);
    }
  };
  return (
      <div className="w-full flex flex-col">
        
      <h1 className="mt-14 text-3xl font-medium text-center text-richblack-5">
        Create CV
      </h1>
      
    <form onSubmit={handleSubmit(submitResumeForm)}>
      {/* CV Information */}
      <div className="my-10 flex flex-col gap-y-6 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-8 px-12">
        <h2 className="text-lg font-semibold text-richblack-5">
          Personal Information
        </h2>
{/* tcNumber, fullName="", age,gsm,country,province,district,
            licenceType="",srcBox,psikoteknik,adrDriverLicence,
            experience,passport,visa,abroadExperience,
            blindSpotTraining,safeDrivingTraining,fuelEconomyTraining */}
        {/* ROW 1 */}
        <div className="flex flex-col gap-5 lg:flex-row">


        
        {/* First name  */}
          <div className="flex flex-col gap-2 lg:w-[25%]">
            <label htmlFor="firstName" className="lable-style">
            First Name
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="Enter first name"
              className="form-style"
              {...register("firstName", { required: true })}
              defaultValue={user?.firstName}
            />
            {errors.firstName && (
              <span className="-mt-1 text-[12px] text-yellow-100">
                Please enter your first name .
              </span>
            )}
          </div>
        {/* last name */}
          <div className="flex flex-col gap-2 lg:w-[25%]">
            <label htmlFor="lastName" className="lable-style">
            Last Name
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Enter last name"
              className="form-style"
              {...register("lastName", { required: true })}
              defaultValue={user?.lastName}
            />
            {errors.lastName && (
              <span className="-mt-1 text-[12px] text-yellow-100">
                Please enter your last name .
              </span>
            )}
          </div>
        {/* Service not needed here */}
          {/* <div className="flex flex-col space-y-2 lg:w-[25%] ">
            <label
              className="lable-style"
              htmlFor="service"
            >
              Service <sup className="text-pink-200">*</sup>
            </label>
            <select
              {...register("service", { required: true })}
              defaultValue=""
              id="service"
              className="form-style w-full"
            >
              <option value="" disabled>
                Choose a Service
              </option>
              {!loading &&
                services?.map((service, indx) => (
                  <option key={indx} value={service?._id}>
                    {service?.serviceName}
                  </option>
                ))}
            </select>
            {errors.service && (
              <span className="ml-2 text-xs tracking-wide text-pink-200">
                Service is required
              </span>
            )}
          </div> */}
          {/* age */}
          <div className="flex flex-col gap-2 lg:w-[25%]">
            <label htmlFor="age" className="lable-style">
              Age
            </label>
            <input
              type="date"
              name="age"
              id="age"
              placeholder="Select your age"
              className="form-style"
              {...register("age", { required: true })}
              // defaultValue={user?.adminDetails?.lastName}
            />
            {errors.age && (
              <span className="-mt-1 text-[12px] text-yellow-100">
                Please select your age.
              </span>
            )}
          </div>
          {/* skills  */}
          {/* <div className="flex flex-col gap-2 lg:w-[25%]">
            <label htmlFor="skills" className="lable-style">
              Required Skills
            </label>
            <pre>{JSON.stringify(selected)}</pre>
            <MultiSelect
              options={options}
              value={selected}
              className="text-black form-style text-bold"
              onChange={setSelected}
              labelledBy="Select"
              name="skills"
                    {...register("skills", { required: true })}
            />
            {errors.skills && (
              <span className="-mt-1 text-[12px] text-yellow-100">
                Please enter required skills.
              </span>
            )}
          </div> */}
        </div>

        {/* ROW 2 */}
        <div className="flex flex-col gap-5 lg:flex-row">
          {/* T C NUMBER - 11 DIGIT */}
          <div className="flex flex-col gap-2 lg:w-[25%]">
            <label htmlFor="tcNumber" className="lable-style">
            TC Number
            </label>
            <input
              type="number"
              name="tcNumber"
              id="tcNumber"
              placeholder="Enter T C Number "
              className="form-style"
              {...register("tcNumber", { required: true , 
                    maxLength: { value: 11, message: "Invalid T C  Number" },
                    minLength: { value: 11, message: "Invalid T C Number" },
                    })}
              // defaultValue={user?.adminDetails?.post}
            />
            {errors.tcNumber && (
              <span className="-mt-1 text-[12px] text-yellow-100">
                Please select your  T C Number.
              </span>
            )}
          </div>

          {/* G S M  NUMBER - 10 DIGIT */}
          <div className="flex flex-col gap-2 lg:w-[25%]">
            <label htmlFor="gsm" className="lable-style">
            G S M Number
            </label>
            <input
              type="number"
              name="gsm"
              id="gsm"
              placeholder="Enter G S M Number "
              className="form-style"
              {...register("gsm", { required: true , 
                    maxLength: { value: 10, message: "Invalid G S M  Number" },
                    minLength: { value: 10, message: "Invalid G S M Number" },
                    })}
              // defaultValue={user?.adminDetails?.post}
            />
            {errors.gsm && (
              <span className="-mt-1 text-[12px] text-yellow-100">
                Please select your  G S M Number.
              </span>
            )}
          </div>
          {/* State */}
          <div className="flex flex-col gap-2 lg:w-[25%]">
            <label htmlFor="state" className="lable-style">
            State
            </label>
  
          <select 
      
              type="text"
              name="state"
              id="state"
              placeholder="Choose state "
              className="form-style"
              {...register("state", { required: true })}
              value={selectedState} onChange={handleStateChange}>

        <option value="" disabled>
            Choose a state
          </option>
        {states.map((state) => (
          <option key={state.id} value={state.name}>
            {state.name}
          </option>
        ))}
      </select>

      {errors.state && (
              <span className="-mt-1 text-[12px] text-yellow-100">
                Please select your residential state.
              </span>
      )}

        </div>

        {/* City */}
        <div className="flex flex-col gap-2">
          <label htmlFor="city" className="lable-style">City:</label>
          <select
          className="form-style"
              {...register("city", { required: true })}
               value={selectedCity} onChange={handleCityChange}>
            <option value="">Select City</option>
            {cities.map((city) => (
              <option key={city.id} value={city.name}>
                {city.name}
              </option>
            ))}
          </select>
          {errors.city && (
              <span className="-mt-1 text-[12px] text-yellow-100">
                Please select your residential city.
              </span>
            )}
        </div>
      
        </div>



      </div>

      <div className="my-10 flex flex-col gap-y-6 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-8 px-12">
        <h2 className="text-lg font-semibold text-richblack-5">
            Main Certificates
        </h2>

        {/* ROW 1 */}
        <div className="flex flex-col gap-5 lg:flex-row">
        {/* Driving License Type */}
            <div className="flex flex-col gap-2 lg:w-[25%]">
                <label htmlFor="licenseType" className="lable-style">
                  License Type
                </label>
                <select
                  type="text"
                  name="licenseType"
                  id="licenseType"
                  placeholder="Choose license type "
                  className="form-style"
                  {...register("licenseType", { required: true })}
                  // defaultValue={user?.adminDetails?.post}

                >
                  <option value="" disabled >Choose License Type</option>
                  <option value="Type 1" >Type 1</option>
                  <option value="Type 2" >Type 2</option>
                  <option value="Type 3" >Type 3</option>

                </select>
                {errors.licenseType && (
                  <span className="-mt-1 text-[12px] text-yellow-100">
                    Please select your license type.
                  </span>
                )}
            </div>
        {/* SRC CERTIFICATES INFO */}
            <div className="flex flex-col space-y-2 lg:w-[33%] text-white">
              <label
                className="lable-style"
              >
                SRCBox <sup className="text-pink-200">*</sup>
              </label>

              
              <div className="flex-col gap-4">
                <label htmlFor="isSrc1">
                    SRC 1
                    <input
                        type="checkbox"
                        name="isSrc1"
                        value="SRC 1"
                        onChange={handleSrc1Change}
                        checked={src1Checked}
                        // onChange={(e) => setValue('isBlindSpotTraining', e.target.checked)}
                        // checked={watchedValues.isBlindSpotTraining}
                    />
                </label>

                <label htmlFor="isSrc2">
                    SRC 2
                    <input
                        type="checkbox"
                        name="isSrc2"
                        value="SRC 2"
                        onChange={handleSrc2Change}
                        checked={src2Checked}
                    />
                </label>
              </div>

              <div className="flex-col gap-4">
                  <label htmlFor="isSrc3">
                      SRC 3
                      <input
                          type="checkbox"
                          name="isSrc3"
                          value="SRC 3"
                          onChange={handleSrc3Change}
                          checked={src3Checked}
                      />
                  </label>
              
              
                  <label htmlFor="isSrc4">
                      SRC 4
                      <input
                          type="checkbox"
                          name="isSrc4"
                          value="SRC 4"
                          onChange={handleSrc4Change}
                          checked={src4Checked}
                      />
                  </label>
              </div>

            </div>

        {/* Psychotechnical date info */}
            <div className="flex flex-col gap-2 lg:w-[33%]">
              <label htmlFor="psikoteknik" className="lable-style">
              Psychotechnical Certificate 
              </label>
              <input
                type="date"
                name="psikoteknik"
                id="psikoteknik"
                className="form-style"
                {...register("psikoteknik", { required: true })}
                // defaultValue={user?.adminDetails?.lastName}
              />
              {errors.psikoteknik && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                  Please select your Psychotechnical date.
                </span>
              )}
            </div>
        {/* ADR DRIVING LICENSE DATE  */}
            <div className="flex flex-col gap-2 lg:w-[33%]">
              <label htmlFor="adrDriverLicence" className="lable-style">
                ADR Driver Licence
              </label>
              <input
                type="date"
                name="adrDriverLicence"
                id="adrDriverLicence"
                className="form-style"
                {...register("adrDriverLicence", { required: true })}
                // defaultValue={user?.adminDetails?.lastName}
              />
              {errors.adrDriverLicence && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                  Please select ADR Driver Licence date.
                </span>
              )}
            </div>
        </div>

      </div>

      <div className="my-10 flex flex-col gap-y-6 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-8 px-12">
        <h2 className="text-lg font-semibold text-richblack-5">
          Required Abilities
        </h2>
        
        {/* Row 1 */}
        <div className="flex flex-col gap-5 lg:flex-row">
        {/* passport,visa,abroadExperience, */}
            <div className="flex flex-col gap-2 lg:w-[25%]">
                <label htmlFor="passport" className="lable-style">
                  Passport
                </label>
                <select
                  type="text"
                  name="passport"
                  id="passport"
                  placeholder="Choose passport type "
                  className="form-style"
                  {...register("passport", { required: true })}
                  // defaultValue={user?.adminDetails?.post}

                >
                  <option value="" disabled >Choose Passport Type</option>
                  <option value="Type 1" >Type 1</option>
                  <option value="Type 2" >Type 2</option>
                  <option value="Type 3" >Type 3</option>

                </select>
                {errors.passport && (
                  <span className="-mt-1 text-[12px] text-yellow-100">
                    Please select your passport type.
                  </span>
                )}
            </div>
{/* Date OF RECIEPT */}
            <div className="flex flex-col gap-2 lg:w-[25%]">
            <label htmlFor="dateOfReceipt" className="lable-style">
            Date Of Receipt  
            </label>
            <input
              type="date"
              name="dateOfReceipt"
              id="dateOfReceipt"
              placeholder="Select Date Of Receipt"
              className="form-style"
              {...register("dateOfReceipt", { required: true })}
              // defaultValue={user?.adminDetails?.post}

            />            
            {errors.dateOfReceipt && (
              <span className="-mt-1 text-[12px] text-yellow-100">
                Please select your Date Of Receipt.
              </span>
            )}
          </div>
{/* DURATION */}
          <div className="flex flex-col gap-2 lg:w-[25%]">
            <label htmlFor="duration" className="lable-style">
            Duration
            </label>
            <input
              type="date"
              name="duration"
              id="duration"
              placeholder="Select duration"
              className="form-style"
              {...register("duration", { required: true })}
              // defaultValue={user?.adminDetails?.post}

            />            
            {errors.duration && (
              <span className="-mt-1 text-[12px] text-yellow-100">
                Please select your duration.
              </span>
            )}
          </div>
{/* Visa */}
            <div className="flex flex-col gap-2 lg:w-[25%]">
                <label htmlFor="visa" className="lable-style">
                  Visa
                </label>
                <select
                  type="text"
                  name="visa"
                  id="visa"
                  placeholder="Choose visa type "
                  className="form-style"
                  {...register("visa", { required: true })}
                  // defaultValue={user?.adminDetails?.post}

                >
                  <option value="" disabled >Choose Visa Type</option>
                  <option value="Type 1" >Type 1</option>
                  <option value="Type 2" >Type 2</option>
                  <option value="Type 3" >Type 3</option>

                </select>
                {errors.visa && (
                  <span className="-mt-1 text-[12px] text-yellow-100">
                    Please select your visa type.
                  </span>
                )}
            </div>
{/* Abroad Experience */}
            <div className="flex flex-col gap-2 lg:w-[25%]">
                <label htmlFor="abroadExperience" className="lable-style">
                  Abroad Experience
                </label>
                <input
                  type="number"
                  name="abroadExperience"
                  id="abroadExperience"
                  placeholder="Select Abroad Experience "
                  className="form-style"
                  {...register("abroadExperience", { required: true })}
                  // defaultValue={user?.adminDetails?.post}

                >
                </input>
                {errors.abroadExperience && (
                  <span className="-mt-1 text-[12px] text-yellow-100">
                    Please select your Abroad Experience.
                  </span>
                )}
            </div>
{/* Code 95 Document */}
            <div className="flex flex-col gap-2 lg:w-[25%] text-white  items-center">
                <label>
                    Code 95 Document
                </label>
                    <input
                        type="checkbox"
                        name="isCode95Document"
                        onChange={(e) => setValue('isCode95Document', e.target.checked)}
                        checked={watchedValues.isCode95Document}
                    />
            </div>


        </div>

        {/* isBlindSpotTraining,isSafeDrivingTraining,isFuelEconomyTraining */}
        {/* ROW 2 */}
        <div className="flex flex-col gap-5 lg:flex-row text-white">
            <div className="flex flex-col gap-2 lg:w-[25%]  items-center">
                <label>
                    Is Blind Spot Training
                </label>
                    <input
                        type="checkbox"
                        name="isBlindSpotTraining"
                        onChange={(e) => setValue('isBlindSpotTraining', e.target.checked)}
                        checked={watchedValues.isBlindSpotTraining}
                    />
            </div>

            <div className="flex flex-col gap-2 lg:w-[25%] items-center">
                <label>
                    Is Safe Driving Training
                </label>
                    <input
                        type="checkbox"
                        name="isSafeDrivingTraining"
                        onChange={(e) => setValue('isSafeDrivingTraining', e.target.checked)}
                        checked={watchedValues.isSafeDrivingTraining}
                    />
            </div>

            <div className="flex flex-col gap-2 lg:w-[25%] items-center">
                <label>
                    Is Fuel Economy Training
                </label>
                    <input
                        type="checkbox"
                        name="isFuelEconomyTraining"
                        onChange={(e) => setValue('isFuelEconomyTraining', e.target.checked)}
                        checked={watchedValues.isFuelEconomyTraining}
                    />
            </div>
        </div>
      </div>

      <div className="my-10 flex flex-col gap-y-6 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-8 px-12">
        <h2 className="text-lg font-semibold text-richblack-5">
          Experience
        </h2>
{/* - experience period for dormitory
- European experience period
- Russia experience period
- Turkic republics experience period
- south experience time */}
        <div className="flex flex-col gap-5 lg:flex-row text-white">
          <div className="flex flex-col gap-2 lg:w-[25%]">
              <label htmlFor="europeanExperiencePeriod" className="lable-style">
               European Experience Period
              </label>
              <input
                type="number"
                name="europeanExperiencePeriod"
                id="europeanExperiencePeriod"
                placeholder="Choose European Experience Period"
                className="form-style"
                {...register("europeanExperiencePeriod", { required: true })}
                // defaultValue={user?.adminDetails?.post}
              />
              {errors.europeanExperiencePeriod && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                  Please select your european experience period.
                </span>
              )}
          </div>

          <div className="flex flex-col gap-2 lg:w-[25%]">
            <label htmlFor="russiaExperiencePeriod" className="lable-style">
            Russia Experience Period
            </label>
            <input
              type="number"
              name="russiaExperiencePeriod"
              id="russiaExperiencePeriod"
              placeholder="Choose Russia Experience Period"
              className="form-style"
              {...register("russiaExperiencePeriod", { required: true })}
              // defaultValue={user?.adminDetails?.post}
            />
            {errors.russiaExperiencePeriod && (
              <span className="-mt-1 text-[12px] text-yellow-100">
                Please select your russia experience period.
              </span>
            )}
          </div>

          <div className="flex flex-col gap-2 lg:w-[25%]">
            <label htmlFor="turkicRepublicsExperiencePeriod" className="lable-style">
            Turkic Republics Experience Period
            </label>
            <input
              type="number"
              name="turkicRepublicsExperiencePeriod"
              id="turkicRepublicsExperiencePeriod"
              placeholder="Choose Turkic Republics Experience Period"
              className="form-style"
              {...register("turkicRepublicsExperiencePeriod", { required: true })}
              // defaultValue={user?.adminDetails?.post}
            />
            {errors.turkicRepublicsExperiencePeriod && (
              <span className="-mt-1 text-[12px] text-yellow-100">
                Please select your turkic republics experience period.
              </span>
            )}
          </div>

          <div className="flex flex-col gap-2 lg:w-[25%]">
            <label htmlFor="southExperienceTime" className="lable-style">
            South Experience Time
            </label>
            <input
              type="number"
              name="southExperienceTime"
              id="southExperienceTime"
              placeholder="Choose South Experience Time"
              className="form-style"
              {...register("southExperienceTime", { required: true })}
              // defaultValue={user?.adminDetails?.post}
            />
            {errors.southExperienceTime && (
              <span className="-mt-1 text-[12px] text-yellow-100">
                Please select your south experience time.
              </span>
            )}
          </div>
        </div>


        </div>

      <div className="flex justify-center gap-2">
        <button
          onClick={() => {
            navigate("/dashboard/my-profile");
          }}
          className="cursor-pointer rounded-md bg-richblack-700 py-2 px-5 font-semibold text-richblack-50"
        >
          Cancel
        </button>
        <IconBtn type="submit" text="Save" />
      </div>
    </form>



          <section>
            <div className="pt-5">
              <Footer />
            </div>
          </section>
       
      </div>
   
  );
};

export default CreateCv;
