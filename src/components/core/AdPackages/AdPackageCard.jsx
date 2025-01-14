import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom"

  function CheckIcon() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="h-3 w-3"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 12.75l6 6 9-13.5"
        />
      </svg>
    );
  }
  
  export default function AdPackageCard({ pkg }) {
    const {
      packageName,
      packagePrice,
      discountedPrice,
      features,
      jobPostLimit,
      advertisingLimit,
      status,
      packageDuration,
      resumeViews,
    } = pkg;
  
  const navigate = useNavigate()

    const handleBuyNow = () => {
      navigate(`/payment/${pkg._id}`); // Redirect to payment page with package ID
    };
    
    return (
      <Card color="gray" variant="gradient" className="w-full max-w-[20rem] p-8  bg-richblack-900">
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
        >
          <Typography
            variant="small"
            color="white"
            className="font-normal uppercase"
          >
            {packageName}
          </Typography>
          <Typography
            variant="h1"
            color="white"
            className="mt-6 flex justify-center gap-1 text-5xl font-normal"
          >
            {discountedPrice > 0 ? (
              <>
                <span className="line-through text-3xl text-red-200">${packagePrice}</span>{" "}
                <span className="text-caribbeangreen-400">${discountedPrice}</span>
              </>
            ) : (
              <span>${packagePrice}</span>
            )}
          </Typography>
        </CardHeader>
        <CardBody className="p-0">
          <ul className="flex flex-col gap-4">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-4">
                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                  <CheckIcon />
                </span>
                <Typography className="font-normal">Package Duration : {packageDuration}</Typography>
              </li>
            ))}
            <li className="flex items-center gap-4">
              <span className="rounded-full border border-white/20 bg-white/20 p-1">
                <CheckIcon />
              </span>
              <Typography className="font-normal">
                Job Post Limit: {jobPostLimit}
              </Typography>
            </li>
            <li className="flex items-center gap-4">
              <span className="rounded-full border border-white/20 bg-white/20 p-1">
                <CheckIcon />
              </span>
              <Typography className="font-normal">
                Advertising Limit: {advertisingLimit}
              </Typography>
            </li>
            <li className="flex items-center gap-4">
              <span className="rounded-full border border-white/20 bg-white/20 p-1">
                <CheckIcon />
              </span>
              <Typography className="font-normal">
                Resume Views: {resumeViews}
              </Typography>
            </li>
          </ul>
        </CardBody>
        <CardFooter className="mt-12 p-0">
          <Button
            size="lg"
            color="white"
            className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100 h-12 text-gray-600"
            ripple={false}
            fullWidth={true}
            onClick={handleBuyNow}
          >
            Buy Now
          </Button>
        </CardFooter>
      </Card>
    );
  }
  