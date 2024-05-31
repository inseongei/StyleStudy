import React from "react";

export default function Avatar({ image, NEW }) {
  return (
    <div>
      <img className="photo" src={image} alt="avatar" />
      {NEW && <div className="NEW">NEW</div>}
    </div>
  );
}
