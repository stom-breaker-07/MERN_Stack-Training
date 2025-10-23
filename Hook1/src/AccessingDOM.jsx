import React from 'react'
import { useRef } from 'react'

function AccessingDOM() {
    const inputElement=useRef();

  const focusInput = () => {
    inputElement.current.focus();
  };

  return (
    <>
      <input type="text" ref={inputElement} />
      <button onClick={focusInput}>Focus Input</button>
    </>
  );
}

export default AccessingDOM