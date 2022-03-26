import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import './Shop.css'

const Shop = () => {
    const [items, setItems] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('pcComponents.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    const handleCartBtn = (item) => {
        // console.log(item)
        // if(item === 1)
        const newItem = [...cart, item];
        setCart(newItem);
    }
    return (

        <div className='shop-container'>
            <div className='items-container'>
                {
                    items.map(item => <Item
                    key={item.id}
                    item={item}
                    handleCartBtn={handleCartBtn}
                    ></Item>)
                }
            </div>
            <div className='cart-container'>
                <h1> This is card</h1>
                <p>Picked Items: {cart.length}</p>
            </div>

        </div>
    );
};

export default Shop;