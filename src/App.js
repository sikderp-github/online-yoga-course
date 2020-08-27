import React from 'react';
import './App.css';
import { useState } from 'react';
import Course from './Component/Courses/Course';
import courses from './fakeData/courses';
import Cart from './Component/Cart/Cart';

function App() {

  return (
    <div className="App container-fluid">
      <div className="courseHead">
        <h1 className="text-center p-4 m-4 font-weight-bolder">Welcome to Online Yoga Courses</h1>
      </div>
      <Course></Course>
    </div>
  );
}

export default App;
