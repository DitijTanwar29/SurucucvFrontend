import React from "react";
import { useState } from "react";
import { VscChevronUp, VscMenu } from "react-icons/vsc";
import { Link, matchPath, useLocation } from "react-router-dom";
// import { Button } from "react-bootstrap";
import { useSelector } from "react-redux"
import logo from "../../Assests/Icons/logo.png"
import NavbarLinks  from "../../data/navbar-links"
import ProfileDropDown from "../core/Auth/ProfileDropDown"
import { AiOutlineMenu } from "react-icons/ai"
import { useMediaQuery } from 'react-responsive'

export default function NavBar()  {

  const {token} = useSelector( (state) => state.auth );
  // const {user} = useSelector( (state) => state.profile);

  const location = useLocation();

  const matchRoute = (route) => {
    return matchPath({path:route}, location.pathname)
  }
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  


  return (
    <>
    <div className="sm:relative lg:fixed lg:top-0 w-full z-50">

<button
          className={`lg:hidden sm:flex fixed top-5  right-8 z-50  mt-[1px]
           items-center justify-center w-10 h-10 bg-orange-400 rounded-full shadow-md shadow-richblack-600
          ${isSidebarOpen ? "sm:translate-y-72 " : "sm:translate-y-0"} transition-transform duration-200 ease-in-out`}
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          {isSidebarOpen ? (
            <VscChevronUp className="text-white font-semibold  " />
          ) : (
            <VscMenu className="text-white font-semibold" />
          )}
        </button>

    <div 
    className={`lg:h-20 md:h-20 sm:h-full items-center lg:sticky lg:top-0 z-50 justify-between lg:border-b-[1px] bg-orange-400 border-b-black ${
      location.pathname !== "/" ? " text-orange-400" : ""
    }
    
    transform ${
            isSidebarOpen ? "sm:translate-y-0 lg:translate-y-0" : "sm:-translate-y-full lg:translate-y-0"
          }  ease-in-out
     transition-all duration-200 `}
    
    >

      <div className='flex sm:flex-col lg:flex-row lg:justify-between sm:gap-y-2 lg:items-center lg:w-11/12 max-w-maxContent lg:py-4 sm:p-1 mx-auto '>
        {/* logo */}
            <Link to="/">
            <img src={logo} className="sm:w-28 sm:h-8 sm:mx-auto" alt="logo" width={160} height={42} loading='lazy' />
            </Link>
            {/* Nav Links */}
            {/* <div className="sm:flex sm:flex-wrap sm:gap-x-1 "> */}

            
            <nav className="">
                <ul className='flex sm:flex-col lg:flex-row md:flex-row lg:gap-x-6 sm:gap-x-2 text-richblack-25 mx-auto my-auto'>
                 { 
                    NavbarLinks.map( (link, index) => (
                      <li key={index}>
                        {
                          
                            <Link to={link?.path}>
                            {/* sm:text-[12px] md:text-[20px] lg:text-[1rem] */}
                              <p className={`${matchRoute(link?.path) ? "text-white" : "text-black" } text-center 
                              `}>
                                {link.title}
                              </p>

                            </Link>
                        }
                      </li>

                     ) )
                  }

                  {/* {
                    isMobile && <button className="mr-4 md:hidden">
                                  <AiOutlineMenu fontSize={24} fill="#AFB2BF" />
                                </button>
                  } */}
                    
                </ul>
            </nav>

            {/* Login - SignUp - LogOut - Dashboard */}
            <div className='sm:items-center sm:justify-center gap-x-4 flex '>
              
              {
                token === null && (
                  <Link to='/login'>

                    <button className='lg:w-full lg:h-full  md:w-full md:h-full border border-pink-400 bg-white px-[12px] py-[8px]  
                      text-orange-600  rounded-md text-[1rem] md:text-[1rem] lg:translate-y-0 md:translate-y-0
                        '>
                        Log in
                    </button>
                  
                  </Link>
                )
              }
              {
                token === null && (
                  <Link to='/signup'>

                    <button className='lg:w-full lg:h-full md:w-full md:h-full  border border-pink-400 bg-white px-[12px] py-[8px] md:px-[12px] md:py-[8px]
                     text-orange-600  rounded-md text-[1rem] md:text-[1rem] lg:translate-y-0 md:translate-y-0
                     '>
                      Sign Up
                    </button>
                  </Link>
                )
              }
              {
                token !== null && <ProfileDropDown/>
              }

            </div> 
            {/* </div> */}
      </div>
    </div>

    </div>
    </>
  );
}