import React from 'react';
import './Item.css'

const Item = (props) => {
    const {category, name, price, img, warrenty, rating } = props.item
    
    return (
        <div className='item'>
            <img src={img} alt=""/>
            <h3>Item: {name}</h3>
            <h3>category: {category}</h3>
            <h3>Price: {price}</h3>
            <h3>Warrenty: {warrenty}</h3>
            <h3>Rating: {rating}</h3>
            <button>Pick Item</button>
        </div>
    );
};

export default Item;