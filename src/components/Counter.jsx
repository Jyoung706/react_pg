import React, { useState } from "react";

export default function Counter() {
  const [number, setNumber] = useState(0);
  return (
    <div className='counter'>
      <span>{number}</span>
      <button
        onClick={() => {
          setNumber((prev) => prev + 1);
        }}
      >
        Click!
      </button>
    </div>
  );
}
