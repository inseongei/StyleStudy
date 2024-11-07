/* 06:41 / 10:00 */
function solution(a, b, c) {
  let max = 0;
  for (let i = 1; i <= 6; i++) {
    let num = 0;
    if (a === i) num++;
    if (b === i) num++;
    if (c === i) num++;

    max = Math.max(num, max);
  }

  if (max === 1) {
    return a + b + c;
  } else if (max === 2) {
    return (a + b + c) * (a ** 2 + b ** 2 + c ** 2);
  } else {
    return (
      (a + b + c) * (a ** 2 + b ** 2 + c ** 2) * (a ** 3 + b ** 3 + c ** 3)
    );
  }
}

// 1. 반복문을 이용해서 1 ~ 6까지 돌면서 몇개의 숫자가 같은지를 확인합니다.
// 2. 조건문을 이용해서 max를 기준으로 1,2,3의 같은 숫자일 때 어떤 값을 리턴해야 하는지 계산합니다.
