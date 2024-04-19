import React from "react";
import Car1 from "../Pages/Car1";
import Exam2 from "../Pages/Exam2";
import Footer from "../Pages/Footer/Footer";
import HeroFindJob  from "../Pages/Find Job/HeroFindJob";
 import Job from "../Pages/Find Job/Position_find_Job";
import FindJobs from "../Pages/Find Job/FindJobs"
import "../Pages/Body.css"
import FilterButton from "../Pages/Find Job/Filter"

const FindJob = () => {
  return (
    <>
      
      <div><HeroFindJob/></div>
      <div><FilterButton/></div>
     <div><Job/></div>
      <div>
        <Exam2 />
      </div>
      <FindJobs/>
      <div>
        {/* <Car1 /> */}
      </div>
      <div className="p-10 m-10">
        <Footer />
      </div>
    </>
  );
};

export default FindJob;
