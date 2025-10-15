import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import reactImg from '../images/react.png';
import nodeImg from '../images/nodejs.png';
import mongodbImg from '../images/mongodb.png';
import angularImg from '../images/angularjs.png';
import '../App.css';

function Courses() {
  const navigate = useNavigate();

  const allCourses = [
    {
      title: 'React Basics',
      category: 'Frontend',
      image: reactImg,
      path: '/courses/react',
    },
    {
      title: 'Node JS',
      category: 'Backend',
      image: nodeImg,
      path: '/courses/node',
    },
    {
      title: 'MongoDB',
      category: 'Database',
      image: mongodbImg,
   
      path: '/courses/mongodb',
    },
    {
      title: 'JavaScript',
      category: 'Programming Language',
      image: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
      path: '/courses/javascript',
    },
    {
      title: 'Bootstrap',
      category: 'CSS Framework',
      image:'https://www.kindpng.com/picc/m/27-278320_bootstrap-logo-logo-png-bootstrap-logo-transparent-png.png' ,
      path: '/courses/bootstrap',
    },
    
    {
      title: 'AngularJS',
      category: 'Frontend',
      image:angularImg,
      path: '/courses/angular',
    },
   {
  title: 'TailwindCSS',
  category: 'CSS Framework',
  image: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg',
  path: '/courses/tailwindcss',
}

  ];

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCourses = allCourses.filter((course) => {
    const matchCategory =
      selectedCategory === 'All' || course.category === selectedCategory;
    const matchSearch = course.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <section className="container my-5">
      <h2 className="fw-bold mb-4">Courses</h2>

      {/* Filters */}
      <div className="d-flex justify-content-between mb-4">
        <input
          type="text"
          className="form-control w-50 me-3"
          placeholder="Search courses..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="form-select w-25"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="All">All Categories</option>
          <option value="Frontend">Frontend</option>
          <option value="Backend">Backend</option>
          <option value="Database">Database</option>
          <option value="Programming Language">Programming Language</option>
          <option value="CSS Framework">CSS Framework</option>
        </select>
      </div>

      {/* Course Cards */}
      <div className="row justify-content-center">
        {filteredCourses.length === 0 ? (
          <p className="text-center">No courses found.</p>
        ) : (
          filteredCourses.map((course, idx) => (
            <div className="col-md-4 mb-4" key={idx}>
              <div className="card text-center p-3 shadow-sm h-100">
                <img
                  src={course.image}
                  alt={course.title}
                  className="mx-auto mb-3"
                  style={{ width: 50 }}
                />
                <h5 className="fw-bold">{course.title}</h5>
                <p className="text-muted">{course.category}</p>
                <button
                  className="btn btn-success btn-sm"
                  onClick={() => navigate(course.path)}
                >
                  View Details
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}

export default Courses;
