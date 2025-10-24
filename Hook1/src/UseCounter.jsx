import React from 'react'
import {useState} from 'react'

//Create a Custom hook to manage counter logic
function UseCounter(initialValue = 0) {
    const [count, setCount] = React.useState(initialValue);
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    const reset = () => setCount(initialValue);
    return { count, increment, decrement, reset };
}

export default UseCounter