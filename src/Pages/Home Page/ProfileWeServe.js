import React from 'react'
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { getAllServices } from "../../services/operations/serviceDetailsAPI"

const ProfileWeServe = () => {

  const [services, setServices] = useState([])

  useEffect(() => {
    const fetchServices = async () => {
      const result = await getAllServices()
      console.log("result : ",result);
      if (result) {
        setServices(result)
      }
    }
    fetchServices()
    // eslint-disable-next-line react-hooks/exhaustive-deps
}, [])
  return (
    <div>
        <section id="services">
      <div className="container">

        <header className="section-header wow fadeInUp">
          <h3 style={{textAlign:"center"}}> Profile We Serve</h3>
          <p>Laudem latine persequeris id sed, ex fabulas delectus quo. No vel partiendo abhorreant vituperatoribus, ad pro quaestio laboramus. Ei ubique vivendum pro. At ius nisl accusam lorenta zanos paradigno tridexa panatarel.</p>
        </header>

        <div className="row">

<div>

         
</div>
          <div className="col-lg-4 col-md-6 box wow bounceInUp" data-wow-duration="1.4s">
            <div className="icon"><i className="ion-ios-analytics-outline"></i></div>
            <h4 className="title"><a href="/">A1 BIKE DRIVER</a></h4>
            <p className="description"> A1 BIKE Driver Services</p>
          </div>
          <div className="col-lg-4 col-md-6 box wow bounceInUp" data-wow-duration="1.4s">
            <div className="icon"><i className="ion-ios-bookmarks-outline"></i></div>
            <h4 className="title"><a href="/">CAR DRIVER</a></h4>
            <p className="description"> Car Driver Services</p>
          </div>
          <div className="col-lg-4 col-md-6 box wow bounceInUp" data-wow-duration="1.4s">
            <div className="icon"><i className="ion-ios-paper-outline"></i></div>
            <h4 className="title"><a href="/"> JCB DRIVER</a></h4>
            <p className="description">JCB Driver Services</p>
          </div>
          <div className="col-lg-4 col-md-6 box wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s">
            <div className="icon"><i className="ion-ios-speedometer-outline"></i></div>
            <h4 className="title"><a href="/">TRUCK DRIVER</a></h4>
            <p className="description"> Truck Driver Services</p>
          </div>
          <div className="col-lg-4 col-md-6 box wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s">
            <div className="icon"><i className="ion-ios-barcode-outline"></i></div>
            <h4 className="title"><a href="/">RICKSHAW DRIVER </a></h4>
            <p className="description">Rickshaw Driver Services</p>
          </div>
          <div className="col-lg-4 col-md-6 box wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s">
            <div className="icon"><i className="ion-ios-people-outline"></i></div>
            <h4 className="title"><a href="/"> TANKER DRIVER</a></h4>
            <p className="description"> Tanker Driver </p>
          </div>

        </div>

      </div>
    </section>
    </div>
  )

// return (
//   <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 p-4 bg-black">
//     {services.map((service, index) => (
//       <div
//         key={index}
//         className="bg-white rounded-lg shadow-md p-4"
//         // whileHover={{ scale: 1.05 }}
//         // whileTap={{ scale: 0.95 }}
//         // style={{ color: "#333" }}
//       >
//       <div>

//         <h2 className="text-xl text-orange-600 font-bold mb-2">{service.title}</h2>
//         <p className="text-pure-greys-700">{service.description}</p>
//       </div>
//       </div>
//     ))}
//   </div>
// );
}

export default ProfileWeServe