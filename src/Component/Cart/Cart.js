import React from 'react';

const Cart = (props) => {
    const cart = props.name;
    console.log(cart);
    return (
        <div>
            <div className="summary">
                <h3>Courses Summary:</h3>
                <h5>No. of Courses taken:{}</h5>
                <h4>Total Course fees:</h4>
            </div>
        </div>
    );
};

export default Cart;