/* 시간초과💢 */
function solution(numbers, direction) {
  let result = [];

  if (direction === "left") {
    for (let i = 1; i < numbers.length; i++) {
      result.push(numbers[i]);
      if (i === numbers.length - 1) result.push(numbers[0]);
    }
  } else {
    for (let i = 0; i < numbers.length - 1; i++) {
      result.push(numbers[i]);
      if (i === numbers.length - 2) result.unshift(numbers[numbers.length - 1]);
    }
  }

  return result;
}

// 정수가 담긴 배열 numbers
// 문자열 direction
// 배열 numbers의 원소를 direction 방향으로 한 칸씩 회전

/* 09:09 / 10:00 */
function solution(numbers, direction) {
  let result = [];
  if (direction === "right") {
    for (let i = 0; i < numbers.length; i++) {
      i === numbers.length - 1
        ? result.unshift(numbers[numbers.length - 1])
        : result.push(numbers[i]);
    }
  } else {
    for (let i = 1; i <= numbers.length; i++) {
      i === numbers.length ? result.push(numbers[0]) : result.push(numbers[i]);
    }
  }
  return result;
}

// 정수가 담긴 배열 numbers
// 문자열 direction
// 배열 numbers의 원소를 direction 방향으로 한 칸씩 회전시킨 배열

/* (right)
반복문을 통해서 앞자리 부터 넣어준다. ( 반복문의 i가 numbers의 길이와 같다면 numbers의 마지막 요소를 result 배열의 앞 )
*/

/* (left)
반복문을 통해서 앞자리 부터 넣어준다. ( i가 1부터 시작하며 i가 numbers의 길이와 같다면 numbers의 첫번째 요소를 result 배열의 뒤 )
*/
