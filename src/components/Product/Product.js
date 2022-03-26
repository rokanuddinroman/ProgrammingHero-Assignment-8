import React from 'react';
import './Product.css'
const Product = (props) => {
    const { name, picture, price } = props.product;
    return (
        <div className='product-card'>
            <img src={picture} alt="" />
            <div>
                <h2>{name}</h2>
                <h3>Price : {price}৳</h3>
                <button onClick={() => props.handleAddToCart(props.product)}>Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;