import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import yoo from '../../images/giphy.gif';

const Review = () => {
    const [cart, setCart] = useState([]);
    const removeIt = productKey => {
        const newCart = cart.filter(pd=> pd.key !== productKey);
        removeFromDatabaseCart(productKey);
        setCart(newCart);
    }
    useEffect( () =>{
        const savedCart = getDatabaseCart();
        const productKey = Object.keys(savedCart);
        const cartProducts = productKey.map( (key) =>{
            const product = fakeData.find(pd => pd.key===key);
            product.quantity = savedCart[key];
            return product;
        })
        setCart(cartProducts);
    },[])
    const [orderPlaced,setOrderPlaced] = useState(false);
    let Ordered ="" ;
    if(orderPlaced) Ordered = <img src={yoo} alt=""/>
    const placeOrder = () => {
        setCart([]);
        setOrderPlaced(true);
        processOrder();
    }    
    return (
        <div>
            <h1>{cart.length}</h1>
            <div className="col-md-9 float-left">
                {
                    cart.map(pd => <ReviewItem removeIt={removeIt} key={pd.key} info ={pd}></ReviewItem> )
                }
                {
                    Ordered
                }
            </div>
            <div className="col-md-3 float-left">
                <Cart fullCart={cart}>
                    <Link onClick={placeOrder} className="btn btn-sm col-10 font-weight-bold py-2 btn-warning border border-dark">
                    Order Now
                    </Link> 
                </Cart>
            </div>
        </div>
    );
};

export default Review;