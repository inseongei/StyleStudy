/* 03:30 / 10:00 */
function solution(s) {
  let strArr = s.split(" ");
  let result = 0;

  for (let i = 0; i < strArr.length; i++) {
    if (isNaN(+strArr[i])) {
      result -= +strArr[i - 1];
    } else {
      result += +strArr[i];
    }
  }
  return result;
}

// 숫자와 "Z"가 공백으로 구분되어 담긴 문자열이 주어진다.
// "Z"가 나오면 바로 전에 더했던 숫자를 뺀다.

// 1. s가 서로 공백이 있으니 split를 이용해서 배열로 만들어줘야 한다.
// 2. 각 요소가 isNaN 메소드를 사용해 숫자가 아닌지를 판별하고 숫자라면 result 배열에 더해준다.
// 3. 아니라면 i - 1의 요소를 뺀다.
