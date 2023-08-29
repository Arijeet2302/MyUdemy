import React from "react";
import "../user/beacomeInstructor.css";
import { Link } from "react-router-dom";

function BecomeInstructor() {

  return (
    <div className="becomeInstructorDiv">
      <div className="backgroundColorDiv"></div>
      <img
        src="https://s.udemycdn.com/home/non-student-cta/udlite-lohp-promo-teacher.jpg"
        alt="instructorImg"
        className="instructorImg"
      ></img>
      <div className="contentDiv">
        <h2 className="heading" >Become an instructor</h2>
        <p className="about">
          Top instructors from around the world teach millions of students on
          Udemy. We provide the tools and skills to teach what you love.{" "}
        </p>
        <Link className="startTeching button" to="/admin">Start teaching today</Link>
      </div>
    </div>
  );
}

export default BecomeInstructor;