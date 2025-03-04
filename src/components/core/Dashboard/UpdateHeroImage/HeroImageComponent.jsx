import React, { useEffect, useState } from "react";
import { getHeroImage } from "../../../../services/operations/profileAPI";

export default function HeroImageComponent () {
  const [heroImage, setHeroImage] = useState(null);

  useEffect(() => {
    const fetchHeroImage = async () => {
      try {
        const response = await getHeroImage()
        setHeroImage(response.data.imageUrl || "../../../../Assests/Driver-pro-logo-Dd1LE3JK.jfif");
      } catch (error) {
        console.error("Error fetching hero image:", error);
      }
    };

    fetchHeroImage();
  }, []);

  return (
    <div className="h-[300px] w-[375px]  rounded-lg object-cover">
      {heroImage ? (
        <img src={heroImage} alt="Hero Section" className="w-full h-full object-cover rounded-lg shadow-md" />
      ) : (
        <p>Loading hero image...</p>
      )}
    </div>
  );
};

