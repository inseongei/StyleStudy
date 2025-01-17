import React from "react";

export default function Avator({ isNew, url }) {
  return (
    <div className="avator">
      {isNew && <div className="new">NEW</div>}
      <img src={url} alt="avatar" className="photo" />
    </div>
  );
}
