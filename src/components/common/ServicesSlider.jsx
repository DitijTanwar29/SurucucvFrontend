import { getActiveServices } from "../../services/operations/serviceDetailsAPI";
import { useNavigate, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import "swiper/css/free-mode";
import "swiper/css/pagination";
import 'swiper/css/navigation';

// import "swiper/swiper-bundle.min.css"; // Import Swiper styles
// import SwiperCore, { Autoplay, FreeMode, Pagination } from "swiper"; // Import Swiper core and required modules
// SwiperCore.use([Autoplay, FreeMode, Pagination]);
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
function ServicesSlider() {
    const [services, setServices] = useState([]);
    const truncateWords = 15;
    const filterKey = "service"
    const navigate = useNavigate();
    const location = useLocation();
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

    const handleChange = (option) => {
        const queryParams = new URLSearchParams(location.search);
        queryParams.set(filterKey, option);
        navigate(`/find-job?${queryParams.toString()}`);
        
    };


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
                    // pagination={{
                    // clickable: true,
                    // }}
                    // navigation={true}
                    modules={[Autoplay]}
                    className="mySwiper"
                    // autoplay={{
                    //     delay: 2500,
                    //     disableOnInteraction: false,
                    // }}
                    // modules={[FreeMode, Pagination, Autoplay]}
                    >

                    {services?.map((service) => (
                        <SwiperSlide key={service._id}>
                            <div className="flex flex-col gap-3 sm:w-[90%] md:w-[full] lg:w-full h-60 mt-20
                            mx-auto hover:border-orange-400 bg-pure-greys-50  hover:cursor-grab
                             p-3 rounded-lg border-1 border-richblack-50"
                             
                             onClick={() => handleChange(service._id)}
                             
                             >
                                <div className=" md:min-w-[65%] sm:w-full w-[700px] lg:h-full sm:flex-row lg:flex justify-evenly items-center gap-4 sm:space-y-2 ">
                                    <img
                                        src={service?.icon}
                                        alt={service?.serviceName}
                                        className="md:h-[148px] md:w-[220px] sm:w-[7rem] sm:h-[3rem] lg:w-[180px] lg:h-[120px] object-fill rounded-lg"
                                    />
                                    <div className="lg:w-full flex flex-col justify-center items-center lg:gap-y-1">
                                        <h2 className="font-semibold text-richblack-5 sm:text-[14px] lg:text-[30px] text-center leading-tight ">{service.serviceName}</h2>
                                        {/* <h2 className="text-[12px] sm:text-[16px] lg:text-[30px] font-medium text-black">
                                            {service?.serviceName}
                                        </h2> */}
                                    <p className="font-medium text-richblack-25 leading-relaxed sm:text-[11px] lg:text-[20px] lg:text-center">
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
