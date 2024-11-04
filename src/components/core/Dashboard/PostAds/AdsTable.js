// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchAllAds, deleteAd } from "../../../../services/operations/adsAPI";
// import { useNavigate } from "react-router-dom";
// import { FaEdit, FaTrash } from "react-icons/fa";

// export default function AdsTable(ad, setAds) {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   // const { ads } = useSelector((state) => state.ad);

//   // console.log("ads log : ",ad)
//   useEffect(() => {
//     dispatch(fetchAllAds());
//   }, [dispatch]);

//   const handleDelete = (adId) => {
//     dispatch(deleteAd(adId));
//   };

//   const handleRedirect = (adId) => {
//     navigate(`/ad-details/${adId}`);
//   };

//   return (
//     <table className="w-full text-left">
//       <thead>
//         <tr>
//           <th className="p-4 border-b">Ad Title</th>
//           <th className="p-4 border-b">Start Date</th>
//           <th className="p-4 border-b">End Date</th>
//           <th className="p-4 border-b">Package Name</th>
//           <th className="p-4 border-b">Actions</th>
//         </tr>
//       </thead>
//       <tbody>
//         {ad.map((item) => (
//           <tr key={item._id} className="hover:bg-gray-100 cursor-pointer" onClick={() => handleRedirect(ad._id)}>
//             <td className="p-4">{item.title}</td>
//             <td className="p-4">{new Date(item.startDate).toLocaleDateString()}</td>
//             <td className="p-4">{new Date(item.endDate).toLocaleDateString()}</td>
//             <td className="p-4">{item.package.name}</td>
//             <td className="p-4 flex gap-2">
//               <button className="text-blue-500 hover:text-blue-700">
//                 <FaEdit />
//               </button>
//               <button onClick={() => handleDelete(item._id)} className="text-red-500 hover:text-red-700">
//                 <FaTrash />
//               </button>
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// }


import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { deleteAd } from "../../../../services/operations/adsAPI";
import { useNavigate } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";

export default function AdsTable({ ads, setAds }) { // Updated to destructure props
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = (adId) => {
    dispatch(deleteAd(adId));
  };

  const handleRedirect = (adId) => {
    navigate(`/dashboard/ad-details/${adId}`);
  };

  return (
    <table className="w-full text-left">
      <thead>
        <tr>
          <th className="p-4 border-b">Ad Title</th>
          <th className="p-4 border-b">Start Date</th>
          <th className="p-4 border-b">End Date</th>
          <th className="p-4 border-b">Package Name</th>
          <th className="p-4 border-b">Actions</th>
        </tr>
      </thead>
      <tbody>
        {ads.map((item) => (
          <tr key={item._id} className="hover:bg-gray-100 cursor-pointer" onClick={() => handleRedirect(item._id)}>
            <td className="p-4">{item.title}</td>
            <td className="p-4">{new Date(item.startDate).toLocaleDateString()}</td>
            <td className="p-4">{new Date(item.endDate).toLocaleDateString()}</td>
            <td className="p-4">{item.package.name}</td>
            <td className="p-4 flex gap-2">
              <button className="text-blue-500 hover:text-blue-700">
                <FaEdit />
              </button>
              <button onClick={() => handleDelete(item._id)} className="text-red-500 hover:text-red-700">
                <FaTrash />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
