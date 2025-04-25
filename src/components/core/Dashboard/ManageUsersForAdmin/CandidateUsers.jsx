import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  Typography,
  Chip,
} from "@material-tailwind/react";
import {
  getAllCandidates,
  toggleCandidateStatus,
} from "../../../../services/operations/profileAPI";

const CandidateUsers = () => {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    fetchCandidates();
  }, []);

  const fetchCandidates = async () => {
    const data = await getAllCandidates();
    setCandidates(data);
  };

  const handleToggle = async (candidateId, currentStatus) => {
    const newStatus = currentStatus === "Active" ? "Restricted" : "Active";
    await toggleCandidateStatus({ userId: candidateId, newStatus });
    fetchCandidates();
  };

  return (
    <div className="p-6 mt-10">
      <Typography variant="h4" className="mb-4">
        Candidate Profiles
      </Typography>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {candidates.map((candidate) => (
          <Card key={candidate._id} className="shadow-lg border">
            <CardBody>
              <Typography variant="h6" className="text-gray-800">
                {candidate.fullName || "No Name"}
              </Typography>
              <Typography className="text-sm text-gray-600">
                {candidate.email}
              </Typography>
              <Typography className="text-sm mt-1">
                {candidate.phone || "No Phone"}
              </Typography>

              <div className="mt-4">
                {candidate.status === "Restricted" ? (
                  <div className="flex items-center gap-2 text-center">
                    <span className="bg-red-500 w-28 font-bold text-white px-2 py-1 rounded text-sm">
                      RESTRICTED
                    </span>
                    <button
                      className="border w-24 border-red-500 text-red-500 px-3 py-1 rounded hover:bg-red-100 text-sm"
                      onClick={() => handleToggle(candidate._id, candidate.status)}
                    >
                      Set Active
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 text-center">
                    <span className="bg-caribbeangreen-500 w-28 text-white px-2 py-1 font-bold rounded text-sm">
                      ACTIVE
                    </span>
                    <button
                      className="border w-24 border-green-500 text-caribbeangreen-500 px-3 py-1 rounded hover:bg-caribbeangreen-25 text-sm"
                      onClick={() => handleToggle(candidate._id, candidate.status)}
                    >
                      Restrict
                    </button>
                  </div>
                )}
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CandidateUsers;
