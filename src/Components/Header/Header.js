import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <nav className='nav'>
            <div>
                <p> Shop - BD  </p>
            </div>
            <div>
                <a href='/home'>Home</a>
                <a href='/shop'>Shop</a>
                <a href='/about'>About</a>
                <a href='/others '>Other</a>
            </div>
        </nav>
    );
};

export default Header;