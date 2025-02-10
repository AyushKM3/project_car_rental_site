import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cars from "./pages/Cars";
import Bookings from "./pages/Bookings";
import About from "./pages/About";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/bookings" element={<Bookings />}></Route>
      </Routes>
    </div>
  );
};

export default App;
