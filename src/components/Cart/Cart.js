import React from 'react';
import './Cart.css'
import 'boxicons';
const Cart = (props) => {
    const { name, picture } = props.item;

    return (
        <div className='cart-detail'>
            <img src={picture} alt="" />
            <p>{name}</p>
            {/* <span onClick={ } className='delete-btn'><box-icon type='solid' name='basket'></box-icon></span> */}
        </div >
    );
};

export default Cart;