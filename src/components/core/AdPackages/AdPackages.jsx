import { useEffect, useState } from "react"
import { VscAdd } from "react-icons/vsc"
import AdPackageCard from "./AdPackageCard"
import { getAllPackages } from "../../../services/operations/packageAPI"

export default function AdPackages() {

  const [packages, setPackages] = useState([])

  useEffect(() => {
    const fetchPackages = async () => {
      const result = await getAllPackages()
      console.log("packages api result : ",result);
      if (result) {
        setPackages(result)
      }
    }
    fetchPackages()
    // eslint-disable-next-line react-hooks/exhaustive-deps
}, [])

  return (
    <div className="mb-14 lg:mt-24 flex flex-col items-center justify-center">
  <h1 className="text-3xl font-medium text-black">Ad Packages</h1>

  {/* Grid container with max-width */}
  <div className="mt-5 w-full flex justify-center">
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-x-12 max-w-7xl px-4 place-items-center">
      {packages.map((pkg) => (
        <AdPackageCard key={pkg._id} pkg={pkg} />
      ))}
    </div>
  </div>
</div>

  )
}
