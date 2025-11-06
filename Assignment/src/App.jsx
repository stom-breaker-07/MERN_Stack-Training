import React, { useState } from "react";
import PopupPortal from "./PopupPortal";
import ErrorBoundary from "./ErrorBoundary";
import BuggyCounter from "./BuggyCounter";
import Square from "./Square";
import ProfileCard from "./ProfileCard";

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [count, setCount] = useState(0);

  console.log("App rendered");

  return (
    <>
      {/* ✅ Using Fragment
      <h1>React Advanced Concepts Demo</h1>
      <button onClick={() => setShowPopup(true)}>Open Popup</button>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment: {count}</button> */}

      {/* ✅ Memoized Square */}
      {/* <Square value={count} /> */}

      {/* ✅ Error Boundary wrapping Buggy Component */}
      {/* <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary> */}

      {/* ✅ Portal popup */}
      {/* {showPopup && <PopupPortal onClose={() => setShowPopup(false)} />} */}
      <ProfileCard/>
    </>
  );
}
// 
export default App;