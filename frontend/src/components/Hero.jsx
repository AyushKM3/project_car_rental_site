import React from "react";
import DarkCar from "../assets/darkCar.jpg";
import LightCar from "../assets/lightCar.jpg";

const Hero = ({ theme }) => {
  const carImg = theme === "dark" ? DarkCar : LightCar;
  return (
    <>
      <div className="bg-white text-black dark:bg-black dark:text-white duration-100 ">
        <div className="min-h-[600px] flex">
          <div className="grid grid-cols-1 md:grid-cols-2 place-items-center ">
            <div className="order-1 md:order-2">
              <img
                data-aos="zoom-in"
                data-aos-delay="1500"
                data-aos-once="false"
                className="max-h-[580px] "
                src={carImg}
              />
            </div>
            <div className="order-2 md:order-1 space-y-4">
              <h1
                className="md:text-3xl  lg:text-5xl text-3xl font-semibold mb-4 text-center text-amber-400"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                DriveON
              </h1>
              <p
                className=" mb-8 md:text-md lg:text-lg text-sm text-center"
                data-aos="fade-up"
                data-aos-delay="1000"
              >
                The best car rental service for all your travel needs. Drive
                with comfort and style. Whether you're planning a road trip,
                need a car for your business travel, or just want to explore the
                city at your own pace, DriveOn has got you covered. Our fleet
                includes a wide range of vehicles from economy to luxury
                options, ensuring that you find the perfect car for your
                journey.
              </p>
              <div className="flex justify-center">
                <button
                  className="bg-amber-400 text-black md:p-3 py-3 px-2 font-bold sm:text-2xl text-1xl hover:scale-125 duration-200 cursor-pointer rounded-md "
                  data-aos="fade-up"
                  data-aos-delay="1500"
                  data-aos-duration="1000"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
