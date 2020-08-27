import React from 'react';
import './SingleCourse.css';

const SingleCourse = (props) => {
    // console.log(props.course);
    const { title, description, price, img } = props.course;
    return (
        <div className="single-course d-flex justify-content-between align-items-center shadow-lg p-3 mb-5 bg-white rounded">
            <div className="course-img">
                <img className="m-3" src={img} alt="" />
            </div>
            <div className="course-details">
                <h2>{title}</h2>
                <br />
                <h4>Details:</h4>
                <p><strong> {description}</strong></p>
                <h3>Price:  tk. {price}.00 </h3>
                <button
                    className='btn btn-primary btn-block'
                    onClick={() => props.addToCart(props.course)}>Enroll now</button>
            </div>
        </div>

    );
};

export default SingleCourse;