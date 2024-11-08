/* 02:20 / 10:00 */
function solution(n, control) {
  for (let i = 0; i < control.length; i++) {
    if (control[i] === "w") {
      n++;
    } else if (control[i] === "s") {
      n--;
    } else if (control[i] === "d") {
      n += 10;
    } else {
      n -= 10;
    }
  }
  return n;
}

// 정수 n
// 문자열 control

// 1. 문자열을 반복하면서 각각의 문자마다 n을 바꿔주면 된다.
