// 기본자체는 동기적으로 실행되기 때문에 무거운 작업을 하게 될 경우 속도에 영향을 미치게 된다. ( 내부적으로 모든 값이 수행되어야 출력됨 )
function a() {
  for (let i = 0; i < 1000000000; i++) {}
  return 1;
}

function b() {
  return a() + 1;
}

function c() {
  return b() + 1;
}

console.log("시작했다.");
const result = c();
console.log(result); // 3 ❓  3 ✅

// 자바스크립트 엔진에 있는 콜스택은 한번에 하나의 일만 할 수 있다. ( 실행 순서를 기억한다. )

// 우리가 원하는 비동기적인 함수를 콜백하면 그 함수를 테스트 큐에 넣고 이벤트 루프(콜스택과 테스크 큐를 감시하면서 )를 통해 콜스택이 비어있을때만 테스트 큐에 있는 콜백 함수를 콜스택으로 가져 가게 된다.
// 콜스택에 들어온 함수들만 사용할 수 있다.
// 여러 비동기적인 Web API 함수들을 실행하면 순차적으로 테스크 큐에 쌓이게 된다.
