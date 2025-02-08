
import Navbar from "./Components/Navbar/Navbar";
import GPA_calculator from "./Components/GPA_calculator/GPA_calculator";
import CGPA from "./Components/CGPA_calculator/CGPA";
import Contact from "./Components/Contact/Contact";
import Share from "./Components/Share/Share";
import About from "./Components/About/About";
import Instructions from "./Components/Instructions/Instructions";

import { Routes, Route } from "react-router-dom";
import LowerNavbar from "./Components/Navbar/LowerNavbar";

function App() {
  return (
    <><div style={{width:"100%"}}>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <LowerNavbar/>
              {/* <GPA_calculator /> */}
            </>
          }
        />
        <Route
          path="/gpa"
          element={
            <>
              <Navbar />
              <LowerNavbar/>
              <GPA_calculator />
            </>
          }
        />
        <Route
          path="/cgpa"
          element={
            <>
              <Navbar />
              <LowerNavbar/>
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
      </div>
    </>
  );
}

export default App;
