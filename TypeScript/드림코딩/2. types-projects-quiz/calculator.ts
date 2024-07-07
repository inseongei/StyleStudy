/**
 * Let`s make a calculator
 */

console.log(calculate("add", 1, 3)); // 4
console.log(calculate("substract", 3, 1)); // 2
console.log(calculate("multiply", 4, 2)); // 8
console.log(calculate("divide", 4, 2)); // 2
console.log(calculate("remainder", 5, 2)); // 1

type cal = "add" | "substract" | "multiply" | "divide" | "remainder";

function calculate(cal: cal, num1: number, num2: number): number {
  let result = 0;
  if (cal === "add") result = num1 + num2;
  if (cal === "substract") result = num1 - num2;
  if (cal === "multiply") result = num1 * num2;
  if (cal === "divide") result = num1 / num2;
  if (cal === "remainder") result = num1 % num2;

  return result;
}
