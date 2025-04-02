import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  fetchCompanyPackages,
  unenrollCompanyFromPackage,
} from "../../../../services/operations/profileAPI";
import { useSelector } from "react-redux";
import { Table, Tbody, Td, Th, Thead, Tr } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

const PackagesForCompany = () => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.profile);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const response = await fetchCompanyPackages({
          companyId: user?.companyDetails?._id,
        });

        const requestedPackages = response?.requestedPackages || [];
        const approvedPackages = response?.packages || [];

        // Merge requested and approved packages
        const allPackages = [...requestedPackages, ...approvedPackages];
        setPackages(allPackages);
      } catch (error) {
        console.error("Error fetching packages:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPackages();
  }, [user?.companyDetails?._id]);

  const handleRowClick = (packageId) => {
    navigate(`package-details/${packageId}`);
  };

  const handleUnenroll = async (packageId) => {
    try {
      setLoading(true);
      const response = await unenrollCompanyFromPackage({
        companyId: user?.companyDetails?._id,
        packageId,
      });

      if (response?.data?.success) {
        setPackages((prevPackages) =>
          prevPackages.filter((pkg) => pkg._id !== packageId)
        );
        console.log("Unenrolled successfully:", response?.data?.message);
      }
    } catch (error) {
      console.error("Error during unenrollment:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <p className="text-center text-gray-600">Loading packages...</p>;
  }

  return (
    <div className="mx-auto p-6 lg:mt-8">
      <h1 className="text-2xl font-bold mb-4 text-center">Company Packages</h1>

      
        <Table className="rounded-xl border bg-purple-700 border-purple-700">
          <Thead>
            <Tr className="flex gap-x-28 items-center border-b border-purple-700 px-6 py-2">
              <Th className="text-center text-sm font-semibold uppercase text-richblack-5">
                Package Name
              </Th>
              <Th className="text-center text-sm font-semibold uppercase text-richblack-5">
                Package Price
              </Th>
              <Th className="text-center text-sm font-semibold uppercase text-richblack-5">
                Discounted Price
              </Th>
              <Th className="text-center text-sm font-semibold uppercase text-richblack-5">
                Payment Status
              </Th>
              <Th className="text-center text-sm font-semibold uppercase text-richblack-5">
                Date
              </Th>
              <Th className="text-center text-sm font-semibold uppercase text-richblack-5">
                Action
              </Th>
            </Tr>
          </Thead>
          <Tbody>
          {packages.length === 0 ? (
        <Tr className="text-center container mx-auto p-6 bg-richblack-25">
        <Td>

          <p className="py-10 text-center text-2xl font-semibold text-richblack-900">
            No packages found. Please request or purchase a package to get
            started.
          </p>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={() => navigate("/packages")}
          >
            View Packages
          </button>
        </Td>
        </Tr>
      ) : (
            packages.map((pkg) => (
              <Tr
                key={pkg._id}
                className="flex justify-between items-center gap-x-6 border-b border-purple-700 px-3 py-8 bg-richblack-25"
              >
                <Td>
                  <p className="text-lg font-semibold text-richblack-900 text-center">
                    {pkg.packageName}
                  </p>
                </Td>
                <Td>
                  <p className="text-lg font-semibold text-richblack-900 text-center">
                    {pkg.packagePrice}
                  </p>
                </Td>
                <Td>
                  <p className="text-lg font-semibold text-richblack-900 text-center">
                    {pkg.discountedPrice}
                  </p>
                </Td>
                <Td>
                  <p className="text-lg font-semibold text-richblack-900 text-center">
                    {pkg.paymentStatus}
                  </p>
                </Td>
                <Td>
                  <p className="text-lg font-semibold text-richblack-900 text-center">
                    {pkg.paymentStatus === "Requested"
                      ? new Date(pkg.createdAt).toLocaleDateString()
                      : new Date(pkg.approvedDate).toLocaleDateString()}
                  </p>
                </Td>
                <Td className="flex gap-2 justify-center items-center">
                  <button
                    disabled={loading}
                    onClick={() => handleRowClick(pkg._id)}
                    className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
                  >
                    View Details
                  </button>
                  {pkg.paymentStatus !== "Requested" && (
                    <button
                      disabled={loading}
                      onClick={() => handleUnenroll(pkg._id)}
                      className="px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600"
                    >
                      Unenroll
                    </button>
                  )}
                </Td>
              </Tr>
            ))
      )}
          </Tbody>
        </Table>
      
    </div>
  );
};

export default PackagesForCompany;
