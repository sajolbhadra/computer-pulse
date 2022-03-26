import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import './Shop.css'

const Shop = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('pcComponents.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return (

        <div className='shop-container'>
            <div className='items-container'>
                {
                    items.map(item => <Item
                    key={item.id}
                    item={item}
                    ></Item>)
                }
            </div>
            <div className='cart-container'>
                <h1> This is card</h1>
            </div>

        </div>
    );
};

export default Shop;