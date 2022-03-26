import React from 'react';
import './QA.css'

const QA = () => {
    return (
        <div className='qa-container'>
            <div className='qa'>
                <h3>How React Work</h3>
                <p>React is a Javascript library. When we made a react app, React creates a virtual dom internally by combining all the components and send it to the browser.
                    The browser renders it and displays it. If the user does something in UI and needs to update the Browser dom, React compares only the changed part with its old virtual dom and updates it significantly faster-using diff algorithm and sends the browser only the changed part for the update. The browser immediately updates it in browser dom and displays it.
                </p>
            </div>
            <div className='qa'>
                <h3>Difference of Props and State</h3>
                <p>Props is the short form of Property. It is used to transfer data from parent component to its child component.
                    To pass data from parent to child first have to create a callback function and into child component pass the function as a prop to the child component. In child Component using destructuring data can be used.
                    The props is unchangeable.  As the data coming from the parent component it can not be changed by child component.
                </p>
            </div>
            <div className='qa'>
                <h3>How UseState Work</h3>
                <p>
                    useState is the built in hook in React. useState used to set any state into it. It set an initial value and returns the current value of the state. For the data that frequently update need to use useState.
                </p>
            </div>
        </div>
    );
};

export default QA;