/* 01:48 / 10:00 */
function solution(array) {
  let result = 0;
  for (let i = 0; i < array.length; i++) {
    let arr = Array.from(array[i] + "");
    arr.forEach((item) => item === "7" && result++);
  }
  return result;
}

// 정수 배열 array 7이 총 몇 개 있는지를 return 한다.
