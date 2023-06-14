import React, { useState } from "react";
import "./AppXY.css";

export default function AppXY() {
  const [mouseXY, setMouseXY] = useState({ x: 0, y: 0 });

  return (
    <div
      className='container'
      onMouseMove={(e) => {
        //setMouseXY({ x: e.clientX, y: e.clientY });
        setMouseXY((prev) => ({ ...prev, x: e.clientX }));
      }}
    >
      <div
        className='pointer'
        style={{ transform: `translate(${mouseXY.x}px, ${mouseXY.y}px)` }}
      ></div>
    </div>
  );
}
