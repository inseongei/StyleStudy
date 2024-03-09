/**
 * Let's make a calculator 🧮 ( 여러가지 조건으로 나올 값들을 타입으로 빼면 가독성과 안정적 )
 */

// 답을 보기전 만들어본 계산기 함수
// function calculate(what: string, num: number, num2: number): number {
//   if (what === "add") return num + num2;
//   if (what === "subtract") return num - num2;
//   if (what === "multiply") return num * num2;
//   if (what === "divide") return num / num2;
//   if (what === "remainder") return num % num2;

//   throw new Error("unknown command");
// }

// 강의 정답
type Command = "add" | "subtract" | "multiply" | "divide" | "remainder"; // 😁

function calculate(what: Command, num: number, num2: number): number {
  switch (what) {
    case "add":
      return num + num2;
    case "subtract":
      return num - num2;
    case "multiply":
      return num * num2;
    case "divide":
      return num / num2;
    case "remainder":
      return num % num2;
    default:
      throw new Error("unknown command");
  }
}

console.log(calculate("add", 1, 3)); // 4
console.log(calculate("subtract", 3, 1)); // 2
console.log(calculate("multiply", 4, 2)); // 8
console.log(calculate("divide", 4, 2)); // 2
console.log(calculate("remainder", 5, 2)); // 1
