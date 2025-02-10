import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Services from "../components/Services";
import AOS from "aos";
import "aos/dist/aos.css";
import ChooseUs from "../components/ChooseUs";
import Popular from "../components/Popular";
import Footer from "../components/Footer";

const Home = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    const element = document.documentElement;
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);
  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 100,
      easing: "ease-in-out",
      once: true,
      offset: 50,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <Nav theme={theme} setTheme={setTheme} />
      <Hero theme={theme} />
      <Services />
      <ChooseUs />
      <Popular />
      <Footer />
    </>
  );
};

export default Home;
