import { useState } from "react";
import "./App.css";
import Box from "./component/Box";
function App() {
  let counter = 0;
  const [counter2, setCounter2] = useState(0);
  const increase = () => {
    setCounter2((prev) => prev + 1); // 비동기적으로 동작하는게 keyPoint 💫
  };

  // 1. 유저가 버튼을 클릭
  // 2. counter + 1해서 1이됨
  // 3. setState함수 호출
  // 4. console.log 실행 변수 -> 1 , state -> 아직 안변함(이전값 보임)
  // 5. 함수가 끝나고 App 다시 리렌더링
  // 6. let counter = 0 을 거치면서 counter 값은 다시 0 으로 초기화
  // 7. state 값은 update가 되면서 다시 리렌더링 한다.

  return (
    <>
      <div>{counter2}</div>
      <button onClick={increase}>클릭!</button>
    </>
  );
}

export default App;
