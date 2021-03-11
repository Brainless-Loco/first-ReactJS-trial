import React from 'react';
import './Product.css';
import { FontAwesomeIcon  } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Product = (props) => {
    const info = props.info;
    let i=0;
    return (
        <div className="product row p-2 border-bottom border-darken-4 mb-3 mx-1">
            <div className="col-md-3 text-center float-left">
                <img src={info.img} alt=""/>
            </div>
            <div className="col-md-9 float-left">
                <p className="text-primary font-500"><Link to={"/product/"+info.key}>{info.name}</Link></p>
                <p><small className="">by: {info.seller}</small></p>
                <div className="row">
                    <div className="col-md-6 float-left">
                        <p className="h4 my-2">${info.price}</p>
                        <small>only {info.stock} left in stock - order soon</small>
                        <br/>
                        <br/>
                        { props.showButton===true &&
                            <button onClick={()=>props.addToCart(info)} className="btn btn-sm col-8 btn-warning border border-dark"> <FontAwesomeIcon icon={faShoppingCart} />add to cart</button>}
                    </div>
                    <div className="col-md-6 float-left">
                        <h5 className="font-weight-bolder">Feature</h5>
                        <ul className="text-secondary">
                            {info.features.map(feature => <li key={i++} className="small">{feature.description}: {feature.value}</li>)}
                        </ul>
                    </div>
                </div>
            </div>
            <hr/>
        </div>
    );
};

export default Product;