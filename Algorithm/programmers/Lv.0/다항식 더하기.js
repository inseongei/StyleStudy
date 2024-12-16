/* 시간초과💢 */
function solution(polynomial) {
  const terms = polynomial.split("+").map((term) => term.trim());
  let x = 0; // x의 계수
  let num = 0; // 상수항

  for (let term of terms) {
    if (term.includes("x")) {
      // 'x'만 있는 경우 계수는 1
      if (term === "x") {
        x += 1;
      } else {
        // 계수가 붙어 있는 경우 숫자를 추출
        x += parseInt(term.replace("x", ""));
      }
    } else {
      // 상수항인 경우 숫자로 변환
      num += parseInt(term);
    }
  }

  // 결과 문자열 구성
  let result = [];
  if (x > 0) result.push(x === 1 ? "x" : `${x}x`);
  if (num > 0) result.push(`${num}`);

  return result.join(" + ");
}
