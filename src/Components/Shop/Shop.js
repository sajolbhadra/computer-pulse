import React, { useEffect, useState } from 'react';
import './Shop.css'

const Shop = () => {
    const [items, setItems] = useState([]);
        useEffect(() => {
            fetch('pcComponents.json')
            .then(res => res.json())
            .then( data => setItems(data))
        },[]  )
    return (

        <div className='shop-container'>
            <div className='items-container'>
                <h1>{items.length}</h1>
            </div>
            <div className='cart-container'>
                <h1> This is card</h1>
            </div>

        </div>
    );
};

export default Shop;