/* 01:04 / 10:00 */
function solution(array, n) {
  let result = 0;
  array.forEach((item) => {
    if (item === n) result++;
  });

  return result;
}

// 정수가 담긴 array , 정수 n
// array에 n이 몇 개 있는지를 리턴
