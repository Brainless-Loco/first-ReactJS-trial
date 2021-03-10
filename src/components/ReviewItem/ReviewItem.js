import React from 'react';

const ReviewItem = (props) => {
    const info =props.info;
    return (
        <div className="p-5 mb-3 rounded border border-bottom">
            <h5>{info.name}</h5>
            <p>Quantity: {info.quantity}</p>
            <button className="btn-sm p-2 mx-auto btn-warning">Remove from Cart</button>
        </div>
    );
};

export default ReviewItem;