import React from 'react';
import './Cart.css'
import 'boxicons';
const Cart = (props) => {
    const { name, picture } = props.item;
    // const clickDelete = props.setCart;

    return (
        <div className='cart-detail'>
            <img src={picture} alt="" />
            <p>{name}</p>
            {/* <span onClick={() => { clickDelete(props.item.name = '') }} className='delete-btn'><box-icon type='solid' name='basket'></box-icon></span> */}
        </div>
    );
    // if (document.getElementsByClassName('cart-detail').length > 3) {
    //     alert('4 Up')
    // }

};

export default Cart;