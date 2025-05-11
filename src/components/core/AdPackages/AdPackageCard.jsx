import { Tooltip } from "@material-tailwind/react";
import {
  FaSuitcase,
  FaBullhorn,
  FaFileAlt,
  FaClock,
  FaEye,
  FaBuilding,
  FaCheckCircle,
  FaTimesCircle,
  FaHome,
  FaList,
  FaUsers,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom"
export default function AdPackageCard({ pkg }) {

  const navigate = useNavigate()
  const handleBuyNow = () => {
    navigate(`/payment/${pkg._id}`); // Redirect to payment page with package ID
  };

  return (
    // <div className="bg-white border border-gray-200 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between">
    //   <div className="mb-4">
    //     <h2 className="text-2xl font-semibold text-gray-800 mb-2">{pkg.packageName}</h2>

    //     <div className="flex items-baseline gap-2 mb-4">
    //       <span className="text-2xl font-bold text-green-600">₹{pkg.discountedPrice}</span>
    //       {pkg.packagePrice !== pkg.discountedPrice && (
    //         <span className="text-base line-through text-gray-500">₹{pkg.packagePrice}</span>
    //       )}
    //     </div>

    //     <div className="grid grid-cols-1 gap-2 text-sm text-gray-700 max-h-64 overflow-y-auto pr-1">
    //       <p><span className="font-medium">Job Post Limit:</span> {pkg.jobPostLimit}</p>
    //       <p><span className="font-medium">Advertising Limit:</span> {pkg.advertisingLimit}</p>
    //       <p><span className="font-medium">Resume Views:</span> {pkg.resumeViews}</p>
    //       <p><span className="font-medium">Package Duration:</span> {pkg.packageDuration} days</p>
    //       <p><span className="font-medium">Ad Publication Time:</span> {pkg.totalAdPublicationTime} days</p>
    //       <p><span className="font-medium">Homepage Visibility:</span> {pkg.homePageVisibilityTime} days</p>
    //       <p><span className="font-medium">Homepage Positions:</span> {pkg.homePagePositions?.join(", ") || 'None'}</p>
    //       <p><span className="font-medium">Candidate Pool Access:</span> {pkg.candidatePoolAccess ? "Yes" : "No"}</p>

    //       {pkg.candidatePoolAccess && (
    //         <>
    //           <p><span className="font-medium">Pool Access Duration:</span> {pkg.candidatePoolAccessDuration} days</p>
    //           <p><span className="font-medium">Candidate View Limit:</span> {pkg.candidatePoolViewLimit}</p>
    //         </>
    //       )}

    //       <p><span className="font-medium">Companies Enrolled:</span> {pkg.enrolledCompanies?.length || 0}</p>

    //       {pkg.features?.length > 0 && (
    //         <p><span className="font-medium">Features:</span> {pkg.features.join(", ")}</p>
    //       )}
    //     </div>
    //   </div>

    //   <button className="mt-6 w-full bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium py-2 rounded-md transition-all duration-200">
    //     Buy Now
    //   </button>
    // </div>
    <div className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between p-6">
      <div className="mb-4">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">{pkg.packageName}</h2>

        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-2xl font-bold text-green-600">₹{pkg.discountedPrice}</span>
          {pkg.packagePrice !== pkg.discountedPrice && (
            <span className="text-base line-through text-gray-500">₹{pkg.packagePrice}</span>
          )}
        </div>

        <div className="grid grid-cols-1 gap-2 text-sm text-gray-700 max-h-64 overflow-y-auto pr-1">
          <p><FaSuitcase className="inline mr-2 text-purple-500" /> <span className="font-medium">Job Post Limit:</span> {pkg.jobPostLimit}</p>
          <p><FaBullhorn className="inline mr-2 text-yellow-500" /> <span className="font-medium">Advertising Limit:</span> {pkg.advertisingLimit}</p>
          <p><FaEye className="inline mr-2 text-blue-500" /> <span className="font-medium">Resume Views:</span> {pkg.resumeViews}</p>
          <p><FaClock className="inline mr-2 text-gray-500" /> <span className="font-medium">Package Duration:</span> {pkg.packageDuration} days</p>
          <p><FaClock className="inline mr-2 text-orange-500" /> <span className="font-medium">Ad Publication Time:</span> {pkg.totalAdPublicationTime} days</p>
          <p><FaHome className="inline mr-2 text-pink-500" /> <span className="font-medium">Homepage Visibility:</span> {pkg.homePageVisibilityTime} days</p>
          <p><FaList className="inline mr-2 text-teal-500" /> <span className="font-medium">Homepage Positions:</span> {pkg.homePagePositions?.join(", ") || 'None'}</p>
          <p>
            {pkg.candidatePoolAccess ? (
              <FaCheckCircle className="inline mr-2 text-green-600" />
            ) : (
              <FaTimesCircle className="inline mr-2 text-red-500" />
            )}
            <span className="font-medium">Candidate Pool Access:</span> {pkg.candidatePoolAccess ? "Yes" : "No"}
          </p>

          {pkg.candidatePoolAccess && (
            <>
              <p><FaClock className="inline mr-2 text-indigo-500" /> <span className="font-medium">Pool Access Duration:</span> {pkg.candidatePoolAccessDuration} days</p>
              <p><FaEye className="inline mr-2 text-blue-500" /> <span className="font-medium">Candidate View Limit:</span> {pkg.candidatePoolViewLimit}</p>
            </>
          )}

          <p><FaUsers className="inline mr-2 text-purple-600" /> <span className="font-medium">Companies Enrolled:</span> {pkg.enrolledCompanies?.length || 0}</p>

          {pkg.features?.length > 0 && (
            <p><FaFileAlt className="inline mr-2 text-gray-600" /> <span className="font-medium">Features:</span> {pkg.features.join(", ")}</p>
          )}
        </div>
      </div>

      <button className="mt-6 w-full bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium py-2 rounded-md transition-all duration-200"
        onClick={handleBuyNow}>
        Buy Now
      </button>
    </div>
  );
}
