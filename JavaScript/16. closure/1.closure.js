// 내부에서는 외부로 접근이 가능하지만 , 외부에서는 내부로 접근할 수 없다.
const text = "hello";
function func() {
  console.log(text);
}

func();

// 클로져 : 중첩된 함수에서 내부에 있는 함수와 외부에 있는 함수의 렉시컬 환경이 저장되어져 있기 때문에 내부에서 외부로 데이터 접근이 가능한 행동

function outer() {
  const x = 0;
  function inner() {
    console.log(`inside inner : ${x}`);
  }
  return inner;
}

const func1 = outer();
func1();
