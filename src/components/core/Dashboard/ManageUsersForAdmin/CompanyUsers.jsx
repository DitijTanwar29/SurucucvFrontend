import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  Typography,
  Chip,
} from "@material-tailwind/react";
import {
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import {
  getAllCompanies,
  toggleCompanyStatus,
} from "../../../../services/operations/profileAPI";

const CompanyUsers = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    fetchCompanies();
  }, []);

  const fetchCompanies = async () => {
    const data = await getAllCompanies();
    setCompanies(Array.isArray(data) ? data : []);
    console.log("get all companies result : ", data);
  };

  const handleToggle = async (companyId, currentStatus) => {
    const newStatus = currentStatus === "Active" ? "Restricted" : "Active";
    const data = { userId: companyId, newStatus };
    await toggleCompanyStatus(data);
    fetchCompanies();
  };

  return (
    <div className="mt-10">
      <Typography variant="h4" className="mb-6">
        Company Profiles
      </Typography>

      <Card className="shadow-lg border">
        <CardBody className="overflow-x-auto p-0">
          <Table className="rounded-xl border bg-purple-700 rounded-t-md border-purple-700 ">
            <Thead>
              <Tr className="flex gap-x-28 items-center text-center rounded-t-md border-b border-b-purple-700 px-6 py-2">
                <Th className="text-left text-sm font-semibold bg-transparent uppercase text-richblack-5">Company Title</Th>
                <Th className="text-left text-sm font-semibold bg-transparent uppercase text-richblack-5">Email</Th>
                <Th className="text-left text-sm font-semibold bg-transparent uppercase text-richblack-5">Sector</Th>
                <Th className="text-left text-sm font-semibold bg-transparent uppercase text-richblack-5">Status</Th>
                <Th className="text-left text-sm font-semibold bg-transparent uppercase text-richblack-5">Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {companies.map((company) => (
                <Tr
                  key={company._id}
                  className="flex gap-x-16 justify-between border-b border-purple-700 px-6 py-8 bg-richblack-25"
                >
                  <Td className="text-sm font-semibold text-richblack-900">
                    {company.companyDetails?.companyTitle || "No Title"}
                  </Td>
                  <Td className="text-sm font-semibold text-richblack-900">{company.email}</Td>
                  <Td className="text-sm font-semibold text-richblack-900">
                    {company.companyDetails?.sector || "No Sector"}
                  </Td>
                  <Td className="text-sm font-semibold text-richblack-900">
                    <Chip
                      size="sm"
                      value={company.status}
                      className={`w-fit ${
                              company.status === "Active"
                              ? "bg-caribbeangreen-500  text-white"
                              : "text-white bg-red-500"
                            }`}
                    />
                  </Td>
                  <Td className="text-lg font-semibold text-richblack-900">
                    <button
                      className={`text-sm px-3 py-1 rounded border ${
                        company.status === "Active"
                          ? "text-red-500 border-red-500 hover:bg-red-50"
                          : "text-caribbeangreen-500 border-caribbeangreen-500 hover:bg-green-50"
                      }`}
                      onClick={() =>
                        handleToggle(company._id, company.status)
                      }
                    >
                      {company.status === "Active" ? "Restrict" : "Set Active"}
                    </button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
};

export default CompanyUsers;
