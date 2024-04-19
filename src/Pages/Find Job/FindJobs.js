// import React from "react";
// import Card from "react-bootstrap/Card";

// const CardFindJob = () => {
//   return (
//     // <>
//     //   <div>
//     //     <section id="portfolio" className="section-bg">
//     //       <div className="container">
//     //         <header className="section-header">
//     //           <h3 className="section-title " style={{ textAlign: "center" }}>
//     //             {" "} Showcase Job Postings{" "}
//     //           </h3>
//     //         </header>
//     //         <div className="row portfolio-container">
//     //           <div className="col-lg-4 col-md-6 portfolio-item filter-app wow fadeInUp">
//     //             <div className="portfolio-wrap">
//     //               <Card>
//     //                 <Card.Body>
//     //                   <Card.Title>Card Title</Card.Title>
//     //                   <Card.Subtitle className="mb-2 text-muted">
//     //                     Card Subtitle
//     //                   </Card.Subtitle>
//     //                   <Card.Text>
//     //                     Some quick example text to build on the card title and
//     //                     make up the bulk of the card's content.
//     //                   </Card.Text>
//     //                   <Card.Link href="#">Card Link</Card.Link>
//     //                   <Card.Link href="#">Another Link</Card.Link>
//     //                 </Card.Body>
//     //               </Card>
//     //             </div>
//     //           </div>

//     //           <div
//     //             className="col-lg-4 col-md-6 portfolio-item filter-web wow fadeInUp"
//     //             data-wow-delay="0.1s"
//     //           >
//     //             <div className="portfolio-wrap">
//     //               <Card>
//     //                 <Card.Body>
//     //                   <Card.Title>Card Title</Card.Title>
//     //                   <Card.Subtitle className="mb-2 text-muted">
//     //                     Card Subtitle
//     //                   </Card.Subtitle>
//     //                   <Card.Text>
//     //                     Some quick example text to build on the card title and
//     //                     make up the bulk of the card's content.
//     //                   </Card.Text>
//     //                   <Card.Link href="#">Card Link</Card.Link>
//     //                   <Card.Link href="#">Another Link</Card.Link>
//     //                 </Card.Body>
//     //               </Card>
//     //             </div>
//     //           </div>

//     //           <div
//     //             className="col-lg-4 col-md-6 portfolio-item filter-app wow fadeInUp"
//     //             data-wow-delay="0.2s"
//     //           >
//     //             <div className="portfolio-wrap">
//     //               <Card>
//     //                 <Card.Body>
//     //                   <Card.Title>Card Title</Card.Title>
//     //                   <Card.Subtitle className="mb-2 text-muted">
//     //                     Card Subtitle
//     //                   </Card.Subtitle>
//     //                   <Card.Text>
//     //                     Some quick example text to build on the card title and
//     //                     make up the bulk of the card's content.
//     //                   </Card.Text>
//     //                   <Card.Link href="/">Card Link</Card.Link>
//     //                   <Card.Link href="#">Another Link</Card.Link>
//     //                 </Card.Body>
//     //               </Card>
//     //             </div>
//     //           </div>

//     //           <div className="col-lg-4 col-md-6 portfolio-item filter-card wow fadeInUp">
//     //             <div className="portfolio-wrap"></div>
//     //           </div>

//     //           <div
//     //             className="col-lg-4 col-md-6 portfolio-item filter-web wow fadeInUp"
//     //             data-wow-delay="0.1s"
//     //           >
//     //             <div className="portfolio-wrap">
//     //               <Card>
//     //                 <Card.Body>
//     //                   <Card.Title>Card Title</Card.Title>
//     //                   <Card.Subtitle className="mb-2 text-muted">
//     //                     Card Subtitle
//     //                   </Card.Subtitle>
//     //                   <Card.Text>
//     //                     Some quick example text to build on the card title and
//     //                     make up the bulk of the card's content.
//     //                   </Card.Text>
//     //                   <Card.Link href="#">Card Link</Card.Link>
//     //                   <Card.Link href="#">Another Link</Card.Link>
//     //                 </Card.Body>
//     //               </Card>
//     //             </div>
//     //           </div>

//     //           <div
//     //             className="col-lg-4 col-md-6 portfolio-item filter-card wow fadeInUp"
//     //             data-wow-delay="0.1s"
//     //           >
//     //             <div className="portfolio-wrap">
//     //               <Card>
//     //                 <Card.Body>
//     //                   <Card.Title>Card Title</Card.Title>
//     //                   <Card.Subtitle className="mb-2 text-muted">
//     //                     Card Subtitle
//     //                   </Card.Subtitle>
//     //                   <Card.Text>
//     //                     Some quick example text to build on the card title and
//     //                     make up the bulk of the card's content.
//     //                   </Card.Text>
//     //                   <Card.Link href="#">Card Link</Card.Link>
//     //                   <Card.Link href="#">Another Link</Card.Link>
//     //                 </Card.Body>
//     //               </Card>
//     //             </div>
//     //           </div>
//     //         </div>
//     //       </div>
//     //     </section>
//     //   </div>
//     // </>


//   );
// };

// export default CardFindJob;


import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllApprovedJobs } from '../../services/operations/jobPostAPI'; // Import the function to fetch all jobs

const FindJobs = () => {
  const [jobs, setJobs] = useState([]);
  console.log("jobs: ", jobs)
  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllApprovedJobs(); // Fetch all jobs from the backend
      console.log("jobs data from backend api : ",data)
      setJobs(data);
    };
    fetchData();
  }, []);

  return (
    <div className="w-full mx-auto  p-5">
      <h1 className="text-3xl font-bold text-center mb-8">Find Jobs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
        {jobs.map(job => (
          <Link to={`/job/${job._id}`} key={job._id}>
            <div className="bg-orange-400 text-pure-greys-900 mx-auto shadow-md rounded-lg overflow-hidden">
              <div className="p-4">
                <h2 className="text-lg font-bold mb-2">{job.jobTitle}</h2>
                <p className="text-sm text-gray-600 mb-2">{job.companyName}</p>
                <p className="text-sm text-gray-600 mb-2">Salary Range: {job.rangeOfSalary}</p>
                {/* Add other important fields here */}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FindJobs;