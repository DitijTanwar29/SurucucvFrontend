import React from "react";
// import { useState } from "react";
// import Header from "../MainPage/Header";
// import Sidebar from "../MainPage/SideBar";
import { RiEditBoxLine } from "react-icons/ri"
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux"
// import ImageUpload from "./ImageUpload";
// import ProfileSettingsForm from "./ProfileSettings";
// import SocialForm from "./SocialNetwork";
// import FooterDash from "../../Footer/FooterDash";
import { useNavigate } from "react-router-dom"
import IconBtn from "../../../common/IconBtn"
// import { formattedDate } from "../../../../utils/dataFormatter"
import MyCv from "../MyCv/MyCv"

const CandidateProfile = () => {
  const { t } = useTranslation()
  // const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const { user } = useSelector((state) => state.profile)
  console.log("user from candidate profile slice", user);
  const navigate = useNavigate()
  console.log("user",user);
  console.log("value of candidate first name: ", user?.name)

  // const OpenSidebar = () => {
  //   setOpenSidebarToggle(!openSidebarToggle);
  // };
  
  return (
    <>     
      <h1 className="mb-14 lg:mt-14 text-3xl font-medium text-black text-center">
        {t("myProfile")}
      </h1>
      
      
      {/* Image Section */}
      <div className="  sm:flex-col flex lg:flex-row sm:gap-y-4 items-center justify-between rounded-md border-[1px] border-purple-700 bg-richblack-25 p-8 px-12">
        <div className="sm:flex-col flex lg:flex-row  items-center gap-x-4 ">
          <img
            src={user?.image}
            alt={`profile-${user?.firstName}`}
            className="aspect-square w-[78px] rounded-full object-cover"
          />
          <div className="space-y-1">
            <p className="text-lg font-semibold text-black sm:text-center lg:text-left">
              {user?.name}
            </p>
            <p className="text-sm text-black">{user?.email}</p>
          </div>
        </div>
        <IconBtn 
          text={t("edit")}
          onclick={() => {
            navigate("/dashboard/settings")
          }}
        >
          <RiEditBoxLine />
        </IconBtn>
      </div>

      {/* Company Details */}
      <div className="my-10 flex flex-col gap-y-10 rounded-md border-[1px] border-purple-700 bg-richblack-25 p-8 px-12">

        <div className="flex w-full items-center justify-between">
            <p className="text-lg font-semibold text-richblack-900">
              Candidate Details
            </p>
            <IconBtn
              text="Edit"
              onclick={() => {
                navigate("/dashboard/settings")
              }}
            >
              <RiEditBoxLine />
            </IconBtn>
        </div>
        {/* name, email, contactNumber, dateOfBirth="", about="",  */}
        <div className="flex sm:flex-col lg:flex-row  justify-between">
            <div className="flex flex-col gap-y-5">

              <div>
                <p className="mb-2 text-md text-richblack-700 font-semibold">Name</p>
                <p className="text-sm  text-purple-700">
                  {user?.candidateDetails?.name  ?? "Add Your Name"}
                </p>
              </div>

              
              <div>
                <p className="mb-2 text-md text-richblack-700 font-semibold">Date Of Birth</p>
                <p className="text-sm text-purple-700">
                  {user?.candidateDetails?.dateOfBirth ?? "Add Date Of Birth"}
                  
                </p>
              </div>
            </div>


            <div className="flex flex-col gap-y-5">
              <div>
                <p className="mb-2 text-md text-richblack-700 font-semibold">Email</p>
                <p className="text-sm  text-purple-700">
                  {user?.candidateDetails?.email  ?? "Add Your Email"}
                </p>
              </div>

              <div>
                <p className="mb-2 text-md text-richblack-700 font-semibold">Contact Number</p>
                <p className="text-sm text-purple-700">
                  {user?.candidateDetails?.contactNumber  ?? "Add Contact Number"}
                </p>
              </div>

            </div>
        

            <div className="flex flex-col gap-y-5">
              <div>
                <p className="mb-2 text-md text-richblack-700 font-semibold">About</p>
                <p className="text-sm text-purple-700">
                  {user?.candidateDetails?.about ?? "Tell About Yourself"}
                </p>
              </div>
            </div>
        
        </div>

      </div>

      {/* Personal Details */}
      <div className="my-10 flex sm:flex-col gap-y-10 rounded-md border-[1px] border-purple-700 bg-richblack-25 p-8 px-12">

        <div className="flex w-full items-center justify-between">
            <p className="text-lg font-semibold text-richblack-900">
              Personal Details
            </p>
            <IconBtn
              text={t("edit")}
              onclick={() => {
                navigate("/dashboard/settings")
              }}
            >
              <RiEditBoxLine />
            </IconBtn>
        </div>
{/* skill="", preferedJobLocation, 
            degree, province, district */}
        <div className="w-full flex sm:flex-col lg:flex-row   justify-between">
            <div className="flex flex-col gap-y-5">             
              <div>
                <p className="mb-2 text-md text-richblack-700 font-semibold">Province</p>
                <p className="text-sm text-purple-700">
                  {user?.candidateDetails?.province ?? "Add Province "}
                </p>
              </div>

              
              
              <div>
                <p className="mb-2 text-md text-richblack-700 font-semibold">District</p>
                <p className="text-sm text-purple-700">
                  {user?.candidateDetails?.district  ?? "Add District"}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-y-5">
              <div>
                <p className="mb-2 text-md text-richblack-700 font-semibold">Degree</p>
                <p className="text-sm text-purple-700">
                  {user?.candidateDetails?.degree ?? "Add Degree"}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-y-5">
              <div>
                <p className="mb-2 text-md text-richblack-700 font-semibold">Prefered Job Location</p>
                <p className="text-sm text-purple-700">
                  {user?.candidateDetails?.preferedJobLocation ?? "Add Prefered Job Location"}
                </p>
              </div>

            </div>

        
            
        
        </div>

      </div>



    </>
  );
};

export default CandidateProfile;
