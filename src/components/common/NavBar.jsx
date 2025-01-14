// import React from "react";
// import { useState } from "react";
// import { VscClose , VscMenu } from "react-icons/vsc";
// import { Link, matchPath, useLocation } from "react-router-dom";
// // import { Button } from "react-bootstrap";
// import { useSelector } from "react-redux"
// import logo from "../../Assests/Icons/logo.png"
// import NavbarLinks  from "../../data/navbar-links"
// import ProfileDropDown from "../core/Auth/ProfileDropDown"

// export default function NavBar()  {

//   const {token} = useSelector( (state) => state.auth );
//   // const {user} = useSelector( (state) => state.profile);

//   const location = useLocation();

//   const matchRoute = (route) => {
//     return matchPath({path:route}, location.pathname)
//   }
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);



//   return (
//     <>
//     <div className="fixed lg:fixed lg:top-0 w-full z-30 sm:h-screen sm:w-screen  ">

//     <button
//           className={` sm:flex fixed top-5  right-8 z-30  mt-[1px]
//            items-center justify-center w-10 h-10 bg-orange-400 rounded-full shadow-md shadow-richblack-600
//           ${isSidebarOpen ? "sm:translate-y-10 z-40 " : "sm:translate-y-0 z-40"} z-30 transition-transform duration-300 ease-in-out`}
//           onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//         >
//           {isSidebarOpen ? (
//             <VscClose  className="text-white font-semibold  " />
//           ) : (
//             <VscMenu className="text-white font-semibold z-40" />
//           )}
//         </button>
// {/* bg-black/75 last nav bg used  */}
//     <div 
//     className={`lg:h-20 md:h-20 sm:h-full flex items-center lg:sticky lg:top-0 z-30 justify-between 
//     lg:border-b-[1px]  lg:bg-pure-greys-25/80 border-b-pure-greys-100 sm:bg-white/100

//       ${
//              isSidebarOpen ? "sm:translate-y-0 sm:h-full flex" : "sm:-translate-y-full sm:h-0 "
//            }  
//      transition-transform duration-300 ease-in-out `}

//     >

//       <div className='flex sm:flex-col lg:flex-row lg:justify-between sm:gap-y-2 sm:sticky lg:top-0 z-30 lg:items-center lg:w-11/12 max-w-maxContent lg:py-4 sm:p-1 mx-auto '>
//         {/* logo */}
//             <Link to="/">
//             <img src={logo} className="sm:w-28 sm:h-8 sm:mx-auto" alt="logo" width={160} height={42} loading='lazy' />
//             </Link>

//             {/* Nav Links */}
//             {/* <div className="sm:flex sm:flex-wrap sm:gap-x-1 "> */}


//             <nav className="">
//                 <ul className='flex sm:flex-col lg:flex-row md:flex-row lg:gap-x-6 sm:gap-x-2  text-black mx-auto my-auto'>
//                  { 
//                     NavbarLinks.map( (link, index) => (
//                       <li key={index}>
//                         {

//                             <Link to={link?.path}>
//                             {/* sm:text-[12px] md:text-[20px] lg:text-[1rem] */}
//                               <p className={`${matchRoute(link?.path) ? "text-orange-400" : "text-black" } text-center 
//                               `}>
//                                 {link.title}
//                               </p>

//                             </Link>
//                         }
//                       </li>

//                      ) )
//                   }

//                   {/* {
//                     isMobile && <button className="mr-4 md:hidden">
//                                   <AiOutlineMenu fontSize={24} fill="#AFB2BF" />
//                                 </button>
//                   } */}

//                 </ul>
//             </nav>

//             {/* Login - SignUp - LogOut - Dashboard */}
//             <div className='sm:items-center sm:justify-center gap-x-4 flex '>

//               {
//                 token === null && (
//                   <Link to='/login'>

//                     <button className='lg:w-full lg:h-full  md:w-full md:h-full border border-pink-400 lg:bg-white md:bg-pure-greys-25/80 sm:bg-pure-greys-25/80 px-[12px] py-[8px]  
//                       text-orange-600  rounded-md text-[1rem] md:text-[1rem] lg:translate-y-0 md:translate-y-0
//                         '>
//                         Log in
//                     </button>

//                   </Link>
//                 )
//               }
//               {
//                 token === null && (
//                   <Link to='/signup'>

//                     <button className='lg:w-full lg:h-full md:w-full md:h-full  border border-pink-400 lg:bg-white md:bg-pure-greys-25/80 sm:bg-pure-greys-25/80 px-[12px] py-[8px] md:px-[12px] md:py-[8px]
//                      text-orange-600  rounded-md text-[1rem] md:text-[1rem] lg:translate-y-0 md:translate-y-0
//                      '>
//                       Sign Up
//                     </button>
//                   </Link>
//                 )
//               }
//               {
//                 token !== null && <ProfileDropDown/>
//               }

//             </div> 
//             {/* </div> */}
//       </div>
//     </div>
// </div>

//     </>
//   );
// }




import React from "react";
import { useState } from "react";
import { VscChevronUp, VscMenu } from "react-icons/vsc";
import { Link, matchPath, useLocation } from "react-router-dom";
// import { Button } from "react-bootstrap";
import { useSelector } from "react-redux"
import logo from "../../Assests/Icons/logo.png"
import NavbarLinks from "../../data/navbar-links"
import ProfileDropDown from "../core/Auth/ProfileDropDown"

export default function NavBar() {

  const { token } = useSelector((state) => state.auth);
  // const {user} = useSelector( (state) => state.profile);

  const location = useLocation();

  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname)
  }
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);



  return (
    <div className="w-full h-[70px] fixed top-0 bg-white shadow-md px-6 lg:px-12 py-2.5 z-20">
      {/* Hamburger Button */}
      <button
        className={`lg:hidden sm:flex fixed top-5  right-8 z-30  mt-[1px]
           items-center justify-center w-10 h-10 bg-purple-700 rounded-full shadow-md shadow-richblack-600
          ${isSidebarOpen ? "sm:translate-y-60 " : "sm:translate-y-0"} transition-transform duration-300 ease-in-out
        `}
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? (
          <VscChevronUp className="text-white font-semibold  " />
        ) : (
          <VscMenu className="text-white font-semibold" />
        )}
      </button>

      {/* Navbar */}
      <div className=" bg-white flex justify-between items-center w-full h-full">
        <div className="flex items-center justify-start  h-full">
          {/* Logo */}
          <div className="flex items-center gap-x-2">
            <Link to="/" className="flex h-10">
              <img
                src={logo}
                alt="logo"
                loading="lazy"
                className="h-full object-cover"
              />
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex  ">
            <ul className="flex justify-start items-center gap-2.5">
              {NavbarLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className={`text-md no-underline ${matchRoute(link.path)
                      ? "text-purple-700"
                      : "text-black hover:border-b-2 hover:border-purple-700 py-2"
                      }`}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Buttons */}
        </div>

        <div className="hidden lg:flex items-center gap-x-4">
          {token === null ? (
            <>
              <Link
                to="/login"
                className="text-md text- font-medium no-underline px-4 py-2 rounded-xl text-purple-700 ring-2 ring-purple-700 bg-white transition-all hover:opacity-60"
              >
                Log in
              </Link>
              <Link
                to="/signup"
                className="text-md font-medium no-underline px-4 py-2 rounded-xl text-white bg-purple-700 transition-all hover:opacity-60"
              >
                Sign Up
              </Link>
            </>
          ) : (
            <ProfileDropDown />
          )}
          <Link
            to="/packages"
            className="text-md font-medium text-white bg-purple-700 no-underline px-4 py-2 rounded-full"
          >
            Get Package
          </Link>
        </div>
      </div>

      {/* Mobile Sidebar Menu */}
      {isSidebarOpen && (
        <div className={`lg:hidden fixed  top-16 left-0 w-full bg-white shadow-md z-20`}>
          <ul className="flex flex-col items-start p-4 gap-y-4">
            {NavbarLinks.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.path}
                  className={`text-md no-underline ${matchRoute(link.path)
                    ? "text-purple-700"
                    : "text-black hover:border-b-2 hover:border-purple-700 py-2"
                    }`}
                  onClick={() => setIsSidebarOpen(false)} // Close menu after click
                >
                  {link.title}
                </Link>
              </li>
            ))}
            <hr className="w-full my-2 border-t border-gray-300" />
            {token === null ? (
              <>
                <Link
                  to="/login"
                  className="text-md font-medium no-underline w-full text-center px-4 py-2 rounded-xl text-purple-700 ring-2 ring-purple-700 bg-white transition-all hover:opacity-60"
                  onClick={() => setIsSidebarOpen(false)}
                >
                  Log in
                </Link>
                <Link
                  to="/signup"
                  className="text-md font-medium no-underline w-full text-center px-4 py-2 rounded-xl text-white bg-purple-700 transition-all hover:opacity-60"
                  onClick={() => setIsSidebarOpen(false)}
                >
                  Sign Up
                </Link>
              </>
            ) : (
              <ProfileDropDown />
            )}
            <Link
              to="/packages"
              className="text-md font-medium text-white bg-purple-700 no-underline w-full text-center px-4 py-2 rounded-full"
              onClick={() => setIsSidebarOpen(false)}
            >
              Get Package
            </Link>
          </ul>
        </div>
      )}
    </div>

  )
}