import React, { useState } from 'react';
import fakeData from '../../fakeData/courses';
import courses from '../../fakeData/courses';
import './Course.css';
import SingleCourse from '../SingleCourse/SingleCourse';
import Cart from '../Cart/Cart';


const Course = () => {
    const [cart, setCart] = useState([]);

    const addToCart = (course) => {
        const newCart = [...cart, course];
        setCart(newCart);
    }
    let totalPrice = cart.reduce((total, course) => total + course.price, 0);

    let taxAmount = totalPrice * .02; // tax rate 2% 

    const formatNumber = (amount) => {
        const precision = amount.toFixed(2);
        return Number(precision);
    }

    return (
        <div className="course-container container-fluid">
            <div className="course-title col-md-9 m-1">
                <div>
                    {
                        fakeData.map(c => <SingleCourse course={c} addToCart={addToCart}></SingleCourse>)
                    }
                </div>

            </div>
            <div className="cart ml-3 shadow-lg p-3 mb-5 bg-white rounded">
                <h2 className='text-center'>Courses Summary:</h2>
                <br />
                <h5>No. of Courses taken:{cart.length}</h5>
                <h4>Course fees: tk. {formatNumber(totalPrice)}</h4>
                <h5>Tax + VAT: tk. {formatNumber(taxAmount)}</h5>
                <h4>Total fees: tk. {formatNumber(totalPrice + taxAmount)}</h4>
                <button className="btn btn-success">Check out</button>
                {/* <Cart name={cart}></Cart> */}
            </div>
        </div>
    );
};

export default Course;