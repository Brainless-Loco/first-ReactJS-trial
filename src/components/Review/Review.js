import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart } from '../../utilities/databaseManager';
import ReviewItem from '../ReviewItem/ReviewItem';

const Review = () => {
    const [cart, setCart] = useState([]);
    useEffect( () =>{
        const savedCart = getDatabaseCart();
        const productKey = Object.keys(savedCart);
        console.log(productKey);
        const cartProducts = productKey.map( (key) =>{
            const product = fakeData.find(pd => pd.key===key);
            product.quantity = savedCart[key];
            return product;
        })
        setCart(cartProducts);
    })

    return (
        <div className="col-md-9 mx-auto">
            <h1>{cart.length}</h1>
            {
                cart.map(pd => <ReviewItem key={pd.key} info ={pd}></ReviewItem> )
            }
        </div>
    );
};

export default Review;