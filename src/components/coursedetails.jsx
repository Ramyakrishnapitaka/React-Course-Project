import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CourseContext } from '../components/course-context';

import react from '../images/react.png';
import node from '../images/nodejs.png';
import mongodb from '../images/mongodb.png';
import angular from '../images/angularjs.png'
function CourseDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { enrollCourse, enrolledCourses } = useContext(CourseContext);

  const courses = {
    react: {
      name: 'React Basics',
      category: 'Frontend',
      description: 'React is a JavaScript library used for building user interfaces.',
      image: react,
      progress: 0,
    },
    node: {
      name: 'Node JS',
      category: 'Backend',
      description: "Node.js is a JavaScript runtime built on Chrome's V8 engine.",
      image: node,
      progress: 0,
    },
    mongodb: {
      name: 'MongoDB',
      category: 'Database',
      description: 'MongoDB is a document-oriented NoSQL database used in modern apps.',
      image: mongodb,
      progress: 0,
    },
    javascript: {
      name: 'JavaScript',
      category: 'Programming Language',
      description: 'JavaScript is a versatile language used for both frontend and backend development.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
      progress: 0,
    },
    bootstrap: {
      name: 'Bootstrap',
      category: 'CSS Framework',
      description: 'Bootstrap is a popular CSS framework for building responsive and mobile-first websites.',
      image: 'https://www.kindpng.com/picc/m/27-278320_bootstrap-logo-logo-png-bootstrap-logo-transparent-png.png',
      progress: 0,
    },
     angular: {
      name: 'AngularJS',
      category: 'Frontend',
      description: 'AngularJS is a structural framework for dynamic web apps.',
      image: angular,
      progress: 0,
    },
    tailwindcss: {
      name: 'TailwindCSS',
      category: 'CSS Framework',
      description: 'TailwindCSS is a utility-first CSS framework for rapidly building custom designs.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg',
      progress: 0,
    },
  };

  const course = courses[id];

  if (!course) {
    return <h3 className="text-center mt-5">Course not found!</h3>;
  }

  const isAlreadyEnrolled = enrolledCourses.some(
    (c) => c.name === course.name
  );

  const handleAddCourse = () => {
    if (isAlreadyEnrolled) {
      alert('You have already enrolled in this course.');
      return;
    }

    enrollCourse(course);
    navigate('/dashboard');
  };

  return (
    <div className="container mt-5 text-center">
      <img src={course.image} alt={course.name} width="120" />
      <h2 className="mt-3">{course.name}</h2>
      <h5 className="text-muted">{course.category}</h5>
      <p className="mt-3">{course.description}</p>

      <button className="btn btn-secondary mt-3 me-3" onClick={() => navigate(-1)}>
        ← Back
      </button>
      <button
        className="btn btn-success mt-3"
        onClick={handleAddCourse}
        disabled={isAlreadyEnrolled}
      >
        {isAlreadyEnrolled ? 'Already Enrolled' : 'Add Course'}
      </button>
    </div>
  );
}

export default CourseDetails;
