import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Course from './Component/Courses/Course';

function App() {
  const [courses, setCourses] = useState([]);
  return (
    <div className="App container-fluid px-2">
      <h1 className="text-center py-4">Welcome to Online Yoga Courses</h1>
      <div className="courseItem">
        <Course ></Course>
      </div>
      <div className="cart">
        <h3>Courses Summary:</h3>
        <h5>No. of Courses taken</h5>
        <h4>Total Course fees:</h4>

      </div>

    </div>
  );
}

export default App;
