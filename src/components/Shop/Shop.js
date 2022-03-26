import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleAddToCart = (product) => {
        const newCart = [...cart, product]
        setCart(newCart)
    }

    return (
        <div>
            <h1 className='head-title'>Randomly Cool Bag Selecter</h1>
            <p className='head-description'>Select 4 items. You only can add 4 items in a time.</p>
            <div className='shop-container'>
                <div className='product-wrapper'>
                    {
                        products.map(product => <Product key="product.id" product={product} handleAddToCart={handleAddToCart}></Product>)
                    }
                </div>
                <div className='cart-container'>
                    <span className='tag-line'>Your Chooices</span>
                    <div>
                        <Cart cart={cart}></Cart>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;