import React, { useState } from "react";
import "./AppXY.css";

export default function AppXY() {
  const [mouseXY, setMouseXY] = useState({ x: 0, y: 0 });

  return (
    <div
      className='container'
      onMouseMove={(e) => {
        console.log(e.clientX);
      }}
    >
      <div className='pointer'></div>
    </div>
  );
}
