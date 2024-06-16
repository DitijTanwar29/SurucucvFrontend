import { getActiveServices } from "../../services/operations/serviceDetailsAPI";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import "swiper/css/free-mode";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import {FreeMode} from "swiper"
// import "swiper/swiper-bundle.min.css"; // Import Swiper styles
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
                    slidesPerView={3}
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
                            <div className="flex flex-col gap-3 sm:w-[90%] md:w-[full] lg:w-full h-60
                            mx-auto hover:border-orange-400 bg-richblack-100  hover:cursor-grab
                             p-3 rounded-lg border-1 border-richblack-50">
                                <div className=" md:min-w-[65%] sm:w-full w-[700px] lg:h-full flex justify-evenly items-center gap-4 ">
                                    <img
                                        src={service?.icon}
                                        alt={service?.serviceName}
                                        className="md:h-[148px] md:w-[220px] sm:w-[6rem] sm:h-[5rem]   object-fill rounded-lg"
                                    />
                                    <div className="flex flex-col justify-center items-center lg:gap-y-4  ">
                                        <h2 className="font-semibold text-richblack-5 sm:text-[14px] lg:text-[40px] lg:text-center ">{service.serviceName}</h2>
                                        {/* <h2 className="text-[12px] sm:text-[16px] lg:text-[30px] font-medium text-black">
                                            {service?.serviceName}
                                        </h2> */}
                                    <p className="font-medium text-richblack-25  sm:text-[12px] lg:text-[20px] lg:text-center">
                                        {service?.serviceDescription.split(" ").length > truncateWords
                                            ? service?.serviceDescription
                                                .split(" ")
                                                .slice(0, truncateWords)
                                                .join(" ") + "..."
                                            : service?.serviceDescription}
                                    </p>
                                    </div>
                                </div>
                                
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
