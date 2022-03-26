import React from 'react';
import './ChooseForMe.css'

const ChooseForMe = (props) => {
    const {img, name} = props.choose;
    console.log(props)
    return (
        <div className='choose-item-container'>
            <img src={img} alt="mobo"></img>
            <p>{name}</p>
        </div>
    );
};

export default ChooseForMe;