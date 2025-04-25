// import React, { useEffect, useState } from "react";
// import { Card, CardBody, Typography, Switch, Chip } from "@material-tailwind/react";
// import { getAllCompanies, toggleCompanyStatus } from "../../../../services/operations/profileAPI"; // adjust paths

// const CompanyUsers = () => {
//   const [companies, setCompanies] = useState([]);

//   useEffect(() => {
//     fetchCompanies();
//   }, []);

//   const fetchCompanies = async () => {
//     const data = await getAllCompanies(); // should return list with status
//     setCompanies(data);
//     console.log("get all companies result : ",companies)
//   };

//   const handleToggle = async (companyId, currentStatus) => {
//     const newStatus = currentStatus === "Approved" ? "Restricted" : "Approved";
//     const data = {userId:companyId,newStatus:currentStatus}
//     await toggleCompanyStatus(data); // backend should update status
//     fetchCompanies();
//   };

//   return (
//     <div className="p-6">
//       <Typography variant="h4" className="mb-4">Company Profiles</Typography>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {companies.map((company) => (
//           <Card key={company._id} className="shadow-lg border">
//             <CardBody>
//               <Typography variant="h6" className="text-grey-600">{company.companyDetails.companyTitle}</Typography>
//               <Typography className="text-sm text-gray-600">{company.email}</Typography>
//               <Typography className="text-sm mt-1">{company.companyDetails.sector}</Typography>
//               <div className="mt-3 flex items-center justify-between">
//                 <Chip
//                   value={company.status}
//                   color={company.status === "Approved" ? "green" : "red"}
//                   size="sm"
//                 />
//                 <Switch
//                   color="purple"
//                   checked={company.status === "Approved"}
//                   onChange={() => handleToggle(company._id, company.status)}
//                 />
//               </div>
//             </CardBody>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CompanyUsers;


import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  Typography,
  Chip,
} from "@material-tailwind/react";
import { getAllCompanies, toggleCompanyStatus } from "../../../../services/operations/profileAPI";

const CompanyUsers = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    fetchCompanies();
  }, []);

  const fetchCompanies = async () => {
    const data = await getAllCompanies();
    setCompanies(data);
    console.log("get all companies result : ", data);
  };

  const handleToggle = async (companyId, currentStatus) => {
    const newStatus = currentStatus === "Active" ? "Restricted" : "Active";
    const data = { userId: companyId, newStatus };
    await toggleCompanyStatus(data);
    fetchCompanies();
  };

  return (
    <div className="p-6 mt-10">
      <Typography variant="h4" className="mb-4">
        Company Profiles
      </Typography>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {companies.map((company) => {
          const isActive = company.status === "Active";
          return (
            <Card key={company._id} className="shadow-lg border">
              <CardBody>
                <Typography variant="h6" className="text-gray-800">
                  {company.companyDetails?.companyTitle || "No Title"}
                </Typography>
                <Typography className="text-sm text-gray-600">{company.email}</Typography>
                <Typography className="text-sm mt-1">
                  {company.companyDetails?.sector || "No Sector"}
                </Typography>
                <div className="mt-4">
  {company.status === "Restricted" ? (
    <div className="flex items-center gap-2 text-center">
      <span className="bg-red-500 w-28 text-white font-bold px-2 py-1 rounded text-sm">RESTRICTED</span>
      <button
        className="border w-24 border-red-500 text-red-500 px-3 py-1 rounded hover:bg-red-100 text-sm"
        onClick={() => handleToggle(company._id, company.status)}
      >
        Set Active
      </button>
    </div>
  ) : (
    <div className="flex items-center gap-2 text-center">
      <span className="bg-caribbeangreen-500 w-28 font-bold text-white px-2 py-1 rounded text-sm">ACTIVE</span>
      <button
        className="border border-caribbeangreen-500 w-24 text-caribbeangreen-500 px-3 py-1 rounded hover:bg-caribbeangreen-25 text-sm"
        onClick={() => handleToggle(company._id, company.status)}
      >
        Restrict
      </button>
    </div>
  )}
</div>

              </CardBody>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default CompanyUsers;

