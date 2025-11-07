import React from "react";
import { createPortal } from "react-dom";
function Model({ children}) {
  return createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50">
      <div className="bg-white rounded-2xl shadow-2xl p-6 w-11/12 max-w-md relative">
        <div className="mt-4 text-center">{children}</div>,
        document.getElementById("model-root")  
      </div>
    </div>
  );
}

export default Model;
