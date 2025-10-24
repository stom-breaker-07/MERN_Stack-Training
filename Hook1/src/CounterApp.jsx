import React from 'react'
import UseCounter from './UseCounter'

function CounterApp() {
    const { count, increment, decrement, reset } = UseCounter(2);
  return (
    <>
        <h1>Counter App using Custom Hook</h1>
        <h2>Count: {count}</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
    </>
  )
}

export default CounterApp