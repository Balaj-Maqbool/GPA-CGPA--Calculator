import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "../GPA_CGPA.css";
import { ImCross } from "react-icons/im";
import { MdAddBox } from "react-icons/md";
import { grade_Point_Table } from "./Grade_Point_Table.js"; // Importing the grade point table
import ProgressBar from "../ProgressBar/ProgressBar.jsx";
import { useLocation, useNavigate } from "react-router-dom";

const GPA_calculator = () => {
  const [GPA, setGPA] = useState({ gpa: "", gpa_percentage: "" });
  const [emptyFields, setEmptyFields] = useState(true);
  const [subjects, setSubjects] = useState([
    {
      id: uuidv4(),
      subject_name: "",
      total_marks: 100,
      obtained_marks: "",
      credit_hours: "",
    },
    {
      id: uuidv4(),
      subject_name: "",
      total_marks: 100,
      obtained_marks: "",
      credit_hours: "",
    },
  ]);

  useEffect(() => {
    let subjectString = localStorage.getItem("subjects");
    let GPAString = localStorage.getItem("GPA");

    if (subjectString) {
      let storedSubjects = JSON.parse(subjectString);

      if (storedSubjects?.length > 0 && Array.isArray(storedSubjects)) {
        setSubjects(storedSubjects);
      }
    }
    if (GPAString) {
      let storedGPA = JSON.parse(GPAString);

      if (storedGPA && typeof storedGPA === "object") {
        setGPA(storedGPA);
      }
    }
  }, []);

  const saveToLocalStorage = () => {
    console.log("saving.............................");
    if (subjects?.length >= 0) {
      localStorage.setItem("subjects", JSON.stringify(subjects));
    }
    if (GPA) {
      localStorage.setItem("GPA", JSON.stringify(GPA));
    }
  };
  useEffect(() => {
    const timeOut = setTimeout(() => {
      saveToLocalStorage();
    }, 300);
    console.log(subjects);
    console.log(GPA);
    checkAllFields();
    return () => {
      // console.log(timeOut)
      clearTimeout(timeOut);
    };
  }, [subjects, GPA]);

  let handleInputChange = (ID, field, val) => {
    const updatedSubjects = [...subjects];
    updatedSubjects?.forEach((sub) => {
      if (sub.id === ID) {
        if (
          field === "obtained_marks" &&
          (val === "" || (val >= 0 && val <= 100))
        ) {
          sub[field] = val ?? "";
        } else if (field === "credit_hours" && (val > 0 || val === "")) {
          sub[field] = val || "";
        } else if (field === "subject_name") {
          sub[field] = val || "";
        }
      }
    });
    setSubjects(updatedSubjects);
  };

  const addSubject = () => {
    setSubjects([
      ...subjects,
      { id: uuidv4(), total_marks: 100, obtained_marks: "", credit_hours: "" },
    ]);
    setGPA({});
  };

  const deleteSubject = (ID) => {
    if (subjects?.length > 0) {
      const updatedSubjects = subjects.filter((sub) => sub.id !== ID);
      setSubjects(updatedSubjects);
      setGPA({});
    }
  };

  const getPercentage = (tMarks, oMarks) => {
    return (oMarks / tMarks) * 100;
  };

  const getGradePoints = (per) => {
    const gradePoint_obj = grade_Point_Table?.find(
      (obj) => per == obj?.percentage
    );
    let gradePoint = gradePoint_obj?.gradePoint ?? 0;
    return gradePoint;
  };
  const checkAllFields = () => {
    subjects.forEach((sub) => {
      if (sub.obtained_marks === "" || sub.credit_hours === "") {
        setEmptyFields(true);
      } else {
        setEmptyFields(false);
      }
    });
    console.log("field check", emptyFields);
  };
  const Calculation = () => {
    if (emptyFields === false) {
      let totalQualityPoints = 0;
      let totalCreditHours = 0;

      const updatedSubjects = subjects?.map((sub) => {
        let tMarks = Number(sub?.total_marks || 100);
        let oMarks = Number(sub?.obtained_marks || 0);
        let creditHours = Number(sub?.credit_hours);

        const percentage = Math.round(getPercentage(tMarks, oMarks));
        const gradePoint = getGradePoints(percentage);
        const qualityPoint = creditHours * gradePoint;

        totalQualityPoints += qualityPoint;
        totalCreditHours += creditHours;

        return {
          ...sub,
          percentage: Number(percentage) || 0,
          grade_point: Number(gradePoint) || 0,
          quality_point: Number(qualityPoint) || 0,
        };
      });

      const result =
        totalCreditHours > 0
          ? Number(totalQualityPoints / totalCreditHours)
          : 0;
      const percent = (result / 4) * 100;
      setGPA({
        gpa: result.toFixed(2),
        gpa_percentage: percent,
        total_credit_hours: totalCreditHours,
      });

      setSubjects(updatedSubjects);
    } else {
      setGPA({});
      alert("Empty Fields");
    }
  };

  const location = useLocation();
  const navigateTo = useNavigate();
  const [updatedSemesters, setUpdatedSemesters] = useState([]);

  useEffect(() => {
    if (location.state?.sem_id && location.state?.semesters?.length > 0) {
      const id = location.state.sem_id || "";
      const semesters = location.state.semesters || [];
      const newSemesters = [...semesters];

      newSemesters?.forEach((sem) => {
        if (sem.id === id) {
          sem.gpa = GPA.gpa ?? "";
          sem.total_credit_hours = GPA.total_credit_hours || "";
        }
      });

      setUpdatedSemesters(newSemesters);
    }
  }, [location.state, GPA]);

  // useEffect(() => {
  //   if (location?.state?.reset === true) {
  //     handleReset();
  //     location.state.reset = false;
  //   }
  // }, [location?.state]);

  const goToCGPA = () => {
    if (updatedSemesters?.length > 0) {
      navigateTo("/cgpa", {
        state: { updatedSemesters },
      });
      handleReset();
    }
  };

  const handleReset = () => {
    let resetState = [
      {
        id: uuidv4(),
        subject_name: "",
        total_marks: 100,
        obtained_marks: "",
        credit_hours: "",
      },
      {
        id: uuidv4(),
        subject_name: "",
        total_marks: 100,
        obtained_marks: "",
        credit_hours: "",
      },
    ];
    setSubjects(resetState);
    setGPA({});
  };

  return (
    <>
      <div className="the_container">
        <section className="gpa_container">
          <h3>GPA Calculator</h3>
          <div className="gpa_calculation_left">
            <div className="subjects_container">
              {subjects.map((sub, index) => {
                return (
                  <div className="subjects" key={sub.id}>
                    <input
                      className="subject_input"
                      type="text"
                      placeholder="Subject Name (optional)"
                      value={sub.subject_name}
                      onChange={(e) => {
                        handleInputChange(
                          sub.id,
                          "subject_name",
                          e?.target?.value || ""
                        );
                      }}
                    />
                    <input
                      className="credit_hours_input"
                      type="number"
                      placeholder="Credit Hours"
                      value={sub.credit_hours}
                      onChange={(e) => {
                        const value = e?.target?.value || "";
                        handleInputChange(sub.id, "credit_hours", value);
                      }}
                    />
                    <input
                      className="marks_input"
                      type="number"
                      placeholder="Obtained Marks "
                      value={sub.obtained_marks}
                      onChange={(e) => {
                        const value = e?.target?.value ?? "";
                        handleInputChange(sub.id, "obtained_marks", value);
                      }}
                    />
                    <button
                      className="delete_button"
                      onClick={() => {
                        deleteSubject(sub.id);
                      }}
                    >
                      <ImCross />
                    </button>
                  </div>
                );
              })}
            </div>
            <div className="button_container">
              <button className="add_subject_button" onClick={addSubject}>
                <MdAddBox />
              </button>
              <button className="calculate_button" onClick={Calculation}>
                Calculate GPA
              </button>
              <button className="reset_button" onClick={handleReset}>
                Reset
              </button>

              {location.state && GPA.gpa ? (
                <button
                  className="goTo_cgpa"
                  onClick={() => {
                    goToCGPA();
                  }}
                >
                  Back to CGPA
                </button>
              ) : (
                ""
              )}
            </div>
          </div>
        </section>
      </div>

        {GPA ? <ProgressBar GPA={GPA} /> : ""}
    </>
  );
};

export default GPA_calculator;
