import React,{useReducer} from 'react'

function Counter() {
  function reducer(state,action){
    switch(action.type){
      case 'increment':
        return {count:state.count+1 , named:'Increment'};
      case 'increment1':
        return {count:state.count+2 , named:'Increment'}
      case 'decrement':
        return {count:state.count-1 , named:'Decrement'};
      case 'reset':
        return {count:0 , named:'Reset'};
      default:
        return state;
    }
  }

  const [state,dispatch]=useReducer(reducer,{count:0,named:'Count'});
  return (
    <>
        <h1>Count: {state.count} {state.named}ed</h1>
        <button  onClick={()=>dispatch({type:'increment'})}>Increment</button>
        <button onClick={()=>dispatch({type:'decrement'})}>Decrement</button>
        <button onClick={()=>dispatch({type:'increment1'})} >+2</button>
        <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
    </>
  )
}

export default Counter