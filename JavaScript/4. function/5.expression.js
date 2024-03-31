// 함수 선언문 : function name(){ }

// 함수 표현식(값으로 평가 ) : const name = function () =>{ }
let add = function (a, b) {
  return a + b;
};
console.log(add(1, 2));

// 화살표 함수 : const name = () => { }
add = (a, b) => a + b;
console.log(add(1, 2));

// 생성자 함수 const object = new Function();

// IIFE () : Immediately - Invoked Function Expreesions -> 즉각적으로 함수 호출이 되는 표현식
(function run() {
  console.log("🥲");
})();
