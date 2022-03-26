import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Item.css'

const Item = (props) => {
    const { category, name, price, img, warrenty, rating } = props.item
    const {handleCartBtn} = props;
 

    return (
        <div className='item'>
            <img src={img} alt="" />
            <div className='item-info'>
                <h3>Item: {name}</h3>
                <p>category: {category}</p>
                <p>Price: {price}</p>
                <p>Warrenty: {warrenty}</p>
                <p>Rating: {rating}</p>
            </div>
                <button onClick={() => handleCartBtn(props.item)} className='btn-cart'>
                    <span>Pick Item</span> const element = <FontAwesomeIcon icon={faShoppingCart} />
                </button>
        </div>
    );
};

export default Item;