import React from "react";

export default function Box({ title, item }) {
  console.log(item);
  return (
    <div className="box">
      <h1>{title}</h1>
      <img src={item?.img} alt="가위바위보" className="item-img" />
      <h2>WIN</h2>
    </div>
  );
}
