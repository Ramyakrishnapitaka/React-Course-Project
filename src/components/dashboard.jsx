// import React, { useContext } from 'react';
// import { CourseContext } from '../components/course-context.jsx'; // fixed spelling
// import '../App.css';
// import { useNavigate } from 'react-router-dom';

// function Dashboard() {
//   const navigate = useNavigate();
//   const { user, enrolledCourses, updateCourseProgress } = useContext(CourseContext);

//   const handleStatusChange = (courseName, status) => {
//     const newProgress = status === 'Completed' ? 100 : 50;
//     updateCourseProgress(courseName, newProgress);
//   };

//   const handleManualProgress = (courseName, newValue) => {
//     const value = parseInt(newValue, 10);
//     if (!isNaN(value) && value >= 0 && value <= 100) {
//       updateCourseProgress(courseName, value);
//     }
//   };

//   const totalCourses = enrolledCourses.length;
//   const completedCourses = enrolledCourses.filter((c) => c.progress >= 100).length;
//   const overallProgress =
//     totalCourses === 0
//       ? 0
//       : Math.round(enrolledCourses.reduce((sum, c) => sum + (c.progress || 0), 0) / totalCourses);

//   const handleAddCourse = () => {
//     navigate('/courses');
//   };

//   return (
//     <div className="dashboard-container p-4">
//       <h2 className="welcome-header mb-4">Welcome{user?.name ? `, ${user.name}` : ''}</h2>

//       <div className="row mb-4">
//         <div className="col-md-6 mb-3">
//           <div className="card summary-card bg-warning text-dark p-3">
//             <h5 className="card-title mb-2">Completed Courses</h5>
//             <h2 className="mb-0">{completedCourses}</h2>
//           </div>
//         </div>
//         <div className="col-md-6 mb-3">
//           <div className="card summary-card bg-light p-3">
//             <h5 className="card-title mb-2">Overall Progress</h5>
//             <div className="progress">
//               <div
//                 className="progress-bar bg-success"
//                 role="progressbar"
//                 style={{ width: `${overallProgress}%` }}
//                 aria-valuenow={overallProgress}
//                 aria-valuemin={0}
//                 aria-valuemax={100}
//               >
//                 {overallProgress}%
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="mb-4 text-end">
//         <button className="btn btn-primary" onClick={handleAddCourse}>
//           + Add Course
//         </button>
//       </div>

//       <div>
//         <h4 className="mb-3">Enrolled Courses</h4>
//         {enrolledCourses.length === 0 ? (
//           <p>No courses enrolled yet.</p>
//         ) : (
//           enrolledCourses.map((course, index) => {
//             const status = course.progress >= 100 ? 'Completed' : 'In Progress';

//             return (
//               <div className="card mb-3 course-card" key={index}>
//                 <div className="card-body">
//                   <h5 className="card-title mb-1">{course.name}</h5>
//                   <p className="card-text small text-muted mb-2">{course.category}</p>

//                   <div className="mb-2 d-flex gap-2 align-items-center">
//                     <label>Status:</label>
//                     <select
//                       className="form-select form-select-sm"
//                       style={{ width: 'auto' }}
//                       value={status}
//                       onChange={(e) => handleStatusChange(course.name, e.target.value)}
//                     >
//                       <option>In Progress</option>
//                       <option>Completed</option>
//                     </select>

//                     {status === 'In Progress' && (
//                       <input
//                         type="number"
//                         min="0"
//                         max="100"
//                         className="form-control form-control-sm"
//                         value={course.progress}
//                         style={{ width: '80px' }}
//                         onChange={(e) => handleManualProgress(course.name, e.target.value)}
//                       />
//                     )}
//                   </div>

//                   <div className="progress">
//                     <div
//                       className="progress-bar bg-success"
//                       role="progressbar"
//                       style={{ width: `${course.progress}%` }}
//                       aria-valuenow={course.progress}
//                       aria-valuemin={0}
//                       aria-valuemax={100}
//                     >
//                       {course.progress}%
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             );
//           })
//         )}
//       </div>
//     </div>
//   );
// }

// export default Dashboard;
import React, { useContext } from 'react';
import { CourseContext } from '../components/course-context.jsx';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function Dashboard() {
  const navigate = useNavigate();
  const { user, enrolledCourses, updateCourseProgress } = useContext(CourseContext);

  const handleStatusChange = (courseName, status) => {
    const newProgress = status === 'Completed' ? 100 : 50;
    updateCourseProgress(courseName, newProgress);
  };

  const handleManualProgress = (courseName, newValue) => {
    const value = parseInt(newValue, 10);
    if (!isNaN(value) && value >= 0 && value <= 100) {
      updateCourseProgress(courseName, value);
    }
  };

  const totalCourses = enrolledCourses.length;
  const completedCourses = enrolledCourses.filter((c) => c.progress >= 100).length;
  const overallProgress =
    totalCourses === 0
      ? 0
      : Math.round(enrolledCourses.reduce((sum, c) => sum + (c.progress || 0), 0) / totalCourses);

  const handleAddCourse = () => {
    navigate('/courses');
  };

  return (
    <div className="dashboard-container p-4">
      <h2 className="welcome-header mb-4">Welcome{user?.name ? `, ${user.name}` : ''}</h2>

      {/* Summary Cards */}
      <div className="row mb-4">
        <div className="col-md-6 mb-3">
          <div className="card summary-card bg-warning text-dark p-3">
            <h5 className="card-title mb-2">Completed Courses</h5>
            <h2 className="mb-0">{completedCourses}</h2>
          </div>
        </div>
        <div className="col-md-6 mb-3">
          <div className="card summary-card bg-light p-3">
            <h5 className="card-title mb-2">Overall Progress</h5>
            <div className="progress">
              <div
                className="progress-bar bg-success"
                role="progressbar"
                style={{ width: `${overallProgress}%` }}
                aria-valuenow={overallProgress}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                {overallProgress}%
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add Course Button */}
      <div className="mb-4 text-end">
        <button className="btn btn-primary" onClick={handleAddCourse}>
          + Add Course
        </button>
      </div>

      {/* Enrolled Courses */}
      <div>
        <h4 className="mb-3">Enrolled Courses</h4>

        {enrolledCourses.length === 0 ? (
          <p>No courses enrolled yet.</p>
        ) : (
          <div className="d-flex flex-row flex-wrap gap-3 overflow-auto">
            {enrolledCourses.map((course, index) => {
              const status = course.progress >= 100 ? 'Completed' : 'In Progress';

              return (
                <div
                  className="card course-card p-3"
                  key={index}
                  style={{
                    minWidth: '250px',
                    maxWidth: '300px',
                    flex: '0 0 auto',
                  }}
                >
                  <img
                    src={course.image}
                    alt={course.name}
                    className="mb-2"
                    style={{ width: 50, height: 50, objectFit: 'contain' }}
                  />
                  <h5 className="card-title mb-1">{course.name}</h5>
                  <p className="card-text small text-muted mb-2">{course.category}</p>

                  <div className="mb-2 d-flex gap-2 align-items-center">
                    <label>Status:</label>
                    <select
                      className="form-select form-select-sm"
                      style={{ width: 'auto' }}
                      value={status}
                      onChange={(e) => handleStatusChange(course.name, e.target.value)}
                    >
                      <option>In Progress</option>
                      <option>Completed</option>
                    </select>

                    {status === 'In Progress' && (
                      <input
                        type="number"
                        min="0"
                        max="100"
                        className="form-control form-control-sm"
                        value={course.progress}
                        style={{ width: '60px' }}
                        onChange={(e) => handleManualProgress(course.name, e.target.value)}
                      />
                    )}
                  </div>

                  <div className="progress">
                    <div
                      className="progress-bar bg-success"
                      role="progressbar"
                      style={{ width: `${course.progress}%` }}
                      aria-valuenow={course.progress}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    >
                      {course.progress}%
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
