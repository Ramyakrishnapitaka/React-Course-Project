import React from 'react';
import react from '../images/react.png';
import node from '../images/nodejs.png';
import mongodb from '../images/mongodb.png';
import '../App.css';
import { useNavigate } from 'react-router-dom';


function Home() {
  var navigate=useNavigate()
  function login(){
    navigate("/login")
  }
  function gocourse(){
    navigate("/courses")
  }
  return (
    <div>
      <header className="header-section text-center text-white">
        <h1>Welcome to <strong>SkillTracker</strong></h1>
        <p className="lead">Track your skills & courses</p>
        <button className="btn btn-success get-started-btn" onClick={login}>Get Started</button>
      </header>

      <section className="container my-4">
        <h5 className="mb-3 popular-title text-center">Popular Courses</h5>
        <div className="d-flex justify-content-center gap-3 course-cards">
          {/* Course Card 1 */}
          <div className="card course-card p-3 text-center" style={{width:"18rem"}}>
            <div className="icon-bg react-bg mx-auto mb-3">
              <img src={react} alt="React Basics" className="icon-image"/>
            </div>
            <h6 className="course-title">React Basics</h6>
            <p className="course-subtitle">Frontend</p>
            <button className="btn btn-success btn-sm enroll-btn" onClick={gocourse}>View Details</button>
          </div>

          {/* Course Card 2 */}
          <div className="card course-card p-3 text-center" style={{width:"18rem"}}>
            <div className="icon-bg node-bg mx-auto mb-3">
              <img src={node} alt="Intro to Python" className="icon-image"/>
            </div>
            <h6 className="course-title">Node</h6>
            <p className="course-subtitle">Backend</p>
            <button className="btn btn-success btn-sm enroll-btn" onClick={gocourse}>View Details</button>
          </div>

          {/* Course Card 3 */}
          <div className="card course-card p-3 text-center" style={{width:"18rem"}}>
            <div className="icon-bg design-bg mx-auto mb-3">
              <img src={mongodb} alt="UI/UX Design" className="icon-image"/>
            </div>
            <h6 className="course-title">MongoDB</h6>
            <p className="course-subtitle">DataBase</p>
            <button className="btn btn-success btn-sm enroll-btn" onClick={gocourse}>View Details</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
