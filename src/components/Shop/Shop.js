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
            alert('Hey')
        }
        if (cart.indexOf(product) === -1) {
            const newCart = [...cart, product]
            setCart(newCart)
        }
        if (cart.length > 3) {
            alert('stop');
            const newCart = [...cart]
            setCart(newCart)
        }
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
            <h1 className='head-title'>Randomly Cool Bag Selecter</h1>
            <p className='head-description'>Select 4 items. You only can add 4 items in a time.</p>
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
                            cart.map(item => <Cart item={item}></Cart>)
                        }
                        <span className='tag-line'>Selected For You</span>
                        <div className='cart-detail'>
                            <img src={random.picture} alt="" />
                            <p>{random.name}</p>
                        </div>
                        <button onClick={() => randomSelect(cart)}>Choose 1</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;