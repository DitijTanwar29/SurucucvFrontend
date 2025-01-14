import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

const footerData = [
  {
    title: "Quick Links",
    links: [
      { text: "Home Page", path: "/" },
      { text: "About Us", path: "/about" },
      { text: "Privacy Policy", path: "/privacy" },
      { text: "Term of Services", path: "/privacy" },
      { text: "Corporate Communication", path: "/" },
    ],
  },
  {
    title: "Popular Links",
    links: [
      { text: "FAQ", path: "/faq" },
      { text: "Vision", path: "/vision" },
      { text: "DriverCV", path: "/" },
      { text: "Communication", path: "/" },
      { text: "Our Publication", path: "/our-publication" },
    ],
  },
  {
    title: "Contact Us",
    content: (
      <>
        <p className='text-lg font-rubik-medium'>
          123 Street, <br />
          New York, USA<br />
          <span>Phone:</span> <span className='font-rubik-light'> 987654321 </span> <br />
          <span>Email:</span>  <span className='font-rubik-light'> info@example.com </span><br />
        </p>
        <div className="w-full flex justify-start items-center ">
          <Link href="/"><FaFacebookSquare className='size-8 text-purple-700' /></Link>
          <Link href="/"><FaInstagramSquare className='size-8 text-purple-700' /></Link>
          <Link href="/"><CiLinkedin className='size-8 text-purple-700' /></Link>
        </div>
      </>
    ),
  },
  {
    title: "Our Newsletter",
    content: (
      <>
        <p className='text-lg font-rubik-medium '>
          As We Step Into A New Month Filled With Promise And Opportunities, We're Thrilled To Bring You The Latest Edition Of Our Newsletter. SURUCUCV..
        </p>
        <form
          action=""
          method="post"
          className='w-full flex flex-col gap-y-4 mt-8'
        >
          <input
            type="email"
            name="email"
            placeholder='Enter your email '
            className='outline-none border-none ring-2 ring-purple-400 text-lg font-rubik-medium px-2 py-1 rounded-lg'
          />
          <button
            type='submit'
            className='px-3 py-1.5 rounded-lg text-lg bg-purple-700 text-white'
          >
            Subscribe
          </button>
        </form>
      </>
    ),
  },
];

const Footer = () => {
  return (
    <footer className='w-full flex bg-white px-6 flex-col '>
      <div className="w-full mt-4">
        <div className="w-full grid lg:grid-cols-4  md:grid-cols-2 ms:grid-cols-1 gap-y-12">
          {footerData.map((section, index) => (
            <div key={index} className="flex flex-1 flex-col justify-start items-start  px-8">
              <h4 className='font-rubik-bold text-2xl '>{section.title}</h4>
              {section.links ? (
                <div className='flex flex-col justify-start items-start  gap-y-2'>
                  {section.links.map((link, idx) => (
                    <div key={idx} className='flex justify-start items-start list-none '>
                      <Link href={link.href} className='no-underline text-lg font-rubik-medium text-purple-700'>{link.text}</Link>
                    </div>
                  ))}
                </div>
              ) : (
                section.content
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="w-full h-[60px]  flex justify-center items-center">
          <span className='text-sm font-rubik-medium'>&copy; Copyright <span className='font-rubik-extrabold'>Surucucv</span>. All Rights Reserved by Zcorp</span>
      </div>
    </footer>
  );
};

export default Footer;
