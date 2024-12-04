/* 02:37 / 10:00 */
function solution(order) {
  let array = (order + "").split("");
  let result = 0;
  let gameArr = ["3", "6", "9"];

  for (let i = 0; i < array.length; i++) {
    if (gameArr.includes(array[i])) result += 1;
  }
  return result;
}

// 369게임은 1부터 숫자를 하나씩 대며 3,6,9가 들어가는 숫자는 숫자 대신 3 6 9의 개수만큼 박수를 치는 게임
