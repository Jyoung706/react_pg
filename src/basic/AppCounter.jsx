import React, { useState } from "react";
import Counter from "./components/Counter";

export default function AppCounter() {
  const [number, setNumber] = useState(0);
  const handleClick = () => setNumber((prev) => prev + 1);
  return (
    <div>
      <div>
        Total Count : {number} {number > 10 ? "💔" : "❤"}
      </div>
      <div>
        <Counter total={number} onClick={handleClick} />
        <Counter total={number} onClick={handleClick} />
      </div>
    </div>
  );
}
