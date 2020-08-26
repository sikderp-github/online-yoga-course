import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Course from './Component/Courses/Course';

function App() {
  const [courses, setCourses] = useState([])
  return (
    <div className="App container-fluid px-2">
      <h1 className="text-center py-4">Welcome to Online Yoga Courses</h1>
      <Course ></Course>

    </div>
  );
}

export default App;
