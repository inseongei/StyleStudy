import React, { useState } from "react";

export default function App() {
  const [user, setUser] = useState<string | number>("kim");
  return (
    <div>
      <h4>안녕</h4>
      <Profile name="철수" />
    </div>
  );
}

function Profile(props: { name: string }): JSX.Element {
  return <div>{props.name}프로필입니다.</div>;
}
