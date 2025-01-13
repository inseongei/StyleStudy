// 괄호 짝 맞추기
function solution(s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push("(");
    } else {
      if (stack.length === 0) return false;
      stack.pop();
    }
  }

  return stack.length === 0;
}

console.log(solution("(())()")); // True
console.log(solution("((())())))")); // false
