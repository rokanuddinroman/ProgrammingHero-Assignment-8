import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
import '../Cart/Cart.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    const [random, setRandom] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleAddToCart = (product) => {
        if (cart.indexOf(product) !== -1) {
            alert('You cannot Add multiple quantity for same Product. Choose another.')
        }
        if (cart.indexOf(product) === -1) {
            const newCart = [...cart, product]
            setCart(newCart)
        }
        if (cart.length > 3) {
            alert('You reached your Limit. Now Click Selector.');
            const newCart = [...cart]
            setCart(newCart)
        }
    }

    const clearAll = (product) => {
        let clearCart = product;
        clearCart = [];
        setCart(clearCart)
    }

    const randomSelect = (cart) => {
        const arrayLength = cart.length;
        const number = Math.floor(Math.random() * arrayLength);
        if (arrayLength !== 0) {
            setRandom(cart[number]);
        }
        else {
            alert('Select Some Product')
        }
    }

    return (
        <div>
            <div className='shop-container'>
                <div className='product-wrapper'>
                    {
                        products.map(product => <Product key={product.id} product={product} handleAddToCart={handleAddToCart}></Product>)
                    }
                </div>
                <div className='cart-container'>
                    <div className='cart'>
                        <span className='tag-line'>Your Chooices</span>
                        {
                            cart.map(item => <Cart key={item.id} item={item}></Cart>)
                        }
                        <span className='tag-line'>Selected For You</span>
                        <div className='cart-detail cart-show'>
                            <img src={random.picture} alt="" />
                            <p>{random.name}</p>
                        </div>
                        <button onClick={() => randomSelect(cart)}>Selector</button>
                        <button className='clear-btn' onClick={() => clearAll(products)}>Clear All</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;