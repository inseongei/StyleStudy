import React from "react";

export default function Profile({ name, job, url }) {
  return (
    <>
      <div className="profile">
        <img src={url} alt="avatar" className="photo" />
        <h1>{name}</h1>
        <p>{job}</p>
      </div>
    </>
  );
}
