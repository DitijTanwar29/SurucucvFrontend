import React from 'react';
import { FaPhoneAlt, FaMobileAlt, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import Footer from '../Pages/Footer/Footer'
const Contact = () => {
  return (
    <div>
    <div className="min-h-screen bg-gray-100 mt-5 flex flex-col items-center py-10 px-4">
      <div className="max-w-5xl w-full bg-white rounded-lg shadow-md p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
          <form className="space-y-4">
            <input type="text" placeholder="Your Name and Surname" className="w-full p-3 border rounded" />
            <input type="email" placeholder="Your Email Address" className="w-full p-3 border rounded" />
            <input type="text" placeholder="Your Phone Number" className="w-full p-3 border rounded" />
            <input type="text" placeholder="Subject" className="w-full p-3 border rounded" />
            <textarea placeholder="Write your message here" className="w-full p-3 border rounded h-32"></textarea>
            <button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white p-3 rounded">
              SEND MESSAGE
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col justify-center space-y-5">
          <div className="flex items-center space-x-3">
            <MdLocationOn className="text-purple-600 text-xl" />
            <div>
              <p className="font-semibold">Address</p>
              <p>Pendik/Istanbul</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <FaPhoneAlt className="text-purple-600 text-xl" />
            <div>
              <p className="font-semibold">Landline Phone</p>
              <p>+90 (216) 606 61 34</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <FaMobileAlt className="text-purple-600 text-xl" />
            <div>
              <p className="font-semibold">Mobile Phone</p>
              <p>+90 (532) 240 62 28</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <FaEnvelope className="text-purple-600 text-xl" />
            <div>
              <p className="font-semibold">Email Address</p>
              <p>info@surucucv.com</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <FaWhatsapp className="text-purple-600 text-xl" />
            <div>
              <p className="font-semibold">Whatsapp</p>
              <p>+90 (532) 240 62 28</p>
            </div>
          </div>
        </div>
      </div>
    </div>
      <Footer/>
    </div>
  );
};

export default Contact;
