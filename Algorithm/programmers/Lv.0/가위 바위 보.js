/* 02:48 / 10:00 */
function solution(rsp) {
  let obj = { 2: 0, 0: 5, 5: 2 };
  let array = rsp.split("");
  let result = "";
  for (let i = 0; i < array.length; i++) {
    result += obj[array[i]];
  }

  return result;
}

// 가위 (2) , 바위 (0) , 보 (5)
// 1. 객체를 만들고 해당 키와 그 키의 값을 이기는 숫자를 값으로 넣어준다.
// 2. rsp 문자열을 배열 형태로 만들어서 각각의 요소를 1번 객체의 키값으로 사용해준다
