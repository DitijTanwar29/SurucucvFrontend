import React from "react";
// import { useState } from "react";
// import Header from "../MainPage/Header";
// import Sidebar from "../MainPage/SideBar";
import { RiEditBoxLine } from "react-icons/ri"

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
      {/* <div className="grid-container"> */}
        {/* <Header OpenSidebar={OpenSidebar} />
        <Sidebar
          openSidebarToggle={openSidebarToggle}
          OpenSidebar={OpenSidebar} /> */}
        {/* <div className="section-myProfile"> */}
          {/* <div className="main-myProfile"> */}
             {/* <ImageUpload/> */}
             {/* <button className="btn btn-success m-3">Upgrade Plan</button> */}
            {/* <div className=" main" > <ProfileSettingsForm/></div> */}
            {/* <div className=" main" ><SocialForm/></div>  */}
            {/* <div><FooterDash/></div> */}
          {/* </div> */}
          
        {/* </div>  */}
 
      {/* </div> */}
     
      <h1 className="mb-14 text-3xl font-medium text-richblack-5">
        My Profile
      </h1>
      
      
      {/* Image Section */}
      <div className="  sm:flex-col  lg:flex items-center justify-between rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-8 px-12">
        <div className="sm:flex-col lg:flex  items-center gap-x-4">
          <img
            src={user?.image}
            alt={`profile-${user?.firstName}`}
            className="aspect-square w-[78px] rounded-full object-cover"
          />
          <div className="space-y-1">
            <p className="text-lg font-semibold text-richblack-5">
              {user?.name}
            </p>
            <p className="text-sm text-richblack-300">{user?.email}</p>
          </div>
        </div>
        <IconBtn 
          text="Edit"
          onclick={() => {
            navigate("/dashboard/settings")
          }}
        >
          <RiEditBoxLine />
        </IconBtn>
      </div>

      {/* Company Details */}
      <div className="my-10 flex flex-col gap-y-10 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-8 px-12">

        <div className="flex w-full items-center justify-between">
            <p className="text-lg font-semibold text-richblack-5">
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
        <div className="flex max-w-[500px] justify-between">
            <div className="flex flex-col gap-y-5">

              <div>
                <p className="mb-2 text-sm text-richblack-600">Name</p>
                <p className="text-sm font-medium text-richblack-5">
                  {user?.candidateDetails?.name  ?? "Add Your Name"}
                </p>
              </div>

              
              <div>
                <p className="mb-2 text-sm text-richblack-600">Date Of Birth</p>
                <p className="text-sm font-medium text-richblack-5">
                  {user?.candidateDetails?.dateOfBirth ?? "Add Date Of Birth"}
                  
                </p>
              </div>
            </div>


            <div className="flex flex-col gap-y-5">
              <div>
                <p className="mb-2 text-sm text-richblack-600">Email</p>
                <p className="text-sm font-medium text-richblack-5">
                  {user?.candidateDetails?.email  ?? "Add Your Email"}
                </p>
              </div>

              <div>
                <p className="mb-2 text-sm text-richblack-600">Contact Number</p>
                <p className="text-sm font-medium text-richblack-5">
                  {user?.candidateDetails?.contactNumber  ?? "Add Contact Number"}
                </p>
              </div>

            </div>
        

            <div className="flex flex-col gap-y-5">
              <div>
                <p className="mb-2 text-sm text-richblack-600">About</p>
                <p className="text-sm font-medium text-richblack-5">
                  {user?.candidateDetails?.about ?? "Tell About Yourself"}
                </p>
              </div>
            </div>
        
        </div>

      </div>

      {/* Personal Details */}
      <div className="my-10 flex flex-col gap-y-10 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-8 px-12">

        <div className="flex w-full items-center justify-between">
            <p className="text-lg font-semibold text-richblack-5">
              Personal Details
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
{/* skill="", preferedJobLocation, 
            degree, province, district */}
        <div className="flex max-w-[500px] justify-between">
            <div className="flex flex-col gap-y-5">

              <div>
                <p className="mb-2 text-sm text-richblack-600">Skill</p>
                <p className="text-sm font-medium text-richblack-5">
                  {user?.candidateDetails?.skill  ?? "Add Skill"}
                </p>
              </div>

              

              <div>
                <p className="mb-2 text-sm text-richblack-600">Province</p>
                <p className="text-sm font-medium text-richblack-5">
                  {user?.candidateDetails?.province ?? "Add Province "}
                </p>
              </div>
            </div>


            <div className="flex flex-col gap-y-5">
              <div>
                <p className="mb-2 text-sm text-richblack-600">Prefered Job Location</p>
                <p className="text-sm font-medium text-richblack-5">
                  {user?.candidateDetails?.preferedJobLocation ?? "Add Prefered Job Location"}
                </p>
              </div>

              <div>
                <p className="mb-2 text-sm text-richblack-600">District</p>
                <p className="text-sm font-medium text-richblack-5">
                  {user?.candidateDetails?.district  ?? "Add District"}
                </p>
              </div>

            </div>
        

            <div className="flex flex-col gap-y-5">
              <div>
                <p className="mb-2 text-sm text-richblack-600">Degree</p>
                <p className="text-sm font-medium text-richblack-5">
                  {user?.candidateDetails?.degree ?? "Add Degree"}
                </p>
              </div>
            </div>
        
        </div>

      </div>



    </>
  );
};

export default CandidateProfile;
