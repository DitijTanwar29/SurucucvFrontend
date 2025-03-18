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
import { useServices } from "../../queries/useServices";
function ServicesSlider() {


    const [services, setServices] = useState([]);
    const { data, isLoading, isStale, refetch } = useServices();

    const truncateWords = 15;
    const filterKey = "service"
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        console.log('data', data);
    }, [data])

    useEffect(() => {
        (async () => {
            const response = await getActiveServices();
            console.log("active services data : ", response);
            console.log("response: ", response);
            if (response != null) {
                setServices(response);
            }
            console.log("services : ", services);
        })();
    }, []);

    const handleChange = (option) => {
        const queryParams = new URLSearchParams(location.search);
        queryParams.set(filterKey, option);
        navigate(`/find-job?${queryParams.toString()}`);

    };


    return (
        <div className='flex lg:px-4 px-0'>
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
                        breakpoints={{
                            640: {  // sm breakpoint
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            768: {  // md breakpoint
                                slidesPerView: 2,
                                spaceBetween: 30,
                            },
                            1024: { // lg breakpoint
                                slidesPerView: 1,
                                spaceBetween: 40,
                            },
                        }}
                        modules={[Autoplay]}
                        className="mySwiper w-full md:w-11/12 lg:w-10/12 "
                    >
                        {data?.map((service) => (
                            <SwiperSlide key={service._id}>
                                <div
                                    onClick={() => handleChange(service._id)}
                                    className="flex flex-col sm:flex-row justify-between items-center w-full h-full sm:h-[201px] bg-purple-700 hover:cursor-grab border"
                                >
                                    <div className="flex flex-1 flex-col justify-center items-center lg:gap-y-1 p-4 sm:p-6">
                                        <h2 className="font-semibold text-richblack-5 text-[16px] sm:text-[20px] lg:text-[30px] text-center leading-tight">
                                            {service.serviceName}
                                        </h2>
                                        <p className="font-medium text-richblack-25 leading-relaxed text-[12px] sm:text-[14px] lg:text-[20px] text-center">
                                            {service?.serviceDescription.split(" ").length > truncateWords
                                                ? service?.serviceDescription
                                                    .split(" ")
                                                    .slice(0, truncateWords)
                                                    .join(" ") + "..."
                                                : service?.serviceDescription}
                                        </p>
                                    </div>
                                    <div className="w-full sm:w-5/12 h-[200px] sm:h-full">
                                        <img
                                            src={service?.icon}
                                            alt={service?.serviceName}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                ) : (
                    <p>No Services Found</p>
                )
            }
        </div>
    );
}

export default ServicesSlider;
