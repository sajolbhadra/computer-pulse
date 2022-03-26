import React, { useEffect, useState } from 'react';
import CartItem from '../CartItem/CartItem';
import ChooseForMe from '../ChooseForMe/ChooseForMe';
import Item from '../Item/Item';
import './Shop.css'

const Shop = () => {
    const [items, setItems] = useState([]);
    const [cart, setCart] = useState([]);
    const[choose, setChoose] = useState([])
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
    const handleChooseAgain = () => {
        setCart([])
    }
    const handleChooseForMe = (cart) => {
        const random = Math.floor(Math.random()*cart.length) 
        // console.log(random)
        setChoose(cart[random])
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
                <h1>Cart</h1>
                {
                    cart.map(cart => <CartItem
                        key={cart.id}
                        cart={cart}
                    ></CartItem>)
                }

                <p>Picked Items: {cart.length}</p>
                {
                    choose.map(choose => <ChooseForMe
                    key={choose.id}
                    choose={choose}
                    ></ChooseForMe>)
                }
                <button onClick={handleChooseAgain} >Select Again</button>
                <button onClick={() => handleChooseForMe(cart)} >Choose 1 item For Me</button>
            </div>

        </div>
    );
};

export default Shop;