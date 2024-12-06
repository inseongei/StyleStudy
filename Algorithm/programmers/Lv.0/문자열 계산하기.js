/* 시간초과💢 */
function solution(my_string) {
  const arr = my_string.split(" ");
  let result = +arr[0]; // 첫 번째 숫자를 초기값으로 설정

  for (let i = 1; i < arr.length; i += 2) {
    const operator = arr[i]; // 연산자
    const nextNumber = +arr[i + 1]; // 다음 숫자

    if (operator === "+") {
      result += nextNumber;
    } else if (operator === "-") {
      result -= nextNumber;
    }
  }

  return result;
}
