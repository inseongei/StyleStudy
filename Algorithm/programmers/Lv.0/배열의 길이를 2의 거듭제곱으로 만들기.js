/* 04:05 / 10:00 */
function solution(arr) {
  let result = 1;
  let index = 1;

  while (arr.length > result) {
    result = 2 ** index;
    index++;
  }

  for (let i = arr.length; i < result; i++) {
    arr.push(0);
  }

  return arr;
}

// arr의 길이가 2의 정수 거듭제곱이 되도록 arr 뒤에 정수 0을 추가한데
// arr의 길이가 2의 거듭제곱이 될려면
