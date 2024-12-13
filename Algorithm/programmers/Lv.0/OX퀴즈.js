/* 07:36 / 10:00 */
function solution(quiz) {
  let result = [];
  for (let i = 0; i < quiz.length; i++) {
    let array = quiz[i].split(" ");
    const [one, cal, two, _, answer] = array;
    if (cal === "-") {
      +one - +two === +answer ? result.push("O") : result.push("X");
    } else if (cal === "+") {
      +one + +two === +answer ? result.push("O") : result.push("X");
    }
  }
  return result;
}

// 덧셈 , 뺄셈 수식들이 X [연산자] Y = Z 형태로 있다는 과정
