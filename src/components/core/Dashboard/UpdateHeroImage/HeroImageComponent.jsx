import React, { useEffect, useState } from "react";
import { getHeroImage } from "../../../../services/operations/profileAPI";
import defaultHeroImage from "../../../../Assests/Images/Driver-pro-logo.jfif";

// const HeroImageComponent = () => {
//   const [heroImage, setHeroImage] = useState(defaultHeroImage);
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     fetchHeroImage();
//   }, []);

//   const fetchHeroImage = async () => {
//     try {
//       const response = await getHeroImage();
//       console.log("API Response:", response);

//       if (response.success && response.imageUrl) {
//         setHeroImage(response.imageUrl);
//       } else {
//         setHeroImage(defaultHeroImage);
//       }
//     } catch (error) {
//       console.error("Error fetching hero image:", error);
//       setHeroImage(defaultHeroImage);
//     }
//   };

//   const handleFileChange = (e) => {
//     setSelectedFile(e.target.files[0]);
//   };

//   const handleUpload = async () => {
//     if (!selectedFile) return;
//     setLoading(true);

//     const formData = new FormData();
//     formData.append("heroImage", selectedFile);

//     try {
//       const response = await uploadHeroImage(formData);
//       if (response.success) {
//         setHeroImage(response.imageUrl);
//       }
//     } catch (error) {
//       console.error("Error uploading image:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="h-[300px] w-[375px] rounded-lg object-cover">
//       <img
//         src={heroImage}
//         alt="Hero Section"
//         className="w-full h-full object-cover rounded-lg shadow-md"
//       />
      
//     </div>
//   );
// };

// export default HeroImageComponent;


//above code is working perfectly except one loading condition 


const HeroImageComponent = () => {
  const [heroImage, setHeroImage] = useState(null); // Initially, don't set the image
  // const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Track loading state for fetching

  useEffect(() => {
    fetchHeroImage();
  }, []);

  const fetchHeroImage = async () => {
    try {
      const response = await getHeroImage();
      console.log("API Response:", response);

      if (response.success && response.imageUrl) {
        setHeroImage(response.imageUrl);
      } else {
        setHeroImage(defaultHeroImage);
      }
    } catch (error) {
      console.error("Error fetching hero image:", error);
      setHeroImage(defaultHeroImage);
    } finally {
      setIsLoading(false); // Hide loader once API call is done
    }
  };




  return (
    <div className="h-[300px] w-[375px] rounded-lg object-cover">
      {isLoading ? (
        <p>Loading...</p> // Show this while API is fetching
      ) : (
        <img
          src={heroImage || defaultHeroImage}
          alt="Hero Section"
          className="w-full h-full object-cover rounded-lg shadow-md"
        />
      )}
      
    </div>
  );
};

export default HeroImageComponent;