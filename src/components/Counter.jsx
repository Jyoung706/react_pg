import React, { useState } from "react";

export default function Counter({ total, onClick }) {
  const [number, setNumber] = useState(0);
  return (
    <div className="counter">
      <p>
        {number} <span>/{total}</span>
      </p>
      <button
        onClick={() => {
          setNumber((prev) => prev + 1);
          onClick();
        }}
      >
        Click!
      </button>
    </div>
  );
}
