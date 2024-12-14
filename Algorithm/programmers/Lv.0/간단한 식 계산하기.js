/* 01:31 / 10:00 */
function solution(binomial) {
  let array = binomial.split(" ");
  const [one, cal, two] = array;

  if (cal === "+") return +one + +two;
  if (cal === "-") return +one - +two;
  if (cal === "*") return +one * +two;
}

// 주어진 식을 계산
