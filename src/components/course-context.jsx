// import React, { createContext, useState } from "react";

// export const CourseContext = createContext();

// export function CourseProvider({ children }) {
//   const [user, setUser] = useState(null);
//   const [enrolledCourses, setEnrolledCourses] = useState([]);

//   const loginUser = (userData) => {
//     setUser(userData);
//   };

//   const enrollCourse = (course) => {
//     setEnrolledCourses((prev) => [...prev, course]);
//   };

//   const updateCourseProgress = (courseName, progress) => {
//     setEnrolledCourses((prevCourses) =>
//       prevCourses.map((course) =>
//         course.name === courseName ? { ...course, progress } : course
//       )
//     );
//   };

//   return (
//     <CourseContext.Provider
//       value={{
//         user,
//         enrolledCourses,
//         loginUser,
//         enrollCourse,
//         updateCourseProgress,
//       }}
//     >
//       {children}
//     </CourseContext.Provider>
//   );
// }
// components/course-context.jsx
import React, { createContext, useState } from 'react';

export const CourseContext = createContext();

export function CourseProvider({ children }) {
  const [user, setUser] = useState(null);
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  const loginUser = (userData) => {
    setUser(userData);
  };

  const enrollCourse = (course) => {
    setEnrolledCourses((prev) => [...prev, course]);
  };

  const updateCourseProgress = (courseName, progress) => {
    setEnrolledCourses((prevCourses) =>
      prevCourses.map((course) =>
        course.name === courseName ? { ...course, progress } : course
      )
    );
  };

  return (
    <CourseContext.Provider
      value={{
        user,
        enrolledCourses,
        loginUser,
        enrollCourse,
        updateCourseProgress,
      }}
    >
      {children}
    </CourseContext.Provider>
  );
}
