// import React, { useEffect, useState } from "react"
// // import ReactStars from "react-rating-stars-component"
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react"

// // Import Swiper styles
// import "swiper/css"
// import "swiper/css/free-mode"
// import "swiper/css/pagination"
// import "../../App.css"
// // Icons
// import { FaStar } from "react-icons/fa"
// // Import required modules
// import { Autoplay, FreeMode, Pagination } from "swiper/modules"

// // Get apiFunction and the endpoint
// import { getActiveServices } from "../../services/operations/serviceDetailsAPI"

// function ServicesSlider() {
//   const [services, setServices] = useState([])
//   const truncateWords = 15

//   useEffect(() => {
//     ;(async () => {
//       const response = await getActiveServices()
//       console.log("active services data : ",response)
//       if (response?.success) {
//         setServices(response?.data)
//       }
//     })()
//   }, [])

//   // console.log(reviews)

//   return (
//     <div className="text-white">
//       <div className="my-[50px] h-[184px] max-w-maxContentTab lg:max-w-maxContent">
//         <Swiper
//           slidesPerView={1}
//           spaceBetween={25}
//           loop={true}
//           freeMode={true}
//           autoplay={{
//             delay: 2500,
//             disableOnInteraction: false,
//           }}
//           modules={[FreeMode, Pagination, Autoplay]}
//           className="w-full "
//         >
//           {services.map((service, i) => {
//             return (
//               <SwiperSlide key={i}>
//                 <div className="flex flex-col gap-3 bg-richblack-800 p-3 text-[14px] text-richblack-25">
//                   <div className="flex items-center gap-4">
//                   <img
//                     src={service?.icon}
//                     alt={service?.serviceName}
//                     className="h-[148px] w-[220px] rounded-lg object-cover"
//                   />
//                     <div className="flex flex-col">
//                       <h1 className="font-semibold text-richblack-5">{service.serviceName}</h1>
//                       <h2 className="text-[12px] font-medium text-richblack-500">
//                         {service?.serviceName}
//                       </h2>
//                     </div>
//                   </div>
//                   <p className="font-medium text-richblack-25">
//                     {service?.serviceDescription.split(" ").length > truncateWords
//                       ? service?.serviceDescription
//                           .split(" ")
//                           .slice(0, truncateWords)
//                           .join(" ") + "..."
//                       : service?.serviceDescription}
//                   </p>
//                   {/* <div className="flex items-center gap-2 ">
//                     <h3 className="font-semibold text-yellow-100">
//                       {review.rating.toFixed(1)}
//                     </h3>
//                     <ReactStars
//                       count={5}
//                       value={review.rating}
//                       size={20}
//                       edit={false}
//                       activeColor="#ffd700"
//                       emptyIcon={<FaStar />}
//                       fullIcon={<FaStar />}
//                     />
//                   </div> */}
//                 </div>
//               </SwiperSlide>
//             )
//           })}
//           {/* <SwiperSlide>Slide 1</SwiperSlide> */}
//         </Swiper>
//       </div>
//     </div>
//   )
// }

// export default ServicesSlider



import { getActiveServices } from "../../services/operations/serviceDetailsAPI";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import "swiper/css/free-mode";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import {FreeMode} from "swiper"
// import "swiper/swiper-bundle.min.css"; // Import Swiper styles
import { FaStar } from "react-icons/fa";
// import SwiperCore, { Autoplay, FreeMode, Pagination } from "swiper"; // Import Swiper core and required modules
// SwiperCore.use([Autoplay, FreeMode, Pagination]);
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
function ServicesSlider() {
    const [services, setServices] = useState([]);
    const truncateWords = 15;

    useEffect(() => {
        (async () => {
            const response = await getActiveServices();
            console.log("active services data : ", response);
            console.log("response: ", response);
            if (response != null) {
                setServices(response);
            }
            console.log("services : ",services);
        })();
    }, []);

    return (
        <>
            {/* <div className="my-[50px] h-[184px] max-w-maxContentTab lg:max-w-maxContent"> */}
            {
                services?.length !== 0 ? (
                    <Swiper
                    slidesPerView={1}
                    spaceBetween={20}
                    loop={true}
                    freeMode={true}
                    autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                    }}
                    pagination={{
                    clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                    // autoplay={{
                    //     delay: 2500,
                    //     disableOnInteraction: false,
                    // }}
                    // modules={[FreeMode, Pagination, Autoplay]}
                    >

                    {services?.map((service) => (
                        <SwiperSlide key={service._id}>
                            <div className="flex flex-col gap-3 w-[full] lg:w-[90%] mx-auto bg-orange-400 hover:bg-orange-500 hover:cursor-grab p-3 rounded-lg">
                                <div className="flex items-center gap-4">
                                    <img
                                        src={service?.icon}
                                        alt={service?.serviceName}
                                        className="h-[148px] w-[220px]  object-cover"
                                    />
                                    <div className="flex flex-col">
                                        <h1 className="font-semibold text-richblack-5">{service.serviceName}</h1>
                                        <h2 className="text-[20px] font-medium text-black">
                                            {service?.serviceName}
                                        </h2>
                                    <p className="font-medium text-richblack-25">
                                        {service?.serviceDescription.split(" ").length > truncateWords
                                            ? service?.serviceDescription
                                                .split(" ")
                                                .slice(0, truncateWords)
                                                .join(" ") + "..."
                                            : service?.serviceDescription}
                                    </p>
                                    </div>
                                </div>
                                {/* Add your rating component here */}
                            </div>
                        </SwiperSlide>
                    ))}



                    </Swiper>
                ) : (
                    <p>No Services Found</p>
                )
            }
                
            {/* </div> */}
        </>
    );
}

export default ServicesSlider;
