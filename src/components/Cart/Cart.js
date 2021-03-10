import React from 'react';
import { Link } from 'react-router-dom';

const Cart = (props) => {
    const cart=props.fullCart;
    const total = cart.reduce((total,product) => total+product.price,0);
    let shippingAndHandling = 0.0;
    if(total<500) shippingAndHandling = total*0.2;
    shippingAndHandling.toFixed(2);
    return (
        <div >
            <h5 className="text-center mb-3 font-weight-bolder">Order Summary</h5>
            <p className="text-center text-dark" >Items Ordered: {cart.length}</p>
            <br/>
            <div className="row text-wrap px-lg-2 mb-2">
                <div className="col-8 pl-0 float-left">
                    <p className="my-0"><small>Items:</small></p>
                    <p className="my-0"><small>Shipping & Handling:</small></p>
                    <p className="my-0"><small>Total before tax:</small></p>
                    <p className="my-0"><small>Estimated Tax:</small></p>
                </div>
                <div className="col-3 text-wrap float-left">
                    <p className="my-0"><small>${total.toFixed(2)}</small></p>
                    <p className="my-0"><small>${shippingAndHandling.toFixed(2)}</small></p>
                    <p className="my-0"><small>${(total+shippingAndHandling).toFixed(2)}</small></p>
                    <p className="my-0"><small>${((total+shippingAndHandling)*0.1.toFixed(2)).toFixed(2)}</small></p>
                </div>
            </div>
            <div className="pl-lg-2 text-center">
                <h6 className="text-danger font-weight-bolder">Order Total: &nbsp; &nbsp; ${((total+shippingAndHandling)*0.1+total+shippingAndHandling).toFixed(2)}</h6>
                <Link to="/review" className="btn btn-sm col-10 font-weight-bold py-2 btn-warning border border-dark">
                Review your order
                </Link> 
            </div>
        </div>
    );
};

export default Cart;