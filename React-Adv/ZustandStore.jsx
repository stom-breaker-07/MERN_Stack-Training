import React from 'react'

function ZustandStore() {
  return (
    <>
        <div
                style={{
                  margin: "20px",
                  padding: "10px",
                  background: "lightblue",
                  borderRadius: "10px",
                }}
              >
                <h2 style={{ color: "black" }}>Store using Redux</h2>
                <h2 style={{ color: "black" }}>Count :</h2>
                <button
                  style={{
                    background: "#2bff24ff",
                    border: "none",
                    padding: "10px",
                    borderRadius: "6px",
                    cursor: "pointer",
                    margin: "10px",
                    color: "black",
                  }}
                  
                >
                  Increment
                </button>
                <button
                  style={{
                    background: "#ff8b68ff",
                    border: "none",
                    padding: "10px",
                    borderRadius: "6px",
                    cursor: "pointer",
                    margin: "10px",
                    color: "black",
                  }}
                 
                >
                  Decrement
                </button>
                <button
                  style={{
                    background: "#6c44f0ff",
                    border: "none",
                    padding: "10px",
                    cursor: "pointer",
                    margin: "10px",
                    color: "black",
                  }}
                  
                >
                  Reset
                </button>
              </div>
    </>
  )
}

export default ZustandStore;