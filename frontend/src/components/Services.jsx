import React from "react";
import CarImg from "../assets/car2.png";

const Services = () => {
  return (
    <div className="bg-slate-200 text-black dark:bg-[#0d0a06] dark:text-white duration-100">
      <div className="min-h-[600px] flex">
        <div className="grid md:grid-cols-2 grid-cols-1 md:place-items-center ">
          <div
            data-aos="slide-right"
            data-aos-duration="1800"
            data-aos-once="false"
          >
            <img
              className="drop-shadow-[2px_10px_6px_rgba(0,0,0,0.5)]"
              src={CarImg}
            />
          </div>
          <div className=" lg:mx-20 md:mx-10 order-1 md:order-2">
            <h1
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-once="false"
              className="md:text-4xl  lg:text-5xl text-3xl font-bold text- mb-4 text-center"
            >
              Our Services
            </h1>
            <h2
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-once="false"
              className="mb-2 md:text-3xl text-2xl text-center"
            >
              Welcome to{" "}
              <b
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-once="false"
                className="text-amber-400 md:text-5xl text-3xl"
              >
                DriveON
              </b>{" "}
              Car Rental
            </h2>
            <p
              data-aos="zoom-in"
              data-aos-duration="1200"
              data-aos-once="false"
              className="mb-3 md:text-md lg:text-lg text-sm text-center"
            >
              At DriveOn, we offer a wide selection of vehicles, affordable
              rates, and flexible rental plans. Our easy booking process and
              excellent customer service ensure a seamless experience. Your
              safety is our priority, with all vehicles regularly maintained and
              sanitized.
            </p>
            <div className="flex justify-center mt-3">
              <button
                data-aos="fade-up"
                data-aos-duration="1400"
                data-aos-once="false"
                className="bg-blue-800 text-white md:py-4 md:px-3 py-3 px-2 mt-5 hover:scale-125 duration-200 rounded-md cursor-pointer "
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
