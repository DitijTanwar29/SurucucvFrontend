import React from "react";
import Footer from "../Pages/Footer/Footer";

const Contact = () => {
  return (
    <div>
      <section className="mt-20 lg:mt-28">
        <div className="max-w-5xl max-lg:max-w-3xl mx-auto bg-white my-6">
          <div className="text-center px-6">
            <p className="text-sm text-gray-500 mt-4">
              Have some big idea or brand to develop and need help?
            </p>
          </div>

          <div className="grid lg:grid-cols-3 items-start gap-4 p-2 rounded-lg mt-6">

            <div className="bg-[#43718a] rounded-lg p-6 h-full max-lg:order-1">
              <h2 className="text-2xl sm:text-xl text-white">Contact Information</h2>
              <p className="text-base sm:text-sm text-gray-300 mt-4">
                Have some big idea or brand to develop and need help?
              </p>

              <ul className="mt-8 sm:mt-16 space-y-6 sm:space-y-8">
                {/* Email Item */}
                <li className="flex items-center space-x-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill="#fff" viewBox="0 0 479.058 479.058">
                    <path d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z" />
                  </svg>
                  <a href="mailto:info@example.com" className="text-white text-sm sm:text-base">
                    info@example.com
                  </a>
                </li>

                {/* Phone Item */}
                <li className="flex items-center space-x-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill="#fff" viewBox="0 0 482.6 482.6">
                    <path d="M98.339 320.8c47.6 56.9 104.9 101.7 170.3 133.4 24.9 11.8 58.2 25.8 95.3 28.2 2.3.1 4.5.2 6.8.2 24.9 0 44.9-8.6 61.2-26.3.1-.1.3-.3.4-.5 5.8-7 12.4-13.3 19.3-20 4.7-4.5 9.5-9.2 14.1-14 21.3-22.2 21.3-50.4-.2-71.9l-60.1-60.1c-10.2-10.6-22.4-16.2-35.2-16.2-12.8 0-25.1 5.6-35.6 16.1l-35.8 35.8c-3.3-1.9-6.7-3.6-9.9-5.2-4-2-7.7-3.9-11-6-32.6-20.7-62.2-47.7-90.5-82.4-14.3-18.1-23.9-33.3-30.6-48.8 9.4-8.5 18.2-17.4 26.7-26.1 3-3.1 6.1-6.2 9.2-9.3 10.8-10.8 16.6-23.3 16.6-36s-5.7-25.2-16.6-36l-29.8-29.8c-3.5-3.5-6.8-6.9-10.2-10.4-6.6-6.8-13.5-13.8-20.3-20.1-10.3-10.1-22.4-15.4-35.2-15.4-12.7 0-24.9 5.3-35.6 15.5l-37.4 37.4c-13.6 13.6-21.3 30.1-22.9 49.2-1.9 23.9 2.5 49.3 13.9 80 17.5 47.5 43.9 91.6 83.1 138.7zm-72.6-216.6c1.2-13.3 6.3-24.4 15.9-34l37.2-37.2c5.8-5.6 12.2-8.5 18.4-8.5 6.1 0 12.3 2.9 18 8.7 6.7 6.2 13 12.7 19.8 19.6 3.4 3.5 6.9 7 10.4 10.6l29.8 29.8c6.2 6.2 9.4 12.5 9.4 18.7s-3.2 12.5-9.4 18.7c-3.1 3.1-6.2 6.3-9.3 9.4-9.3 9.4-18 18.3-27.6 26.8l-.5.5c-8.3 8.3-7 16.2-5 22.2.1.3.2.5.3.8 7.7 18.5 18.4 36.1 35.1 57.1 30 37 61.6 65.7 96.4 87.8 4.3 2.8 8.9 5 13.2 7.2 4 2 7.7 3.9 11 6 .4.2.7.4 1.1.6 3.3 1.7 6.5 2.5 9.7 2.5 8 0 13.2-5.1 14.9-6.8l37.4-37.4c5.8-5.8 12.1-8.9 18.3-8.9 7.6 0 13.8 4.7 17.7 8.9l60.3 60.2c12 12 11.9 25-.3 37.7-4.2 4.5-8.6 8.8-13.3 13.3-7 6.8-14.3 13.8-20.9 21.7-11.5 12.4-25.2 18.2-42.9 18.2-1.7 0-3.5-.1-5.2-.2-32.8-2.1-63.3-14.9-86.2-25.8-62.2-30.1-116.8-72.8-162.1-127-37.3-44.9-62.4-86.7-79-131.5-10.3-27.9-11.1-52.4-3.8-74.5 9.4-20.7 21.7-39.1 37.7-62.7 4.6 1.7 9.4 3.7 14.2 5.5 28.3 11.2 56.9 23.2 87.6 35.3 10.4 10.7 16.3 23.4 21.2 36.1 6.5 15.4 12.1 31.7 17.3 47.5zm218.8 134.1c1.5-6.5 3.5-13 6.1-19.5 10.5-22.3 23.2-43.1 37.7-62.7-4.9 1.4-9.7 3.2-14.3 5.2-28.7 11.3-57.8 23.2-89.8 35.7 1.1 1.5 2.3 3.1 3.5 4.6 27.6 36.7 47.8 74.1 62.9 108.3-7.5-6.5-13.8-14.5-18.2-23.5z" />
                  </svg>
                  <a href="tel:+1234567890" className="text-white text-sm sm:text-base">
                    +1 234 567 890
                  </a>
                </li>

                {/* Address Item */}
                <li className="flex items-center space-x-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill="#fff" viewBox="0 0 512 512">
                    <path d="M256 0c-70.7 0-128 57.3-128 128s57.3 128 128 128 128-57.3 128-128-57.3-128-128-128zm0 192c-35.3 0-64-28.7-64-64s28.7-64 64-64 64 28.7 64 64-28.7 64-64 64zm160 320c-39.2 0-64-32.8-64-72 0-16 12.8-28.8 28.8-28.8h70.4c16 0 28.8 12.8 28.8 28.8 0 39.2-24.8 72-64 72zm-320 0c-39.2 0-64-32.8-64-72 0-16 12.8-28.8 28.8-28.8h70.4c16 0 28.8 12.8 28.8 28.8 0 39.2-24.8 72-64 72z" />
                  </svg>
                  <span className="text-white text-sm sm:text-base">
                    1234 Main Street,<br /> Suite 100, City, Country 56789
                  </span>
                </li>
              </ul>
            </div>


            <div className="col-span-2 p-6 rounded-lg border-2 border-gray-100">
              <h2 className="text-2xl mb-6 text-[#011c2b]">Send Us a Message</h2>
              <form>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-[#011c2b]">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                        placeholder="Your Name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-[#011c2b]">Your Email</label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                        placeholder="Your Email"
                      />
                    </div>
                    <div>
                      <label htmlFor="mobile" className="block text-sm font-semibold text-[#011c2b]">Mobile Number</label>
                      <input
                        type="tel"
                        id="mobile"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                        placeholder="Your Mobile Number"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-[#011c2b]">Your Message</label>
                    <textarea
                      id="message"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                      placeholder="Your Message"
                      rows="4"
                    ></textarea>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="w-full bg-[#43718a] text-white py-2 px-4 rounded-lg hover:bg-[#005373]"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-8 lg:mt-14">
        <Footer />
      </section>
    </div>
  );
};

export default Contact;
