import React, { Children } from "react";
import {createPortal} from "react-dom";

function Model({children , setPopup}) {
  return createPortal(
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
        >
          <div>
             <div
            style={{
              background: "#333",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            {children}
          </div>
          </div>
        </div>
      </>
    </div>,
    document.getElementById("modal-root")
  );
}

export default Model;
