import React from "react";
import { grade_Point_Table } from "../GPA_calculator/Grade_Point_Table";
import "./Instructions.css";
import { GiGraduateCap } from "react-icons/gi";
import { FaCalculator } from "react-icons/fa";

const Instructions = () => {
  // const midIndex = Math.ceil(grade_Point_Table.length / 2);
  const firstHalf = grade_Point_Table.slice(40, 60);
  const secondHalf = grade_Point_Table.slice(60,80);

  return (
    <div className="instructions-container">
      <div className="instructions-header">
        <GiGraduateCap className="header-icon" />
        <h1 className="instructions-heading">GPA/CGPA Calculation Guide</h1>
        <FaCalculator className="header-icon" />
      </div>

      <div className="instructions-content">
        {/* GPA Guide Section */}
        <section className="calculation-section gpa-guide">
          <h2><span className="icon">📚</span> GPA Calculation Guide</h2>
          <div className="guide-content">
            <div className="steps">
              <h3>Steps to Calculate:</h3>
              <ol>
                <li>Click <strong>+ Add Subject</strong> to add courses</li>
                <li>For each subject:
                  <ul>
                    <li>Enter <em>obtained marks</em> (0-100)</li>
                    <li>Enter <em>credit hours</em> (typically 1-4)</li>
                    <li>Subject name is optional</li>
                  </ul>
                </li>
                <li className="important-note">⚠️ If total marks differ from 100:
                  <ul>
                    <li>Calculate percentage first</li>
                    <li>Enter percentage instead of marks</li>
                  </ul>
                </li>
                <li>Click <strong>Calculate GPA</strong> for results</li>
              </ol>
            </div>
            <div className="do-dont">
              <h3>Do's & Don'ts:</h3>
              <div className="grid-2col">
                <div className="do">
                  <h4>✅ Valid Inputs</h4>
                  <ul>
                    <li>Numbers only</li>
                    <li>Marks ≤ 100</li>
                    <li>Credits ≥ 1</li>
                  </ul>
                </div>
                <div className="dont">
                  <h4>❌ Invalid Inputs</h4>
                  <ul>
                    <li>Negative values</li>
                    <li>Text/Symbols</li>
                    <li>Marks {">"} 100*</li>
                  </ul>
                </div>
              </div>
              <p className="footnote">* Use percentage if marks exceed 100</p>
            </div>
          </div>
        </section>

        {/* CGPA Guide Section */}
        <section className="calculation-section cgpa-guide">
          <h2><span className="icon">🎓</span> CGPA Calculation Guide</h2>
          <div className="guide-content">
            <ol>
              <li>Add semesters using <strong>+ Add Semester</strong></li>
              <li>For each semester:
                <ul>
                  <li>Enter GPA (0-4.00)</li>
                  <li>Enter total credit hours</li>
                </ul>
              </li>
              <li>Maintain consistency:
                <ul>
                  <li>Use same credit system</li>
                  <li>All semesters same scale</li>
                </ul>
              </li>
              <li>Click <strong>Calculate CGPA</strong></li>
            </ol>
          </div>
        </section>

        {/* Grading Scheme Section */}
        <section className="grade-scheme">
          <h2><span className="icon">📊</span> Grading Scheme</h2>
          <h3 className="university-branding">University of Sargodha (UOS) Grading System</h3>
          <div className="grade-columns">
            <div className="grade-table">
              <table>
                <thead>
                  <tr>
                    <th>Grade</th>
                    <th>Points</th>
                    <th>%</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><b>0-39</b></td>
                    <td><b>F</b></td>
                    <td><b>0.00</b></td>
                  </tr>
                  {firstHalf.map((grade) => (
                    <tr key={grade.percentage}>
                      <td>{grade.percentage}</td>
                      <td>{grade.grade}</td>
                      <td>{grade?.gradePoint?.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="grade-table">
              <table>
                <thead>
                  <tr>
                    <th >%</th>
                    <th >Grade</th>
                    <th >Points</th>
                  </tr>
                </thead>
                <tbody>
                  {secondHalf.map((grade) => (
                    <tr key={grade.percentage}>
                      <td>{grade.percentage}</td>
                      <td>{grade.grade}</td>
                      <td>{grade?.gradePoint?.toFixed(2)}</td>
                    </tr>
                  ))}
                  <tr>
                    <td><b>80-100</b></td>
                    <td><b>A</b></td>
                    <td><b>4.00</b></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Instructions;