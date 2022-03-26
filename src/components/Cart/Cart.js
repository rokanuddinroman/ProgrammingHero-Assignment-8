import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const { name, picture } = props.item;

    return (
        <div className='cart-detail'>
            <img src={picture} alt="" />
            <p>{name}</p>
        </div>
    );
    // if (document.getElementsByClassName('cart-detail').length > 3) {
    //     alert('4 Up')
    // }

};

export default Cart;