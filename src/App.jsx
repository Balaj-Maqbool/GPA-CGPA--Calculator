import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import GPA_calculator from "./Components/GPA_calculator/GPA_calculator";
import CGPA from "./Components/CGPA_calculator/CGPA";
import Contact from "./Components/Contact/Contact";
import Share from "./Components/Share/Share";
import About from "./Components/About/About";
import Instructions from "./Components/Instructions/Instructions";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <GPA_calculator />
            </>
          }
        />
        <Route
          path="/gpa"
          element={
            <>
              <Navbar />
              <GPA_calculator />
            </>
          }
        />
        <Route
          path="/cgpa"
          element={
            <>
              <Navbar />
              <CGPA />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <Navbar />
              <About />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <Navbar />
              <Contact />
            </>
          }
        />
        <Route
          path="/share"
          element={
            <>
              <Navbar />
              <Share />
            </>
          }
        />
        <Route
          path="/instructions"
          element={
            <>
              <Navbar />
              <Instructions />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
