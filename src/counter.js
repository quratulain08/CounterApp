import React, { useState } from 'react';
import './counter.css'; 

const Count = () => {
    const [counter, setCounter] = useState(0);

    return (
        <div className="counter-container"> 
            <h1 className="counter-value">{counter}</h1> 
            <div className="counter-buttons"> 
                <button className="counter-button" onClick={() => setCounter(counter - 1)}>Decrement</button>
                <button className="counter-button-reset" onClick={() => setCounter(0)}>Reset</button> 
                <button className="counter-button" onClick={() => setCounter(counter + 1)}>Increment</button> 
            </div>
        </div>
    );
}

export default Count;
