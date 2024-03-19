import React from "react";

export default function Box({ name, num }) {
  return (
    <>
      <div className="box">
        Box{num}
        <p>{name}</p>
      </div>
    </>
  );
}
