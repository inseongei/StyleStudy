// 10진수를 2진수로 변환하기
function solution(s) {
  const stack = [];
  while (s !== 0) {
    stack.push(s % 2);
    s = Math.floor(s / 2);
  }

  return stack.reverse().join("");
}

console.log(solution(10)); // 1010
console.log(solution(27)); // 11011
console.log(solution(12345)); // 11000000111001
