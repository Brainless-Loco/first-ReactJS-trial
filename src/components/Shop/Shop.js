import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import './Shop.css'
import '../Common css/bootstrap.min.css'
import Cart from '../Cart/Cart';

const Shop = () => {
    const first10 = fakeData.slice(0,10);
    const [products,setProducs] = useState(first10);
    const [cart,setCart] = useState([]);
    const handleAddProduct = (product) =>{
        let newCart = [...cart,product];
        setCart(newCart);
    }

    return (
        <div className="shop-container">
            <div className="col-0 col-md-1">

            </div>
            <div className="product-container pl-5 mt-3 border-right border-aqua col-md-9">
                {first10.map(product => <Product addToCart={handleAddProduct} info={product} ></Product>)}
            </div>
            <div className="cart-container mt-3  col-md-2">
                <Cart fullCart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;