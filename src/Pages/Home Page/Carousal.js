import React from "react";
import { Card } from "react-bootstrap";
 import Carousel from 'react-bootstrap/Carousel';

export default function Carousal() {
  return (
    <div>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-ride="carousel"
        style={{ objectFit: "contain ! important" }}
      >
        <div className="carousel-inner" id="carousel">
          <div className="carousel-caption" style={{ zIndex: "10" }}>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
          <div className="carousel-item active">
            <img
              className="d-block w-100 "
              src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              style={{ filter: "brightness(20%)" }}
              alt="First slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src=" "
              style={{ filter: "brightness(30%)" }}
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              style={{ filter: "brightness(30%)" }}
              alt="Third slide"
            />
          </div>
        </div>
      </div>
    </div>
  );
}


// import React from "react";

// export default function Carousel() {
//   const images = [
//     require("../../Assests/b1.jpeg"),
//     require("../../Assests/b2.jpeg"),
//     require("../../Assests/bg.png"),
//   ];

//   const [index, setIndex] = React.useState(0);

//   const handleNext = () => {
//     setIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
//   };

//   const handlePrev = () => {
//     setIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
//   };

//   return (
//     <div className="relative">
//       <div
//         id="carouselExampleControls"
//         className="carousel slide"
//         data-ride="carousel"
//       >
//         <div className="carousel-inner">
//           {images.map((image, idx) => (
//             <div
//               key={idx}
//               className={`carousel-item ${idx === index ? 'active' : ''}`}
//             >
//               <img
//                 className="w-full"
//                 src={image.default}
//                 alt={`Slide ${idx + 1}`}
//               />
//             </div>
//           ))}
//         </div>
//         <button
//           className="absolute top-1/2 left-0 transform -translate-y-1/2 px-4 py-2 bg-gray-800 text-white rounded-l-md"
//           onClick={handlePrev}
//         >
//           Prev
//         </button>
//         <button
//           className="absolute top-1/2 right-0 transform -translate-y-1/2 px-4 py-2 bg-gray-800 text-white rounded-r-md"
//           onClick={handleNext}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// }




// import React, { useState } from "react";

// export default function Carousel() {
//   const imageNames = ["image1.jpg", "image2.jpg", "image3.jpg"];
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const goToNextSlide = () => {
//     const newIndex = (currentIndex + 1) % imageNames.length;
//     setCurrentIndex(newIndex);
//   };

//   const goToPrevSlide = () => {
//     const newIndex = (currentIndex - 1 + imageNames.length) % imageNames.length;
//     setCurrentIndex(newIndex);
//   };

//   return (
//     <div className="w-full h-full relative">
//       <div className="overflow-hidden w-full h-full">
//         <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
//           {imageNames.map((imageName, index) => (
//             <div key={index} className="w-full flex-shrink-0">
//               <img src={require(`../../Assests/Slider/${imageName}`).default} alt={`Slide ${index + 1}`} className="w-full h-auto"/>
//             </div>
//           ))}
//         </div>
//       </div>
//       <button onClick={goToPrevSlide} className="absolute top-1/2 left-0 transform -translate-y-1/2 px-4 py-2 bg-gray-800 text-white rounded-l-md">
//         Prev
//       </button>
//       <button onClick={goToNextSlide} className="absolute top-1/2 right-0 transform -translate-y-1/2 px-4 py-2 bg-gray-800 text-white rounded-r-md">
//         Next
//       </button>
//     </div>
//   );
// }



