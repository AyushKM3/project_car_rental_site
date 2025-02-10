import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
const About = () => {
  return (
    <>
      <Nav />
      <div className=" container mx-auto p-6  bg-white text-black  dark:bg-black dark:text-white">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-2">About Me</h1>
          <p className="text-xl">Welcome to my personal website</p>
        </header>

        <section className="bg-white p-8 rounded-lg shadow-lg">
          <div className="flex flex-col md:flex-row items-center md:items-start">
            <div>
              <h2 className="text-3xl font-bold mb-2">Ayush Mishra</h2>
              <p className="text-xl text-gray-700 mb-4">BCA Student</p>
              <p className="text-gray-700">
                I am a Bachelor of Computer Applications (BCA) student with a
                passion for technology and innovation. My journey in the world
                of computing has been driven by a desire to solve real-world
                problems through coding and development.
              </p>
              <p className="text-gray-700 mt-4">
                I have experience in various programming languages and
                technologies, including Java, Python, HTML, CSS, JavaScript,
                React and more. I am continuously learning and expanding my
                skillset to stay updated with the latest industry trends.
              </p>
              <p className="text-gray-700 mt-4">
                When I am not coding, you can find me exploring new tech
                gadgets, playing video games, or enjoying a good book. I am
                always open to new opportunities and collaborations that can
                help me grow both personally and professionally.
              </p>
              <p className="text-gray-700 mt-4">
                Feel free to connect with me through the contact information
                provided below. Let's create something amazing together!
              </p>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default About;
