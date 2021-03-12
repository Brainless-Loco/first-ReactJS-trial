import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import './Shop.css'
import '../Common css/bootstrap.min.css'
import Cart from '../Cart/Cart';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import { Link } from 'react-router-dom';

const Shop = () => {
    const [cart,setCart] = useState([]);

    useEffect( ()=>{
        const savedCart = getDatabaseCart();
        const allPoductKeys = Object.keys(savedCart);
        const previousCart = allPoductKeys.map( pdKey => {
            const thisProductInfo = fakeData.find( pd => pd.key === pdKey);
            thisProductInfo.quantity = savedCart[pdKey];
            return thisProductInfo;
        });
        setCart(previousCart);
    },[])

    const handleAddProduct = (product) =>{
        let alreadyInCart = cart.find(pd => pd.key === product.key);
        let count = 1;
        let newCart;
        if(alreadyInCart !== undefined){
            count = alreadyInCart.quantity + 1;
            alreadyInCart.quantity = count;
            console.log(alreadyInCart);
            const others = cart.filter(pd=> pd.key!==product.key);
            newCart = [...others,alreadyInCart];
        }
        else{
            product.quantity = 1;
            newCart = [...cart,product];
        }
        setCart(newCart);
        addToDatabaseCart(product.key, count);
    }

    return (
        <div className="shop-container">
            <div className="col-0 col-md-1">

            </div>
            <div className="product-container pl-5 mt-3 border-right border-aqua col-md-9">
                {
                fakeData.slice(0,10).map(product => <Product key={product.key} showButton={true} addToCart={handleAddProduct} info={product} ></Product>)
                }
                {
                fakeData.slice(10,20).map(product => <Product key={product.key} showButton={true} addToCart={handleAddProduct} info={product} ></Product>)
                }
                {
                fakeData.slice(20.30).map(product => <Product key={product.key} showButton={true} addToCart={handleAddProduct} info={product} ></Product>)
                }
            </div>
            <div className="cart-container mt-3  col-md-2">
                <Cart fullCart={cart}>
                    <Link to="/review" className="btn btn-sm col-10 font-weight-bold py-2 btn-warning border border-dark">
                    Review your order
                    </Link> 
                </Cart>
            </div>
        </div>
    );
};

export default Shop;