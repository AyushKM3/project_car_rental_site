import React from "react";
import { FaRupeeSign, FaCalendarTimes } from "react-icons/fa";
import { FcCustomerSupport } from "react-icons/fc";

const ChooseUs = () => {
  return (
    <div className="md:min-h-[600px] dark:bg-black dark:text-white py-4 space-y-4">
      <div>
        <h1 className="md:text-5xl text-3xl text-center font-extrabold pb-14">
          Why Choose Us?
        </h1>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 md:place-items-center justify-center gap-8 mx-10 space-y-4 ">
        <div
          data-aos="fade-up"
          data-aos-once="false"
          className="card h-[450px]  sm:y-6 md:space-y-8  text-center  md:p-8 p-16  cursor-pointer"
        >
          <div className="flex justify-center md:text-5xl text-6xl">
            <FaRupeeSign />
          </div>
          <div>
            <h2 className="md:text-3xl text-2xl text-center font-semibold my-1 ">
              Competitive Prices
            </h2>
          </div>
          <div>
            <p className="text-center">
               Enjoy
              competitive pricing with no hidden fees, ensuring you get the best
              value for your money.
            </p>
          </div>
          <div className="flex justify-center p-4 mb-3">
            <button
              className="bg-blue-800 text-white md:p-3 p-2 font-bold sm:text-2xl text-lg hover:scale-125 duration-200 cursor-pointer rounded-md "
              data-aos="fade-up"
              data-aos-once="false"
              data-aos-delay="1000"
              data-aos-duration="1000"
            >
              Learn More
            </button>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-once="false"
          data-aos-delay="1000"
          className=" card md:h-[450px] sm:y-6 md:space-y-8 md:p-8 p-16   cursor-pointer"
        >
          <div className="flex justify-center md:text-5xl text-6xl">
            <FcCustomerSupport />
          </div>
          <div>
            <h2 className="md:text-3xl text-2xl text-center  font-semibold my-2">
              24/7 Support
            </h2>
          </div>
          <div>
            <p className="text-center">
              Need help or have a question? Our customer support team is
              available around the clock to assist you with any concerns.
            </p>
          </div>
          <div className="flex justify-center p-4 mb-4">
            <button
              className="bg-blue-800  text-white md:p-3 p-2 font-bold sm:text-2xl text-xl hover:scale-125 duration-200 cursor-pointer rounded-md "
              data-aos="fade-up"
              data-aos-once="false"
              data-aos-delay="1000"
              data-aos-duration="1000"
            >
              Learn More
            </button>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-once="false"
          data-aos-delay="2000"
          className="card md:h-[450px]   sm:y-6 md:space-y-8 md:p-8 p-16   duration-500 cursor-pointer "
        >
          <div className="flex justify-center md:text-5xl text-6xl">
            <FaCalendarTimes />
          </div>
          <div>
            <h2 className="md:text-3xl text-2xl text-center font-semibold my-2">
              Flexible Booking Options
            </h2>
          </div>
          <div>
            <p className=" md:text-sm sm:text-xl text-center">
              Whether you need a car for a day, a week, or even longer, we offer
              flexible rental periods to suit your schedule.
            </p>
          </div>
          <div className="flex justify-center p-4 mb-4">
            <button
              className="bg-blue-800 text-white md:p-3 p-2 font-bold sm:text-2xl text-xl hover:scale-125 duration-200 cursor-pointer rounded-md "
              data-aos="fade-up"
              data-aos-once="false"
              data-aos-delay="1000"
              data-aos-duration="1000"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
