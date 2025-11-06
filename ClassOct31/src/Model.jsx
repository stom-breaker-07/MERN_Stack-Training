import React, { Children } from "react";
import ReactDOM from "react-dom";

function Model({ Closeit , childern }) {
  return ReactDOM.createPortal(
    <div>
      <>
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
          onClick={Closeit}
        >
          <div onClick={(e) => e.stopPropagation()}>
            {children}
          </div>
        </div>
      </>
    </div>,
    document.getElementById("root")
  );
}

export default Model;
