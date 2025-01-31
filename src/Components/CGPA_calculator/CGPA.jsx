import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "../GPA_CGPA.css";
import { ImCross } from "react-icons/im";
import { MdAddBox } from "react-icons/md";
import ProgressBar from "../ProgressBar/ProgressBar";
import { useLocation, useNavigate } from "react-router-dom";

const CGPA = () => {
  const [CGPA, setCGPA] = useState({});
  const [semesters, setSemesters] = useState([
    { id: uuidv4(), gpa: "", total_credit_hours: "" },
  ]);

  useEffect(() => {
    let semesterString = localStorage.getItem("semesters");
    let CGPAString = localStorage.getItem("CGPA");

    if (semesterString) {
      let storedSemesters = JSON.parse(semesterString);

      if (Array.isArray(storedSemesters) && storedSemesters.length > 0) {
        setSemesters(storedSemesters);
      }
    }
    if (CGPAString) {
      let storedCGPA = JSON.parse(CGPAString);

      if (storedCGPA && typeof storedCGPA === "object") {
        setCGPA(storedCGPA);
      }
    }
  }, []);

  const saveToLocalStorage = () => {
    console.log("saving to local storage");
    if (semesters?.length > 1) {
      localStorage.setItem("semesters", JSON.stringify(semesters));
    }
    if (CGPA) {
      localStorage.setItem("CGPA", JSON.stringify(CGPA));
    }
  };
  useEffect(() => {
    const timeOut = setTimeout(() => {
      saveToLocalStorage();
    }, 300);
    return () => {
      // console.log(timeOut)
      clearTimeout(timeOut);
    };
  }, [semesters, CGPA]);

  const handleInputChange = (ID, field, val) => {
    const updatedSemesters = [...semesters];
    updatedSemesters?.forEach((semester) => {
      if (semester.id === ID) {
        if (field === "gpa" && (val === "" || (val >= 0 && val <= 4))) {
          semester[field] = val ?? "";
        } else if (field === "gpa") {
          alert("GPA can't be less than 0 or greater than 4.00");
        }
        if (field === "total_credit_hours" && (val > 0 || val === "")) {
          semester[field] = val || "";
        } else if (field === "total_credit_hours") {
          alert("Credit Hours can't be <=0 ");
        }
      }
    });
    setSemesters(updatedSemesters); // Update the semesters state with the updated array
  };

  const addSemester = () => {
    setSemesters([
      ...semesters,
      { id: uuidv4(), gpa: "", total_credit_hours: "" },
    ]);
    setCGPA({});
  };

  const deleteSemester = (ID) => {
    const updatedSemesters = semesters?.filter(
      (semester) => semester.id !== ID
    );
    setSemesters(updatedSemesters || []);
  };

  const calculateCGPA = () => {
    let totalQualityPoints = 0;
    let sumOfCreditHours = 0;

    const updatedSemesters = semesters?.map((semester) => {
      const creditHours = Number(semester.total_credit_hours || 1);
      const gpa = Number(semester.gpa || 0);
      const qualityPoint = gpa * creditHours;
      totalQualityPoints += qualityPoint;
      sumOfCreditHours += creditHours;

      return { ...semester, quality_point: qualityPoint };
    });

    const cgpa =
      sumOfCreditHours > 0 ? totalQualityPoints / sumOfCreditHours : 0;
    const percent = (cgpa / 4) * 100;
    setCGPA({
      cgpa: cgpa.toFixed(2),
      cgpa_percentage: percent,
    });
    setSemesters(updatedSemesters || []);
  };

  useEffect(() => {
    console.log("semester data : ", semesters, "CGPA : ", CGPA);
  }, [semesters, CGPA]);

  const navigateTo = useNavigate();
  const location = useLocation();

  const getGPA = (sem_id) => {
    if (semesters?.length > 0) {
      navigateTo("/gpa", { state: { sem_id, semesters, reset: true } });
    }
    setCGPA({});
  };

  useEffect(() => {
    if (location?.state?.updatedSemesters?.length > 0) {
      setSemesters(location.state.updatedSemesters);
    }
  }, [location.state]);

  const handleRest = () => {
    let resetState = [
      { id: uuidv4(), gpa: "", total_credit_hours: "" },
      { id: uuidv4(), gpa: "", total_credit_hours: "" },
    ];
    setSemesters(resetState);
    setCGPA({});
  };

  return (
    <>
      <div className="the_container">
        <section className="cgpa_container">
          <h3>CGPA Calculator</h3>
          <div className="cgpa_calculation_left">
            <div className="semester_container">
              {semesters.map((semester) => {
                return (
                  <div className="semesters" key={semester.id}>
                    <input
                      type="number"
                      placeholder="GPA"
                      className="gpa_input"
                      value={semester.gpa}
                      onChange={(e) => {
                        let value = e?.target?.value || "";
                        handleInputChange(semester.id, "gpa", value);
                      }}
                    />
                    <input
                      type="number"
                      placeholder="Total Credit Hours"
                      className="credit_hours_input"
                      value={semester.total_credit_hours}
                      onChange={(e) => {
                        let value = e?.target?.value || "";
                        handleInputChange(
                          semester.id,
                          "total_credit_hours",
                          value
                        );
                      }}
                    />
                    <button
                      onClick={() => {
                        deleteSemester(semester.id);
                      }}
                      className="delete_button"
                    >
                      <ImCross />
                    </button>
                    <button
                      className="get_gpa"
                      onClick={() => {
                        getGPA(semester.id);
                      }}
                    >
                      Get GPA
                    </button>
                  </div>
                );
              })}
            </div>
            <div className="button_container">
              <button onClick={addSemester} className="add_semester_button">
                <MdAddBox />
              </button>
              <button onClick={calculateCGPA} className="calculate_button">
                Calculate CGPA
              </button>
              <button className="reset_button" onClick={handleRest}>
                RESET
              </button>
            </div>
          </div>
        </section>
      </div>
      <div className="gpa_calculation_right">
        <ProgressBar CGPA={CGPA} />
      </div>
    </>
  );
};

export default CGPA;
