import React from "react";
import Profile from "./components/Profile";
import Avator from "./components/Avator";

export default function AppProfile() {
  return (
    <>
      <button onClick={(e) => console.log(e)}>버튼</button>
      <Avator
        url="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=922&q=80"
        isNew={true}
      />
      <Profile
        name="James Kim"
        job="프론트엔드 개발자"
        url="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=922&q=80"
        isNew={true}
      />
      <Profile
        name="inseong"
        job="디자이너"
        url="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
      />
      <Profile
        name="Jung"
        job="백엔드"
        url="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
      />
    </>
  );
}
