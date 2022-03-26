import React from 'react';
import './CartItem.css'

const CartItem = (props) => {
    const {img, name} = props.cart;
    return (
        <div className='cart-item-container'>
            <img src={img} alt="mobo"></img>
            <p>{name}</p>
        </div>
    );
};

export default CartItem;