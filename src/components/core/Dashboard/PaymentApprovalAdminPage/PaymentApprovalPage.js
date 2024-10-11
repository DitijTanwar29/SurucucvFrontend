// import React, { useEffect, useState } from "react";
// import { getCompaniesWithRequestedStatus } from "../../../../services/operations/packageAPI";
// import { Table, Tbody, Tr, Th, Td } from "react-super-responsive-table";
// import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
// import PackagePaymentStatusToggle from './PackagePaymentStatusToggle'; // Import the toggle component

// const PaymentApprovalPage = () => {
//   const [companies, setCompanies] = useState([]);

//   // Fetch companies with payment status 'Requested'
//   useEffect(() => {
//     const fetchCompanies = async () => {
//       try {
//         const result = await getCompaniesWithRequestedStatus();
//         setCompanies(Array.isArray(result) ? result : []); // Ensure result is an array
//       } catch (error) {
//         console.error("Error fetching companies:", error);
//         setCompanies([]); // Set to empty array in case of error
//       }
//     };
//     fetchCompanies();
//   }, []);

//   return (
//     <div className="container mx-auto p-6">
//       <h4 className="text-2xl font-bold mb-4">Approve Payment Requests</h4>
//       <Table className="w-full">
//         <thead>
//           <Tr>
//             <Th>Company Name</Th>
//             <Th>Package Name</Th>
//             <Th>Status</Th>
//             <Th>Action</Th>
//           </Tr>
//         </thead>
//         <Tbody>
//           {companies.map((company) => (
//             <Tr key={company._id}>
//               <Td>{company.name}</Td>
//               <Td>{company.packageName || 'N/A'}</Td> {/* Display package name */}
//               <Td>{company.paymentStatus}</Td>
//               <Td>
//                 <PackagePaymentStatusToggle
//                   pack={{ _id: company.package, status: company.paymentStatus, companyId: company._id }}
//                 />
//               </Td>
//             </Tr>
//           ))}
//         </Tbody>
//       </Table>
//     </div>
//   );
// };

// export default PaymentApprovalPage;


import React, { useEffect, useState } from "react";
import { getCompaniesWithRequestedStatus, approvePaymentRequest, fetchPackageDetails, rejectPaymentRequest } from "../../../../services/operations/packageAPI";
import { Table, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

const PaymentApprovalPage = () => {
  const [companies, setCompanies] = useState([]);
  const [packId, setPackId] = useState()
  const [pack, setPack] = useState()
  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const result = await getCompaniesWithRequestedStatus();
        // Ensure the result is an array, if not default it to an empty array
        setCompanies(Array.isArray(result) ? result : []);
      } catch (error) {
        console.error("Error fetching companies:", error);
        setCompanies([]); // Set to an empty array in case of error
      }
    };
    fetchCompanies();
  }, []);

  useEffect(() => {
    const fetchPackageDetail = async () => {
      const result = await fetchPackageDetails(packId)
      console.log("result : ",result);
      if (result) {
        setPack(result)
      }
    }
    fetchPackageDetail()
    // eslint-disable-next-line react-hooks/exhaustive-deps
}, [])
  console.log("pack name aaya kya : ",pack)

  const handleApprovePayment = async (companyId, packageId) => {

    console.log("package id inside handle func ",packageId)
    setPackId(packageId)
    try {
      await approvePaymentRequest(companyId, packageId);
      alert("Payment approved, company enrolled!");
      setCompanies(companies.filter(c => c._id !== companyId)); // Remove the approved company from the list
    } catch (error) {
      console.error("Error approving payment:", error);
    }
  };

      // Function to handle payment rejection
    const handleRejectPayment = async (companyId, packageId) => {
      try {
        // Call the backend to pop the package and update the payment status to 'Rejected'
        await rejectPaymentRequest(companyId, packageId);

        // // Alert the admin about the rejection
        // alert("Payment rejected, company notified!");

        // Remove the rejected company from the list
        setCompanies(companies.filter(c => c._id !== companyId));
      } catch (error) {
        console.error("Error rejecting payment:", error);
      }
    };
    


  return (
    <div className="container mx-auto p-6 lg:mt-20 mb-14">
      <h1 className="text-3xl font-medium text-black text-center mb-10">Approve Payment Requests</h1>
      <Table className="rounded-xl border bg-black/55 rounded-t-md border-richblack-800 ">
        <thead>
          <Tr className="flex gap-x-28 items-center rounded-t-md border-b border-b-richblack-800 px-6 py-2">
            <Th className="text-center text-sm font-semibold  uppercase text-richblack-5 bg-transparent">Company Name</Th>
            <Th className="text-center text-sm font-semibold  uppercase text-richblack-5 bg-transparent">Package Id</Th>
            <Th className="text-center text-sm font-semibold  uppercase text-richblack-5 bg-transparent">Status</Th>
            <Th className="text-center text-sm font-semibold  uppercase text-richblack-5 bg-transparent">Action</Th>
            
          </Tr>
        </thead>
        <Tbody>
        {companies?.length === 0 ? (
            <Tr className="bg-richblack-200">
              <Td className="py-10 text-center text-2xl font-semibold text-richblack-5">
                No companies found with payment approval request
                {/* TODO: Need to change this state */}
              </Td>
            </Tr>
            ) : (

          companies.map((company) => (
            <Tr key={company._id} className="flex gap-x-1 border-b border-richblack-800 px-6 py-8 bg-richblack-200 justify-between"
>
              <Td className="text-lg font-semibold text-richblack-5 text-center">{company.name}</Td>
              <Td className="text-lg font-semibold text-richblack-5 text-center">Pack Id - {company?.package?.[0]}</Td>
              <Td className="text-lg font-semibold text-richblack-5 text-center">{company.paymentStatus}</Td>
            
              <Td>
                <button
                  className="bg-caribbeangreen-500 text-white py-1 px-3 rounded"
                  onClick={() => handleApprovePayment(company._id, company.package)}
                >
                  Approve
                </button>

                <button
                  className="bg-red-500 text-white py-1 px-3 rounded"
                  onClick={() => handleRejectPayment(company._id, company.package)}
                >
                  Reject
                </button>
              </Td>
            </Tr>
          ))
          )}
        </Tbody>
      </Table>
    </div>
  );
};

export default PaymentApprovalPage;
