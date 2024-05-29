import React, { useState } from "react";

export default function Counter({ total, onClick }) {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount((prev) => prev + 1);
    onClick();
  };
  return (
    <div className="counter">
      <p className="number">
        {count}
        <span className="total">/{total}</span>
      </p>
      <button className="button" onClick={increase}>
        Add +
      </button>
    </div>
  );
}
