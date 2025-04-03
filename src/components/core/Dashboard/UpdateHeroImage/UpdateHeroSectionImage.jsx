import { useEffect, useRef, useState } from "react";
import { useDropzone } from "react-dropzone";
import { FiUploadCloud } from "react-icons/fi";
import { uploadHeroImage, getHeroImage } from "../../../../services/operations/profileAPI";
import { useSelector } from "react-redux";
import defaultHeroImage from "../../../../Assests/Images/Driver-pro-logo.jfif";

// export default function HeroImageComponent() {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [previewSource, setPreviewSource] = useState("");
//   const [currentHeroImage, setCurrentHeroImage] = useState(defaultHeroImage);
//   const { token } = useSelector((state) => state.auth);

//   const inputRef = useRef(null);

//   // Fetch the existing hero image from Cloudinary
//   useEffect(() => {
//     async function fetchHeroImage() {
//       try {
//         const response = await getHeroImage();
//         if (response.data.imageUrl) {
//           setCurrentHeroImage(response.data.imageUrl);
//         }
//       } catch (error) {
//         console.error("Error fetching hero image:", error);
//       }
//     }
//     fetchHeroImage();
//   }, []);

//   const onDrop = (acceptedFiles) => {
//     const file = acceptedFiles[0];
//     if (file) {
//       console.log("File selected for upload:", file);
//       previewFile(file);
//       setSelectedFile(file);
//     }
//   };

//   const { getRootProps, getInputProps, isDragActive } = useDropzone({
//     accept: { "image/*": [".jpeg", ".jpg", ".png"] },
//     onDrop,
//   });

//   const previewFile = (file) => {
//     const reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onloadend = () => {
//       setPreviewSource(reader.result);
//     };
//   };

//   const handleUpload = async () => {
//     if (!selectedFile) {
//       alert("Please select an image before uploading!");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("heroImage", selectedFile);

//     console.log("Uploading file:", formData.get("heroImage")); // Debugging log

//     try {
//       const response = await uploadHeroImage(formData, token);
//       console.log(response.data.imageUrl)
//       if (response.data.imageUrl) {
//         setCurrentHeroImage(response.data.imageUrl); // Update displayed image
//         setPreviewSource(""); // Clear preview after upload
//         alert("Image uploaded successfully!");
//       }
//     } catch (error) {
//       console.error("Error uploading image:", error);
//       alert("Upload failed, please try again.");
//     }
//   };

//   const handleClick = () => inputRef.current && inputRef.current.click();

//   return (
//     <div className="flex flex-col space-y-4">
//       <h2 className="text-lg font-bold text-gray-200">Update Hero Section Image</h2>

//       <div
//         className={`${
//           isDragActive ? "bg-gray-600" : "bg-gray-700"
//         } flex min-h-[250px] cursor-pointer items-center justify-center rounded-md border-2 border-dotted border-gray-500`}
//       >
//         {previewSource ? (
//           <div className="flex w-full flex-col p-6">
//             <img
//               src={previewSource}
//               alt="Preview"
//               className="h-full w-full rounded-md object-cover"
//             />
//             <button
//               type="button"
//               onClick={() => {
//                 setPreviewSource("");
//                 setSelectedFile(null);
//               }}
//               className="mt-3 text-gray-400 underline"
//             >
//               Cancel
//             </button>
//           </div>
//         ) : (
//           <div
//             className="flex w-full flex-col items-center p-6"
//             {...getRootProps()}
//             onClick={handleClick}
//           >
//             <input {...getInputProps()} ref={inputRef} />
//             <div className="grid aspect-square w-14 place-items-center rounded-full bg-gray-800">
//               <FiUploadCloud className="text-2xl text-yellow-50" />
//             </div>
//             <p className="mt-2 max-w-[200px] text-center text-sm text-gray-200">
//               Drag and drop an image, or click to{" "}
//               <span className="font-semibold text-yellow-50">Browse</span> a file
//             </p>
//           </div>
//         )}
//       </div>

//       <button
//         onClick={handleUpload}
//         className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-md"
//       >
//         Upload Image
//       </button>

//       {/* Display Current Hero Image */}
//       <div className="mt-4">
//         <h3 className="text-md text-gray-300">Current Hero Image:</h3>
//         {currentHeroImage && (
//           <img
//             src={currentHeroImage}
//             alt="Hero Section"
//             className="mt-2 h-40 w-full rounded-md object-cover"
//           />
//         )}
//       </div>
//     </div>
//   );
// }


//above code is working fine just handling the flickering of image below 

//TODO : below controller was working perfect, now just add a delete button to delete the 
//images stored in mongodb otherwise it will take the unnecessary space everytime

export default function HeroImageComponent() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewSource, setPreviewSource] = useState("");
  const [currentHeroImage, setCurrentHeroImage] = useState(null); // Initially null
  const { token } = useSelector((state) => state.auth);
  const inputRef = useRef(null);

  // Fetch the existing hero image from Cloudinary
  useEffect(() => {
    async function fetchHeroImage() {
      try {
        const response = await getHeroImage();
        console.log("response of get image api :",response)
        if (response.imageUrl) {
          setCurrentHeroImage(response.imageUrl);
        } else {
          setCurrentHeroImage(defaultHeroImage);
        }
      } catch (error) {
        console.error("Error fetching hero image:", error);
        setCurrentHeroImage(defaultHeroImage);
      }
    }
    fetchHeroImage();
  }, []);

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file) {
      previewFile(file);
      setSelectedFile(file);
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: { "image/*": [".jpeg", ".jpg", ".png"] },
    onDrop,
  });

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Please select an image before uploading!");
      return;
    }

    const formData = new FormData();
    formData.append("heroImage", selectedFile);

    try {
      const response = await uploadHeroImage(formData, token);
      if (response.data.imageUrl) {
        setCurrentHeroImage(response.data.imageUrl); // Update displayed image
        setPreviewSource(""); // Clear preview after upload
        alert("Image uploaded successfully!");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Upload failed, please try again.");
    }
  };

  const handleClick = () => inputRef.current && inputRef.current.click();

  return (
    <div className="flex flex-col space-y-4 justify-center">
      <h2 className="text-md lg:mt-20">Update Hero Section Image</h2>

      <div
        className={`${
          isDragActive ? "bg-gray-600" : "bg-richblack-25"
        } flex min-h-[250px] cursor-pointer items-center justify-center rounded-md border-2 border-dotted border-gray-500`}
      >
        {previewSource ? (
          <div className="flex w-full flex-col p-6">
            <img
              src={previewSource}
              alt="Preview"
              className="h-60 w-full rounded-md object-contain"
            />
            <button
              type="button"
              onClick={() => {
                setPreviewSource("");
                setSelectedFile(null);
              }}
              className="mt-3 text-gray-400 underline"
            >
              Cancel
            </button>
          </div>
        ) : (
          <div
            className="flex w-full flex-col items-center p-6"
            {...getRootProps()}
            onClick={handleClick}
          >
            <input {...getInputProps()} ref={inputRef} />
            <div className="grid aspect-square w-14 place-items-center rounded-full bg-gray-800">
              <FiUploadCloud className="text-2xl text-purple-700" />
            </div>
            <p className="mt-2 max-w-[200px] text-center text-sm text-gray-600">
              Drag and drop an image, or click to{" "}
              <span className="font-semibold text-purple-700">Browse</span> a file
            </p>
          </div>
        )}
      </div>

      <button
        onClick={handleUpload}
        className="w-40 place-self-end bg-purple-700 hover:bg-purple-600 text-white px-4 py-2 rounded-md"
      >
        Upload Image
      </button>

      {/* Display Current Hero Image Only If Available */}
      {currentHeroImage && (
        <div className="mt-4">
          <h2 className="text-md ">Current Hero Image:</h2>
          <img
            src={currentHeroImage}
            alt="Hero Section"
            className="mt-2 h-40 w-40 rounded-md object-cover"
          />
        </div>
      )}
    </div>
  );
}