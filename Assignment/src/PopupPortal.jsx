import React from "react";
import ReactDOM from "react-dom";

function PopupPortal({ onClose }) {
  return ReactDOM.createPortal(
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0,0,0,0.6)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        fontSize: "1.5rem",
      }}
    >
      <div style={{ background: "#333", padding: "20px", borderRadius: "10px" }}>
        <p>This is rendered using a React Portal!</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>,
    document.getElementById("portal-root") // must exist in index.html
  );
}

export default PopupPortal;
