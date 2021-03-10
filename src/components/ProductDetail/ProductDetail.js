import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const ProductDetail = () => {
    const {productKey} = useParams();
    const info = fakeData.find(product => product.key===productKey);
    return (
        <div>
            <h2 className="text-center">{info.name} is here....</h2>
            <Product showButton={false} info={info}></Product>
        </div>
    );
};

export default ProductDetail;