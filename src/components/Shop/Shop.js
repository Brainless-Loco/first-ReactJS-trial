import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import './Shop.css'
import '../Common css/bootstrap.min.css'
import Cart from '../Cart/Cart';
import { addToDatabaseCart } from '../../utilities/databaseManager';

const Shop = () => {
    const [cart,setCart] = useState([]);
    const handleAddProduct = (product) =>{
        let newCart = [...cart,product];
        setCart(newCart);
        const sameProduct = newCart.filter( pd => pd.key === product.key);
        addToDatabaseCart(product.key, sameProduct.length);
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
                <Cart fullCart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;