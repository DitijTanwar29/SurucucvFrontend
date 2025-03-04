import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchPackageDetails } from "../../../../services/operations/packageAPI";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

const PackageDetails = () => {
  const { packageId } = useParams();
  console.log("Package ID:", packageId);

  const navigate = useNavigate();
  const [packageDetails, setPackageDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPackageDetails = async () => {
      try {
        const response = await fetchPackageDetails(packageId);
        console.log("API Response:", response); // Debugging log

        // Check if response is an array
        if (Array.isArray(response) && response.length > 0) {
          setPackageDetails(response[0]); // Take the first package
        } else {
          setPackageDetails(null);
        }
      } catch (error) {
        console.error("Error fetching package details:", error);
        setPackageDetails(null);
      } finally {
        setLoading(false);
      }
    };

    getPackageDetails();
  }, [packageId]);

  if (loading) {
    return <p className="text-center text-gray-600">Loading package details...</p>;
  }

  if (!packageDetails) {
    return (
      <div className="text-center container lg:mt-8 mx-auto p-6">
        <p className="text-gray-600 text-lg">Package not found.</p>
        <button
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={() => navigate("/packages")}
        >
          Back to Packages
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 lg:mt-8 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4 text-center">Package Details</h1>
      <div className="border-b pb-4 mb-4">
        <p className="text-lg font-semibold">Package Name: {packageDetails.packageName}</p>
        <p className="text-lg">Price: ${packageDetails.packagePrice}</p>
        <p className="text-lg">Discounted Price: ${packageDetails.discountedPrice}</p>
        <p className="text-lg">Status: {packageDetails.status}</p>
        <p className="text-lg">Payment Status: {packageDetails.paymentStatus}</p>
        <p className="text-lg">Package Duration: {packageDetails.packageDuration} days</p>
      </div>

      <div className="border-b pb-4 mb-4">
        <h2 className="text-xl font-semibold mb-2">Features:</h2>
        <ul className="list-disc pl-6">
          {packageDetails.features.map((feature, index) => (
            <li key={index} className="text-lg">{feature}</li>
          ))}
        </ul>
      </div>

      <div className="border-b pb-4 mb-4">
        <p className="text-lg">Job Post Limit: {packageDetails.jobPostLimit}</p>
        <p className="text-lg">Advertising Limit: {packageDetails.advertisingLimit}</p>
        <p className="text-lg">Resume Views: {packageDetails.resumeViews}</p>
      </div>

      <div className="text-center mt-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={() => navigate(-1)}
        >
          Back to Packages
        </button>
      </div>
    </div>
  );
};

export default PackageDetails;

