import React from "react";
import Avator from "./Avator";

export default function Profile({ name, job, url, isNew }) {
  return (
    <>
      <div className="profile">
        <Avator isNew={isNew} url={url} />
        <h1>{name}</h1>
        <p>{job}</p>
      </div>
    </>
  );
}
